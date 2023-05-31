# Utilisation d'un proxy

Le support du proxy est intégré au CLI de NiWee. Les paramètres du proxy peuvent être configurés via le fichier de configuration ou une variable d'environnement.

Pour configurer les paramètres du proxy via le fichier de configuration, exécutez ce qui suit avec l'URL du serveur proxy :

``shell
niwee config set -g proxy http://proxy.example.com:8888
```

Pour configurer les paramètres du proxy via une variable d'environnement, utilisez l'une des méthodes suivantes :

``shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # également utilisé par npm
$ export HTTPS_PROXY="https://proxy.example.com:8888" # également utilisé par npm
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### Autres CLIs

Chaque CLI que vous utilisez doit être configuré séparément pour la gestion des requêtes réseau.

#### npm

``shell
npm config set proxy http://proxy.company.com:8888
```

#### git

``shell
git config --global http.proxy http://proxy.example.com:8888
```

### Configuration SSL

Le CLI NiWee peut être configuré pour utiliser différents paramètres SSL pour les requêtes HTTP.

```shell
$ niwee config set -g ssl.cafile /path/to/cafile # chemin d'accès au certificat racine de votre CA
$ niwee config set -g ssl.certfile /path/to/certfile # chemin d'accès au certificat client
niwee config set -g ssl.keyfile /path/to/keyfile # chemin d'accès au fichier de clé du client
```

Les entrées `cafile`, `certfile`, et `keyfile` peuvent être éditées manuellement comme des tableaux de chaînes dans `~/.niwee/config.json` pour inclure plusieurs fichiers.
