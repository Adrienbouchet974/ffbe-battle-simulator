function getRandomValueFromArrayLength(array) {
    const maxLength = array.length;
    const value = Math.floor(Math.random() * maxLength);
    return value;
}

function populateAlliesInDOM(numberAllies){
    const alliesFront = document.body.querySelector("#column-front-units");
    const alliesBack = document.body.querySelector("#column-back-units");
    console.log(alliesFront)
    console.log(alliesBack)
    const divs = []
    for (let number = 1; number <= numberAllies; number++) {
        const allyDiv = document.createElement('div')
        allyDiv.setAttribute('id', 'ally-' + number)
        allyDiv.classList.add('animate-ally-'+ number )
        allyDiv.setAttribute('data-is-dead', 'false')
        allyDiv.setAttribute('data-is-selected', 'false')
        divs.push(allyDiv)
    }
    for (const div of divs) {
        for (let number = 0; number < divs.length; number++) {
            const ally = divs[number]
            if(number < 2) {
                alliesFront.appendChild(ally)
            } else if (number > 1 && number < 5) {
                alliesBack.appendChild(ally)
            }
        }
    }
}
function populateEnemiesInDOM(numberEnemies){
    const enemiesFront = document.body.querySelector("#column-front-enemy");
    const enemiesBack = document.body.querySelector("#column-back-enemy");
    console.log(enemiesFront)
    console.log(enemiesBack)
    const divs = []
    for (let number = 1; number <= numberEnemies; number++) {
        const enemyDiv = document.createElement('div')
        enemyDiv.setAttribute('id', 'enemy_' + number)
        enemyDiv.classList.add(`animate-enemy-${number}`)
        // enemyDiv.setAttribute('data-is-dead', 'false')
        // enemyDiv.setAttribute('data-is-selected', 'false')
        divs.push(enemyDiv)
    }
    for (const div of divs) {
        for (let number = 0; number < divs.length; number++) {
            const enemy = divs[number]
            if(number < 2) {
                enemiesFront.appendChild(enemy)
            } else if (number > 1 && number < 5) {
                enemiesBack.appendChild(enemy)
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', populateAlliesInDOM(5))
document.addEventListener('DOMContentLoaded', populateEnemiesInDOM(5))

async function delay(ms) {
    new Promise((resolve, error) => {
        setTimeout(() => {
            resolve
        }, ms)
    })
}

function selectRandomUnit(){
    const alliesFront = document.body.querySelectorAll("#column-front-units > div");
    const alliesBack = document.body.querySelectorAll("#column-back-units > div");
    // const selectedAllyDiv = document.querySelector(`#selected-ally .animate-${allyId}`)
    const allies = []
    if(alliesFront.length != 0) {
        alliesFront.forEach(element => {
            allies.push(element.id)
        })
    }
    if(alliesBack.length != 0) {
        alliesBack.forEach(element => {
            allies.push(element.id)
        })
    }
    return allies[getRandomValueFromArrayLength(allies)]
}
function selectRandomEnemy(){
    const enemiesFront = document.body.querySelectorAll("#column-front-enemy > div");
    const enemiesBack = document.body.querySelectorAll("#column-back-enemy > div");
    // const selectedAllyDiv = document.querySelector(`#selected-ally .animate-${allyId}`)
    const enemies = []
    if(enemiesFront.length != 0) {
        enemiesFront.forEach(element => {
            enemies.push(element.id)
        })
    }
    if(enemiesBack.length != 0) {
        enemiesBack.forEach(element => {
            enemies.push(element.id)
        })
    }
    return enemies[getRandomValueFromArrayLength(enemies)]
}

function createImgTarget(enemyId){
    const enemy = document.querySelector(`#${enemyId}`)
    const enemyAnim = enemy.classList[0]
    const target = document.querySelector("#target")
    const enemyTarget = document.createElement("div")
    enemyTarget.classList.add(enemyAnim + '-small')
    target.childNodes.forEach( element => {
        if(element.nodeName != "DIV" && element.id != enemyId) {
            target.appendChild(enemyTarget)
        }
    })
}
createImgTarget(selectRandomEnemy())

const attackButton = document.querySelector('#attack');
async function getCurrentSelectedStats(allyId, enemyId) {
    console.log(allyId)
    console.log(enemyId)
    let randomStatsEnemy = await fetch(window.location.origin + "/assets/json/enemySheets.json").then(data => data.json()).then(data => {return data});
    let randomStatsAlly =  await fetch(window.location.origin + "/assets/json/characterSheets.json").then(data => data.json()).then(data => {return data});
    return new Promise((resolve, reject) => {
        let randomAlly = randomStatsAlly[allyId]
        let randomEnemy = randomStatsEnemy[enemyId]
        let stats = {};
        
        attackButton.addEventListener('mousedown', () => {
            // const selectedAlly = document.querySelector(`#${randomAlly.id}`);
            const selectedAlly = document.querySelector(`#${allyId}`);
            const selectedEnemy = document.querySelector(`#${enemyId}`);

            if (selectedAlly && selectedEnemy) {
                let ally = {};
                for (const stat in randomAlly) {
                    const value = randomAlly[stat];
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
    const alliesFront = document.body.querySelectorAll("#column-front-units > div");
    const alliesBack = document.body.querySelectorAll("#column-back-units > div");
    const selectedAllyDiv = document.querySelector(`#selected-ally .animate-${allyId}`)

    if(alliesFront.length > 0 || alliesBack.length > 0) {
        for (const ally of alliesFront){
            if(allyId == ally.id){
                console.log(selectedAllyDiv)
                ally.classList.remove(`animate-${allyId}`)
                ally.setAttribute("data-is-dead", "true")
                ally.classList.add(`${allyId}-dead`)
                selectedAllyDiv.classList.remove(`animate-${allyId}`)
                selectedAllyDiv.classList.add(`${allyId}-dead`)
                break
            }
        }
        for (const ally of alliesBack){
            if(allyId == ally.id){
                console.log(selectedAllyDiv)
                ally.classList.remove(`animate-${allyId}`)
                ally.setAttribute("data-is-dead", "true")
                ally.classList.add(`${allyId}-dead`)
                selectedAllyDiv.classList.remove(`animate-${allyId}`)
                selectedAllyDiv.classList.add(`${allyId}-dead`)
                break
            }
        }
    }
}

async function actions() {
    const stats = await getCurrentSelectedStats(selectRandomUnit(), selectRandomEnemy());
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
// getCurrentSelectedStats()