// Tester votre code dans ce fichier

// function getResult(points) {
//     if (points >= 50) {
//       console.log("Réussite");
//     } else {
//       console.log("Echec");
//     }
//   }
// getResult(44)

// function getResult(points){
//     return points>=50 ?  'Réussite' : 'Echec'
// }
// console.log(getResult(55))

///**
//  * Vous gérez un site de e-commerce et vous voulez afficher un message spécial en fonction
//  * du montant total des achats d'un client. Utilisez des instructions conditionnelles
//  * pour afficher différents messages en fonction du montant.
//  * - Si le montant est inférieur à 50, affichez "Ajoutez plus d'articles pour obtenir la livraison gratuite".
//  * - Si le montant est compris entre 50 et 100 inclus, affichez "Félicitations! Vous avez droit à la livraison gratuite".
//  * - Si le montant est supérieur à 100, affichez "Vous avez droit à la livraison gratuite et à une réduction de 10%!".
//  */

// let montant = 102;
// let resultat = montant<50 ? "Ajoutez plus d'articles pour obtenir la livraison gratuite" : 
// montant<100 ? 'Félicitations! Vous avez droit à la livraison gratuite' : 'Vous avez droit à la livraison gratuite et à une réduction de 10%!';
// console.log(resultat);

// let scoreJeux = 5552;
// if (scoreJeux<1000) {
//   console.log("Niveau de difficulté : FACILE")
// } else if (scoreJeux<5000) {
//   console.log("Niveau de difficulté : MOYEN")
// } else if (scoreJeux>5000) {
//   console.log("Niveau de difficulté : DIFFICILE")
// }

// let mail = false;
// let mdp = true;
// if (formulaire = mail && mdp) {
//     console.log("Formulaire soumis avec succès!")
// }else {
//     console.log("Veuillez remplir tous les champs obligatoires!")
// }

// let username = "Jean";
// let mdp = "Bonjourbonsoir";
// if (username.length>=6 && mdp.length>=8) {
//     console.log("Connexion réussie!")
// } else {
//     console.log("Nom d'utilisateur ou mot de passe invalide!")
// }

// let puissance = 2
// let resultat = 2;
// console.log(resultat);
// while (resultat < 1000) {
//     resultat*=puissance;
//     console.log(resultat);
// }

// let etoiles = ""
// while (etoiles!="*****") {
//     etoiles+="*";
//     console.log(etoiles)
// }

// let etoile = ""
// for (let i = 0; i < 5; i++) {
//     console.log(etoile+="*")
// }

// const fruits = ["apple","banana","orange","grape"];
// for (let i = 0; i<fruits.length ;i++) {
//     let nfruits = fruits[i];
//     nfruits = nfruits.toUpperCase();
//     console.log(nfruits);
// }

// for (let i = 1; i<=20; i++) {
//     if ( i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0){
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i)
//     }
// }


// const friends2 = ["Ana", "Eve", "Sam"];
// for (let i = 0; i < friends2.length; i++) {
//   console.log(friends2[i]);
// }

// let firstArray = [4,5,6,7];
// let secondArray = [0,1,2,3];

// function mergeArrays($1,$2) {
// finalArray = $2.concat($1)
// }

// mergeArrays(firstArray,secondArray)
// console.log(firstArray,secondArray,finalArray)

// const  theArray = [14,11,6,6,15,17,11,12,4,11,12,19,14,16,8];

// function mostFrequent(tableau) {
//   let compteur = [];
//   let valeurPlusFrequente;
//   let maxOccurences = 0;

//   for (let i = 0; i < tableau.length; i++) {
//     let nombre = tableau[i];
//     compteur[nombre] = (compteur[nombre] || 0) + 1;
//     if (compteur[nombre] > maxOccurences) {
//         maxOccurences = compteur[nombre];
//         valeurPlusFrequente = nombre;
//     }
// }
// return valeurPlusFrequente;
// }


// function lessFrequent(tableau) {
//   let compteur = [];
//   let valeurMoinsFrequente;
//   let minOccurences = Infinity;

//   for (let i = 0; i < tableau.length; i++) {
//     let nombre = tableau[i];
//     compteur[nombre] = (compteur[nombre] || 0) + 1;
//     if (compteur[nombre] < minOccurences) {
//         minOccurences = compteur[nombre];
//         valeurMoinsFrequente = nombre;
//     }
// }
// return valeurMoinsFrequente;
// }

// console.log("La valeur la plus fréquente est :", mostFrequent(theArray));
// console.log("La valeur la plus moins est :", lessFrequent(theArray));

// const tableauTriCroissant = [1, 2, 3, 4, 5];
// const tableauNonTriCroissant = [1, 3, 2, 5, 4];

// function isSorted (tableau) {
//   for (let i = 0; i < tableau.length; i++) {
//     if (tableau[i] > tableau[i + 1]) {
//       return false;
//     } 
//   }
//   return true;
// }

// console.log("Tableau trié ? : "+ isSorted(tableauNonTriCroissant));
// console.log("Tableau trié ? : "+isSorted(tableauTriCroissant));

// function removeDuplicates(tableau) {
//     return Array.from(new Set(tableau));
// }

// // Exemple d'utilisation :
// const tableauAvecDoublons = [14,11,6,6,15,17,11,12,4,11,12,19,14,16,8];
// const tableauSansDoublons = removeDuplicates(tableauAvecDoublons);
// console.log("Tableau original avec doublons :", tableauAvecDoublons);
// console.log("Nouveau tableau sans doublons :", tableauSansDoublons);

// function sumSubarrays(tableauDeTableaux) {
//     return tableauDeTableaux.map(sousTableau => sousTableau.reduce((total, nombre) => total + nombre));
//   }
  
//   // Exemple d'utilisation :
//   const tableauDeTableaux = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   const sommesDesSousTableaux = sumSubarrays(tableauDeTableaux);
//   console.log(tableauDeTableaux);
//   console.log("Sommes des sous-tableaux :", sommesDesSousTableaux);

// function userAge(number) {
//     const age = "User age: " + number;
//     return age;
//   }

// const result = userAge(29);
// console.log(result);

// function displayNames(names) {
//     console.log(names);
//   }
//   const students = ["Laurel", "Yanni"];
//   displayNames(students);

// function getListOfNames(names) {
//     return names[0] + ", " + names[1];
//   }
//   const list = getListOfNames(students);
//   console.log(list);

// const array = [2,4,5,4,5]

// function doubleNumbers(array){
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i]*2);
//       }
//       return(newArray);
//     }
    
// console.log(doubleNumbers(array));

// const tableau2 = [2,4,5,4,5]

// function sumArray(array){
//     let somme = 0;
//     for (let i = 0; i < array.length; i++) {
//         somme += array[i];
//       }
//       return somme;
//     }
    
// console.log(sumArray(tableau2));

const tableau3 = ["Do","Ré","Mi","La","Si","Do"]
function concatenateStrings(array){
  newArray= array.join();
  return newArray
}

console.log(concatenateStrings(tableau3));