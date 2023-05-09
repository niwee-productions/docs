---
Titel: Konfiguration
---

<head>
  <title>Kondensator-Konfiguration | Pflege einer globalen Konfigurationsdatei</title>
  <meta
    name="description"
    content="Setzen und Drucken von Konfigurationswerten aus Projektkonfigurationsdateien und der globalen CLI-Konfigurationsdatei mit Ionic CLI. Lesen Sie, um mehr über die Capacitor-Konfiguration zu erfahren."
  />
</head>

## Dateien

Konfigurationswerte werden in JSON-Dateien gespeichert. Das Ionic CLI verwaltet eine globale Konfigurationsdatei, die sich normalerweise unter `~/.ionic/config.json` befindet, und Projektkonfigurationsdateien, die sich normalerweise im Stammverzeichnis des Projekts als `ionic.config.json` befinden.

Die CLI bietet Befehle zum Setzen und Drucken von Konfigurationswerten aus Projektkonfigurationsdateien und der globalen CLI-Konfigurationsdatei. Siehe `ionic config --help` oder lesen Sie die Dokumentation zur Verwendung von [`ionic config get`](commands/config-get.md) und [`ionic config set`](commands/config-set.md).

### Projekt-Konfigurationsdatei

Jedes Ionic-Projekt hat eine Projektkonfigurationsdatei, normalerweise im Stammverzeichnis des Projekts. Das Folgende ist eine kommentierte `ionic.config.json` Datei.

``json
{
  // Der von Menschen lesbare Name der Anwendung.
  "name": "Meine App",

  // Der Projekttyp der App. Die CLI verwendet diesen Wert, um zu bestimmen, welche
  // Befehle und Befehlsoptionen verfügbar sind, was für die Hilfe ausgegeben
  // Dokumentation auszugeben ist und was für Web-Asset-Builds und den Dev-Server zu verwenden ist.
  "type": "angular",

  // Die App-ID für Appflow.
  "id": "abc123",

  // Konfigurationsobjekt für Integrationen wie Cordova und Capacitor.
  "integrations": {
    "cordova": {
      ...
    }
  },

  // Hook-Konfiguration - siehe den Abschnitt "Hooks" weiter unten für Details.
  "hooks": {
    ...
  }
}
```

## Umgebungsvariablen

Die CLI sucht nach den folgenden Umgebungsvariablen:

- `IONIC_CONFIG_DIRECTORY`: Das Verzeichnis der globalen CLI-Konfiguration. Die Voreinstellung ist `~/.ionic`.
- `IONIC_HTTP_PROXY`: Legt eine URL fest, über die alle CLI-Anfragen geleitet werden. Siehe [Using a Proxy](using-a-proxy.md).
- `IONIC_TOKEN`: Authentifiziert sich automatisch mit [Appflow](https://ionic.io/appflow).

## Flaggen

CLI-Flags sind globale Optionen, die das Verhalten eines CLI-Befehls ändern.

- `--help`: Anstatt den Befehl auszuführen, wird dessen Hilfeseite angezeigt.
- `--verbose`: Zeigt alle Protokollmeldungen zu Debugging-Zwecken an.
- `--quiet`: Zeigt nur `WARN` und `ERROR` Protokollmeldungen an.
- `--kein-interaktiv`: Schaltet interaktive Eingabeaufforderungen und ausgefallene Ausgaben aus. Wenn CI oder ein Nicht-TTY-Terminal erkannt wird, ist die CLI automatisch nicht interaktiv.
- `--Bestätigung`: Schaltet die automatische Bestätigung von Bestätigungsaufforderungen ein. Vorsicht: Die CLI fragt nach, bevor Sie etwas potentiell Schädliches tun. Automatische Bestätigungen können unbeabsichtigte Folgen haben.

## Haken

Das CLI kann Skripte während bestimmter Ereignisse ausführen, wie z.B. vor und nach Builds. Um sich in das CLI einzuklinken, können die folgenden [npm-Skripte](https://docs.npmjs.com/misc/scripts) in `package.json` verwendet werden:

- `ionic:serve:before`: wird ausgeführt, bevor der Dev-Server startet
- `ionic:serve:after`: wird ausgeführt, nachdem der Dev-Server beendet wurde
- `ionic:build:before`: wird ausgeführt, bevor die Erstellung eines Web-Assets beginnt
- `ionic:build:after`: wird nach Beendigung eines Web-Asset-Builds ausgeführt
- `ionic:capacitor:run:before`: wird während `ionic capacitor run` ausgeführt, bevor capacitor open ausgeführt wird
- `ionic:capacitor:build:before`: wird während des `ionic capacitor build` ausgeführt, bevor capacitor open ausgeführt wird
- ionic:capacitor:sync:after`: ausgeführt während `ionic capacitor sync` nach einer Synchronisation

Wenn Sie ein Shell-Skript für einen der Hooks verwenden, wird der Hook-Kontext in Umgebungsvariablen mit dem Präfix `IONIC_CLI_HOOK_CTX_` definiert.

Das folgende Beispiel zeigt die Umgebungsvariablen, die für den `ionic:capacitor:build`-Hook gesetzt werden.

`Shell
IONIC_CLI_HOOK_CTX_NAME=Kondensator:build:vorher
IONIC_CLI_HOOK_CTX_BUILD_CORDOVA_ASSETS=true
IONIC_CLI_HOOK_CTX_BUILD_ENGINE=Browser
IONIC_CLI_HOOK_CTX_BUILD_PROJECT=Anwendung
IONIC_CLI_HOOK_CTX_BUILD_TYPE=angular
IONIC_CLI_HOOK_CTX_BUILD_VERBOSE=false
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_ID=io.ionic.starter
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_NAME=ionic-starter-app
IONIC_CLI_HOOK_CTX_CAPACITOR_CAPACITOR_VERBOSE=false
```

Hooks können auch in `ionic.config.json` definiert werden. Definieren Sie ein "Hooks"-Objekt innerhalb des Projekts, wobei jeder Schlüssel der Name des Hooks (ohne das Präfix "ionic:") und der Wert ein Pfad zu einer JavaScript-Datei oder ein Array von Pfaden ist.

Im folgenden Beispiel wird die Datei importiert und während des `ionic:build:before`-Hooks ausgeführt.

``json
"hooks": {
  "build:before": "./scripts/build-before.js"
},
```

JavaScript-Hook-Dateien sollten eine einzige Funktion exportieren, der ein einziges Argument (`ctx`) übergeben wird, wenn der Hook ausgeführt wird.

Das Argument ist der der Hook-Datei übergebene Kontext, der sich von Hook zu Hook und bei verschiedenen Aufrufen unterscheidet.

`./scripts/build-before.js`:

```javascript
module.exports = function (ctx) {
  console.log(ctx);
};
```

## Multi-App-Projekte

<small>
  <em>Verfügbar in CLI 6.2.0+</em>
</small>

Das Ionic CLI unterstützt ein Multi-App-Konfigurations-Setup, das mehrere Ionic-Apps und gemeinsamen Code in einem einzigen Repository oder [monorepo] (../reference/glossary.md#monorepo) umfasst.

:::note
Diese Dokumente geben einen Überblick über das Multi-App-Feature des Ionic CLI, gehen aber nicht wirklich auf die Details der einzelnen Frameworks ein.

Wenn Sie Angular verwenden, lesen Sie bitte [diesen Artikel](https://github.com/ionic-team/ionic-cli/wiki/Angular-Monorepo) für Beispiele.
:::

### Setup-Schritte

1. Erstellen Sie ein Verzeichnis und initialisieren Sie eine Monorepo (siehe [Projektstruktur](#project-structure) für alle Details).
1. Initialisieren Sie das Monorepo als ein Ionic Multi-App Projekt. Dies wird eine Multi-App `ionic.config.json` Datei erstellen. Siehe [Config File](#config-file) für weitere Details.

   ```shell
   $ ionic init --multi-app
   ```

1. Verwenden Sie `ionic start`, um Ionic-Apps zu erstellen, oder `ionic init`, um bestehende Apps zu initialisieren (siehe [Hinzufügen einer App](#adding-an-app) für vollständige Details).

### Projektstruktur

In einem Multi-App-Projekt ist die Projektstruktur flexibel. Die einzige Voraussetzung ist eine Multi-App `ionic.config.json`-Datei im Stammverzeichnis des Repositorys.

Unten sehen Sie ein Beispiel, bei dem die Anwendungen im Verzeichnis `apps/` vom gemeinsamen Code im Verzeichnis `lib/` getrennt sind. Beachten Sie die Root-Datei `ionic.config.json` und die Datei `package.json` des Monorepos.

``bash
apps/
├── myApp/
└── myOtherApp/
lib/
ionic.config.json
package.json
```

### Konfig-Datei

In einem Multi-App-Projekt teilen sich die Anwendungen eine einzige `ionic.config.json`-Datei im Stammverzeichnis des Repositorys, anstatt dass jede Anwendung ihre eigene hat. Die Multi-App-Konfigurationsdatei enthält die Konfiguration für jede App durch Verschachtelung von Konfigurationsobjekten in einem `projects`-Objekt. Eine Standard-App kann mit `defaultProject` angegeben werden.

Nachfolgend finden Sie eine Beispieldatei, die der obigen Dateistruktur entspricht.

``json
{
  "defaultProject": "myApp",
  "projects": {
    "myApp": {
      "name": "Meine App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myApp"
    },
    "myOtherApp": {
      "name": "Meine andere App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myOtherApp"
    }
  }
}
```

Wenn ein Multi-App-Projekt erkannt wird, arbeitet das Ionic CLI unter dem Kontext einer App, die in der Root-Datei `ionic.config.json` konfiguriert ist. Die Projektauswahlkriterien sind wie folgt:

1. Wenn die globale CLI-Option `--project` angegeben ist, wird das Projekt nach dem Schlüssel im Objekt `projects` gesucht. Zum Beispiel wird mit `--project=myApp` das Projekt `myApp` ausgewählt.
1. Wenn die Befehlszeilenschnittstelle feststellt, dass sie innerhalb eines mit dem Schlüssel "root" konfigurierten Projektpfads ausgeführt wird, wählt sie das entsprechende Projekt aus. Wird die CLI beispielsweise innerhalb des Verzeichnisses `apps/myOtherApp/src` ausgeführt, wird das Projekt `myOtherApp` ausgewählt.
1. Wenn ein `defaultProject` in `ionic.config.json` angegeben ist, wird das angegebene Projekt ausgewählt, wenn die oben genannten Kriterien nicht erfüllt sind.

### Hinzufügen einer App

Apps können in einem Multi-App-Projekt registriert werden, indem entweder `ionic start` verwendet wird, um neue Apps zu erstellen, oder `ionic init`, um bestehende Apps zu initialisieren.

#### Verwendung von `ionic start`

Wenn ein Multi-App-Projekt während `ionic start` erkannt wird, fügt die CLI die App-Konfiguration zur Stammdatei `ionic.config.json` hinzu, anstatt eine projektspezifische Datei zu erstellen.

Die Installation von Abhängigkeiten kann mit `--no-deps` übersprungen werden, wenn die Abhängigkeiten in die Wurzel der Monorepo gehievt werden.

``shell
$ cd apps/
$ ionic start "Meine neue App" --no-deps
```

#### Mit `ionic init`

Wenn eine App auf eine andere Weise als mit `ionic start` erstellt wurde, z.B. durch Verwendung eines vorgefertigten Templates, verwenden Sie `ionic init`, um die bestehende App im Multi-App-Projekt zu registrieren.

:::note
Stellen Sie sicher, dass die App keine existierende `ionic.config.json` hat.
:::

```shell
$ cd apps/existing-app/
$ ionic init
```

## Erweiterte Konfiguration

### Überschreiben des Builds

Normalerweise führt die CLI einen fest kodierten Satz von Befehlen aus, der auf dem Projekttyp basiert. Der Standard-Web-Asset-Build für Angular-Projekte ist zum Beispiel `ng run app:build`. Der Web-Asset-Build kann außer Kraft gesetzt werden und `ionic build` kann weiterhin verwendet werden, indem das [npm-Skript] `ionic:build` verwendet wird (https://docs.npmjs.com/misc/scripts). In ähnlicher Weise kann der Dev-Server mit dem npm-Skript `ionic:serve` außer Kraft gesetzt werden.

Achten Sie genau auf die Flags, die dem Skript von der Ionic CLI übergeben werden. Es kann zu Unregelmäßigkeiten kommen, wenn die Optionen nicht beachtet werden, insbesondere bei livereload auf Geräten.

### Befehlsoptionen

Befehlsoptionen können mit Umgebungsvariablen ausgedrückt werden. Sie werden normalerweise mit der Syntax `--opt=value` gesetzt. Die Benennung dieser Umgebungsvariablen folgt einem Muster: Beginnen Sie mit `IONIC_CMDOPTS_`, fügen Sie den Befehlsnamen hinzu (ersetzen Sie alle Leerzeichen durch Unterstriche), fügen Sie den Optionsnamen hinzu (ersetzen Sie alle Bindestriche durch Unterstriche) und schreiben Sie dann alles in Großbuchstaben. Boolesche Flags (Befehlszeilenoptionen, die keinen Wert annehmen) können auf `1` oder `0` gesetzt werden. Entfernen Sie das Präfix `--no-` in booleschen Flags, wenn es existiert (`--no-open` in ionic serve kann zum Beispiel mit `IONIC_CMDOPTS_SERVE_OPEN=0` ausgedrückt werden).

Zum Beispiel können die Befehlsoptionen in "ionic cordova run ios -lc --livereload-port=1234 --host=0.0.0.0" auch mit dieser Reihe von Umgebungsvariablen ausgedrückt werden:

```shell
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export IONIC_CMDOPTS_CORDOVA_RUN_HOST=0.0.0.0
```

Wenn diese Variablen in der Umgebung gesetzt sind, wird `ionic cordova build ios` neue Standardwerte für seine Optionen verwenden.

### Telemetrie

Die CLI sendet Nutzungsdaten an Ionic, um ein besseres Erlebnis zu schaffen. Um diese Funktionalität zu deaktivieren, führen Sie `ionic config set -g telemetry false` aus.
