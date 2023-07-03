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

// function createImgAlly(){
//     const alliesFront = document.body.querySelectorAll("#column-front-units > div");
//     const alliesBack = document.body.querySelectorAll("#column-back-units > div");

//     let isTargetAdded = false; // Variable pour vérifier si l'élément a déjà été ajouté

//     if (alliesFront.length > 0 || alliesBack.length > 0) {
//         alliesFront.forEach( ally => {
//             const selectedAlly = document.body.querySelector('#selected-ally');
            
//             ally.addEventListener('click', () => {
//                 const allyDiv = document.createElement('div');
//                 if (!isTargetAdded) { // Vérifier si l'élément n'a pas déjà été ajouté
//                     if (ally.getAttribute("data-is-selected") == "false") {
//                         ally.setAttribute("data-is-selected", "true");
//                     } else {
//                         ally.setAttribute("data-is-selected", "false");
//                     }
//                     allyDiv.classList.add(`animate-${ally.id}`);
//                     selectedAlly.appendChild(allyDiv);
//                     isTargetAdded = true; // Mettre à jour la variable pour indiquer que l'élément a été ajouté
//                 }
            
//                 if (ally.getAttribute("data-is-dead") == "true") {
//                     ally.classList.toString().split(/\s/g).forEach(cssClass => {
//                         if (cssClass == `animate-${ally.id}`) {
//                             allyDiv.classList.remove(`animate-${ally.id}`);
//                         }
//                     });
//                     allyDiv.classList.add(`${ally.id}-dead`);
//                 }
//             });
//         })
//         alliesBack.forEach( ally => {
//             const selectedAlly = document.body.querySelector('#selected-ally');
            
//             ally.addEventListener('click', () => {
//                 const allyDiv = document.createElement('div');
//                 if (!isTargetAdded) { // Vérifier si l'élément n'a pas déjà été ajouté
//                     if (ally.getAttribute("data-is-selected") == "false") {
//                         ally.setAttribute("data-is-selected", "true");
//                     } else {
//                          ally.setAttribute("data-is-selected", "false");
//                     }
//                     allyDiv.classList.add(`animate-${ally.id}`);
//                     selectedAlly.appendChild(allyDiv);
//                     isTargetAdded = true; // Mettre à jour la variable pour indiquer que l'élément a été ajouté
//                 }
            
//                 if (ally.getAttribute("data-is-dead") == "true") {
//                     ally.classList.toString().split(/\s/g).forEach(cssClass => {
//                         if (cssClass == `animate-${ally.id}`) {
//                             allyDiv.classList.remove(`animate-${ally.id}`);
//                         }
//                     });
//                     allyDiv.classList.add(`${ally.id}-dead`);
//                 }
//             });
//         })
//     }
// }
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

// function createImgAlly() {
//     const allies = []
//     document.body.querySelectorAll('#column-front-units > div').forEach( img => {
//         allies.push(img)
//     })
//     document.body.querySelectorAll('#column-back-units > div').forEach( img => {
//         allies.push(img)
//     })

//     const target = document.body.querySelector('#selected-ally');
//     let imgAlly = target.querySelector('img'); // Récupérer l'image existante dans la cible

//     allies.forEach( ally => {
//         if (ally) {
//             ally.addEventListener('click', () => {
//                 if (imgAlly) {
//                     imgAlly.src = ally.src; // Remplacer l'image existante par la nouvelle source
//                 } else {
//                     imgAlly = document.createElement('img');
//                     imgAlly.setAttribute("style", "width: 35% !important; height: 100% !important;")
//                     imgAlly.src = ally.src;
//                     imgAlly.id = ally.id + "-current";
//                     target.appendChild(imgAlly);
//                 }
//             });
//         }
//     });
// }
// createImgAlly()