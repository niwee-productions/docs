---
titre : Configuration
---

<br class='autobr' /> <br class='autobr' /> <b>En-tête>
  <title>Configuration des condensateurs | Maintien d'un fichier de configuration global</title>
  <meta
    name="description"
    content="Définir et imprimer les valeurs de configuration à partir des fichiers de configuration du projet et du fichier de configuration CLI global avec NiWee CLI. Lisez pour en savoir plus sur la configuration de Capacitor."
  />
</head>

## Fichiers

Les valeurs de configuration sont stockées dans des fichiers JSON. Le CLI NiWee maintient un fichier de configuration global, habituellement situé à `~/.niwee/config.json`, et des fichiers de configuration de projet, habituellement situés dans le répertoire racine du projet comme `niwee.config.json`.

Le CLI fournit des commandes pour définir et imprimer les valeurs de configuration à partir des fichiers de configuration du projet et du fichier de configuration global du CLI. Voir `niwee config --help` ou la documentation pour l'utilisation de [`niwee config get`](commands/config-get.md) et [`niwee config set`](commands/config-set.md).

### Fichier de configuration du projet

Chaque projet NiWee a un fichier de configuration de projet, habituellement dans le répertoire racine du projet. Ce qui suit est un fichier `niwee.config.json` annoté.

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

- `IONIC_CONFIG_DIRECTORY` : Le répertoire de la configuration globale du CLI. La valeur par défaut est `~/.niwee`.
- `IONIC_HTTP_PROXY` : Définit une URL par laquelle toutes les requêtes de l'interface de programmation seront transmises. Voir [Using a Proxy](using-a-proxy.md).
- `IONIC_TOKEN` : S'authentifie automatiquement avec [Appflow] (https://niwee.io/appflow).

## Drapeaux

Les drapeaux CLI sont des options globales qui modifient le comportement d'une commande CLI.

- `--help` : Au lieu d'exécuter la commande, afficher sa page d'aide.
- `--verbose` : Affiche tous les messages du journal à des fins de débogage.
- `--quiet` : N'affiche que les messages `WARN` et `ERROR`.
- `--no-interactive` : Désactive les invites interactives et les sorties fantaisistes. Si CI ou un terminal non-TTY est détecté, le CLI est automatiquement non-interactif.
- `--confirm` : Active la confirmation automatique des invites de confirmation. Attention : le CLI demande une confirmation avant de faire quelque chose de potentiellement dangereux. L'auto-confirmation peut avoir des résultats inattendus.

## Hooks

L'interface de programmation peut exécuter des scripts lors de certains événements, par exemple avant et après la construction. Pour accéder à la CLI, les [npm scripts] (https://docs.npmjs.com/misc/scripts) suivants peuvent être utilisés dans `package.json` :

- `niwee:serve:before` : exécuté avant que le serveur de développement ne démarre
- `niwee:serve:after` : exécuté après la fin du serveur de développement
- `niwee:build:before` : exécuté avant le début de la construction d'un actif web
- `niwee:build:after` : exécuté après la fin de la construction d'un actif web
- `niwee:capacitor:run:before` : exécuté pendant `niwee capacitor run` avant que l'ouverture du condensateur ne soit exécutée
- `niwee:capacitor:build:before` : exécuté pendant `niwee capacitor build` avant l'exécution de capacitor open
- `niwee:capacitor:sync:after` : exécuté pendant `niwee capacitor sync` après une synchronisation

Lors de l'utilisation d'un script shell pour l'un des crochets, le contexte du crochet est défini dans les variables d'environnement préfixées par `IONIC_CLI_HOOK_CTX_`.

L'exemple suivant montre les variables d'environnement qui sont définies pour le hook `niwee:capacitor:build`.

``shell
IONIC_CLI_HOOK_CTX_NAME=capacitor:build:before
IONIC_CLI_HOOK_CTX_BUILD_CORDOVA_ASSETS=true
IONIC_CLI_HOOK_CTX_BUILD_ENGINE=browser
IONIC_CLI_HOOK_CTX_BUILD_PROJECT=app
IONIC_CLI_HOOK_CTX_BUILD_TYPE=angular
IONIC_CLI_HOOK_CTX_BUILD_VERBOSE=false
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_ID=io.niwee.starter
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_NAME=niwee-starter-app
IONIC_CLI_HOOK_CTX_CAPACITOR_VERBOSE=false
```

Les hooks peuvent aussi être définis dans `niwee.config.json`. Définissez un objet `hooks` dans le projet, où chaque clé est le nom du hook (sans le préfixe `niwee:`), et la valeur est un chemin vers un fichier JavaScript ou un tableau de chemins.

Dans l'exemple suivant, le fichier est importé et exécuté pendant le hook `niwee:build:before`.

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

Le CLI NiWee supporte une configuration multi-applications, qui implique plusieurs applications NiWee et du code partagé dans un seul dépôt, ou [monorepo](../reference/glossary.md#monorepo).

:::note
Ces documents donnent une vue d'ensemble de la fonctionnalité multi-app du CLI NiWee, mais n'entrent pas vraiment dans les détails pour chaque framework.

Si vous utilisez Angular, veuillez consulter [cet article](https://github.com/niwee-team/niwee-cli/wiki/Angular-Monorepo) pour des exemples.
:: :

### Étapes d'installation

1. Créer un répertoire et initialiser une monorepo (voir [Structure du projet](#structure-du-projet) pour plus de détails).
1. Initialiser la monorepo comme un projet multi-applications NiWee. Cela créera un fichier multi-application `niwee.config.json`. Voir [Fichier de configuration](#config-file) pour plus de détails.

   ``Shell
   $ niwee init --multi-app
   ```

1. Utilisez `niwee start` pour créer des applications NiWee ou `niwee init` pour initialiser des applications existantes (voir [Adding an App](#adding-an-app) pour plus de détails).

### Structure du projet

Dans un projet multi-applications, la structure du projet est flexible. La seule exigence est un fichier multi-application `niwee.config.json` à la racine du référentiel.

Voici un exemple de configuration, où les applications dans le répertoire `apps/` sont séparées du code partagé dans le répertoire `lib/`. Notez le fichier racine `niwee.config.json` et le fichier `package.json` de la monorepo.

``bash
apps/
├── myApp/
└── myOtherApp/
lib/
niwee.config.json
package.json
```

### Fichier de configuration

Dans un projet multi-applications, les applications partagent un seul fichier `niwee.config.json` à la racine du référentiel au lieu que chaque application ait le sien. Le fichier de configuration multi-app contient la configuration de chaque application en imbriquant des objets de configuration dans un objet `projects`. Une application par défaut peut être spécifiée en utilisant `defaultProject`.

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

Lorsqu'un projet multi-app est détecté, la CLI de NiWee fonctionnera dans le contexte d'une application configurée dans la racine `niwee.config.json`. Les critères de sélection des projets sont les suivants :

1. Si l'option globale de la CLI `--project` est spécifiée, le projet est recherché par clé dans l'objet `projects`. Par exemple, `--project=myApp` sélectionnera le projet `myApp`.
1. Si le CLI détecte qu'il est exécuté dans un chemin de projet, configuré avec la clé `root`, il sélectionnera le projet correspondant. Par exemple, l'utilisation du CLI dans le répertoire `apps/myOtherApp/src` sélectionnera le projet `myOtherApp`.
1. Si un `defaultProject` est spécifié dans `niwee.config.json`, il sélectionnera le projet spécifié lorsque les critères ci-dessus ne sont pas remplis.

### Ajouter une application

Les applications peuvent être enregistrées dans un projet multi-applications en utilisant `niwee start` pour créer de nouvelles applications ou `niwee init` pour initialiser les applications existantes.

#### Utiliser `niwee start`

Si un projet multi-applications est détecté pendant `niwee start`, le CLI ajoutera la configuration de l'application au fichier racine `niwee.config.json` au lieu de créer un fichier spécifique au projet.

L'installation des dépendances peut être ignorée en utilisant `--no-deps` si les dépendances sont hissées à la racine de la monorepo.

``Shell
$ cd apps/
$ niwee start "My New App" --no-deps
```

#### Utilisation de `niwee init`

Si une application a été créée d'une autre manière que `niwee start`, par exemple en utilisant un modèle préconstruit, utilisez `niwee init` pour enregistrer l'application existante dans le projet multi-applications.

:::note
Assurez-vous que l'application n'a pas de `niwee.config.json` existant.
:: :

``shell
$ cd apps/existing-app/
$ niwee init
```

## Configuration avancée

### Surcharger la construction

Normalement, le CLI exécute un ensemble de commandes codées en dur basées sur le type de projet. Par exemple, la construction standard des actifs web pour les projets Angular est `ng run app:build`. La construction de l'actif web peut être surchargée et `niwee build` peut continuer à être utilisé en utilisant `niwee:build` [npm script] (https://docs.npmjs.com/misc/scripts). De même, le serveur de développement peut être surchargé en utilisant le script npm `niwee:serve`.

Portez une attention particulière aux options fournies au script par l'interface de programmation NiWee. Des irrégularités peuvent se produire si les options ne sont pas respectées, en particulier pour le chargement à chaud (livereload) sur les périphériques.

### Options de commande

Les options de commande peuvent être exprimées par des variables d'environnement. Elles sont normalement définies avec la syntaxe `--opt=valeur`. Le nom de ces variables d'environnement suit un modèle : commencez par `IONIC_CMDOPTS_`, ajoutez le nom de la commande (en remplaçant les espaces par des traits de soulignement), ajoutez le nom de l'option (en remplaçant les traits d'union par des traits de soulignement), puis mettez tout en majuscules. Les drapeaux booléens (options de ligne de commande qui ne prennent pas de valeur) peuvent être mis à `1` ou `0`. Supprimez le préfixe `--no-` dans les options booléennes, s'il existe (`--no-open` dans niwee serve peut être exprimé avec `IONIC_CMDOPTS_SERVE_OPEN=0`, par exemple).

Par exemple, les options de commande dans `niwee cordova run ios -lc --liveroad-port=1234 --host=0.0.0.0` peuvent aussi être exprimées avec cette série de variables d'environnement :

``shell
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export IONIC_CMDOPTS_CORDOVA_RUN_HOST=0.0.0.0
```

Si ces variables sont définies dans l'environnement, `niwee cordova build ios` utilisera les nouvelles valeurs par défaut pour ses options.

### Télémétrie

Le CLI envoie des données d'utilisation à NiWee pour créer une meilleure expérience. Pour désactiver cette fonctionnalité, lancez `niwee config set -g telemetry false`.
