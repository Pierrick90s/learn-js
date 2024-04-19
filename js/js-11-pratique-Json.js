//============================ LA MANIPULATION DE FICHIER JSON SUR SON SERVEUR ============================

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

fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Échec de la requête HTTP");
    }
    return response.json();
  })
  .then((data) => console.log("Données récupérées avec succès :", data))
  .catch((error) =>
    console.error("Erreur lors de la récupération des données :", error)
  );

// ========================================== Exercices ==================================================== //

// ! Vous devez créer les fichiers.json dans le dossier "data".

/**
 * TODO Exercice 1 : Lecture d'un fichier JSON
 *
 * Créez un fichier JSON nommé 'students.json' dans le dossier 'data' contenant une liste d'étudiants(3) avec leurs noms et leurs âges.
 * Ensuite, créez un script JavaScript qui lit ce fichier et affiche les noms et les âges des étudiants.
 */

/**
 * TODO Exercice 2 : Vérification de la disponibilité d'un article dans le stock
 *
 * Créez un fichier JSON nommé 'inventory.json' contenant une liste d'articles(3) avec leurs noms et quantités en stock.
 * Ensuite, créez un script JavaScript qui vérifie si un article spécifique est disponible dans le stock.
 */


/**
 * TODO Exercice 3 : Tri des pays par population
 *
 * Créez un fichier JSON nommé 'countries.json' contenant une liste de pays(3) avec leurs noms et populations.
 * Ensuite, créez un script JavaScript qui trie ces pays par population, de la plus petite à la plus grande.
 *
 */


/**
 * TODO Exercice 4 : Calcul de la durée totale des films
 *
 * Créez un fichier JSON nommé 'movies.json'contenant une liste de films(3) avec leurs titres, réalisateurs et durées.
 * Ensuite, créez un script JavaScript qui calcule la durée totale de tous les films.
 */


  // ! Vous pouvez revenir sur le fichier 'js-11-asynchrone.js' de ce dossier pour continuer le cours.