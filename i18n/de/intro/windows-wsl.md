---
title: Windows WSL Setup
slug: /intro/wsl
sidebar_label: Windows WSL
---
## Enable Virtualization

### AMD Processor

The virtualization tech for AMD processors is called "SVM" and can generally be found in the "Advanced" tab under "CPU configuration".

### Intel Processor

The virtualization tech for Intel processors is called "VT-X" and can generally be found in the "Advanced" tab under "CPU configuration".

## Install Chocolatey

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Install dependencies

```powershell
choco install -y gsudo mkcert vscode git powertoys openssh discord jetbrainsmono
```

## Install WSL2

Open PowerShell as Administrator:

### Enable WSL

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### Enable Hyper V

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

### Download and install the Kernel

[WSL Kernel from Microsoft](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi "WSL Kernel from Microsoft")

### Verify WSL is on version 2

```powershell
wsl --set-default-version 2
```

### Install Ubuntu

#### On Windows 11

```powershell
wsl --install -d Ubuntu
```

#### On Windows 10

```powershell
choco install wsl-ubuntu-2004
```

## Configuration

* Launch Ubuntu
* Setup Username and Password
* Close Ubuntu

## Install the NiWee Package

```shell
sudo apt update && sudo apt upgrade -y && sudo apt install -y curl git && /bin/bash -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```