/**
 * 
 * En JavaScript, il existe plusieurs types de valeurs que vous pouvez attribuer à une variable. 
 * Chaque type de valeur a ses caractéristiques et est utilisé pour stocker différents types de données. 
 * Voici les principaux types de valeurs en JavaScript :
 * 
 * 1. Les types primitifs :
 * 
 *  Nombre (number) : représente les valeurs numériques, par exemple : 42, 3.14, -10.
 *  Chaîne de caractères (string) : représente une séquence de caractères, par exemple : "Hello", 'World', "123".
 *  Booléen (boolean) : représente la valeur vraie (true) ou la valeur fausse (false).
 *  Null (null) : représente l'absence de valeur intentionnelle.
 *  Undefined (undefined) : représente une variable non initialisée ou une propriété non définie.
 * 
 * 2. Les types de données complexes :
 * 
 * Objet (object) : représente une collection de propriétés et de valeurs associées, par exemple : { nom: "John", age: 30 }.
 * Tableau (array) : représente une collection ordonnée d'éléments, par exemple : [1, 2, 3, 4].
 * Fonction (function) : représente un bloc de code réutilisable.
 * 
 */

/**
 * 
 * Il est important de comprendre que les variables en JavaScript sont dynamiquement typées, 
 * ce qui signifie qu'elles peuvent changer de type au cours de l'exécution du programme. 
 * Par exemple, vous pouvez attribuer une valeur numérique à une variable, 
 * puis lui attribuer une chaîne de caractères plus tard.
 * 
 */

let x = 5; // x est de type number
x = "Hello"; // x est maintenant de type string


/**
 * 
 * Pour déterminer le type de valeur d'une variable, vous pouvez utiliser l'opérateur typeof, 
 * qui renvoie une chaîne de caractères indiquant le type de la valeur.
 * 
 */

x = 10;
console.log(typeof x); // Affiche "number"

let y = "Hello";
console.log(typeof y); // Affiche "string"

let z = true;
console.log(typeof z); // Affiche "boolean"


/**
 * 
 * 3. Les types de valeurs spéciales :
 * 
 *  Symbol (symbol) : représente une valeur unique et immuable qui peut être utilisée comme identifiant de propriété.
 *  BigInt (bigint) : représente des entiers de taille arbitraire, permettant de stocker des nombres entiers 
 *  plus grands que la limite du type number.
 * 
 * Il est important de noter que les types de valeurs spéciales comme symbol et bigint ont été introduits plus récemment 
 * dans les versions récentes de JavaScript (ES2015 et ultérieures). 
 * Ils peuvent ne pas être pris en charge dans toutes les anciennes versions des navigateurs.
 * 
 */

let sym = Symbol("sym");
console.log(typeof sym); // Affiche "symbol"

let bigNumber = BigInt(9007199254740991);
console.log(typeof bigNumber); // Affiche "bigint"

/**
 * 
 * 4. Les différents types de number :
 * 
 * En JavaScript, le type de données number est utilisé pour représenter à la fois les nombres entiers (integers) 
 * et les nombres à virgule flottante (floats). 
 * JavaScript ne fait pas de distinction explicite entre les entiers et les nombres à virgule flottante 
 * dans son type de données number.
 * Cela signifie que vous pouvez utiliser le type number pour représenter tous les types de nombres, 
 * qu'ils soient entiers ou à virgule flottante. 
 * 
 * Par exemple, vous pouvez stocker des valeurs comme 42, 3.14, -10, 0.5, etc., dans une variable de type number.
 * 
 * en JavaScript, le type number est utilisé pour représenter tous les types de nombres, qu'ils soient entiers ou à virgule flottante. 
 * La distinction entre les entiers et les floats est gérée de manière interne par le moteur JavaScript lors des opérations mathématiques.
 * 
 */

let integer = 10; // Nombre entier
let float = 3.14; // Nombre à virgule flottante

console.log(typeof integer); // Affiche "number"
console.log(typeof float); // Affiche "number"

/**
 * 
 * En JavaScript, le type de données number est le principal type utilisé pour représenter les nombres. 
 * Cependant, il existe certaines valeurs spéciales qui peuvent être considérées comme des sous-types de number. 
 * Ces valeurs spéciales incluent :
 * 
 */

/**
 * 
 * a. NaN (Not a Number) : 
 * 
 * C'est une valeur spéciale de type number qui indique qu'une opération mathématique a échoué ou 
 * produit un résultat non numérique. 
 * Par exemple, la division de zéro par zéro ou l'utilisation incorrecte d'opérations mathématiques sur des chaînes 
 * de caractères peut entraîner la valeur NaN.
 * 
 */

let result = 0 / 0;
console.log(result); // Affiche NaN

/**
 * 
 * b. Infinity et -Infinity : 
 * 
 * Ce sont des valeurs spéciales de type number qui représentent l'infini positif et négatif. 
 * Elles sont générées lorsque vous effectuez des opérations telles que la division par zéro ou 
 * lorsque le résultat dépasse la plage de valeurs pouvant être représentées par le type number.
 * 
 */

let positiveInfinity = Infinity;
console.log(positiveInfinity); // Affiche Infinity

let negativeInfinity = -Infinity;
console.log(negativeInfinity); // Affiche -Infinity

/**
 * 
 * Il est important de noter que NaN et Infinity sont des valeurs spéciales 
 * qui peuvent être identifiées à l'aide des fonctions prédéfinies isNaN() et isFinite().
 * 
 * Mis à part ces valeurs spéciales, le type number est utilisé pour représenter les nombres entiers
 * et les nombres à virgule flottante dans JavaScript
 * 
 */