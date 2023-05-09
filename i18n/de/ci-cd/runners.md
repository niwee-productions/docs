---
Titel: Läufer
---

## Einführung

CI/CD-Runner verbinden sich mit dem Versionning-Tool und führen die CI/CD-Pipelines aus. Sie sind für die Ausführung der CI/CD-Pipelines und die Rückmeldung der Ergebnisse an das Versionning-Tool verantwortlich.

## Läufer

Wir verwenden benutzerdefinierte Runner für unsere CI/CD-Pipelines. Sie basieren auf dem GitLab-Runner und werden auf unserem Mainframe eingesetzt. Sie sind für die Ausführung der CI/CD-Pipelines und die Rückmeldung der Ergebnisse an das Versionierungstool verantwortlich.

## Konfiguration der Runner

::: Details Gitlab Runner
Der GitLab Runner ist eine Softwareanwendung, die dazu dient, Ihre Aufträge auszuführen und die Ergebnisse an GitLab zurückzusenden. Er wird in Verbindung mit GitLab CI verwendet, dem in GitLab enthaltenen Open-Source-Dienst für kontinuierliche Integration, der die Aufträge koordiniert.

### Installation

```sh
sudo curl -L --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"
sudo chmod +x /usr/local/bin/gitlab-runner
sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
```

### Startup

```sh
sudo gitlab-runner start
```

### Registrierung

Das Token befindet sich in den CI-Einstellungen des Gitlab-Repos oder in der übergeordneten Gruppe, die alle Repos umfasst

```sh
sudo gitlab-runner register
```

### Konfiguration

```sh
sudo nano /etc/gitlab-runner/config.toml
```

```toml
concurrent = 1
prüf_intervall = 0

[session_server]
  session_timeout = 1800

[[runners]]
  name = "nw1.byniwee.cloud"
  url = "https://gitlab.com/"
  token = "<Ihr Token>"
  executor = "docker"
  [runners.custom_build_dir]
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]
    [runners.cache.azure]
  [runners.docker]
    hostname = "cloud.byniwee.io"
    network_mode = "host"
    dns = ["8.8.8.8"]
    volumes = ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]
    pull_policy = "if-not-present"
    tls_verify = falsch
    image = "debian:latest"
    privilegiert = true
    disable_entrypoint_overwrite = falsch
    oom_kill_disable = falsch
    disable_cache = falsch
    shm_size = 0
```
