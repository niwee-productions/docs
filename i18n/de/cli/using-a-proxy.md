# Verwendung eines Proxys

Die Proxy-Unterstützung ist in die Ionic-CLI integriert. Die Proxy-Einstellungen können über die Konfigurationsdatei oder eine Umgebungsvariable konfiguriert werden.

Um die Proxy-Einstellungen über die Konfigurationsdatei zu konfigurieren, führen Sie den folgenden Befehl mit der URL des Proxy-Servers aus:

```shell
ionic config set -g proxy http://proxy.example.com:8888
```

Um die Proxy-Einstellungen über eine Umgebungsvariable zu konfigurieren, verwenden Sie eine der folgenden Möglichkeiten:

```shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # wird auch von npm verwendet
$ export HTTPS_PROXY="https://proxy.example.com:8888" # wird auch von npm verwendet
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### Andere CLIs

Jede CLI, die Sie verwenden, muss separat für den Proxy von Netzwerkanfragen konfiguriert werden.

#### npm

```shell
npm config set proxy http://proxy.company.com:8888
```

#### git

```shell
git config --global http.proxy http://proxy.example.com:8888
```

### SSL-Konfiguration

Die Ionic CLI kann so konfiguriert werden, dass verschiedene SSL-Einstellungen für HTTP-Anfragen verwendet werden.

```shell
$ ionic config set -g ssl.cafile /path/to/cafile # Dateipfad zu Ihrem CA-Root-Zertifikat
$ ionic config set -g ssl.certfile /path/to/certfile # Dateipfad zu einem Client-Zertifikat
$ ionic config set -g ssl.keyfile /path/to/keyfile # Dateipfad zu einer Client-Schlüsseldatei
```

Die Einträge `cafile`, `certfile` und `keyfile` können manuell als Arrays von Strings in `~/.ionic/config.json` bearbeitet werden, um mehrere Dateien einzuschließen.
