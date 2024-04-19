//============================  LES PROTOTYPES OBJET JS ============================

/**
 * Les Prototypes d'Objet en JavaScript
 *
 * En JavaScript, chaque objet a un prototype, qui est un objet à partir
 * duquel il hérite des propriétés. Ces prototypes sont essentiels pour
 * comprendre comment l'héritage fonctionne en JavaScript.
 *
 * Créer un Objet avec un Prototype
 *
 * Pour créer un objet avec un prototype spécifique, on utilise la méthode
 * *Object.create(). 
 * Cette méthode prend un objet prototype en argument et crée un nouvel objet avec ce prototype.
 *
 * @author helyatam
 */

// Création d'un objet prototype
const animalPrototype = {
  sound: "",
  makeSound: function () {
    console.log(this.sound);
  },
};

// Création d'un nouvel objet avec animalPrototype comme prototype
const cat = Object.create(animalPrototype);
cat.sound = "Meow";
cat.makeSound(); // Output: Meow

/**
 * Définition du Prototype via le Constructeur
 *
 * Une autre méthode pour définir un prototype d'objet est d'utiliser
 * une fonction constructeur. Les fonctions constructeur sont des fonctions
 * ordinaires, mais lorsqu'elles sont utilisées avec le mot-clé "new", elles
 * agissent comme des constructeurs d'objet.
 *
 */

// Définition d'un constructeur d'objet
function Animal(sound) {
  this.sound = sound;
}

// Ajout de méthodes au prototype de Animal
Animal.prototype.makeSound = function () {
  console.log(this.sound);
};

// Création d'un nouvel objet en utilisant le constructeur Animal
const dog = new Animal("Woof");
dog.makeSound(); // Output: Woof

/**
 * Héritage Prototypal
 *
 * L'un des avantages des prototypes en JavaScript est la capacité à hériter
 * des propriétés et des méthodes d'autres objets. Lorsqu'un objet accède à
 * une propriété ou une méthode qui n'existe pas dans lui-même, JavaScript
 * recherche dans son prototype.
 *
 */

// Création d'un nouvel objet avec cat comme prototype
const kitten = Object.create(cat);
kitten.sound = "Purr";
kitten.makeSound(); // Output: Purr

/**
 * Modifier le Prototype
 *
 * Une fois qu'un objet est créé, vous pouvez toujours modifier son prototype
 * en ajoutant ou en modifiant des propriétés et des méthodes. Tous les objets
 * qui ont ce prototype bénéficieront automatiquement des modifications.
 *
 */

// Modification du prototype de Animal pour ajouter une nouvelle méthode
Animal.prototype.eat = function (food) {
  console.log(`Eating ${food}`);
};

dog.eat("Bone"); // Output: Eating Bone

/**
 * Remarque : Bien que les prototypes offrent une puissante fonctionnalité
 * pour l'héritage en JavaScript, il est recommandé de comprendre les
 * implications de l'héritage prototypal avant de l'utiliser de manière
 * extensive dans votre code.
 */

// ========================================== Exercices ==================================================== //

/**
 * TODO Exercice 1 : Création d'un objet avec un prototype
 *
 * Créez un objet Personne avec les propriétés nom et age.
 * Utilisez ce prototype pour créer deux personnes différentes avec des noms et des âges différents.
 */


/**
 * TODO Exercice 2 : Héritage simple
 *
 * Définissez un objet prototype Vehicule avec une méthode 'demarrer()'.
 * Créez deux constructeurs d'objet, Voiture et Moto, qui héritent du prototype Vehicule.
 * Ajoutez une méthode spécifique à chaque type de véhicule, par exemple 'klaxonner()'
 * qui affiche "Beep Beep!" pour les voitures et 'accelerer()' qui affiche "Vroom Vroom" pour les motos.
 */


/**
 * TODO Exercice 3 : Héritage avec chaînage de prototypes
 *
 * Créez un prototype 'Forme' avec une méthode 'aire()'.
 * Définissez des sous-prototypes 'Cercle' et 'Rectangle' qui héritent de 'Forme'
 * et ajoutent leurs propres méthodes pour calculer l'aire spécifique à chaque forme géométrique.
 *
 */


/**
 * TODO Exercice 4 : Utilisation de méthodes avancées
 *
 * Créez un objet 'CompteBancaire' avec une propriété 'solde' et des méthodes 'deposer()' et 'retirer()'.
 * Ajoutez une méthode 'interets()' qui calcule les intérêts en fonction du solde actuel.
 * Utilisez les méthodes pour effectuer des opérations bancaires sur le compte.
 *
 */


/**
 * TODO Exercice 5 : Implémentation d'un héritage multiple
 *
 * Créez une hiérarchie d'animaux avec des caractéristiques communes telles que 'nom', 'age' et méthodes comme 'manger()'.
 * Ensuite, créez des sous-prototypes pour des animaux spécifiques tels que 'Chien', 'Chat' et 'Oiseau'.
 * Ajoutez des méthodes spécifiques à chaque sous-prototype, par exemple 'aboyer()' qui affiche "Woof!" pour les chiens,
 * 'miauler()' qui affiche "Meow!" pour les chats et 'voler()' qui affiche "Flap flap!" pour les oiseaux.
 *
 */

