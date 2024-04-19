//============================ LES TYPES ET LES COMPARAISONS ============================

// ! Avant d'aller plus loin, vous devez avoir pris connaissance du fichier "arithmetic-operator.js"
/**
 *
 * Comparer des nombres
 *
 * Nous pouvons utiliser des comparaisons pour vérifier si un nombre
 * est inférieur ou supérieur à un autre nombre.
 *
 * Pour vérifier si un nombre est inférieur à un autre nombre, nous
 * utilisons l'opérateur inférieur à "<".
 *
 * @author helyatam
 */

/**
 * Si le nombre de gauche est inférieur au nombre de droite, comme dans
 * 1 < 90 le résultat est true.
 *
 * Si le nombre de gauche n'est pas inférieur au nombre de droit, comme dans
 *  235 < 10, le résultat est false.
 */
console.log(1 < 90);
console.log(235 < 10);

/**
 *
 * Pour vérifier si un nombre est supérieur à un autre nombre,
 * nous utilisons l'opérateur supérieur à ">".
 *
 */

console.log(101 > 90);

/**
 *
 * Vérification de l'égalité
 *
 * Pour vérifier si un nombre est inférieur ou égal à un autre nombre,
 * nous utilisons l'opérateur inférieur ou égale à, "<="
 *
 */

/**
 *
 * Si le nombre de gauche est inférieur ou égale au nombre de droite,
 * comme dans 1 <= 3, le résultat est true.
 */
console.log(1 <= 3);

/**
 *
 * Pour vérifier si un nombre est supérieur ou égale à un autre nombre,
 * nous utilisons l'opérateur supérieur ou égal à, ">=".
 *
 */

console.log(3099 >= 3099);

/**
 *
 * Pour stocker le résultat d'une comparaison dans une variable,
 * on utilise le signe "=" qui est l'opérateur d'affectation.
 *
 */

const result = 1 <= 15;
console.log(result);

/**
 *
 * Nous pouvons également utiliser un opérateur de comparaison pour
 * comparer une variable avec une autre variable comme dans min <= max
 *
 */

const min = 5;
const max = 10;
const result1 = min <= max;
console.log(result2);

/**
 *
 * Vérifier si batteryLevel1 = 10 est inférieur ou égale à 20.
 * Afficher un message indiquant "Low battery:" suivie de false ou true.
 *
 */

const batteryLevel1 = 10;
const lowBattery = batteryLevel1 <= 20;
console.log("Low battery: " + lowBattery);

/**
 *
 * Stokez le résultat des points = 12 pour qu'il soit supérieur ou égale à 10
 * dans la variable leveltwo.
 * Affichez un message indiquant "Level 2: true".
 *
 */
const points = 12;
const levelTwo = points >= 10;
console.log("Level 2: " + levelTwo);

/**
 *
 * Vérifier si solved = 20 est inférieur ou égale au minimum = 10.
 * Et affichez le résultat.
 *
 */

const solved = 20;
const minimum = 10;
const lostStreak = solved <= minimum;
console.log(lostStreak);

/**
 *
 * Comparer des strings
 *
 * Opérateur d'égalité
 *
 * Nous pouvons utiliser des comparaisons pour vérifier si une string
 * est égale ou non à une autre string.
 *
 */

/**
 *
 * Pour vérifier si une string est égale à une autre string,
 * nous pouvons utiliser l'opérateur d'égalité stricte, "==="
 *
 */

/**
 *
 * Si la string de gauche est égale à la string de droite,
 * comme dans "apple" === "apple", le résultat est true.
 *
 */

console.log("apple" === "apple");

/**
 *
 * Si la string de gauche n'est pas égale à la string de droite,
 * comme dans "apple" === "orange", le résultat est false.
 *
 */

console.log("apple" === "orange");

/**
 *
 * Nous pouvons également comparer des variables qui stokent des strings
 * entre elles, comme dans fruit === fruit1.
 *
 */

const fruit = "apple";
const fruit1 = "orange";
const sameFruit = fruit === fruit1;
console.log(sameFruit);

/**
 *
 * Stockez une strinf dans l'item1 pour rendre le résultat de la comparaison false.
 *
 */

const item = "deerstalker hat";
const item1 = "red hat";
const isDuplicate = item === item1;
console.log(isDuplicate);

/**
 *
 * Opérateur d'inégalité
 *
 * Pour vérifier si une string n'est pas égale à une autre string,
 * nous utilisons l'opérateur d'inégalité stricte, "!==".
 *
 */

/**
 *
 * Si la string  de gauche n'est pas égale à la string de droite,
 * comme dans "apple" !== "orange", le resultat est true.
 *
 */

console.log("apple" !== "orange");

/**
 *
 * Si la string de gauche est égale à la string de droite,
 * comme dans "orange" !== "orange", le resulat est false.
 *
 */

console.log("orange" !== "orange");

/**
 *
 * Pour stocker le résultat d'une comparaison dans une variable,
 * on utilise l'opérateur d'affection qui est le signe "=".
 *
 */

const isDuplicate1 = "apple" !== "orange";
console.log(isDuplicate1);

/**
 *
 * Stockez une string dans wallpaper pour afficher le résultat false dans la console.
 * Le fichier à vérifier s'appelle bliss.png.
 *
 */

const wallpaper = "bliss.png";
const isSaved = wallpaper !== "bliss.png";
console.log(isSaved);

/**
 *
 * Stockez une string dans newleader pour rendre le résultat de la comparaison true.
 * previousleader est Anna.
 *
 */

const previousLeader = "Anna";
const newleader = "Jim";
const leaderChanged = previousLeader !== newleader;
console.log(leaderChanged);

/**
 *
 * Vérifier si bigcity = Tokyo n'est pas égal à smallcity = Zurich.
 *
 */

const bigCity = "Tokyo";
const smallcity = "Zurich";
const isDiffrentCity = bigCity !== smallcity;
console.log(isDiffrentCity);

// DECOUVRIR LES TYPES

/**
 *
 * Les types
 *
 * Nous avons déjà vu et ulisé de nombreux types de valeurs.
 * Dans le jargon de la programmation, ces différents types de valeurs
 * sont appelés types.
 *
 */

/**
 *
 * Type : String
 *
 * Les strings ou chaînes de caractères sont des caractères entre guillemets "",
 * comme la valeur "Cookies".
 *
 */

const dessert = "Cookies"; // Type : String

/**
 *
 * Type : Number
 *
 * Le number ou nombre est un autre type que nous avons déjà utilisé.
 * Il représente des valeurs numériques comme 42.
 *
 */

const score = 42; // Type : Number

/**
 *
 * Type : Boolean
 *
 * Le type boolean ne contient que deux valeurs : les valeurs spéciales
 * true et false.
 *
 * Lors du stockage de true dans isOn, nous diosn que nous attribuons une
 * valeur à une variable.
 *
 */

const isOn = true; // type : Boolean

/**
 *
 * Exemple 1 :
 *
 * Attribuer une string à la variable username, un number à age
 * et un boolena à ismale. Afficher le résultat dans la console.
 *
 */

const username = "Anna"; // type : string
const age1 = 25; // type : number
const isMale = false; // type : boolean
console.log(username, age, isMale);

/**
 *
 * Travailler avec des types
 *
 * "+" est le signe de jonction ou d'ajout. En joignant deux variables,
 * nous pouvons obtenir des résultats différents en fonction de leur types.
 *
 * Joignez les valeurs et examinez la différence entre l'utilisation de "+"
 * avec des strings et avec des numbers.
 *
 */

console.log("10" + "10"); // expected output : 1010
console.log(10 + 10); // expected output : 20

/**
 *
 * Lorsque vous joignez des numbers à des strings, le nombre sera automatiquement
 * transformé en string.
 *
 */

const result2 = "10" + 10;
console.log(result2);

/**
 *
 * Combinez une string et un number pour afficher le score d'un joueur.
 *
 * const result = "Your score: " + 99;
 * console.log(result);
 *
 * L'ajout d'un nombre à une string fonctionne également lorsque nous
 * utilisons une variable comme scoreNumber qui stocke un number, au
 * lieu d'une valeur numérique.
 *
 */

const namePlayer = "max ";
const scoreNumber = 100;
const scorePlayer = "ton score est de " + scoreNumber + " points!";
const scoreTotal = namePlayer + scorePlayer;
console.log(scoreTotal);

/**
 *
 * Nous pouvons également joindre des strings et des booléens.
 *
 * const result = "You passed: " + true;
 * console.log(result);
 *
 * Encore une fois, l'ajout d'un booléean à une string fonctionne
 * également lorsque nous utilisons une variable comme pass, qui
 * stocke un booléen.
 *
 */

const nameStudent = "Aurel ";
const pass = true;
const isPassed = "Est-ce que " + nameStudent + "monte de classe ? : " + pass;
console.log(isPassed);

/**
 *
 * Exemple 1 :
 *
 * Qu'est-ce que ce code affiche dans la console ?
 *
 * console.log(10 + " years old");
 * expected output : 10 years old
 *
 * const price = 3;
 * const tag = price + "$";
 * console.log(tag);
 * expected output : 3$
 *
 */

// ! Avant d'aller plus loin, vous devez prendre connaissance du fichier "learn-typeof-value.js"


//============================ OPERATEURS LOGIQUES ====================================

/**
 *
 * Opérateur "AND" ou "&&"
 *
 * Avec les opérateurs logiques, nous pouvons connecter deux ou plusieurs
 * conditions pour décider d'un résultat.
 *
 * Un opérateur logique relie les deux conditions pour la batterie et l'interrupteur
 * pour décider si l'ampoule doit être allumée ou éteinte.
 *
 * L'opérateur "AND" ou "&&" renvoie true uniquement si toutes les conditions sont true.
 *
 */

let isBatteryOn = true;
let isSwitchOn = true;
console.log(isBatteryOn && isSwitchOn);

/**
 *
 * L'opérateur && renvera false si une ou plusieurs conditions sont false.
 *
 */

isBatteryOn;
isSwitchOn = false; // Mise à jour de ma variable isSwitchOn qui passe de true à false.
console.log(isBatteryOn && isSwitchOn);

/**
 *
 * Lorsque les opérandes et les opérateurs calculent une valeur booléenne ensemble,
 * cela forme une expression logique, comme isBatteryOn && IsSwitchOn.
 *
 * Vous pouvez également stocker le résultat d'une expression logique dans une variable.
 */

isBatteryOn = false;
isSwitchOn;
let result4 = isBatteryOn && isSwitchOn;
console.log(result4);

/**
 *
 * Exemple 1 :
 *
 * ? Qu'est-ce que ce code affiche dans la console pour la variable result.
 * Parcourez le code étape par étape pour le comprendre.
 *
 * let cost = 50;
 * let sellprice = 60;
 * const PROFIT  = sellprice - cost;
 * console.log(PROFIT);
 * expected output => 10
 *
 * const result = cost < sellprice && PROFIT > 0;
 * console.log("result: " + result);
 * expected output => result: true
 *
 */

/**
 *
 * Exemple 2:
 *
 * Vérifier si un permis de conduire peut être délivré à une personne.
 * Ils doivent être âgés d'au moins 18 ans et réussir l'examen de conduite.
 *
 */

let age = 21;
let examen = true;
const isEligible = age >= 18 && examen;
console.log(isEligible);

/**
 *
 * Exemple 3:
 *
 * Vérifier si l'utilisateur peut envoyer un e-mail.
 * Pour cela, le destinataire doit être valide et le sujet doit être renseigné.
 * Pour l'exemple, sujet = false.
 *
 */

let isRecipentValid = true;
let isSubjectFilled = false;
const isMailSent = isRecipentValid && isSubjectFilled;
console.log("Mail Sending Successful ?: " + isMailSent);

/**
 *
 * Exemple 4:
 *
 * Stockez une expression logique dans la variable willsiteload qui vérifie si le
 * WIFI est connecté et si l'URL est valide pour charger un site Web.
 *
 */

let isWifiConnected = true;
let isUrlValid = true;
const willsiteload = isWifiConnected && isUrlValid;
console.log(willsiteload);

/**
 *
 * Opérateur "OR / ||" et "NOT / !"
 *
 * Nous avons vu que l'opérateur AND / && exige que toutes les conditions soient vraies.
 * Mais que se passe-t-il s'il suffit qu'une condition soit vraie ?
 *
 * Par eemple, l'ampoule s'allume ici si la batterie est connectée ou si l'alimentation est connectée.
 *
 * Pour de telles conditions, nous utilisons l'opérateur "OR" / "||", qui renvoie true tant qu'au
 * moins une des conditions est true.
 * Si toutes les conditions sont false, alors l'opérateur "||" renvoie false.
 *
 */

let isBatteryOn1 = true;
let isPowerOn = false;
console.log(isBatteryOn1 || isPowerOn);

/**
 *
 * Nous savons que l'opérateur "NOT" / "!" nie une valeur booléenne.
 * Cela signifie qu'il renvoie true si une condition est false et vice versa.
 *
 */

let isBulbOn = true;
console.log(!isBulbOn);

/**
 *
 * Nous pouvons utiliser "!" pour nier également les expressions logiques.
 * Pour ce faire, nous plaçons l'expression logique entre parenthèses.
 *
 * L'expression logique renvoie false mais en la niant, nous obtenons true.
 *
 */

isBatteryOn1 = true;
isPowerOn;
console.log(!(isBatteryOn1 && isPowerOn));

/**
 *
 * Exemple 1:
 *
 * ? Qu'est-ce que ce code affiche dans la console ?
 *
 * const condition = 5 >= 6; // => false
 * const condition1 = 9 === 10; // => false
 * console.log(condition || condition1);
 * expected output => false
 *
 * let condition = true;
 * let condition1 = false;
 * const logicalExpression = condition || condition1;
 * console.log(!logicalExpression ||  logicalExpression);
 * expected output => true
 *
 */

/**
 *
 * Exemple 2 :
 *
 * Vérifier si une personne peut acheter une voiture selon que son prêt
 * est approuvé ou que son montant en espèces est supérieur au coût de la
 * voiture.
 *
 * Le prêt est approuvé.
 * cash = 30000;
 * cost = 40000;
 *
 */

let cash = 30000;
let cost = 40000;
let isLoanApproved = true;
const isCarBought = cash > cost || isLoanApproved;
console.log(isCarBought);

/**
 *
 * Exemple 3 :
 *
 * Enregistrer l'opposé de isloanrejected dans la constante isloangranted et afficher.
 *
 */

let isLoanRejected = false;
const isLoanGranted = !isLoanRejected;
console.log(isLoanGranted);

/**
 *
 * Vérifier si une personne peut acheter une voiture ou non.
 * En vérifiant si la personne à les fonds suffisant et
 *
 * canbuycar.
 *
 */

isLoanRejected;
cash;
cost;
const insufficentFunds = cash < cost;
const canBuyCar = !(isLoanRejected && insufficentFunds);
console.log(canBuyCar);

/**
 *
 * Exemple 4:
 *
 * Utiliser "||" et "!" pour déterminer si un utilisateur peut publier,
 * en vérifiant si une pièce jointe est ajoutée ou si le champ de texte
 * n'est pas vide.
 *
 * istextempty
 * isattachment
 * isposted
 *
 */

let isTextEmpty = true;
let isAttachment = false;
const isPosted = !isTextEmpty || isAttachment;
console.log(isPosted);

/**
 *
 * Exemple 5 :
 *
 * Enregistrez un fichier si le stockage cloud est supérieur à la taille du fichier
 * ou si le stockage système est supérieur à la taille du fichier.
 *
 * cloudstorage = 4
 * systemestorage = 8
 * filesize = 5
 *
 * "Saved ? : "
 *
 */

const cloudStorage = 4;
const systemStorage = 8;
const fileSize = 5;
const isSaved1 = cloudStorage > fileSize || systemStorage > fileSize;
console.log("Saved: " + isSaved1);
