//============================ LE SCOPE OU LA PORTEE DE VARIABLE ============================

/**
 *
 * LE SCOPE OU LA PORTEE DE VARIABLE !
 *
 * Le scope en programmation fait référence à la portée ou à la visibilité des variables,
 * fonctions et autres éléments dans votre code.
 * Il détermine les parties du code où vous pouvez accéder et utiliser ces éléments.
 * Le scope garantit que les variables et les fonctions sont utilisées de manière appropriée
 * et évite les conflits de noms.
 * L'importance du scope dans la création de votre code réside dans les aspects suivants:
 *
 * 1- Encapsulation: Le scope vous permet d'encapsuler des variables et des fonctions dans des contextes spécifiques.
 * Cela signifie que vous pouvez limiter l'accès aux variables à des parties spécifiques de votre code,
 * ce qui réduit les risques de modification accidentelle ou de manipulation non intentionnelle.
 *
 * 2- Prévention des conflits de noms: Le scope assure que chaque variable ou fonction a un nom unique à l'intérieur
 * de son propre scope. Cela évite les conflits de noms où deux éléments différents portent le même nom
 * et se font concurrence, ce qui peut entraîner des erreurs et des comportements inattendus.
 *
 * 3- Séparation des préoccupations: En définissant des scopes appropriés, vous pouvez séparer les différentes parties
 * de votre code en fonction de leur fonctionnalité ou de leur responsabilité. Cela améliore la lisibilité,
 * la maintenabilité et la modularité de votre code.
 *
 * 4- Durée de vie des variables: Le scope détermine également la durée de vie des variables.
 * Les variables déclarées dans un scope local ne sont accessibles que tant que ce scope est actif,
 * puis elles sont automatiquement libérées de la mémoire lorsqu'elles ne sont plus nécessaires.
 * Cela permet une gestion efficace de la mémoire et évite les fuites de mémoire.
 *
 * En comprenant et en utilisant correctement le scope, vous pouvez organiser votre code de manière logique,
 * éviter les conflits et les erreurs, et améliorer la maintenabilité et la lisibilité de votre code.
 *
 * @author helyatam
 */

/**
 *
 * A- Scope global:
 *
 * Le scope global est le scope le plus large.
 * Les variables déclarées en dehors de toute fonction ou bloc de code avec var,
 * let ou const ont une portée globale, ce qui signifie qu'elles sont accessibles depuis n'importe où dans le code.
 *
 * Exemple:
 *
 */

const globalVariable = "Je suis une variable globale";

function myFunction() {
  console.log(globalVariable); // Accès à la variable globale
}

myFunction(); // Affiche "Je suis une variable globale"

/**
 *
 * B- Scope local de fonction:
 *
 * Les variables déclarées à l'intérieur d'une fonction avec var, let ou const ont une portée locale à cette fonction.
 * Elles ne sont accessibles qu'à l'intérieur de la fonction.
 *
 * Exemple:
 *
 */

function myFunction() {
  const localVariable = "Je suis une variable locale";
  console.log(localVariable); // Accès à la variable locale
}

myFunction(); // Affiche "Je suis une variable locale"

console.log(localVariable); // Erreur : la variable locale n'est pas accessible en dehors de la fonction

/**
 *
 * C- Scope de bloc:
 * Les variables déclarées avec let et const à l'intérieur d'un bloc de code
 * (par exemple, une boucle for, une condition if, etc.) ont une portée limitée à ce bloc.
 * Elles ne sont pas accessibles en dehors du bloc.
 *
 * Exemple:
 *
 */

function myFunction() {
  if (true) {
    let blockVariable = "Je suis une variable de bloc";
    console.log(blockVariable); // Accès à la variable de bloc
  }

  console.log(blockVariable); // Erreur : la variable de bloc n'est pas accessible en dehors du bloc
}

myFunction();

/**
 *
 * Note:
 *
 * ! Les variables déclarées avec var ont un scope de fonction et non de bloc.
 * ! Elles peuvent être accessibles en dehors du bloc dans lequel elles sont déclarées.
 *
 * En utilisant let et const, vous pouvez déclarer des variables avec des scopes plus précis,
 * ce qui aide à éviter les conflits de noms et à rendre le code plus clair et maintenable.
 *
 */

// Nous pouvons redéclarer la variable avec le mot-clé var
var bonjour = "hello world!";
var bonjour = "Bonjour monde";

// Nous ne pouvons pas le faire avec les mots-clé let et const
let welcome = "Welcome";
let welcome = "Welcome";

const demain = "Demain";
const demain = "Demain";
