---
titre : Windows WSL Setup
slug : /intro/wsl
sidebar_label : Windows WSL
---
## Activer la virtualisation

### Processeur AMD

La technologie de virtualisation pour les processeurs AMD s'appelle "SVM" et se trouve généralement dans l'onglet "Avancé" sous "Configuration du processeur".

### Processeur Intel

La technologie de virtualisation pour les processeurs Intel est appelée "VT-X" et se trouve généralement dans l'onglet "Avancé" sous "Configuration du processeur".

### Installer Chocolatey

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force ; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072 ; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Installer les dépendances

```Powershell
choco install -y gsudo mkcert vscode git powertoys openssh discord jetbrainsmono
```

## Installer WSL2

Ouvrez PowerShell en tant qu'administrateur :

### Activer WSL

```Powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### Activer Hyper V

````powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

### Télécharger et installer le noyau

[WSL Kernel from Microsoft](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi "WSL Kernel from Microsoft")

### Vérifier que WSL est sur la version 2

```powershell
wsl --set-default-version 2
```

### Installer Ubuntu

#### sur Windows 11

```powershell
wsl --install -d Ubuntu
```

#### sur Windows 10

```powershell
choco install wsl-ubuntu-2004
```

## Configuration

* Lancer Ubuntu
* Configurer le nom d'utilisateur et le mot de passe
* Fermer Ubuntu

## Installer le paquet NiWee

```shell
sudo apt update && sudo apt upgrade -y && sudo apt install -y curl git && /bin/bash -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```