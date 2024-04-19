/**
 * 
 * Les opérateurs arithmétiques en JavaScript permettent d'effectuer des calculs mathématiques sur des nombres.
 * Voici les opérateurs arithmétiques les plus couramment utilisés :
 * 
 */

/**
 * 
 * 1. Addition (+) : L'opérateur d'addition est représenté par le symbole "+" et permet 
 * d'additionner deux valeurs.
 * 
 */

let a = 5;
let b = 3;
let sum = a + b;
console.log(sum); // La valeur de sum sera 8

/**
 * 
 * 2. Soustraction (-) : L'opérateur de soustraction est représenté par le symbole "-" et permet 
 * de soustraire une valeur d'une autre.
 * 
 */

let difference = a - b;
console.log(difference); // La valeur de difference sera 2

/**
 * 
 * 3. Multiplication (*) : L'opérateur de multiplication est représenté par le symbole "*" et permet 
 * de multiplier deux valeurs.
 * 
 */

let product = a * b;
console.log(product); // La valeur de product sera 15


/**
 * 
 * 4. Division (/) : L'opérateur de division est représenté par le symbole "/" et permet
 * de diviser une valeur par une autre
 * 
 */

a = 10;
b = 2;
let quotient = a / b;
console.log(quotient); // la valeur de quotient sera 5

/**
 * 
 * 5. Modulo (%) : L'opérateur modulo est représenté par le symbole "%" et permet 
 * d'obtenir le reste d'une division entière entre deux valeurs.
 * (cf: Division Euclidienne : https://www.123calculus.com/division-euclidienne-page-1-11-130.html)
 * 
 * ? Explications :
 * 
 * Dans cet exemple, le dividende est 10 et le diviseur est 3. 
 * L'opérateur % effectue la division entière de 10 par 3 et renvoie le reste, qui est 1. 
 * Cela signifie que 10 peut être divisé par 3 une fois avec un reste de 1.
 * 
 * Voici quelques propriétés clés du calcul du modulo :
 * 
 *  Si le dividende est divisible par le diviseur (c'est-à-dire que le reste est 0), le résultat du modulo sera 0.
 *  Si le dividende est inférieur au diviseur, le résultat du modulo sera égal au dividende lui-même.
 *  Si le dividende est supérieur ou égal au diviseur, le résultat du modulo sera le reste de la division.
 * 
 * Le calcul du modulo est couramment utilisé dans divers scénarios, tels que :
 * 
 *  Vérifier si un nombre est pair ou impair : nombre % 2 === 0 (si le reste est 0, le nombre est pair).
 *  Gérer des opérations cycliques, comme faire reboucler un compteur à une valeur spécifique.
 *  Répartir des éléments dans des groupes ou des intervalles réguliers.
 * 
 */

a // dividende
b = 3; // diviseur
let remainder = a % b;
console.log(remainder); // la valeur de remainder sera 1

/**
 * 
 * 6. Incrémentation (++) : L'opérateur d'incrémentation est représenté par le symbole "++" et permet 
 * d'ajouter 1 à une valeur.
 * 
 */

a = 5;
a++;
console.log(a); // la valeur de a sera maintenant 6

/**
 * 
 * 7. Décrémentation (--) : L'opérateur de décrémentation est représenté par le symbole "--" et permet 
 * de soustraire 1 à une valeur.
 * 
 */

a = 5;
a--;
console.log(a); // la valeur de a sera maintenant 4

/**
 * 
 * 8. Exponentiation (**) : L'opérateur d'exponentiation est représenté par le symbole "**" et permet 
 * d'élever une valeur à la puissance d'une autre.
 * 
 */

a = 2; // base
b // exponent
let result = a ** b;
console.log(result); // la valeur de result sera 8 (2 élévé à la puissance 3)

/**
 * 
 * 9. Opérateurs d'assignation combinée : Il existe des opérateurs d'assignation combinée qui permettent 
 * d'effectuer une opération arithmétique et d'assigner le résultat à la même variable.
 * 
 */

a = 5;
a += 3;
console.log(a); // équivaut à a = a + 3, la valeur de a sera 8

b = 10;
b -= 2;
console.log(b); // équivaut à b = b - 2, la valeur de b sera 8

let c = 4;
c *= 2;
console.log(c); // équivaut à c = c * 2, la valeur de c sera 8

let d = 12;
d /= 3;
console.log(d); // équivaut à d = d / 3, la valeur de d sera 4

/**
 * 
 * 10. Opérateur d'incrémentation préfixe (++variable) : L'opérateur d'incrémentation préfixe 
 * ajoute 1 à une variable et renvoie la valeur mise à jour. 
 * Il est placé avant la variable.
 * 
 */

a = 5;
let incrementedValue = ++a;
console.log(incrementedValue); // La valeur de incrementedValue sera 6

/**
 * 
 * 11. Opérateur de décrémentation préfixe (--variable) : L'opérateur de décrémentation préfixe 
 * soustrait 1 à une variable et renvoie la valeur mise à jour. 
 * Il est placé avant la variable.
 * 
 */

a = 5;
let decrementedValue = --a;
console.log(decrementedValue); // La valeur de decrementedValue sera 4

/**
 * 
 * 12. Opérateurs d'incrémentation postfixe (variable++) : L'opérateur d'incrémentation postfixe 
 * ajoute 1 à une variable et renvoie la valeur d'origine avant l'incrémentation. 
 * Il est placé après la variable.
 * 
 */

a = 5;
let originalValue = a++;
console.log(originalValue); // La valeur de originalValue sera 5, et la valeur de a sera 6 après l'incrémentation

/**
 * 
 * 13. Opérateurs de décrémentation postfixe (variable--) : L'opérateur de décrémentation postfixe 
 * soustrait 1 à une variable et renvoie la valeur d'origine avant la décrémentation. 
 * Il est placé après la variable.
 * 
 */

a = 5;
let originalValue1 = a--;
console.log(originalValue1); // La valeur de originalValue1 sera 5, et la valeur de a sera 4 après la décrémentation

/**
 * 
 * 14. Il est important de se rappeler que les opérations arithmétiques suivent les règles de priorité des opérateurs. 
 * Si vous souhaitez modifier l'ordre d'exécution, vous pouvez utiliser des parenthèses pour grouper les opérations.
 * 
 */

let result1 = 2 + 3 * 4;
console.log(result1); // La valeur de result sera 14, car la multiplication est effectuée avant l'addition
let result2 = (2 + 3) * 4;
console.log(result2); // La valeur de result2 sera 20, car l'addition est effectuée avant la multiplication grâce aux parenthèses
