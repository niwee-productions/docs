---
titre : Coureurs
---

## Introduction

Les CI/CD Runners se connectent à l'outil Versionning et exécutent les pipelines CI/CD. Ils sont chargés d'exécuter les pipelines CI/CD et de rapporter les résultats à l'outil Versionning.

## Runners

Nous utilisons des runners personnalisés pour nos pipelines CI/CD. Ils sont basés sur le GitLab Runner et sont déployés sur notre Mainframe. Ils sont chargés d'exécuter les pipelines CI/CD et de rapporter les résultats à l'outil Versionning.

## Configuration des runners

:: : détails Gitlab Runner
Le GitLab Runner est une application logicielle qui est utilisée pour exécuter vos travaux et renvoyer les résultats à GitLab. Il est utilisé en conjonction avec GitLab CI, le service d'intégration continue open-source inclus dans GitLab qui coordonne les travaux.

### Installation

```sh
sudo curl -L --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"
sudo chmod +x /usr/local/bin/gitlab-runner
sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
```

### Démarrage

````sh
sudo gitlab-runner start
```

### Enregistrement

Le jeton peut être trouvé dans les paramètres CI du dépôt Gitlab ou dans le groupe parent pour inclure tous les dépôts.

```sh
sudo gitlab-runner register
```

### Configuration

```sh
sudo nano /etc/gitlab-runner/config.toml
```

```toml
concurrent = 1
check_interval = 0

[session_server]
  session_timeout = 1800

[[runners]]
  name = "nw1.byniwee.cloud"
  url = "https://gitlab.com/"
  token = "<votre-token>"
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
    volumes = ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]]
    pull_policy = "if-not-present" (si non présent)
    tls_verify = false
    image = "debian:latest"
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    shm_size = 0
```
