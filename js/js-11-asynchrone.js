//============================  L'ASYNCHRONE EN JS ============================

/**
 * Introduction à JavaScript Asynchrone : Gestion de la Programmation Synchrone
 *
 * En JavaScript, la programmation synchrone est la norme de base.
 * Cela signifie que chaque ligne de code est exécutée l'une après l'autre, de manière séquentielle.
 * Cependant, cela peut poser problème lorsque nous rencontrons des tâches qui prennent du temps à s'exécuter,
 * comme le chargement de données depuis un serveur ou l'interaction avec des éléments de l'interface utilisateur.
 * 
 * @author helyatam
 */


/**
 * Une fonction synchrone longue : 
 *
 * Imaginons une fonction qui effectue une opération de calcul complexe ou qui attend une réponse d'une API externe.  
 * Lorsque cette fonction est appelée, elle bloque l'exécution du reste du code jusqu'à ce qu'elle soit entièrement terminée.
 * Pendant ce temps, l'interface utilisateur peut sembler gelée et non réactive, ce qui donne une expérience utilisateur médiocre.
 */

// Exemple de programmation Synchrone :
// Supposons que nous ayons une fonction synchrone qui effectue une tâche de calcul intensive, comme la somme de tous les nombres dans un tableau. 
// Cette fonction bloque l'exécution du reste du code jusqu'à ce que la tâche soit terminée:

function sum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers)); // Cette ligne bloque l'exécution jusqu'à ce que la somme soit terminée.
console.log("Toutes les opérations sont terminées.");

// Dans cet exemple, l'exécution de la fonction sum() bloque le reste du code jusqu'à ce que la somme soit terminée,
// ce qui peut rendre l'interface utilisateur non réactive pendant ce temps.


/**
 * Le problème des fonctions synchrones longues : 
 *
 * Lorsque nous rencontrons des fonctions synchrones longues, notre application devient non réactive.
 * Cela signifie que les interactions de l'utilisateur ne sont pas prises en compte pendant l'exécution de ces fonctions, 
 * ce qui peut donner l'impression que l'application est bloquée ou figée.
 * Dans un environnement web, cela peut être particulièrement problématique car les utilisateurs s'attendent à une expérience fluide et réactive.
 * 
 * Pour remédier à ce problème, JavaScript utilise des gestionnaires d'événements.
 * Les gestionnaires d'événements sont des fonctions qui sont déclenchées en réponse à des actions spécifiques de l'utilisateur ou à d'autres événements dans le navigateur.
 * Par exemple, un clic de souris, une pression de touche ou le chargement d'une page peuvent tous déclencher des événements.
 */


/**
 * Utilisation des Gestionnaires d'Événements :
 *
 * Pour éviter de bloquer l'interface utilisateur, nous pouvons utiliser des gestionnaires d'événements pour gérer les interactions utilisateur de manière asynchrone.
 * Par exemple, nous pouvons utiliser un gestionnaire d'événements de clic de souris pour exécuter une fonction lorsqu'un bouton est cliqué :
 */

const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log("Le bouton a été cliqué !");
});

// Dans cet exemple, la fonction passée au gestionnaire d'événements est exécutée de manière asynchrone lorsque le bouton est cliqué, 
// ce qui permet au reste du code de continuer à s'exécuter normalement.

/**
 * Fonctions de rappel (callbacks) :
 *
 * Les fonctions de rappel sont une technique couramment utilisée en JavaScript pour gérer les opérations asynchrones.
 * Plutôt que de bloquer l'exécution du code, une fonction de rappel est passée en argument à une fonction asynchrone.
 * Cette fonction de rappel est ensuite appelée une fois que l'opération asynchrone est terminée, permettant ainsi au reste du code de continuer à s'exécuter normalement.
 */

// Utilisation des Fonctions de Rappel (Callbacks) :
// Les fonctions de rappel sont couramment utilisées pour gérer les opérations asynchrones en JavaScript.
// Par exemple, supposons que nous devions charger des données depuis un serveur et exécuter une fonction une fois que les données sont disponibles:

function fetchData(callback) {
  setTimeout(function () {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 2000);
}

fetchData(function (data) {
  console.log("Données récupérées :", data);
});

// Dans cet exemple, la fonction fetchData() est asynchrone et prend une fonction de rappel en argument.
// Cette fonction de rappel est ensuite appelée une fois que les données sont récupérées,
// permettant ainsi au reste du code de continuer à s'exécuter normalement en attendant la réponse du serveur.


// ========================================== Partie 2 ==================================================== //

/**
 * JavaScript Asynchrone avec ES6
 *
 * L'un des aspects les plus puissants de JavaScript moderne est sa capacité à gérer les opérations asynchrones  
 * de manière élégante grâce à des fonctionnalités telles que les Promises, async/await et d'autres concepts ES6.
 * Commençons par explorer ces concepts fondamentaux :
 * 
 * @author helyatam
 */

/**
 * Promises
 *
 * Les Promises sont des objets JavaScript qui représentent l'achèvement ou l'échec d'une opération asynchrone.
 * Elles sont largement utilisées pour le chargement de données depuis des serveurs, les appels API, ou toute autre opération qui prend du temps.
 */

const promesse = new Promise((resolve, reject) => {
  // code asynchrone à exécuter
  if (/* opération réussie */) {
    resolve("Données chargées avec succès");
  } else {
    reject(new Error("Échec du chargement des données"));
  }
});

promesse.then(data => console.log(data))
        .catch(error => console.error(error));

/**
 * async/await
 *
 * L'opérateur async permet de définir une fonction asynchrone, tandis que await est utilisé à l'intérieur de ces fonctions pour attendre qu'une Promise soit résolue ou rejetée.
 * Cela permet d'écrire du code asynchrone de manière plus synchrone et plus lisible.
 */

async function chargerDonnees() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log("Données chargées avec succès :", data);
  } catch (error) {
    console.error("Erreur lors du chargement des données :", error);
  }
}

chargerDonnees();


/**
 * Définition API
 *
 * Une API (Application Programming Interface) est un ensemble de règles, de protocoles et de définitions 
 * qui permettent à différentes applications logicielles de communiquer entre elles.
 * En d'autres termes, une API définit comment les différents composants logiciels doivent interagir les uns avec les autres.
 * 
 * Les API peuvent prendre différentes formes, mais dans le contexte du développement web et logiciel,
 * une API est souvent une interface exposée par un service en ligne ou une bibliothèque logicielle
 * qui permet aux développeurs d'accéder à certaines fonctionnalités ou données de cette service ou bibliothèque. 
 * 
 * Par exemple, les API web permettent aux développeurs d'accéder à des fonctionnalités ou des données sur des serveurs distants via des requêtes HTTP. 
 * Ces API peuvent être utilisées pour récupérer des informations à partir de bases de données, envoyer des données à des serveurs, interagir avec des services tiers, etc. 
 * Une API est essentiellement un moyen pour les développeurs d'interagir avec d'autres logiciels de manière standardisée et contrôlée. 
 */

/**
 * fetch API
 *
 * La méthode fetch() est utilisée pour effectuer des requêtes réseau (notamment HTTP).
 * Elle est basée sur les Promises et fournit une interface moderne et puissante pour récupérer des ressources à partir du réseau.
 */

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Échec de la requête HTTP');
    }
    return response.json();
  })
  .then(data => console.log("Données récupérées avec succès :", data))
  .catch(error => console.error("Erreur lors de la récupération des données :", error));

// ! Vous devez réaliser les exercices du fichier 'js-11-pratique-Json.js' de ce dossier avant de continuer le cours.

/**
 * setTimeout() 
 *
 * La fonction setTimeout() est utilisée pour exécuter une fonction après un délai spécifié, exprimé en millisecondes.
 * Elle est souvent utilisée pour simuler des opérations asynchrones dans les exemples pédagogiques.
 */

function attendre(delai) {
  return new Promise(resolve => setTimeout(resolve, delai));
}

attendre(3000)
  .then(() => console.log("La Promise s'est résolue après 3 secondes"));


/**
 * Promise.all() 
 *
 * La méthode Promise.all() est utilisée pour attendre que toutes les Promises d'un tableau soient résolues ou qu'au moins une d'entre elles soit rejetée.
 * Cela peut être utile lorsqu'on souhaite exécuter plusieurs opérations asynchrones en parallèle.
 */

const promesse1 = /* opération asynchrone 1 */;
const promesse2 = /* opération asynchrone 2 */;

Promise.all([promesse1, promesse2])
  .then(([résultat1, résultat2]) => {
    console.log("Résultat de la promesse 1 :", résultat1);
    console.log("Résultat de la promesse 2 :", résultat2);
  })
  .catch(error => console.error("Une ou plusieurs Promises ont échoué :", error));



// ========================================== Exercices Partie 1 ==================================================== //

/**
 * TODO Exercice 1 : Utilisation des Promesses
 *
 * Créez une fonction 'delayedMessage' qui prend un message et un délai en millisecondes en argument.
 * Cette fonction doit retourner une promesse qui résout avec le message après le délai spécifié.
 */


/**
 * TODO Exercice 2 : Utilisation de async/await avec Promesses
 *
 * Créez une fonction asynchrone 'fetchUserData' qui simule la récupération des données utilisateur depuis un serveur distant après 2 secondes.
 * Utilisez async/await pour attendre la résolution de la promesse.
 */


/**
 * TODO Exercice 3 : Utilisation de Promise.all
 *
 * Créez trois fonctions asynchrones 'fetchData1', 'fetchData2', et 'fetchData3' qui simulent 
 * chacune la récupération de données depuis un serveur distant après un certain délai. 
 * Utilisez 'Promise.all' pour récupérer toutes les données en parallèle.
 *
 */


/**
 * TODO Exercice 4 : Gestion des Erreurs avec async/await
 *
 * Modifiez la fonction 'fetchUserData' de l'exercice 2 pour simuler une erreur de serveur dans 50% des cas.
 * Gérez cette erreur en utilisant 'try/catch' avec 'async/await'.
 */


/**
 * TODO Exercice 5 : Utilisation de Promise.race
 *
 * Créez deux fonctions asynchrones 'fetchData1' et 'fetchData2' qui simulent chacune 
 * la récupération de données depuis un serveur distant après un certain délai.
 * Utilisez 'Promise.race' pour récupérer les données de la première fonction à terminer.
 *
 */



// ========================================== Exercices Partie 2 API ==================================================== //

// ! Vous pouvez trouvez des API Publique sur le lien suivant https://publicapi.dev/


/**
 * TODO Exercice 6 : Récupération de données d'une API
 *
 * Utilisez l'API Chuck Norris Jokes (https://api.chucknorris.io) pour récupérer une blague aléatoire sur Chuck Norris. 
 * Affichez cette blague dans la console.
 */


/**
 * TODO Exercice 7 : Recherche d'informations sur une ville
 *
 * Créez une fonction fetchCityInfo qui prend le nom d'une ville comme argument et utilise l'API 
 * Free Weather API (https://open-meteo.com/) pour récupérer les informations météorologiques actuelles de cette ville.
 * Récupérer la température actuelle de la ville de Brest, Paris et Marseille. 
 */


/**
 * TODO Exercice 8 : Recherche des paroles des chansons pour mon lecteur audio
 *
 * Utilisez l'API Lyrics.ovh (https://lyricsovh.docs.apiary.io/#) pour récupérer les paroles d'une chanson spécifique 
 * en spécifiant l'artiste et le titre de la chanson. 
 * Affichez les paroles de la chanson sur votre lecteur audio personnel.
 *
 */


/**
 * TODO Exercice 9 : Gestion d'une liste de tâches avec une API
 *
 * Utilisez l'API JSONPlaceholder (https://jsonplaceholder.typicode.com/todos) pour récupérer une liste de tâches.
 * Affichez ces tâches dans la console, puis créez une nouvelle tâche avec le titre de votre choix et affichez à nouveau la liste mise à jour.
 */



/**
 * TODO Exercice 10 : Utilisation de plusieurs requêtes asynchrones
 *
 * Utilisez l'API SpaceX (https://api.spacexdata.com/v4/launches/latest) pour récupérer les informations sur le dernier lancement SpaceX.
 * Ensuite, utilisez l'ID de la fusée récupéré pour obtenir des détails sur cette fusée 
 * à partir de l'API SpaceX (https://api.spacexdata.com/v4/rockets/{rocket_id}).
 * Affichez ces informations dans la console.
 *
 */
