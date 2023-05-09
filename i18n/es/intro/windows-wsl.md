---
título: Windows WSL Setup
slug: /intro/wsl
sidebar_label: Windows WSL
---
## Habilitar Virtualización

### Procesador AMD

La tecnología de virtualización para los procesadores AMD se llama "SVM" y generalmente se puede encontrar en la pestaña "Avanzado" en "Configuración de la CPU".

### Procesador Intel

La tecnología de virtualización para los procesadores Intel se llama "VT-X" y generalmente se encuentra en la pestaña "Avanzado" en "Configuración de la CPU".

## Instalar Chocolatey

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Instalar dependencias

```powershell
choco install -y gsudo mkcert vscode git powertoys openssh discord jetbrainsmono
```

## Instalar WSL2

Abra PowerShell como Administrador:

### Habilitar WSL

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

### Habilitar Hyper V

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

### Descargar e instalar el Kernel

[WSL Kernel de Microsoft](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi "WSL Kernel de Microsoft")

### Verificar que WSL está en la versión 2

```powershell
wsl --set-default-version 2
```

### Instalar Ubuntu

#### En Windows 11

```powershell
wsl --install -d Ubuntu
```

#### en Windows 10

```powershell
choco install wsl-ubuntu-2004
```

## Configuración

* Iniciar Ubuntu
* Configurar nombre de usuario y contraseña
* Cerrar Ubuntu

## Instalar el paquete NiWee

```shell
sudo apt update && sudo apt upgrade -y && sudo apt install -y curl git && /bin/bash -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```