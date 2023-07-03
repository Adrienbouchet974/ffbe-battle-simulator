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
        console.log(jobName)
        console.log(imgUrl)
        images[index].src = imgUrl
    }
}

function goToEnemy() {
    const attackButton = document.querySelector('#attack');
    const currentAlly = document.querySelector('#selected-ally');
    const unitsElement = document.querySelector('#units');
    let currentAllyId;
    let enemyFound = false; // Ajout d'une variable pour indiquer si l'ennemi est trouvé
  
    attackButton.addEventListener('mousedown', () => {
        const foundAlly = Array.from(currentAlly.childNodes).find(node => node.nodeName === "IMG");
      
        if (foundAlly) {
            currentAllyId = foundAlly.id;
          
            const foundUnit = Array.from(unitsElement.childNodes).find(node => {
                const foundImage = Array.from(node.childNodes).find(img => currentAllyId.includes(img.id));
                return foundImage !== undefined;
            });
          
            if (foundUnit) {
                enemyFound = true; // Mettre la variable enemyFound à true si l'ennemi est trouvé
            }
        }
    });

    return enemyFound; // Renvoyer la valeur de enemyFound
}
goToEnemy()

function attackAnimation() {

}

function goToDefaultPosition(){

}


goToEnemy()
randomSpriteForUnits()