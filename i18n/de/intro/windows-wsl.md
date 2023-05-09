---
Titel: Windows WSL-Einrichtung
Slug: /intro/wsl
sidebar_label: Windows WSL
---
## Virtualisierung einschalten

### AMD-Prozessor

Die Virtualisierungstechnik für AMD-Prozessoren heißt "SVM" und ist in der Regel auf der Registerkarte "Erweitert" unter "CPU-Konfiguration" zu finden.

### Intel-Prozessor

Die Virtualisierungstechnologie für Intel-Prozessoren heißt "VT-X" und ist im Allgemeinen auf der Registerkarte "Erweitert" unter "CPU-Konfiguration" zu finden.

## Chocolatey installieren

```Powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Abhängigkeiten installieren

````Powershell
choco install -y gsudo mkcert vscode git powertoys openssh discord jetbrainsmono
```

## WSL2 installieren

Öffnen Sie PowerShell als Administrator:

### WSL aktivieren

``Powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### Hyper V aktivieren

```Powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

### Herunterladen und Installieren des Kernels

[WSL-Kernel von Microsoft](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi "WSL-Kernel von Microsoft")

### Überprüfen Sie, ob WSL auf Version 2 ist.

```Powershell
wsl --set-default-version 2
```

### Ubuntu installieren

#### unter Windows 11

```Powershell
wsl --install -d Ubuntu
```

#### unter Windows 10

```Powershell
choco install wsl-ubuntu-2004
```

## Konfiguration

* Ubuntu starten
* Benutzername und Passwort einrichten
* Ubuntu schließen

## Installieren Sie das NiWee-Paket

```shell
sudo apt update && sudo apt upgrade -y && sudo apt install -y curl git && /bin/bash -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```