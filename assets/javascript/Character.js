/**
 * Classe Character représente un personnage dans le jeu.
 */
class Character {
  /**
   * Constructeur de la classe Character.
   * @param {number} atk - La valeur d'attaque (atk) du personnage.
   */
  constructor(atk) {
    /**
     * La valeur d'attaque (atk) du personnage.
     * @type {number}
     */
    this.atk = this.getAtk(atk);
  }

  /**
   * Récupère la valeur d'attaque (atk) du personnage.
   * @param {number} atk - La valeur d'attaque (atk) à attribuer au personnage.
   * @returns {number} - La valeur d'attaque (atk) attribuée au personnage.
   */
  getAtk(atk) {
    return atk;
  }
}


const test = new Character(getAtk(20))