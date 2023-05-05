---
título: Corredores
---

## Introducción

Los CI/CD Runners se conectan a la herramienta Versionning y ejecutan los pipelines CI/CD. Son responsables de ejecutar los procesos de CI/CD y de informar de los resultados a la herramienta Versionning.

## Runners

Utilizamos ejecutores personalizados para nuestros pipelines CI/CD. Se basan en el GitLab Runner y se despliegan en nuestro Mainframe. Son responsables de la ejecución de las tuberías de CI/CD y de informar de los resultados a la herramienta Versionning.

## Configuración de los Runners

::: detalles Gitlab Runner
El GitLab Runner es una aplicación de software que se utiliza para ejecutar sus trabajos y enviar los resultados a GitLab. Se utiliza junto con GitLab CI, el servicio de integración continua de código abierto incluido con GitLab que coordina los trabajos.

### Instalación

```sh
sudo curl -L --output /usr/local/bin/gitlab-runner "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64"
sudo chmod +x /usr/local/bin/gitlab-runner
sudo useradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash sudo gitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner
```

### Inicio

```sh
sudo gitlab-runner start
```

### Registration

El token se encuentra en la configuración CI del repositorio Gitlab o en el grupo padre para incluir todos los repositorios

```sh
sudo gitlab-runner register
```

### Configuración

```sh
sudo nano /etc/gitlab-runner/config.toml
```

``toml
concurrente = 1
intervalo_comprobación = 0

[session_server]
  session_timeout = 1800

[[corredores]]
  name = "nw1.byniwee.cloud"
  url = "https://gitlab.com/"
  token = "<su-token>"
  ejecutor = "docker"
  [runners.custom_build_dir]
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]
    [runners.cache.azure]
  [runners.docker]
    hostname = "nube.byniwee.io"
    network_mode = "host"
    dns = ["8.8.8.8"]
    volumes = ["/var/run/docker.sock:/var/run/docker.sock", "/cache"]
    pull_policy = "si-no-está-presente"
    tls_verify = false
    image = "debian:latest"
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    shm_size = 0
```
