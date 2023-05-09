# Live Reload

Mit der Option Live Reload wird der Browser oder die [Web View](../core-concepts/webview.md) neu geladen, wenn Sie den Code Ihrer Anwendung in Ihrer Entwicklungsumgebung ändern. Dies ist besonders nützlich für die Entwicklung mit Hardware-Geräten.

## Begriffe

Live Reload ist ein zusammengefasster Begriff. Bei `ionic serve` bezieht sich Live Reload nur auf das Neuladen des Browsers, wenn Änderungen vorgenommen werden. Live Reload kann auch mit Capacitor und Cordova verwendet werden, um das gleiche Erlebnis auf virtuellen und Hardware-Geräten zu bieten, wodurch die Notwendigkeit der erneuten Bereitstellung einer nativen Binärdatei entfällt.

## Verwendung

Da Live Reload erfordert, dass die Webansicht Ihre Anwendung von einer URL lädt, die von Ihrem Computer gehostet wird, anstatt nur Dateien auf dem Gerät zu lesen, kann die Einrichtung von Live Reload für Hardware-Geräte schwierig sein.

Wie bei regulären Gerätebereitstellungen benötigen Sie ein Kabel, um Ihr Gerät mit Ihrem Computer zu verbinden. Der Unterschied besteht darin, dass die Ionic CLI die Webansicht so konfiguriert, dass die App vom Entwicklungsserver auf Ihrem Computer geladen wird.

### Kondensator

Um Live Reload mit Capacitor zu verwenden, stellen Sie sicher, dass Sie entweder ein virtuelles Gerät oder ein Hardware-Gerät verwenden, das mit demselben Wi-Fi-Netzwerk wie Ihr Computer verbunden ist. Dann müssen Sie angeben, dass Sie eine externe IP-Adresse für den Entwicklungsserver verwenden möchten, indem Sie das Flag `--external` verwenden.

```shell
$ ionic capacitor run ios -l --extern
$ ionic capacitor run android -l --extern
```

:::note
Denken Sie daran, dass mit der Option `--extern` auch andere in Ihrem Wi-Fi-Netzwerk auf Ihre App zugreifen können.
:::

### Cordova

#### Android

Für Android-Geräte leitet die Ionic CLI automatisch den Dev-Server-Port weiter. Das bedeutet, dass Sie eine "localhost"-Adresse verwenden können, die sich auf Ihren Computer bezieht, wenn sie in der Webansicht geladen wird, und nicht auf das Gerät.

Der folgende All-in-One-Befehl startet einen Live-Reload-Server auf `localhost` und stellt die App auf einem Android-Gerät mit Cordova bereit:

```shell
ionic cordova run android -l
```

#### iOS

Für iOS-Geräte ist die Portweiterleitung noch keine Option. Das bedeutet, dass Sie Ihr Gerät mit demselben Wi-Fi-Netzwerk wie Ihren Computer verbinden und eine externe Adresse für den Dev-Server verwenden müssen.

In einigen Fällen kennt die Ionic CLI die Adresse nicht, mit der die Webansicht konfiguriert werden soll, so dass Sie möglicherweise aufgefordert werden, eine Adresse auszuwählen. Stellen Sie sicher, dass Sie die Adresse Ihres Computers in Ihrem Wi-Fi-Netzwerk auswählen.

Mit dem folgenden All-in-One-Befehl wird ein Live-Reload-Server auf **allen Adressen** gestartet und die App auf einem iOS-Gerät mit Cordova bereitgestellt:

```shell
ionic cordova run ios -l --external
```

:::note
Denken Sie daran, dass mit der Option `--extern` auch andere in Ihrem Wi-Fi-Netzwerk auf Ihre App zugreifen können.
:::

## Tipps

- Verwenden Sie bei Cordova die Optionen `--device`, `--emulator` und `--target`, um die Zielgeräte einzugrenzen. Verwenden Sie die Option `--list`, um alle Ziele aufzulisten. Siehe Verwendung in den [Befehlsdokumenten] (commands/cordova-run.md).
- Sie können den Entwicklungsserverprozess und den Bereitstellungsprozess trennen, indem Sie `ionic serve` und die Option `--livereload-url` von `ionic cordova run` oder `ionic capacitor run` verwenden.
- Für Android ist es möglich, [adb](https://developer.android.com/studio/command-line/adb) so zu konfigurieren, dass immer Ports weitergeleitet werden, während der adb-Server läuft (siehe `adb reverse`). Wenn die Portweiterleitung eingerichtet ist, ist eine externe Adresse nicht mehr erforderlich. Sie können auch die adb-Bridge über TCP einrichten, so dass bei späteren Installationen kein USB-Kabel mehr benötigt wird.

### Verwendung von SSL

Live reload verwendet standardmäßig HTTP, was dazu führt, dass Web-APIs, die einen sicheren Kontext erfordern (wie [web crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)), fehlschlagen. Um einen sicheren Kontext herzustellen, können Sie das Argument `--ssl` verwenden, um HTTPS zu benutzen.

Mit einer Angular-Anwendung können Sie zum Beispiel folgendes ausführen, um ein Zertifikat und einen privaten Schlüssel zu übergeben und Ihre Anwendung mit HTTPS zu bedienen:
```shell
ionic capacitor run android --livereload --external --ssl -- --ssl-cert='server.crt' --ssl-key='server.key'
```

Die Verwendung eines selbstsignierten Zertifikats und die Sicherstellung, dass es vom Gerät als vertrauenswürdig eingestuft wird, ist ein kompliziertes Thema und wird in [diesem Artikel] (https://ionic.zendesk.com/hc/en-us/articles/11384425513623) behandelt.