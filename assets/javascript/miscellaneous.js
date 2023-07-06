// function createImgTarget(enemyId){
//   const enemiesFront = document.body.querySelectorAll("#column-front-enemy > div");
//   const enemiesBack = document.body.querySelectorAll("#column-back-enemy > div");

//   let enemyDiv = null;

//   enemiesFront.forEach(enemy => {
//     enemy.addEventListener('click', () => {
//       const selectedenemy = document.body.querySelector('#target');

//       if (enemy.getAttribute("data-selected") === "false") {
//         enemy.setAttribute("data-selected", "true");
//       } else {
//         enemy.setAttribute("data-selected", "false");
//       }

//       if (enemy.getAttribute("data-is-dead") === "true") {
//         enemyDiv = null;
//       }

//       if (enemyDiv === null) {
//         enemyDiv = document.createElement('div');
//         selectedenemy.innerHTML = '<h5>enemy turn:</h5>'
//         selectedenemy.appendChild(enemyDiv);
//       }

//       enemyDiv.className = `sprite-container`;

//       if (enemy.getAttribute("data-is-dead") === "true") {
//           enemyDiv.classList.remove(`sprite-container`);
//         enemyDiv.classList.add(`${enemy.id}-dead`);
//       } else {
//         enemyDiv.classList.remove(`${enemy.id}-dead`);
//       }
//     });
//   });

//   enemiesBack.forEach(enemy => {
//     enemy.addEventListener('click', () => {
//       const selectedenemy = document.body.querySelector('#target');

//       if (enemy.getAttribute("data-selected") === "false") {
//         enemy.setAttribute("data-selected", "true");
//       } else {
//         enemy.setAttribute("data-selected", "false");
//       }

//       if (enemy.getAttribute("data-is-dead") === "true") {
//         enemyDiv = null;
//       }

//       if (enemyDiv === null) {
//         enemyDiv = document.createElement('div');
//         selectedenemy.innerHTML = '<h5>enemy turn:</h5>'
//         selectedenemy.appendChild(enemyDiv);
//       }

//       enemyDiv.className = `sprite-container`;

//       if (enemy.getAttribute("data-is-dead") === "true") {
//           enemyDiv.classList.remove(`sprite-container`);
//         enemyDiv.classList.add(`${enemy.id}-dead`);
//       } else {
//         enemyDiv.classList.remove(`${enemy.id}-dead`);
//       }
//     });
//   });
// }
// createImgTarget()

function createImgAlly(allyId) {
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