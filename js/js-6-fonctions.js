//============================ LES FONCTIONS ============================

/**
 *
 * ? Comment réutiliser du code avec des fonctions ?
 *
 * La création de fonction.
 *
 * Les sites Web et les applications doivent régulièrement effectuer la même tâche
 * encore et encore.
 * Au lieu de créer de nombreux codes différents, les sites Web utilisent des fonctions
 * pour regrouper le code associé et effectuer la tâche en un seul endroit.
 *
 * @author helyatam
 */

/**
 *
 * Pour commencer à regrouper le code associé, nous commençons
 * par coder le mot-clé "function".
 * Vient ensuite le nom de la fonction en camelCase, comme greetUser,
 * suivi de parenthèses,"()".
 * Les accolades "{ }" marquent le bloc de code qui appartient à la fonction.
 *
 * Le code que nous voulons regrouper se place entre les accolades.
 *
 * Pour exécuter le code, nous devons appeler la fonction. Nous le faisons
 * en codant son nom suivi de parenthèses, comme greetUser(),
 */

function greetUser() {
  console.log("Good morning Anna");
  console.log("Welcome back");
}

greetUser();

/**
 *
 * La création de paramètres
 *
 * Parfois, les fonctions ont besoin d'informations spécifiques pour les aider
 * à effectuer leur tâche.
 * Comme une fonction qui ajoute le nom d'un joueur à une équipe.
 *
 */

/**
 *
 * Pour commencer, nou spouvons utiliser des constantes à l'intérieur des fonctions.
 * Comme créer const name = "Ron";  et l'utiliser dans l'instruction d'affichage.
 *
 */

function greetRon() {
  const name = "Ron";
  console.log("Hello, " + name);
}

greetRon();

/**
 *
 * ? Comment saluerions-nous une autre persone ?
 *
 * Nous pourrions créer et appelet une nouvelle fonction greetLeslie();
 * avec un code similaire.
 */

function greetLeslie() {
  const name = "Leslie";
  console.log("Hello, " + name);
}

greetLeslie();

/**
 *
 * Au lieu d'écrire deux fonctions, nous pouvons transmettre des informations
 * spécifiques à une seule fonction, sans répéter le code.
 * Voici un aperçu
 *
 * Pour passer une valleur à une fonction, nous ajoutons d'abord une variable appelée
 * paramètre à l'intérieur des parenthèses de la fonction.
 * Ici, nous allons passer name.
 * Le paramètre agit comme une variable qui stocke une valeur. il n'a pas encore de valeur
 * à l'intérieur.
 *
 * Pour passer une valeur à la variable, on la place enctre parenthèses quand
 * on appelle la fonction, comme ici greet("April").
 *
 */

function greet(name) {
  console.log("Hello, " + name);
}
greet("April");
greet("Leslie");

/**
 *
 * Exemple 1:
 *
 * Appeler la fonction doubleNumber() et transmettez la valeur 5.
 *
 */

function doubleNumber(number) {
  const result = number * 2;
  console.log(result);
}

doubleNumber(5);

/**
 *
 * Comment retourner les valeurs d'une fonction
 *
 * Une fonction peut renvoyer une valeur au code qui l'appelée.
 *
 */

function poundsToKg(number) {
  const result = number / 1.4;
  return result;
}
poundsToKg(50);
console.log(poundsToKg(50));

/**
 *
 * Pour renvoyer quelque chose d'une fonction, nous ajoutons le mot-clé return
 * suivi de la valeur à renvoyer, comme ici avec return age
 *
 */

function userAge(number) {
  const age = "User age: " + number;
  return age;
}

/**
 *
 * Une fonction peut renvoyer n'importe quel type de valeur,
 * comme une string, un number ou un boolean.
 * Cette fonction renvoie la valeur numérique dans result
 *
 */

function timesTen(number) {
  const result = number * 10;
  return result;
}

/**
 *
 * Nous ne pouvons renvoyer qu'une seule valeur. Ici, nous renvoyons la valeur
 * booléenne à l'intérieur de la variable avec return isGreater;
 *
 */

function greaterThanTen(number) {
  const isGreater = number > 10;
  return isGreater;
}

/**
 *
 * Nous pouvons utliser la valeur retour d'une fonction comme n'importe quelle valeur
 * en appelant la fonction.
 * Ici, nous appleons userAge(22) pour utiliser sa valeur.
 *
 */

function userAge(number) {
  const age = "User age: " + number;
  return age;
}

console.log(userAge(22));

/**
 *
 * Nous pouvons également stocker la valeur retour dans une variable.
 * Ici, nou stockons la valeur retour dans le result et l'affichons dans la console.
 *
 * Si nous n'incluons pas d'instruction return, la fonction renvoie la valeur undefined à la place.
 *
 */

const result = userAge(29);
console.log(result);

/**
 *
 * Exemple 1:
 *
 * Renvoie la valeur de cette fonction
 *
 */

function giveMeTen() {
  return 10;
}
console.log(giveMeTen());

/**
 *
 * Exemple 2:
 *
 * Appelez la fonction addTen() avec une valeur.
 *
 */

function addTen(number) {
  const addTen = number + 10;
  return addTen;
}
console.log(addTen(13));

/**
 *
 * Exemple 3:
 *
 * Créez la variable result et stockez la valeur de retour de la fonction à l'intérieur.
 *
 */

function signUp(user) {
  const status = user + " signed up";
  return status;
}

const result1 = signUp("Dan");
console.log(result1);

/**
 *
 * Utilisation de plusieurs paramètres
 *
 * Les fonctions ont besoin de plusieurs paramètres pour fonctionner avec
 * deux éléments de données ou plus, comme un prénom et un nom.
 *
 */

/**
 *
 * Nous avons appris à créer une fonction avec un seul paramètre comme
 * display(firstName).
 *
 * @param firstName Le prénom
 * @param lastName Le nom de famille
 *
 * Pour ajouter plus de paramètres à une fonction, nous ajoutons une virgule
 * et le nom du paramètre suivant.
 *
 * Après avoir passé une deuxième valeur, nous pouvons utitliser le nouveau
 * paramètre dans notre fonction.
 *
 */

function display(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
display("Alex", "Morgan");

/**
 *
 * Les valeurs sont transmises à une fonction dans le même ordre que les paramètres.
 * Dans cet exemple, passez "Amy" comme première valeur.
 *
 */

function displayWinners(first, second) {
  console.log("1st: " + first);
  console.log("2nd: " + second);
}
displayWinners("Sam", "Amy");

/**
 *
 * Nous pouvons ajouter autant de paramètres que nous le souhaitons, à condition
 * de les séparér par des virgules.
 *
 *
 */

function displayAnimals(first, second, third) {
  console.log(first + " " + second + " " + third);
}
displayAnimals("duck", "duck", "goose");

/**
 *
 * Exemple 1:
 *
 * ? Quelle valeur s'affiche en dernier dans la console ?
 *
 * function showWinners(first, second)
 * {
 *  console.log("1st: " + first);
 *  console.log("2nd: " + second);
 * }
 * showWinners("Helen", "Joe");
 *
 * expected output => 2nd: Joe
 *
 * ? Qu'est-ce quue ce code affiche dans la console ?
 *
 * function mix(firt, second, third)
 * {
 *  return first + second + third;
 * }
 * const result = mix("big", "bad", "wolf");
 * console.log(result);
 *
 * expected output => bigbadwolf
 */

/**
 *
 * Exemple 2:
 *
 * Codez le second paramètre de cette fonction.
 *
 */

function createID(name, year) {
  return name + year + "@hutmail.com";
}
const email = createID("jo", "1998");
console.log(email);

/**
 *
 * Exemple 3:
 *
 * Créer la fonction suivante en analysant le résultat.
 * function name(params)
 * {
 *
 * }
 * const newWord = name("re", "do");
 * console.log(newWord); => redo
 *
 */

function addPrefix(prefix, word) {
  return prefix + word;
}
const newWord = addPrefix("re", "do");
console.log(newWord);
/**
 *
 * Comprendre les fonctions
 *
 * Les noms de fonction doivent être descriptifs et doivent indiquer
 * l'objectif principal de la fonction.
 * La fonction suivante affiche quelque chose dans la console.
 *
 */

function display(word) {
  console.log(word);
}
display("hi");
display("bye");

/**
 *
 * Les fonctions sont des actions, donc leurs noms doivent contenir au moins
 * un verbe.
 * Lorsque vous utilisez plusieurs mots, le verbe est un préfixe, comme sumTotal.
 *
 */

function sumTotal(price, tax) {
  console.log(price + tax);
}
sumTotal(1000, 250);

/**
 *
 * Les fonctions qui renvoient principalement une valeur sans la modifier
 * de quelque manière que ce soit commencent par des verbes comme get.
 *
 */

function getName(fullName) {
  return fullName[0];
}
const fullName = ["Don", "Juan"];
const firstName = getName(fullName);
console.log(firstName);

/**
 *
 * En tant que cas particulier, les fonctions qui renvoient des valeurs booléennes
 * commencent souvent par is.
 *
 */

function isFreezing(temperature) {
  return temperature < 0;
}
const freezing = isFreezing(-3);
console.log(freezing);

/**
 *
 * Les noms de fonctions doivent être cohérents. Si une fonction
 * s'appelle calculateDifference, une fonction similaire doit avoir le même
 * préfixe verbal.
 *
 */

function calculateSum(a, b) {
  return a + b;
}

function calculateDifference(a, b) {
  return a - b;
}
const sum = calculateSum(30, 11);
const diffrence = calculateDifference(30, 11);
console.log(sum);
console.log(diffrence);

/**
 *
 * Exemple 1:
 *
 * Codez le nom et l'appel de fonction corrects pour afficher l'ID
 * utilisateur(999). Son nom est "Don Quixote".function calculateSum(a, b) {
  return a + b;
}

function calculateDifference(a, b) {
  return a - b;
}
 *
 */

function displayUserID(user) {
  console.log(user[1]);
}
const user = ["Don Quixote", 992];
displayUserID(user);

/**
 *
 * Boîte noire (les fonctions sont déjà déclarées en amont)
 *
 *
 *
 * Une fonction est comme une boîte noire car avec un grand nom,
 *
 * nous puvons appeler une fonction sans lire le code défini à l'intérieur
 *
 *
 *
 * const author = "J.D Salinger";
 *
 * displayAuthor(author);
 *
 *
 *
 * Par exemple, sans lire le code défini à l'intérieur des fonctions, pouvez-vous
 *
 * deviner ce qui se passe lorsque ce code s'éxécute ?
 *
 *
 *
 * displauTitle();
 *
 * displayAuthor();
 *
 * displayYear();
 *
 *
 *
 * expected output => Un titre, un auteur et l'année.
 *
 *
 *
 * Bien que nous n'ayons pas à nous souvenir du code de chaque fonction d'un programme,
 *
 * nous devons transmettre la bonne entrée pour obtenir la bonne sortie.
 *
 *
 *
 * const author = "John Steinbeck";
 *
 * const title = "Tortilla Flat";
 *
 * const date = "1935";
 *
 * displayTitle(author);
 *
 * displayAuthor(title);
 *
 * displayYear(date);
 *
 */

/**
 *
 * La bonne entrée dépend des types de valeurs que nous passons à une foncton.
 *
 */

function displayScore(name, points) {
  console.log(name + ": " + points);
}
displayScore("John", 350);

/**
 *
 * Les types de valeur sont importants lorsque les fonctions effectuent des opérations
 * Par exemple, lors de l'addition de deux nombres, les valeurs que nous transmettons
 * doivent être des nombres.
 *
 */

function sumScore(score, bonus) {
  console.log(score + bonus);
}
sumScore(100, 50);

/**
 *
 * La sortie d'une fonction n'a pas besoin d'être du même type que l'entrée.
 * Cette fonction a un nombre en entrée et un booléen en sortie.
 *
 */

function isRentingAge(age) {
  console.log(age >= 25);
}
isRentingAge(25);

/**
 *
 * Lorsque nous pensons à la sortie d'une fonction, nous penser à ce qu'elle
 * affiche ou à ce qu'elle renvoie pour être utilisée ailleurs dans le code.
 *
 */

function isRentingAge(age) {
  return age >= 25;
}
const canRent = isRentingAge(25);
console.log(canRent);

/**
 *
 * Les fonctions avec des Tableaux
 *
 * Découvrons les fonctions avec des tableaux comme paramètres.
 * Passez le tableau des students à la fonction displayNames()
 * pour commencer.
 *
 * Lorsque nous passons des tableaux à des fonctions, nous pouvons choisir
 * parmi un certain nombre de résultats basés sur le tableau.
 * Par exemple, nous pouvons afficher tout le tableau.
 *
 */

function displayNames(names) {
  console.log(names);
}
const students = ["Laurel", "Yanni"];
displayNames(students);

/**
 *
 * Nous pourrions également afficher la longueur du tableau.
 * Dans cet exemple, en utilisant names.length
 *
 */

function displayNumberOfNames(names) {
  console.log(names.length);
}
displayNumberOfNames(students);

/**
 *
 * Un troisème exemple utilise un élément du tableau, par exemple en codant
 * names[0].
 *
 */

function displayFirstName(names) {
  console.log(names[0]);
}
displayFirstName(students);

/**
 *
 * Souvent, nous passons un tableau à une fonction parce que nous
 * voulons en renvoyer une partie.
 *
 */

function getFirstName(names) {
  return names[0];
}
const firstMember = getFirstName(students);
console.log(firstMember);

/**
 *
 * Nous pouvons utiliser plusieurs élements d'un tableau pour renvoyer
 * un certain type de sortie dont nous avons besoin pour la prochaine
 * étape de notre code.
 *
 */

function getListOfNames(names) {
  return names[0] + ", " + names[1];
}
const list = getListOfNames(students);
console.log(list);


// ! Vous devez prendre connaissance du fichier 'learn-scope.js' avant de réaliser les exercices.


// ========================================== Exercices ==================================================== //

/**
 * TODO Exercice 1 : Doublement des nombres
 *
 * Écrivez une fonction appelée 'doubleNumbers' qui prend un tableau de nombres en paramètre et retourne un nouveau tableau où chaque nombre est doublé.
 * Tester la fonction.
 */

const tableau = [2,4,5,4,5]

function doubleNumbers(array){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]*2);
      }
      return(newArray);
    }
    
console.log(doubleNumbers(tableau));

/**
 * TODO Exercice 2 : Somme des éléments
 *
 * Écrivez une fonction appelée 'sumArray' qui prend un tableau de nombres en paramètre et retourne la somme de tous les éléments du tableau.
 * Tester la fonction.
 */

const tableau2 = [2,4,5,4,5]

function sumArray(array){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]+=array[i]);
      }
      return(newArray);
    }
    
console.log(doubleNumbers(tableau2));

/**
 * TODO Exercice 3 : Concaténation de chaînes
 *
 * Écrivez une fonction appelée 'concatenateStrings' qui prend un tableau de chaînes de caractères en paramètre
 * et retourne une seule chaîne de caractères qui est la concaténation de toutes les chaînes du tableau.
 * Utiliser la méthode 'join()' pour concaténer les chaînes.
 * Tester la fonction.
 */

const tableau3 = ["Do","Ré","Mi","La","Si","Do"]
function concatenateStrings(array){
  newArray= array.join();
  return newArray
}

console.log(concatenateStrings(tableau3));

/**
 * TODO Exercice 4 : Recherche de noms
 *
 * Écrivez une fonction appelée 'findName' qui prend un tableau de noms et un nom spécifique en paramètres,
 * et retourne true si le nom spécifique est présent dans le tableau, sinon retourne false.
 * Utiliser la méthode 'includes()' pour vérifier si le nom spécifique est présent dans le tableau.
 * Tester la fonction.
 */
