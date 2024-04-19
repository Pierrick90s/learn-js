//============================ LES DIFFERENCES ENTRE LET ET CONST ============================

/**
 * ! Vous pouvez prendre connaissance du début du cours sur l'adresse suivante :
 *
 * @url Drive : https://docs.google.com/presentation/d/129ohwd2LdIYhuE7Yjg3l0RMo08epJUjte8bfXEdsIZk/edit#slide=id.g24a05488e5f_0_64
 *
 * @author helyatam
 */

let homeCity = "Brest";
const city = "Chicago";
// /**
//  * Les valeurs que nous avons stockées comme "Chicago"
//  * sont des chaînes de caractères(string). Les strings
//  * sont des mots entre guillemets doubles.
//  * Le strings peuvent contenur toutes sortes de lettres
//  * et de symboles, y compris des espaces.
//  * Par exemple, "Winter is coming.".
//  */

/**
 * Nous savons déjà que nous pouvons déclarer des variables
 * avec les mots clés let et const. Nous allons découvrir
 * la différence entre les deux.
 *
 * Nous utilisons const pour déclarer des variables dont les
 * valeurs ne sont pas censées changer. const est l'abréviation
 * de "constante".
 */

const norwayCapital = "Oslo";

/**
 * Si nous essayons de mettre à jour une valeur stockée dans
 * une variable const. Nous aurons une erreur.
 */

const age = 90;
// age = 91; //!Nous avons une erreur

/**
 * Cependant, nous pouvons mettre à jour les variables let
 * avec l'opérateur d'affectation / assignement =.
 */

let age1 = 90;
age1 = 91;

/**
 * Pour qu'il soit évident qu'une variable est de type const
 * et ne devrait pas changer, nous pouvons éventuellement la nommer
 * avec des lettre en majuscules.
 */

const BIRTHDAY = "25/02/1882";

/**
 * Nous ne pouvons pas utiliser le camelCase si nous utilisons cette
 * norme majuscule. Nous utilisons donc un SNAKE_CASE majuscule pour
 * nommer les variables avec plus d'un mot.
 */

const SPEED_OF_LIGHT = "3*10^8 m/s";

/**
 * let et const sont des variables utiles et nous pourrions les utiliser
 * de manière interchangeable.
 * Cependant, nous devrions essayer d'utiliser const par défaut.
 */

const middleName = "Francesca";

/**
 * les lignes de code sont des instructions que l'ordinateur doit suivre.
 * Lorsque nous exécutons du code, nous disons à l'ordinateur de suivre
 * les instructions que nous avons rassemblées.
 *
 * L'ordre des instructions est imporant car l'ordinateur suit les
 * instructions ligne par ligne.
 */

const step1 = "Collect pants";
const step2 = "?";
const step3 = "Profit";

/**
 * Avec l'instruction spéciale console.log(), nous disons à
 * l'ordinateur d'afficher une valeur dans une zone appelée
 * la console.
 */

console.log("Hello, World!");

/**
 * Nous pouvons utiliser l'instruction console. log() aussi
 * souvent que nous le voulons. L'ordinateur affiche chaque
 * valeur sur une ligne dans la console.
 */

console.log("3, 2, 1");
console.log("GO!");

/**
 * Nous pouvons également utiliser console.log() pour afficher
 * ce qu'il y a à l'intérieur des nos variables.
 */

const greeting = "Hello, World!";
console.log(greeting);

/**
 * Lorsque nous affichons des variables dans la console, leurs
 * valeurs apparaissent à la place de leurs noms.
 */

const username = "Daenerys";
console.log(username);

// UTILISATION DE VARIABLE

/**
 * Mise à jour des variables let
 *
 * Nous avons déjà vu que les variables let, contrairement
 * à const, peuvent changer et mettre à jour les valeurs
 * qu'elles stockent.
 */

let currentstatus = "Watching Netflix";
currentstatus = "Relaxing at the beach";
console.log(currentstatus);

/**
 * Nous pouvons mettre à jour les variables let aussi souvent
 * que nous le voulons.
 */

currentstatus = "Reading";
console.log(currentstatus);

/**
 * Nous pouvons également donner aux variables les valeurs d'autres
 * variables en définisant une variable sur l'autre.
 */

let defaultstatus = "Hi there!";
currentstatus = "Playing football";

currentstatus = defaultstatus;
console.log(currentstatus);

/**
 * Lorsque nous mettons à jour une variable, elle oublie sa valeur
 * précédente.
 */

currentstatus = "Walking the dog";
console.log(currentstatus);

/**
 * Expressions de chaîne de caractères à savoir une string
 *
 * Nous pouvons ajouter des valeurs de chaîne de caractères avec
 * le signe +.
 * Nous appelons l'addition de valeur de chaîne de caractères (string)
 * une expression car elle crée une seule valeur de chaîne de caractères.
 *
 * Nous pouvons afficher le resutlat en utilisant console.log()
 * avec l'expression écrite entre les parenthèses.
 */

"Followers:" + "55";
console.log("Followers" + "55");

/**
 * Lorsque les expressions contiennent des variables, elles utilisent les
 * valeurs des variables.
 */

const numberOfFollowers = "55";
"Followers:" + numberOfFollowers;
console.log("Followers:" + numberOfFollowers);

/**
 * Puisque les expressions deviennent des valeurs, nous pouvons les
 * attribuer à des variables comme des valeurs
 */

const label = "Posts:" + "13";
console.log(label);

/**
 * Nombres ou Numbers
 *
 * Il existe également d'autres types de valeurs. Comme les nombres,
 * qui n'ont pas de guillemets doubles autour d'eux.
 *
 */

let numberOfLikes = 5;

/**
 * Les nombres facillitent le suivi des valeurs numériques.
 * Par exemples, le nombre de likes sur une publication
 * Instagram.
 */

console.log(numberOfLikes);

/**
 * Nous pouvons également créer des expressions avc des nombres.
 * Nous additionnons les nombres avec le signe "+" et les soustrayons les uns
 * des autres avec le signe "-".
 *
 * Afficher 6 dans la console.
 */

numberOfLikes = 5 + 1; // ! A ne pas faire !
console.log(numberOfLikes);
numberOfLikes = numberOfLikes + 1;
console.log(numberOfLikes);

/**
 * Nous utilisons le signe "*" pour multiplier les nombres
 * et le signe "/" pour diviser les nombres.
 *
 * Transformer 0.5 en pourcentage en le multipliant par 100.
 * Et afficher le résultat.
 */

const percent = 0.5 * 100;
console.log(percent + "%");

/**
 * Lorsque nous stockons des nombres dans des variables,
 * nous pouvons également utiliser les variables pour les calculs.
 *
 * Ajoutez 1 à la variable numberOfsteps = 70, avant de l'afficher dans la console.
 */

let numberOfsteps = 70;
console.log("You're on step:");
console.log(numberOfsteps + 1);

/**
 * Comme les expressions deviennent des valeurs, nous pouvons stocker
 * les résultats des calculs dans des variables.
 *
 * Enregistrez le résultat du calcul dans la variable total (posts) et l'afficher
 * dans la console.
 */

let private = 3;
let public = 10;
let total = private + public;
console.log("Total posts: " + total);

/**
 *  TODO Practice
 */

// ? Quelle est la valeur de la variable speed ? => let speed = 300 + 5;
let speed = 300 + 5;
console.log(speed);

/**
 *  ? Pourquoi ce code affiche 31 au lieu de 4 dans la console ?
 *
 * let temperature = "3" +"1";
 * console.log(temperature);
 *
 * Parce que "3" et "1" sont des valeurs de chaîne de caractères.
 * String.
 */

/**
 * let score = 40 + 4;
 *
 * ? Comment savons-nous que la variable score stocke un nombre ?
 *
 * Parce qu'il n'y pas de guillemets autour de 40 et 4.
 */

/**
 * let area = "3 * 5";
 * console.log(area);
 *
 * ? Qu'est ce que ce code affiche dans la console ?
 *
 * Elle va m'afficher 3 * 5 car c'est une chaîne de caractère.
 */

/**
 * let savings = 100;
 * const interest = 0.04;
 *
 * Multiplez la variable savings par la variable interest et
 * d'afficher le résultat dans la console.
 *
 */

let savings = 100;
const interest = 0.04;
console.log(savings * interest);

/**
 * let sumOfGrades = 460;
 * let numberOfStudents = 5;
 *
 * Divisez sumOfGrades par numberOfStudents pour obtenir la note
 * moyenne d'une classe et afficher le résultat dans la console.
 */

let sumOfGrades = 460;
let numberOfStudents = 5;
console.log(sumOfGrades / numberOfStudents);

/**
 * let total1 = 100;
 * let discount = 20;
 *
 * Soustrayez le discount du total et afficher le résultat
 * du calcul dans la console en indiquant le prix après discount.
 *
 */

let total1 = 100;
let discount = 20;
console.log("Discounted price: " + (total1 - discount));

/**
 * Vous devez déclarer une variable qui stocke le nombre de mois par année
 * et l'afficher dans la console.
 */

const monthPerYear = 12;
console.log(monthPerYear + " mois");


/**
 * Booléens
 *
 * Il existe une valeur speciale qui n'est ni une chaîne de
 * caractères(string) ni un nombre.
 *
 * Nous avons true ou false qui n'ont ni guillemet autour d'eux
 * et qui ne sont pas des valeurs numérique.
 *
 * true est idéal pour des situations telles que vérifier si
 * un interrupteur est activé ou si une fonctionnalité est activée.
 */

console.log("Allow updates");
console.log(true);

/**
 * Nous pouvons stocker true dans uen variable comme une chaîne de caractères
 * ou un nombre.
 *
 * Stockez true dans une variable correct et affichez-la dans la console.
 *
 */

const correct = true;
console.log(correct);

/**
 * False est une autre valeur spéciale et l'opposé de true.
 * Nous pouvons l'utiliser comme true.
 *
 * Enregistez la valeur false dans la variable status et affichez status
 * dans la console.
 */

console.log("Device charged");
const status = false;
console.log(status);

/**
 *  TODO PRACTICE
 */

/**
 * ? Pourquoi utiliser les valeurs true et false ?
 *
 * Indique si une fonctionnalité est activée ou désactivée
 */

/**
 * const autoplay = false;
 *
 * ? Pourquoi false n'est pas une chaîne de caractères ?
 * Parce qu'il n y a pas de guillemets autour de lui.
 */

/**
 * const subscribed = false;
 * const subscribed = true;
 *
 * Choisisez celui qui convient le mieux pour montrer qu'un
 * utilisateur s'est désabonné d'un service.
 *
 * const subscribed = false;
 */

/**
 * ? Pourquoi "false" n'est-il pas la même chose que false ?
 *
 * Il y a des guillemets autour, donc "false" est une chaîne de caractères (string)
 */

/**
 * Affichez l'état du paramètre de mise à jour automatique en affichant false dans la console
 */
console.log("Auto updtate");
console.log(false);

/**
 * Créez la variable autosaveimage et stocker true à l'intérieur.
 */

const autoSaveImage = true;

/**
 * Empêchez les cookies en créant la variable et en y stockant false.
 * Voici le code qui nous propose :
 *
 * const allowCookies = "false";
 *
 * ? Pouvez-vous vérifier si le code remplie sa fonctionnalitée ?
 *
 */

const allowCookies = false;

/**
 * Ajustez les paramètres de lecture automatique en codant true.
 */

const autoplay = true;

/**
 * Valeurs négatives
 *
 * Un signe "!" devant true rend le résultat de l'expression false.
 * Si quelque chose n'est pas vrai, il doit être faux.
 *
 * Le signe "!" est l'opérateur de négation. Il transforme les
 * valeurs en leur contraire.
 *
 * Quand on change une valeur en son contraire avec "!", on le nie.
 *
 *  Mettez un signe "!" avant true pour changer sa valeur.
 */

console.log(!false);

/**
 * Nous pouvons utiliser l'opérateur "!" avec des variables pour nier les
 * valeurs qu'ils stokent.
 */

const isMorning = true;
console.log(!isMorning);

/**
 * Nous pouvons également enregistrer une négation entière dans une autre variable.
 *
 * Créez la variable isEvening et utlisez l'opérateur "!" pour changer isMorning
 * en false.
 */

const isEvening = !isMorning;
console.log(isEvening);

/**
 * TODO PRACTICE
 */

/**
 * Que signifie l'opérateur "!" ?
 *
 * Il transforme les valeurs true ou false en leur contraire
 */

/**
 * const latestVersion = !true;
 * console.log(latestVersion);
 *
 * ? Pourquoi ce affiche-t-il false dans la console ?
 *
 * L'opérateur "!" devant true transforme sa valeur en false.
 */

/**
 *  ? Comment appelle-t-on le signe "!" devant true ou false ?
 *
 * Le signe "!" est l'oéprateur de négation.
 */

/**
 * Utilisez l'opérateur de négation et stockez une valeur dans une variable
 * qui permet l'affichage des popups.
 */

const allowPopups = !true;

// Vérification de l'égalité des nombres

/**
 *
 * Opérateur d'égalité
 *
 * ? Nous avons appris à créer et à stocker des valeurs, mais comment les comparer ?
 *
 * Nous devons comparer les chiffres dans des situations telles que la vérification
 * d'un code PIN saisi par un utilisateur correspond à son code PIN enregistré.
 *
 */

const enteredPin = 5448;
const expectedPin = 5440;

/**
 *
 * Pour comparer si deux nombres sont strictement identiques,
 * nous utilisons l'opérateur d'égalité, "===".
 *
 * "=" : l'opérateur d'affectation.
 * "==" : l'opérateur d'égalité simple, vérifie si les valeurs sont identiques.
 * Par exemple :
 * const enteredPin = "5440"; // Type de la valeur : String
 * const expectedPin = 5440; // Type de la valeur : Number
 *
 * enteredPin == expectedPin  => True, parce qu'il ne vérifie le type de la valeur.
 * Il n'est pas recommandé d'utiliser l'opérateur d'égalité simple car il est trop
 * permissif.
 *
 * Par contre, il faut utiliser l'opérateur d'égalité strict "===" qui lui vérifie la valeur
 * et son type avant de donner le résultat.
 *
 * Lors de la comparaison, il n'y a que deux résultats : true ou false.
 *
 */

/**
 *
 * Lorsque nous comparons les mêmes nombres avec l'opérateur d'égalité strict,
 * le résultat est true.
 */

console.log(5 === 5);

/**
 *
 * Lorsque nous comparons deux nombres différents avec l'opérateur d'égalité strict,
 * le résultat est false.
 */

console.log(9 === 10);

/**
 *
 * Opérateur d'inégalité
 *
 * Pour vérifier si un nombre n'est pas égale à un autre nombre,
 * nous utilisons l'opérateur d'inégalité, "!=="
 *
 */

console.log(1 !== 10);

/**
 *
 * Nous pouvons stocker le résultat d'une comparaison avec l'opérateur d'inégalité
 * dans uen variable.
 *
 * Enregistrez la comparaison entre 1 et 2 dans la variable result et afficher.
 *
 */

const result = 1 !== 2;
console.log(result);

/**
 *
 * Nous pouvons comparer des valeurs avec des variables et des variables
 * avec d'autres variables.
 *
 * Tapez "===" et "!==" pour comparer le contenu des variables et afficher.
 *
 */

const one = 1;
const two = 2;

console.log(one === two);
console.log(one !== two);

/**
 *
 * ? Quelle valeur doit avoir la variable batterylevel pour que la comparaison
 * ? dans la variable charged donne false ?
 *
 */

const batteryLevel = 78;

const charged = batteryLevel === 100;

console.log(charged);

/**
 *
 * ? Quelle valeur doit-on donner à la variable emails à stocker dans
 * ? inboxfull pour que le résultat soit true ?
 *
 */

const emails = 1000;
const inboxFull = emails === 1000;
console.log(inboxFull);

/**
 *
 * Vérifier si la variable answer = 16 est égale à 13 et stockez le résultat
 * dans la variable correctanswer  et afficher.
 *
 */

const answer = 16;
const correctAnswer = answer === 13;
console.log(correctAnswer);

/**
 *
 * Vérifier si la réponse soumise par l'utlisateur n'est pas vide.
 *
 */

const letters = 12;
const validAnswer = letters !== 0;
console.log(validAnswer);

// ! Avant d'aller plus loin, vous devez prendre connaissance du fichier "arithmetic-operator.js"