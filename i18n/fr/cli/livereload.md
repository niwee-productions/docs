# Live Reload

L'option Live Reload permet de recharger le navigateur ou [Web View](../core-concepts/webview.md) lorsque vous modifiez le code de votre application dans votre environnement de développement. Cette option est particulièrement utile pour le développement à l'aide de périphériques matériels.

## Termes

Live Reload est un terme confondu. Avec `ionic serve`, Live Reload se réfère simplement au rechargement du navigateur lorsque des changements sont effectués. Live Reload peut également être utilisé avec Capacitor et Cordova pour fournir la même expérience sur les appareils virtuels et matériels, ce qui élimine le besoin de redéployer un binaire natif.

## Usage

Étant donné que Live Reload exige que la vue Web charge votre application à partir d'une URL hébergée par votre ordinateur au lieu de simplement lire les fichiers sur l'appareil, la configuration de Live Reload pour les appareils matériels peut s'avérer délicate.

Comme pour les déploiements de périphériques classiques, vous aurez besoin d'un câble pour connecter votre périphérique à votre ordinateur. La différence est que le CLI Ionic configure la vue Web pour charger votre application depuis le serveur de développement sur votre ordinateur.

### Condensateur

Pour utiliser Live Reload avec Capacitor, assurez-vous que vous utilisez un périphérique virtuel ou un périphérique matériel connecté au même réseau Wi-Fi que votre ordinateur. Ensuite, vous devrez spécifier que vous voulez utiliser une adresse IP externe pour le serveur de développement en utilisant le drapeau `--external`.

``shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

:::note
Rappelez-vous qu'avec l'option `--external`, d'autres personnes sur votre réseau Wi-Fi pourront accéder à votre application.
:: :

### Cordova

#### Android

Pour les appareils Android, le CLI de Ionic transmettra automatiquement le port du serveur de développement. Cela signifie que vous pouvez utiliser une adresse `localhost` et qu'elle fera référence à votre ordinateur lorsqu'elle sera chargée dans la vue Web, et non à l'appareil.

La commande suivante, tout-en-un, démarre un serveur live-reload sur `localhost` et déploie l'application sur un appareil Android en utilisant Cordova :

``shell
ionic cordova run android -l
```

#### iOS

Pour les appareils iOS, la redirection de port n'est pas encore une option. Cela signifie que vous devrez connecter votre appareil au même réseau Wi-Fi que votre ordinateur et utiliser une adresse externe pour le serveur de développement.

Dans certains cas, le CLI Ionic ne connaîtra pas l'adresse avec laquelle configurer la vue Web, il vous sera donc demandé d'en sélectionner une. Veillez à sélectionner l'adresse de votre ordinateur sur votre réseau Wi-Fi.

La commande tout-en-un suivante démarrera un serveur de téléchargement en direct sur **toutes les adresses** et déploiera l'application sur un appareil iOS à l'aide de Cordova :

``shell
ionic cordova run ios -l --external
```

:::note
Rappelez-vous qu'avec l'option `--external`, d'autres personnes sur votre réseau Wi-Fi pourront accéder à votre application.
:: :

## Conseils

- Avec Cordova, utilisez les options `--device`, `--emulator`, et `--target` pour restreindre les appareils cibles. Utilisez l'option `--list` pour lister toutes les cibles. Voir l'utilisation dans la [documentation sur les commandes] (commands/cordova-run.md).
- Vous pouvez séparer le processus de serveur de développement et le processus de déploiement en utilisant `ionic serve` et l'option `--liveroad-url` de `ionic cordova run` ou `ionic capacitor run`.
- Pour Android, il est possible de configurer [adb](https://developer.android.com/studio/command-line/adb) pour toujours rediriger les ports lorsque le serveur adb est en cours d'exécution (voir `adb reverse`). Une fois la redirection de port mise en place, une adresse externe n'est plus nécessaire. Vous pouvez également configurer le pont adb sur TCP de telle sorte que les déploiements ultérieurs ne nécessitent plus de câble USB.

### Utilisation de SSL

Le rechargement en direct utilisera HTTP par défaut, ce qui entraînera l'échec des API web qui nécessitent un contexte sécurisé (comme [web crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)). Pour établir un contexte sécurisé, vous pouvez utiliser l'argument `--ssl` pour utiliser HTTPS.

Par exemple, avec une application Angular, vous pouvez exécuter ce qui suit pour passer un certificat et une clé privée et servir votre application avec HTTPS :
``shell
ionic capacitor run android --livereload --external --ssl -- --ssl-cert='server.crt' --ssl-key='server.key'
```

Utiliser un certificat auto-signé et s'assurer qu'il est approuvé par l'appareil est un sujet compliqué qui est traité dans [cet article] (https://ionic.zendesk.com/hc/en-us/articles/11384425513623).