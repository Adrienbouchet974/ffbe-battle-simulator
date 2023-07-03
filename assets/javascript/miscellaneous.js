function createImgTarget(){
    const enemy = document.body.querySelector("#enemy_1");
    console.log(enemy);

    let isTargetAdded = false; // Variable pour vérifier si l'élément a déjà été ajouté

    if (enemy) {
        const target = document.body.querySelector('#target');
        
        enemy.addEventListener('click', () => {
            if (!isTargetAdded) { // Vérifier si l'élément n'a pas déjà été ajouté
            const divTarget = document.createElement('div');
            divTarget.classList.add("sprite-container");
            target.appendChild(divTarget);
            isTargetAdded = true; // Mettre à jour la variable pour indiquer que l'élément a été ajouté
            }
        });
    }
}
createImgTarget()

function createImgAlly() {
    const alliesFront = document.body.querySelectorAll("#column-front-units > div");
    const alliesBack = document.body.querySelectorAll("#column-back-units > div");
  
    let allyDiv = null;
  
    alliesFront.forEach(ally => {
      ally.addEventListener('click', () => {
        const selectedAlly = document.body.querySelector('#selected-ally');
  
        if (ally.getAttribute("data-selected") === "false") {
          ally.setAttribute("data-selected", "true");
        } else {
          ally.setAttribute("data-selected", "false");
        }
  
        if (ally.getAttribute("data-is-dead") === "true") {
          allyDiv = null;
        }
  
        if (allyDiv === null) {
          allyDiv = document.createElement('div');
          selectedAlly.innerHTML = '<h5>Ally turn:</h5>'
          selectedAlly.appendChild(allyDiv);
        }
  
        allyDiv.className = `animate-${ally.id}`;
  
        if (ally.getAttribute("data-is-dead") === "true") {
            allyDiv.classList.remove(`animate-${ally.id}`);
          allyDiv.classList.add(`${ally.id}-dead`);
        } else {
          allyDiv.classList.remove(`${ally.id}-dead`);
        }
      });
    });
  
    alliesBack.forEach(ally => {
      ally.addEventListener('click', () => {
        const selectedAlly = document.body.querySelector('#selected-ally');
  
        if (ally.getAttribute("data-selected") === "false") {
          ally.setAttribute("data-selected", "true");
        } else {
          ally.setAttribute("data-selected", "false");
        }
  
        if (ally.getAttribute("data-is-dead") === "true") {
          allyDiv = null;
        }
  
        if (allyDiv === null) {
          allyDiv = document.createElement('div');
          selectedAlly.innerHTML = '<h5>Ally turn:</h5>'
          selectedAlly.appendChild(allyDiv);
        }
  
        allyDiv.className = `animate-${ally.id}`;
  
        if (ally.getAttribute("data-is-dead") === "true") {
            allyDiv.classList.remove(`animate-${ally.id}`);
          allyDiv.classList.add(`${ally.id}-dead`);
        } else {
          allyDiv.classList.remove(`${ally.id}-dead`);
        }
      });
    });
}
createImgAlly()