---
title: Runners
---

## Introduction

CI/CD Runners connect to the Versionning tool and execute the CI/CD pipelines. They are responsible for executing the CI/CD pipelines and reporting the results back to the Versionning tool.

## Runners

We use custom runners for our CI/CD pipelines. They are based on the GitLab Runner and are deployed on our Mainframe. They are responsible for executing the CI/CD pipelines and reporting the results back to the Versionning tool.

## Runners configuration

::: details Gitlab Runner
The GitLab Runner is a software application that is used to run your jobs and send the results back to GitLab. It is used in conjunction with GitLab CI, the open-source continuous integration service included with GitLab that coordinates the jobs.

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

### Registration

The token can be found in the Gitlab repo\'s CI settings or in the parent group to include all repos

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
  token = "<your-token>"
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
    tls_verify = false
    image = "debian:latest"
    privileged = true
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
    shm_size = 0
```
