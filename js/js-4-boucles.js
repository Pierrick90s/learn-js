//============================ LES BOUCLES ============================

/**
 * 
 * Apprenons un nouveau concept qui explique comment les 
 * variables gardent une trace des choses comme ajouter 
 * ou retirer des euros d'un portefeuille.
 * 
 * Lorsque nous créons une variable, nous lui attribuons valeur,
 * comme l'attribution de 3 à wallet.
 * 
 * @author helyatam
 */

const wallet = 3;
console.log(wallet);

/**
 * 
 * L'auto-assignation consite à définir une variable à sa propre valeur.
 * Par exemple, nous pouvons définir wallet à sa valeur 3 avec 
 * wallet = wallet
 * 
 * Puisque nous pouvons auto-assigner des variables, nous pouvons auggmenter
 * ou diminuer les variables définies sur des nombres.
 * Essayez d'augmenter wallet avec wallet = wallet + 1.
 * 
 * Les variables auto-assignables nous permettent de suivre les données qui 
 * changent au fil du temps.
 * Par exemple, un utilisateur peut ajouter 2 euros à un portefeuille,
 * puis retirer 1 euros.
 *  
 */

let wallet1 = 3;
// wallet = wallet + 1;
wallet1 = wallet1 + 2;
wallet1 = wallet1 - 1;
console.log(wallet1);

/**
 * Les variables définies sur des strings fonctionnent de la même manière.
 * Essayer de définir nameInfo sur nameInfo + " John"
 * 
*/

let nameInfo = "Account name: ";
nameInfo = nameInfo + " Elton"; // => "Account name: Elton"
nameInfo = nameInfo + " John"; // => "Account name: Elton John"
console.log(nameInfo);

/**
 * 
 * Exemple 1:
 * 
 * Quelle est la valeur attribuée à la variable speed ? 
 * const speed = 0;
 * La réponse est 0.
 * 
 * Qu'est que ce code affiche affiche dans la console ? 
 * let speed = 100;
 * speed = speed;
 * console.log(speed);
 * expected outpout => 100
 * 
 * speed = speed + 1;
 * consle.log(speed);
 * expected outpout => 101
 * 
 * let fullName = "Jane";
 * fullName = fullName + " Bowling";
 * console.log(fullName);
 * expected outpout => Jane Bowling;
 * 
 */

/**
 * 
 * Exemple 2:
 * 
 * Créer une constant nommée number qui stocke 5 et créer une variable likes
 * qui se met à jour ayant la même valeur que number et afficher le code dans la console.
 * 
 */

const number = 5;
let likes = number;
console.log(likes); // => 5

/**
 * 
 * Exemple 3:
 * 
 * Créer une variable qui se met à jour nommée inventory stockant 11 et y ajouter
 * 5. 
 * Afficher le code dans la console. 
 * 
 */

let inventory = 11;
inventory = inventory + 5;
console.log(inventory); // => 16 

/**
 * 
 * Exemple 4: 
 * 
 * Vous devez créer une variable qui se met à jour ayant la valeur 3 et nommée cards. 
 * Vous devrez soustraire 1 et puis y ajouter 4.
 * Afficher le résultat dans la console. 
 * 
 */

let cards = 3;
cards = cards - 1;
cards = cards + 4;
console.log(cards); // => 6

/**
 * 
 * Exemple 5:
 * 
 * Vous devez afficher Jennifer Lopez dans la console, en mettant à jour 
 * plusieurs fois la variable artistName. 
 * 
 */

let artistName = "Jennifer";
artistName = artistName + " Lopez";
console.log(artistName); // => Jennifer Lopez

/**
 * 
 * Opérateurs d'affectation
 * 
 * Etant donné que l'auto-affection/assignation est un outil puissant pour créer des 
 * programmes. 
 * Nous allons apprendre quelques opérateurs qui nous aident à écricre du code plus 
 * rapidement.
 * 
 */

/**
 * 
 * Nous savons que nous pouvons ajouter 1 à une variable en écrivant le nom de la variable. 
 * Dans ce cas, likes.
 * 
 */

likes = 5;
likes = likes + 1;
console.log(likes); //=> 6

/**
 * 
 * Plutôt que de réécrire le nom de la variable, 
 * nous pouvons utiliser l'opérateur d'assignation "+=" pour ajouter un nombre
 * avec likes += 1.
 * 
 */

likes += 1;
console.log(likes); //=> 7

/**
 * 
 * Pour soustraire de la valeur d'une variable,
 * nous utilisons l'opérateur d'assignation "-=", 
 * comme ici où nous diminous likes de 3.
 * 
 */

likes -= 3;
console.log(likes); //=> 4

/**
 * 
 * l'opérateur d'incrémentation, "++", placé après le nom d'une variable,
 * augmente sa valeur de 1. 
 * Ici, likes++ augmentera la valeur de 4 à 5.
 * 
 */

likes++;
console.log(likes); //=>5

/**
 * 
 * Nous pouvons soustraire 1 de la valeur d'une variable en utilisant
 * l'opérateur de décrémentation "--" comme ici avec likes--.
 * 
 */

likes--;
console.log(likes);

/**
 * 
 * ? Qu'est-ce ce code affiche dans la console ? 
 * 
 * let marbles = 6;
 * marbles += 2;
 * console.log(marbles)
 * expected output => 8
 * 
 * let speed = 200; 
 * speed--;
 * console.log(speed)
 * execpted output = 199
 * 
 */

/**
 * 
 * Exemple 2:
 * 
 * Créer une variable yards stockant 80 et y ajouter 10.
 * Afficher le résultat dans la console.
 * 
 */

let yards = 80;
yards += 10;
console.log(yards); //=> 90

/**
 * 
 * Exemple 3:
 * 
 * Créer une variable account avec une valeur de 1000 et soustrayer 200
 * de la variable. 
 * Afficher le résultat dans la console.
 * 
 */

let account = 1000;
account -= 200;
console.log(account); //=> 800

/**
 * 
 * Exemple 4:
 * 
 * Créer une variable wallet ayant la valeur 13 qui augmente sa valeur de 1 et ensuite
 * la diminue de 1. 
 * Afficher le résultat dans la console.
 * 
 */

let wallet2 = 13;
wallet2++;
console.log(wallet2);
wallet2--;
console.log(wallet2);

/**
 * 
 * Répétition de code avec des boucles While
 * 
 * Le sprogrammes répètent les mêmes lignes de code encore et encore pour créer
 * toutes sortes de choses, comme les éléments répétés dans l'application spotify.
 * 
 */

/**
 * 
 * Une façon de répéter des lignes de code est de les écrire encore et encore, 
 * mais cela prend beaucoup de temps si nous vouons créer un programme plus
 * volumineux.
 * 
 */

console.log("and again");
console.log("and again");
console.log("and again");
console.log("and again");
console.log("and again");
console.log("and again");

/**
 * 
 * Pour créer des programmes et des sites Web plus volumineux,
 * nous répétons des nignes de code à l'aide d'une boucle while.
 *
 * L'utilisation d'une boucle while pour répéter des lignes de code
 * commence par le mot-clé while
 * 
 * !Une boucle while répète son bloc de code tant que sa condition est true.
 * !Nous appelons ce phénomème une boucle infinie, à ne pas faire.
 * 
 * Le code répété par une boucle while va entre accolades {}. 
 * Nous l'appelons le bloc de code de la boucle while.
 * 
 * Si la condition d'une boucle whil reste true pour toujours,
 * nous l'appelons une boucle infinie car elle boucle à l'infini.
 * 
 * Comme nous ne pouvons pas afficher de messages infinis "and again"
 * répétés dans notre console, le code plante notre programme.
 *   
 */

// while (true) {
//     console.log("and again");
// }


/**
 * 
 * ? Comment arrêter une boucle while ?
 * 
 * Jusqu'à présent, nous avons appris à créer une boucle while, 
 * concentrons-nous maintenant sur la façon de les empêcher de boucler à l'infini. 
 * 
 * while (true) {
 *  console.log("and again")
 * }
 * 
 * Pour arrêter une boucle, nous commençons par créer une variable en dehors de la boucle.
 * Nous utilisons la variable dans la condition pour décider si la boucle doit ou non 
 * exécuter son bloc de code. 
 * Par exemple (keepGoing = true)
 * 
 * Dans le bloc code, nous arrêtons la boucle en définissant keepGoing sur false
 * afin que la condition renvoie false.
 * 
 */

let keepGoing = true;
while (keepGoing === true) {
    console.log("keepGoing: ");
    keepGoing = false;
}

/**
 * 
 * La boucle exécute tout son bloc de code car keepGoing est true au début, 
 * mais ne s'exécute plus si nous définissons keepGoing sur false.
 * 
 */

keepGoing = true;
while (keepGoing === true) {
    console.log("keepGoing: " + keepGoing);
    keepGoing = false;
    console.log("keepGoing: " + keepGoing);
}

/**
 * 
 * ? Comment contrôler les boucles while ? 
 * 
 * Plongeons-nous dans le contrôle des fois où une boucle while répète son code.
 * Pour contrôler le nombre de fois qu'une boucle while se répète,
 * nous commençons avec une variable définie sur un nombre? 
 * Nous applelons cette variable une variable compteur. 
 * 
 * Ensuite, nous utilisons une comparaison dans la condition pour comparer
 * la variable compteur à un nombre. Dans ce cas, (counter < 4).
 * 
 * A l'intérieur du bloc code , nous rendons la condition false et arrêtons
 * la boucle en encrémentant la variable compteur (counter++).
 * 
 * La modification de la condition indique à la boucle quand d'arrêter. 
 * Par exemple, changer la condition pour (counter < 10)
 * 
 * La modification de la valeur de la variable compteur change lorsque la boucle
 * démarre. Comme mettre le counter à 5.
 */

let counter = 5;
while (counter < 10) {
    console.log(counter);
    counter++;
}

/**
 * 
 * Etant donné que l'ensemble du bloc de code s'exécute, 
 * l'ordre dans lequel vous écrivez le code affecte ce que la console
 * affiche. 
 * 
 */

counter = 5;
while (counter < 10) {
    counter++; // counter = couunter +1
    console.log(counter);
}

/**
 * 
 * Exemple 1:
 * 
 * ? Qu'est ce que ce code affiche dans la console ? 
 * 
 * let counter = 1;
 * while (counter < 5) {
 *  console.log(counter);
 *  counter++
 * }
 * expected output => 1, 2, 3, 4
 * 
 */

counter = 1
while (counter <= 5) {
    console.log(counter);
    counter++
}

/**
 * 
 * Exemple 2:
 * 
 * Créer la variable compteur
 * 
 */

let listnumber = 1;
while (listnumber < 11) {
    console.log(listnumber + ".Camera")
    listnumber++
}

/**
 * 
 * Répétition de code avec des boucles for (itération de code)
 * 
 * Nous savons comment répéter du code en utilisant une boucle while. 
 * Comme ce programme répétant des délcarations pour afficher le 
 * drapeau américain.
 * 
 */

let counter1 = 0;
while (counter1 < 5) {
    console.log("**********________");
    counter1++;
}
let counter2 = 0;
while (counter2 < 4) {
    console.log("------------------");
    counter2++;
}

/**
 * 
 * En utilisant les boucle for, nous pouvons réécrire le même programme, 
 * ce qui le rend plus facile à comprendre les autres programmeurs.
 * 
 * Pour créer une boucle for, nous commençons par le mot-clé for, les parenthèses()
 * et les accolades {}.
 * 
 * Une boucle for nous permet de créer la variable compteur à l'intérieur des parenthèses, 
 * comme let counter = 1;
 * 
 */

for (let i = 0; i < 4; i++) {
    console.log("**********________");
}
for (let i = 0; i < 4; i++) {
    console.log("------------------");
}

/**
 * 
 * Un nom commun pour une variable compteur est le lettre i signifie index.
 * Nous l'utiliserons pour apprendre les boucles for. 
 * 
 * Après le point-virgule, nous plaçons une condition comme i < 5 et ajoutons un autre
 * point-virgule.
 * 
 * Enfin nous incrémentons la variable compteur avec i++.
 * 
 * Le code d'une boucle for est plus facile à lire car les informations sur le nombre 
 * de répétion de la boucle sont entre parenthèses.
 * 
 */

for (let i = 1; i < 5; i++) {
    console.log(i);
}

/**
 * 
 * Exemple 1:
 * 
 * ? Quel est le problème avec le code suivant ? 
 * 
 * for(let i = 0; i < 5;) {
 *  console.log(i)
 *  i++
 * }
 * 
 * Le i++ devrait se trouver dans la condition de for(..., i++)
 * 
 */
/**
 * 
 * ? Comment décrémenter avec une boucle for ? 
 * 
 * Cette boucle for compte de 1 à 5. 
 * Appronons à le changer pour boucler sous forme de compte à rebours (décrémentation, décroissant)
 * 
 * 
 */

for (let i = 1; i < 6; i++) {
    console.log(i)
}

/**
 * 
 * Tout d'abord, nous allons changer le début de la boucle en définissant la varaible compteur sur 5
 * Ensuite, nous allons changer la condition pour que la boucle s'arrête quand "i > 0".
 * Plutôt que d'incrémenter la variable compteur, nous la décrémentons avec "i--". 
 * Pour inclure 0 lors du compte à rebours, nous utilisons l'opérateur de comparaison ">=" au lieu de ">"
 * 
 */


/**
 * 
 * Exemple 1:
 * 
 * ? Comment savons-nous que cette boucle n'excécute pas son bloc de code ?
 * 
 * for (let i = -71; i > 0; i--) {
 *  console.log(i); 
 * }
 * 
 * Au démarrage de la boucle, la valeur de la variable compteur est inférieure à 0.
 * 
 * ? Que se passe-t-il lorsque nous utilisons "i > 0" dans la condition ?
 * 
 * for (let i = 5; i > 0; i--) {
 *  console.log(i); 
 * }
 * 
 * La boucle continue tant que i est supérieur à 0.
 * 
 * ? Qu'est-ce que ce code affiche dans la console ?
 * 
 * for (let i = 5; i >= 0; i--) {
 *  console.log(i); 
 * }
 * 
 * Ce code affiche les nombres de décompte de 5 à 0. 
 * 
 */


// ========================================== Exercices ==================================================== //

/**
 * TODO Exercice 1 : Boucles for et opérateurs d'affectation
 *
 * Créez une boucle for qui affiche les nombres pairs de 0 à 10 en utilisant uniquement l'opérateur d'affectation '+='.
 */

for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}


/**
 * TODO Exercice 2 : Boucle while et contrôle de flux
 *
 * Créez une boucle 'while' qui affiche les puissances de 2 inférieures à 1000.
 */

let puissance = 2
let resultat = 2;
console.log(resultat);
while (resultat < 1000) {
    resultat*=puissance;
    console.log(resultat);
}

/**
 * TODO Exercice 3 : Boucles imbriquées
 *
 * Créez une boucle imbriquée qui affiche un motif de pyramide comme suit :
 */

// *
// **
// ***
// ****
// *****

let etoiles = ""
while (etoiles!="********") {
    etoiles+="*";
    console.log(etoiles)
}

let etoile = ""
for (let i = 0; i < 5; i++) {
    console.log(etoile+="*")
}

/**
 * TODO Exercice 4 : Boucles et tableaux
 *
 * Créez un tableau contenant des noms de fruits. 'const fruits = ["apple", "banana", "orange", "grape"];'
 * Utilisez une boucle 'for' pour afficher chaque fruit en les mettant en majuscule.
 */


const fruits = ["apple","banana","orange","grape"];
for (let i = 0; i<fruits.length ;i++) {
    let nfruits = fruits[i];
    nfruits = nfruits.charAt(0).toUpperCase() + nfruit.slice(1);
    console.log(fruits);
}

/**
 * TODO Exercice 5 : Boucles et conditions
 *
 * Créez une boucle 'for' qui affiche les nombres de 1 à 20, mais remplacez les multiples de 3 par "Fizz", 
 * les multiples de 5 par "Buzz" et les multiples de 3 et 5 par "FizzBuzz".
 */

for (let i = 1; i<=20; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

