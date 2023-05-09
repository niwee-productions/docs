---
titre : Configuration
---

<br class='autobr' /> <br class='autobr' /> <b>En-tête>
  <title>Configuration des condensateurs | Maintien d'un fichier de configuration global</title>
  <meta
    name="description"
    content="Définir et imprimer les valeurs de configuration à partir des fichiers de configuration du projet et du fichier de configuration CLI global avec Ionic CLI. Lisez pour en savoir plus sur la configuration de Capacitor."
  />
</head>

## Fichiers

Les valeurs de configuration sont stockées dans des fichiers JSON. Le CLI Ionic maintient un fichier de configuration global, habituellement situé à `~/.ionic/config.json`, et des fichiers de configuration de projet, habituellement situés dans le répertoire racine du projet comme `ionic.config.json`.

Le CLI fournit des commandes pour définir et imprimer les valeurs de configuration à partir des fichiers de configuration du projet et du fichier de configuration global du CLI. Voir `ionic config --help` ou la documentation pour l'utilisation de [`ionic config get`](commands/config-get.md) et [`ionic config set`](commands/config-set.md).

### Fichier de configuration du projet

Chaque projet Ionic a un fichier de configuration de projet, habituellement dans le répertoire racine du projet. Ce qui suit est un fichier `ionic.config.json` annoté.

``json
{
  // Le nom lisible par l'homme de l'application.
  "name" : "My App",

  // Le type de projet de l'application. Le CLI utilise cette valeur pour déterminer quelles // commandes et options de commande sont disponibles, ce qu'il faut afficher pour l'aide.
  // commandes et les options de commande disponibles, ce qu'il faut afficher dans la documentation d'aide
  // d'aide, et ce qu'il faut utiliser pour la construction des ressources web et le serveur de développement.
  "type" : "angular",

  // L'identifiant de l'application pour Appflow.
  "id" : "abc123",

  // Objet de configuration pour les intégrations telles que Cordova et Capacitor.
  "integrations" : {
    "cordova" : {
      ...
    }
  },

  // Configuration des hooks - voir la section Hooks ci-dessous pour plus de détails.
  "hooks" : {
    ...
  }
}
```

## Variables d'environnement

L'interface de programmation recherche les variables d'environnement suivantes :

- `IONIC_CONFIG_DIRECTORY` : Le répertoire de la configuration globale du CLI. La valeur par défaut est `~/.ionic`.
- `IONIC_HTTP_PROXY` : Définit une URL par laquelle toutes les requêtes de l'interface de programmation seront transmises. Voir [Using a Proxy](using-a-proxy.md).
- `IONIC_TOKEN` : S'authentifie automatiquement avec [Appflow] (https://ionic.io/appflow).

## Drapeaux

Les drapeaux CLI sont des options globales qui modifient le comportement d'une commande CLI.

- `--help` : Au lieu d'exécuter la commande, afficher sa page d'aide.
- `--verbose` : Affiche tous les messages du journal à des fins de débogage.
- `--quiet` : N'affiche que les messages `WARN` et `ERROR`.
- `--no-interactive` : Désactive les invites interactives et les sorties fantaisistes. Si CI ou un terminal non-TTY est détecté, le CLI est automatiquement non-interactif.
- `--confirm` : Active la confirmation automatique des invites de confirmation. Attention : le CLI demande une confirmation avant de faire quelque chose de potentiellement dangereux. L'auto-confirmation peut avoir des résultats inattendus.

## Hooks

L'interface de programmation peut exécuter des scripts lors de certains événements, par exemple avant et après la construction. Pour accéder à la CLI, les [npm scripts] (https://docs.npmjs.com/misc/scripts) suivants peuvent être utilisés dans `package.json` :

- `ionic:serve:before` : exécuté avant que le serveur de développement ne démarre
- `ionic:serve:after` : exécuté après la fin du serveur de développement
- `ionic:build:before` : exécuté avant le début de la construction d'un actif web
- `ionic:build:after` : exécuté après la fin de la construction d'un actif web
- `ionic:capacitor:run:before` : exécuté pendant `ionic capacitor run` avant que l'ouverture du condensateur ne soit exécutée
- `ionic:capacitor:build:before` : exécuté pendant `ionic capacitor build` avant l'exécution de capacitor open
- `ionic:capacitor:sync:after` : exécuté pendant `ionic capacitor sync` après une synchronisation

Lors de l'utilisation d'un script shell pour l'un des crochets, le contexte du crochet est défini dans les variables d'environnement préfixées par `IONIC_CLI_HOOK_CTX_`.

L'exemple suivant montre les variables d'environnement qui sont définies pour le hook `ionic:capacitor:build`.

``shell
IONIC_CLI_HOOK_CTX_NAME=capacitor:build:before
IONIC_CLI_HOOK_CTX_BUILD_CORDOVA_ASSETS=true
IONIC_CLI_HOOK_CTX_BUILD_ENGINE=browser
IONIC_CLI_HOOK_CTX_BUILD_PROJECT=app
IONIC_CLI_HOOK_CTX_BUILD_TYPE=angular
IONIC_CLI_HOOK_CTX_BUILD_VERBOSE=false
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_ID=io.ionic.starter
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_NAME=ionic-starter-app
IONIC_CLI_HOOK_CTX_CAPACITOR_VERBOSE=false
```

Les hooks peuvent aussi être définis dans `ionic.config.json`. Définissez un objet `hooks` dans le projet, où chaque clé est le nom du hook (sans le préfixe `ionic:`), et la valeur est un chemin vers un fichier JavaScript ou un tableau de chemins.

Dans l'exemple suivant, le fichier est importé et exécuté pendant le hook `ionic:build:before`.

``json
"hooks" : {
  "build:before" : "./scripts/build-before.js"
},
```

Les fichiers de crochets JavaScript doivent exporter une seule fonction, à laquelle est passé un seul argument (`ctx`) à chaque fois que le crochet s'exécute.

L'argument est le contexte donné au fichier de crochet, qui diffère d'un crochet à l'autre et selon les invocations.

`./scripts/build-before.js` :

``javascript
module.exports = function (ctx) {
  console.log(ctx) ;
} ;
```

## Projets multi-applications

<small>
  <em>Disponible dans CLI 6.2.0+</em>
</small>

Le CLI Ionic supporte une configuration multi-applications, qui implique plusieurs applications Ionic et du code partagé dans un seul dépôt, ou [monorepo](../reference/glossary.md#monorepo).

:::note
Ces documents donnent une vue d'ensemble de la fonctionnalité multi-app du CLI Ionic, mais n'entrent pas vraiment dans les détails pour chaque framework.

Si vous utilisez Angular, veuillez consulter [cet article](https://github.com/ionic-team/ionic-cli/wiki/Angular-Monorepo) pour des exemples.
:: :

### Étapes d'installation

1. Créer un répertoire et initialiser une monorepo (voir [Structure du projet](#structure-du-projet) pour plus de détails).
1. Initialiser la monorepo comme un projet multi-applications Ionic. Cela créera un fichier multi-application `ionic.config.json`. Voir [Fichier de configuration](#config-file) pour plus de détails.

   ``Shell
   $ ionic init --multi-app
   ```

1. Utilisez `ionic start` pour créer des applications Ionic ou `ionic init` pour initialiser des applications existantes (voir [Adding an App](#adding-an-app) pour plus de détails).

### Structure du projet

Dans un projet multi-applications, la structure du projet est flexible. La seule exigence est un fichier multi-application `ionic.config.json` à la racine du référentiel.

Voici un exemple de configuration, où les applications dans le répertoire `apps/` sont séparées du code partagé dans le répertoire `lib/`. Notez le fichier racine `ionic.config.json` et le fichier `package.json` de la monorepo.

``bash
apps/
├── myApp/
└── myOtherApp/
lib/
ionic.config.json
package.json
```

### Fichier de configuration

Dans un projet multi-applications, les applications partagent un seul fichier `ionic.config.json` à la racine du référentiel au lieu que chaque application ait le sien. Le fichier de configuration multi-app contient la configuration de chaque application en imbriquant des objets de configuration dans un objet `projects`. Une application par défaut peut être spécifiée en utilisant `defaultProject`.

Voici un exemple de fichier, qui correspond à la structure de fichier ci-dessus.

``json
{
  "defaultProject" : "myApp",
  "projects" : {
    "myApp" : {
      "name" : "Mon application",
      "intégrations" : {},
      "type" : "angular",
      "root" : "apps/myApp"
    },
    "myOtherApp" : {
      "name" : "Mon autre application",
      "intégrations" : {},
      "type" : "angular",
      "root" : "apps/myOtherApp"
    }
  }
}
```

Lorsqu'un projet multi-app est détecté, la CLI de Ionic fonctionnera dans le contexte d'une application configurée dans la racine `ionic.config.json`. Les critères de sélection des projets sont les suivants :

1. Si l'option globale de la CLI `--project` est spécifiée, le projet est recherché par clé dans l'objet `projects`. Par exemple, `--project=myApp` sélectionnera le projet `myApp`.
1. Si le CLI détecte qu'il est exécuté dans un chemin de projet, configuré avec la clé `root`, il sélectionnera le projet correspondant. Par exemple, l'utilisation du CLI dans le répertoire `apps/myOtherApp/src` sélectionnera le projet `myOtherApp`.
1. Si un `defaultProject` est spécifié dans `ionic.config.json`, il sélectionnera le projet spécifié lorsque les critères ci-dessus ne sont pas remplis.

### Ajouter une application

Les applications peuvent être enregistrées dans un projet multi-applications en utilisant `ionic start` pour créer de nouvelles applications ou `ionic init` pour initialiser les applications existantes.

#### Utiliser `ionic start`

Si un projet multi-applications est détecté pendant `ionic start`, le CLI ajoutera la configuration de l'application au fichier racine `ionic.config.json` au lieu de créer un fichier spécifique au projet.

L'installation des dépendances peut être ignorée en utilisant `--no-deps` si les dépendances sont hissées à la racine de la monorepo.

``Shell
$ cd apps/
$ ionic start "My New App" --no-deps
```

#### Utilisation de `ionic init`

Si une application a été créée d'une autre manière que `ionic start`, par exemple en utilisant un modèle préconstruit, utilisez `ionic init` pour enregistrer l'application existante dans le projet multi-applications.

:::note
Assurez-vous que l'application n'a pas de `ionic.config.json` existant.
:: :

``shell
$ cd apps/existing-app/
$ ionic init
```

## Configuration avancée

### Surcharger la construction

Normalement, le CLI exécute un ensemble de commandes codées en dur basées sur le type de projet. Par exemple, la construction standard des actifs web pour les projets Angular est `ng run app:build`. La construction de l'actif web peut être surchargée et `ionic build` peut continuer à être utilisé en utilisant `ionic:build` [npm script] (https://docs.npmjs.com/misc/scripts). De même, le serveur de développement peut être surchargé en utilisant le script npm `ionic:serve`.

Portez une attention particulière aux options fournies au script par l'interface de programmation Ionic. Des irrégularités peuvent se produire si les options ne sont pas respectées, en particulier pour le chargement à chaud (livereload) sur les périphériques.

### Options de commande

Les options de commande peuvent être exprimées par des variables d'environnement. Elles sont normalement définies avec la syntaxe `--opt=valeur`. Le nom de ces variables d'environnement suit un modèle : commencez par `IONIC_CMDOPTS_`, ajoutez le nom de la commande (en remplaçant les espaces par des traits de soulignement), ajoutez le nom de l'option (en remplaçant les traits d'union par des traits de soulignement), puis mettez tout en majuscules. Les drapeaux booléens (options de ligne de commande qui ne prennent pas de valeur) peuvent être mis à `1` ou `0`. Supprimez le préfixe `--no-` dans les options booléennes, s'il existe (`--no-open` dans ionic serve peut être exprimé avec `IONIC_CMDOPTS_SERVE_OPEN=0`, par exemple).

Par exemple, les options de commande dans `ionic cordova run ios -lc --liveroad-port=1234 --host=0.0.0.0` peuvent aussi être exprimées avec cette série de variables d'environnement :

``shell
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export IONIC_CMDOPTS_CORDOVA_RUN_HOST=0.0.0.0
```

Si ces variables sont définies dans l'environnement, `ionic cordova build ios` utilisera les nouvelles valeurs par défaut pour ses options.

### Télémétrie

Le CLI envoie des données d'utilisation à Ionic pour créer une meilleure expérience. Pour désactiver cette fonctionnalité, lancez `ionic config set -g telemetry false`.
