//============================  LE POO EN JS ============================

/**
 * Introduction à la Programmation Orientée Objet en JavaScript ES6
 *
 * La programmation orientée objet (POO) en JavaScript ES6 repose sur l'utilisation de classes pour créer des objets
 * et sur le concept d'extension (extends) pour l'héritage entre classes.
 *
 *
 * Création de classes en JavaScript ES6
 *
 * En JavaScript ES6, les classes sont créées en utilisant le mot-clé class.
 * Voici comment créer une classe Personne avec un constructeur et une méthode :
 *
 * @author helyatam
 */

// Création de classes en JavaScript ES6
class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  sePresenter() {
    console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

/**
 * Utilisation de l'héritage avec extends
 *
 * L'héritage entre classes en JavaScript ES6 se fait en utilisant le mot-clé extends.
 * Voici un exemple d'héritage où la classe Employé hérite de la classe Personne :
 */

// Exemple d'utilisation de l'héritage avec extends

class Employe extends Personne {
  constructor(nom, age, poste) {
    super(nom, age);
    this.poste = poste;
  }

  travailler() {
    console.log(`${this.nom} travaille comme ${this.poste}.`);
  }
}

/**
 * Encapsulation des données avec getters et setters
 *
 * Les classes en JavaScript ES6 peuvent utiliser des getters et des setters pour encapsuler les données.
 * Voici un exemple avec la classe Compteur :
 */

// Exemple d'encapsulation des données avec getters et setters
class Compteur {
  #valeur = 0; // "#" utiliser un croisillon comme préfixe permet de créer de propriétés privées

  incrementer() {
    this.#valeur++;
  }

  decrementer() {
    this.#valeur--;
  }

  get valeur() {
    return this.#valeur;
  }
}

/**
 * Exemple complet d'utilisation des classes
 *
 */

const personne1 = new Personne("Alice", 30);
personne1.sePresenter();

const employe1 = new Employe("Bob", 25, "Développeur");
employe1.sePresenter();
employe1.travailler();

const compteur = new Compteur();
compteur.incrementer();
compteur.incrementer();
console.log(compteur.valeur); // Affiche 2
compteur.decrementer();
console.log(compteur.valeur); // Affiche 1

/**
 * Conclusion
 *
 * La programmation orientée objet en JavaScript ES6 offre des fonctionnalités avancées telles que les classes,
 * l'héritage et l'encapsulation des données avec getters et setters.
 * Ces concepts permettent de créer des applications plus modulaires et faciles à maintenir.
 *
 */


// ========================================== Exercices ==================================================== //

/**
 * TODO Exercice 1 : Création de classes et utilisation de méthodes
 *
 * Créez une classe 'Cercle' avec un constructeur prenant le rayon en paramètre.
 * Ajoutez une méthode 'calculerSurface()' qui retourne l'aire du cercle.
 */


/**
 * TODO Exercice 2 : Héritage entre classes
 *
 * Créez une classe 'Forme' avec une méthode 'afficherType()' qui affiche "Je suis une forme".
 * Ensuite, créez une classe 'Rectangle' qui hérite de 'Forme' et ajoute une méthode 'calculerSurface()' qui retourne l'aire du rectangle.
 */


/**
 * TODO Exercice 3 : Encapsulation des données avec getters et setters
 *
 * Créez une classe 'Compteur' avec une variable privée 'valeur' initialisée à 0.
 * Ajoutez des méthodes 'incrementer()' et 'decrementer()' pour augmenter et diminuer la valeur du compteur.
 * Utilisez un getter pour obtenir la valeur du compteur.
 *
 */


/**
 * TODO Exercice 4 : Utilisation de méthodes statiques
 *
 * Créez une classe Mathematiques avec une méthode statique 'calculerCarre()' qui prend un nombre en paramètre et retourne son carré.
 */


/**
 * TODO Exercice 5 : Utilisation de méthodes d'instance et de méthodes statiques
 *
 * Créez une classe 'Utilitaire' avec une méthode statique 'afficherMessage()' qui affiche un message.
 * Ensuite, créez une instance de Utilitaire et appelez la méthode afficherMessage().
 *
 */

