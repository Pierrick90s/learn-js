//============================ LE REGROUPEMENT DE VALEURS AVEC DES TABLEAUX ============================

/**
 *
 * Les tableaux, arrays
 *
 * Les applications plus volumineuses regroupent des valeurs similaires,
 * comme les noms de vos amis sur un réseau social.
 *
 * Créer une variable pour chacun de vos amis rendrait cotre code long et complexe.
 *
 * @author helyatam
 */

const friend1 = "Tom";
const friend2 = "Mia";
const friend3 = "Lee";

/**
 *
 * Plutôt que de créer une variable pour le nom de chaque ami,
 * nous pouvons regrouper toutes les valeur dans un tableau en utilisant "[ ]"
 * ou le mot array().
 *
 * Les valeurs d'un tableau sont appelées éléments. Par exemple, "Tom, "Mia"  et "Lee"
 * sont des éléments de ce tableau.
 *
 * Nous utilisons les virgules "," pour séparer deux valeurs ou plus dans un tableau
 * comme "Tom" de "Mia". N'importe quel nombre de valeur tient dans le tableau.
 * Nous ajoutons plus en codant une virgule puis une valeur.
 *
 */

const friends = ["Tom", "Mia", "Lee"];
console.log(friends);

/**
 *
 * Pour crée un tableau vide, on code [].
 *
 */

const friends1 = [];
console.log(friends1);

/**
 *
 * La modification des valeurs dans les tableaux grâce à l'indice.
 *
 * Appronfondissons les valeurs qu'un tabelau peut stocker et comment
 * nous pouvons les mettre à jour.
 * Comme la façon dont une application méto pourrait suivre les températures.
 *
 * Un tableau peut stocker différentes valeurs de température et être mis à jour au fur et à mesure
 * que de nouvelles données arrivent des stations météorologiques tout au long de la journée.
 *
 */

/**
 *
 * Imaginez un tableau comme une commode. Un tiroir peut stocker n'importe quelle variable ou valeur,
 * qu'il s'agisse d'une string, d'un boolean ou d'un number comme 17.
 *
 * Chaque élément d'un tableau a une position numérotée appelée index.
 * Les index commencent à 0 et augmentent à chaque nouvelle valeur.
 * Cela signifie que le deuxième élément du tableau temperatures est à l'index 1.
 * Codez cet index
 */

const temperatures = [17, 20, 26, 24];
console.log(temperatures[1]);

/**
 *
 * Pour accéder à un élément comme 26, vous devez coder le nom du
 * tabelau temperatures suivi de l'index de l'élement entre crochets [2].
 *
 */

console.log(temperatures[2]);

/**
 *
 * Pour mettre à jour la valeur de température au deuxième index, accédez-y via
 * temperatures[2], puis utiliser "=" pour lui attribuer une valeur comme 32.
 *
 */

temperatures[2] = 32;
console.log(temperatures[2]);

/**
 *
 * Bien qu'il y ait quatre éléments dans le tableau, le dernier index auquel nous pouvons accéder
 * est 3 car l'indexation commence à 0.
 */

temperatures[3] = 20;
console.log(temperatures);

/**
 *
 * ? Quel index l'élément de ce tableau a-t-il ?
 *
 * const friends = ["Kim"];
 *
 * Il a pour index 0.
 *
 */

/**
 *
 * ? Comment ajouter et supprimer des éléments du tableau ?
 *
 * Apprenons à ajouter et à supprimier des valeurs des tableaux.
 * Comme dans une application de liste de tâches, qui utilise un tableau pour ajouter et supprimer
 * des tâches.
 *
 */

/**
 *
 * Pour ajouter une valeur comme "groceries" à un tableau, nous codons le nom du tableau
 * "todo", suivi d'un ".", puis la méthode de tableau push("groceries").
 * L'ajout d'une valeur avec la méthode .push() la place à la fin du tableau.
 *
 */

const todo = ["call mom", "dishes"];
todo.push("groceries");
console.log(todo);

/**
 *
 * Nous pouvons ajouter plusieurs valeur avec .push() en les séparant par une virgule ",".
 *
 */

todo.push("Feed cat", "Go to gym");
console.log(todo);

/**
 *
 * Pour supprimer me dernier élément du tableau, nous codons le nom du tabelau
 * "todo", un point ".", et la méthode de tableau pop();
 *
 */

todo.pop();
console.log(todo);

/**
 *
 * Lorsque nous stockons todo.pop() dans une variable, nous récupérons la valeur
 * de la valeur supprimer.
 *
 */

let feedCat = todo.pop();
console.log(feedCat);
todo.push(feedCat);
console.log(todo);

/**
 *
 * ? Comment connaître le nombre d'élément dans son tableau ?
 *
 * Découvrons comment nous pouvons compter les éléments dans les tabelaux
 * et utiliser ces informations de manière intelligente.
 *
 */

/**
 *
 * Nous utilisons le mot "length" après le nom du tabelau et un point "."
 * pour obtenir le nombre d'éléments d'un tableau.
 *
 * Nous pouvons également stocker la longueu d'un tableau dans une variable.
 * Peu importe le nombre d'éléments qu'il y a dans un tableau, length les comptera pour nous.
 *
 */

const tasks = ["dishes", "widndows", "vacuum"];
console.log(tasks.length);

tasks.push("dusting", "laundry");
console.log(tasks);

const LENGTH = tasks.length;
console.log(LENGTH);

/**
 *
 * Même si le tableau des tasks1 est vide, tasks1.length nous donnera le nombre
 * d'éléments qu'il contient.
 *
 */

const tasks1 = [];
console.log(tasks1.length);

/**
 *
 * Nous pouvons utiliser la longueur d'un tableau pour créer des instructions conditionnelles
 * qui dépendent de son nombre d'éléments.
 *
 */

tasks;
if (tasks.length > 0) {
  console.log("Ugh, more work!");
}

/**
 *
 * Nous pouvons également utiliser la longueur d'un tableau pour créer des boucles for qui
 * parcourent tous les éléments.
 *
 * Pour cela, on répète une boucle autant de fois qu'il y a d'éléments dans le tableau en
 * utilisant la propriété lenght.
 *
 * La variable compteur i, stocke les valeurs de 0, 1 et 2 au fur et à mesure que la boucle
 * se répète. Mais 0, 1 et 2 sont aussi les index des éléments de friendS2.
 *
 * Ainsi, chaque fois que la boucle se répète, i stocke un index d'un élément dans le
 * tableau friendS2. Et nous pouvons utiliser l'index pour accéder à l'élément.
 *
 */

const friends2 = ["Ana", "Eve", "Sam"];
for (let i = 0; i < friends2.length; i++) {
  console.log(friends2[i]);
}


// ========================================== Exercices ==================================================== //

/**
 * TODO Exercice 1 : Fusionner deux tableaux
 *
 * Vous disposez de deux tableaux, 'firstArray' et 'secondArray', contenant des nombres.
 * Écrivez une fonction 'mergeArrays' qui fusionne les deux tableaux en un seul et renvoie le tableau résultant.
 * Utiliser la méthode 'concat()' pour fusionner les deux tableaux.
 */

let firstArray = [4,5,6,7];
let secondArray = [0,1,2,3];

function mergeArrays($1,$2) {
finalArray = $2.concat($1)
}

mergeArrays(firstArray,secondArray)
console.log(firstArray,secondArray,finalArray)

/**
 * TODO Exercice 2 : Trouver la valeur la plus fréquente dans un tableau
 *
 * Écrivez une fonction 'mostFrequent' qui prend un tableau de nombres en entrée et renvoie la valeur la plus fréquente dans ce tableau.
 * En cas d'égalité, renvoyez la première valeur rencontrée.
 */

const  theArray = [14,11,6,6,15,17,11,12,4,11,12,19,14,16,8];

function mostFrequent(tableau) {
  let compteur = [];
  let valeurPlusFrequente;
  let maxOccurences = 0;

  for (let i = 0; i < tableau.length; i++) {
    let nombre = tableau[i];
    compteur[nombre] = (compteur[nombre] || 0) + 1;
    if (compteur[nombre] > maxOccurences) {
        maxOccurences = compteur[nombre];
        valeurPlusFrequente = nombre;
    }
}
return valeurPlusFrequente;
}


function lessFrequent(tableau) {
  let compteur = [];
  let valeurMoinsFrequente;
  let minOccurences = Infinity;

  for (let i = 0; i < tableau.length; i++) {
    let nombre = tableau[i];
    compteur[nombre] = (compteur[nombre] || 0) + 1;
    if (compteur[nombre] < minOccurences) {
        minOccurences = compteur[nombre];
        valeurMoinsFrequente = nombre;
    }
}
return valeurMoinsFrequente;
}

console.log("La valeur la plus fréquente est :", mostFrequent(theArray));
console.log("La valeur la plus moins est :", lessFrequent(theArray));


/**
 * TODO Exercice 3 : Vérifier si un tableau est trié
 *
 * Écrivez une fonction 'isSorted' qui prend un tableau de nombres en entrée et renvoie 'true' si le tableau est trié par ordre croissant, et 'false' sinon.
 */

const tableauTrie = [1, 2, 3, 4, 5];
const tableauNonTrie = [1, 3, 2, 5, 4];

function isSorted (tableau) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] > tableau[i + 1]) {
      return false;
    } 
  }
  return true;
}

console.log(isSorted(tableauTrie));
console.log(isSorted(tableauNonTrie));
/**
 * TODO Exercice 4 : Supprimer les doublons d'un tableau
 *
 * Écrivez une fonction 'removeDuplicates' qui prend un tableau en entrée et renvoie un nouveau tableau ne contenant que des éléments uniques (aucun doublon).
 * Utiliser 'Array.from()' et 'Set()'.
 */

function removeDuplicates(tableau) {
  return Array.from(new Set(tableau));
}

// Exemple d'utilisation :
const tableauAvecDoublons = [1, 2, 2, 3, 4, 4, 5];
const tableauSansDoublons = removeDuplicates(tableauAvecDoublons);
console.log("Tableau original avec doublons :", tableauAvecDoublons);
console.log("Nouveau tableau sans doublons :", tableauSansDoublons);

/**
 * TODO Exercice 5 : Calculer la somme des éléments de chaque sous-tableau
 *
 * Vous avez un tableau de tableaux, où chaque sous-tableau contient des nombres.
 * Écrivez une fonction 'sumSubarrays' qui calcule la somme des éléments de chaque sous-tableau et renvoie un nouveau tableau contenant ces sommes.
 * Utiliser 'map()' et 'reduce()'.
 */


function sumSubarrays(tableauDeTableaux) {
  return tableauDeTableaux.map(sousTableau => sousTableau.reduce((total, nombre) => total + nombre));
}

// Exemple d'utilisation :
const tableauDeTableaux = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const sommesDesSousTableaux = sumSubarrays(tableauDeTableaux);
console.log(tableauDeTableaux);
console.log("Sommes des sous-tableaux :", sommesDesSousTableaux);
