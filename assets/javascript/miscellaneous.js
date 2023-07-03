function createImgTarget(){
    const enemy = document.body.querySelector("#enemy-1");
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
    const allies = []
    document.body.querySelectorAll('#column-front-units > img').forEach( img => {
        allies.push(img)
    })
    document.body.querySelectorAll('#column-back-units > img').forEach( img => {
        allies.push(img)
    })

    const target = document.body.querySelector('#selected-ally');
    let imgAlly = target.querySelector('img'); // Récupérer l'image existante dans la cible

    allies.forEach( ally => {
        if (ally) {
            ally.addEventListener('click', () => {
                if (imgAlly) {
                    imgAlly.src = ally.src; // Remplacer l'image existante par la nouvelle source
                } else {
                    imgAlly = document.createElement('img');
                    imgAlly.setAttribute("style", "width: 35% !important; height: 100% !important;")
                    imgAlly.src = ally.src;
                    imgAlly.id = ally.id + "-current";
                    target.appendChild(imgAlly);
                }
            });
        }
    });
}
createImgAlly()