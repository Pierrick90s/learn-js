//============================ LE MODE STRICT "USE STRICT;" EN JS ============================

/**
 *
 * LE MODE STRICT "USE STRICT;" EN JS
 *
 * Le mode strict, ou "strict mode" en anglais, est une fonctionnalité introduite dans ECMAScript 5 (ES5) 
 * qui permet de rendre le JavaScript plus sécurisé en détectant certaines erreurs courantes 
 * et en limitant certaines fonctionnalités potentiellement problématiques. 
 * Voici comment l'utiliser et pourquoi c'est une bonne pratique :
 *
 * @author helyatam
 */

/** 
 * ? Comment utiliser le mode strict ?
 *
 * Pour activer le mode strict, vous devez ajouter une directive de mode strict au début de votre script JavaScript 
 * ou de votre fonction en ajoutant simplement 'use strict'; (ou "use strict";) au début du fichier ou de la fonction.
*/

'use strict';

// Votre code JavaScript ici

/** 
 * ? Pourquoi utiliser le mode strict ?
 *
 * 1 - Détection des erreurs silencieuses : 
 * En mode strict, certaines erreurs silencieuses en JavaScript deviennent des erreurs explicites. 
 * Par exemple, l'utilisation de variables non déclarées entraînera  
 * une erreur au lieu de créer automatiquement une variable globale.
 * 
 * 2 - Éviter les mauvaises pratiques : 
 * Le mode strict interdit certaines pratiques considérées comme risquées ou dépréciées, 
 * telles que l'utilisation de with ou de certaines syntaxes ambiguës. 
 * 
 * 3 - Améliorer la performance :   
 * Dans certains cas, le mode strict peut permettre au moteur JavaScript d'optimiser le code, 
 * améliorant ainsi les performances de votre application. 
 * 
 * 4 - Préparer l'avenir :    
 * Le mode strict est une bonne pratique recommandée pour préparer votre code à l'avenir.   
 * De nombreuses nouvelles fonctionnalités et normes de JavaScript nécessitent l'utilisation du mode strict pour être activées.  
 *   
 * 5 - Améliorer la lisibilité et la maintenabilité du code :    
 * En forçant un code plus strict et plus cohérent, 
 * le mode strict peut rendre le code plus facile à lire et à entretenir,  
 * en évitant certaines constructions confuses ou ambiguës.  
 *   
 *   
 * En résumé, utiliser le mode strict en JavaScript est une bonne pratique pour rendre votre code plus sécurisé, plus fiable, 
 * plus performant et mieux préparé pour les futures évolutions du langage. 
 * Il est recommandé d'activer le mode strict dans tous vos nouveaux projets JavaScript. 
*/