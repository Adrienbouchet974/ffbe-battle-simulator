function getRandomValueFromArrayLength(array) {
    const maxLength = array.length;
    const value = Math.floor(Math.random() * maxLength);
    return value;
}

async function delay(ms) {
    new Promise((resolve, error) => {
        setTimeout(() => {
            resolve
        }, ms)
    })
}

async function randomSpriteForUnits() {
    const images = []
    const imagesFront = document.querySelectorAll('#column-front-units > img')
    imagesFront.forEach( img => {
        images.push(img)
    })
    const imagesBack = document.querySelectorAll('#column-back-units > img')
    imagesBack.forEach( img => {
        images.push(img)
    })
    const json = await fetch(window.location.origin + '/assets/json/charactersImages.json').then(data => data.json()).then(data=> {return data})

    async function getJobNumberAndNames() {
        let numberJobs = 0
        const jobNames = []
        for (let job in json) {
            jobNames.push(job)
            numberJobs += 1
        }
        return [numberJobs, jobNames]
    }
    const jobsData = await getJobNumberAndNames()
    
    for (let index = 0; index < jobsData[0]; index++) {
        const jobName = jobsData[1][getRandomValueFromArrayLength(jobsData[1])];
        const imgUrl = json[jobName][getRandomValueFromArrayLength(json[jobName])]
        images[index].src = imgUrl
    }
}

const attackButton = document.querySelector('#attack');
async function getCurrentSelectedStats() {
    let randomStatsEnemy = await fetch(window.location.origin + "/assets/json/enemySheets.json").then(data => data.json()).then(data => {return data});
    return new Promise((resolve, reject) => {
        let randomStatsAlly = { id: "ally-3", hp: 500, atk: 150, def: 60, mana: 50, precision: 90, spd: 90 };
        let randomEnemy = randomStatsEnemy["enemy_1"]
        let stats = {};
        
        attackButton.addEventListener('mousedown', () => {
            const selectedAlly = document.querySelector('#ally-3');
            const selectedEnemy = document.querySelector('#target > .sprite-container');

            if (selectedAlly && selectedEnemy) {
                let ally = {};
                for (const stat in randomStatsAlly) {
                    const value = randomStatsAlly[stat];
                    ally[stat] = value;
                }
                stats["ally"] = ally;

                let enemy = {};
                for (const stat in randomEnemy) {
                    const value = randomEnemy[stat];
                    enemy[stat] = value;
                }
                stats["enemy"] = enemy;
                resolve(stats);
            } else {
                reject(new Error("Error while fetchin Units stats"));
            }
        });
    });
}

function changeSpriteToDead(allyId){
    console.log(allyId)
    const alliesFront = document.body.querySelectorAll("#column-front-units > div");
    const alliesBack = document.body.querySelectorAll("#column-back-units > div");

    if(alliesFront.length > 0 || alliesBack.length > 0) {
        alliesFront.forEach( ally => {
            if(allyId == ally.id){
                ally.classList.remove(`animate-${allyId}`)
                ally.setAttribute("data-is-dead", "true")
                ally.classList.add("ally-3-dead")
            }
        })
        alliesBack.forEach( ally => {
            if(allyId == ally.id){
                ally.classList.remove(`animate-${allyId}`)
                ally.setAttribute("data-is-dead", "true")
                ally.classList.add("ally-3-dead")
            }
        })
    }
}

async function actions() {
    const stats = await getCurrentSelectedStats();
    console.log(stats);
    let ally = stats["ally"];
    let enemy = stats["enemy"];

    attackButton.addEventListener('mousedown', () => {
        if (ally.spd > enemy.spd) {
            console.log("L'allié attaque en premier !");
            console.log(`L'ennemi perd ${ally.atk - enemy.def} PV !`);
            enemy.hp -= (ally.atk - enemy.def);
            if(enemy.hp > 0) {
                console.log(`Il lui reste ${enemy.hp} PV.`);
            }
        } else {
            console.log("L'ennemi attaque en premier !");
            console.log(`L'allié perd ${enemy.atk - ally.def} PV !`);
            ally.hp -= (enemy.atk - ally.def);
            if(ally.hp > 0){
                console.log(`Il lui reste ${ally.hp} PV.`);
            }
        }
        if(ally.hp <= 0) {
            console.log("le personnage allié est mort !")
            changeSpriteToDead(ally.id)
        } else if(enemy.hp <= 0) {
            console.log("Vous avez triomphé de l'ennemie !")
        }
    });
}

actions();
  

// function goToEnemy() {
//     const attackButton = document.querySelector('#attack');
//     const currentAlly = document.querySelector('#selected-ally');
//     const unitsElement = document.querySelector('#units');
//     let currentAllyId;
//     let enemyFound = false; // Ajout d'une variable pour indiquer si l'ennemi est trouvé
  
//     attackButton.addEventListener('mousedown', () => {
//         const foundAlly = Array.from(currentAlly.childNodes).find(node => node.nodeName === "IMG");
      
//         if (foundAlly) {
//             currentAllyId = foundAlly.id;
          
//             const foundUnit = Array.from(unitsElement.childNodes).find(node => {
//                 const foundImage = Array.from(node.childNodes).find(img => currentAllyId.includes(img.id));
//                 return foundImage !== undefined;
//             });
          
//             if (foundUnit) {
//                 enemyFound = true; // Mettre la variable enemyFound à true si l'ennemi est trouvé
//             }
//         }
//     });

//     return enemyFound; // Renvoyer la valeur de enemyFound
// }
// goToEnemy()

// function attackAnimation() {

// }

// function goToDefaultPosition(){

// }


// goToEnemy()
// randomSpriteForUnits()
getCurrentSelectedStats()