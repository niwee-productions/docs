---
título: Configuración de Linux
slug: /intro/linux
sidebar_label: Linux
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import Debian from '@components/page/intro/Debian';
import Arch from '@components/page/intro/Arch';
import Fedora from '@components/page/intro/Fedora';

<TarjetasDocs>

<DocsCard header="Debian" href="#debian" icon="/icons/debian.png">
  <p>Una guía completa para ponerte al día con los conceptos básicos de la construcción de aplicaciones NiWee con Angular.</p> <p>
</DocsCard>

<DocsCard header="Arch" href="#arch" icon="/icons/arch.png">
  <p>Una completa guía para ponerte al día con los fundamentos de la construcción de apps NiWee con Vue.</p> <p> </p> <p>Los fundamentos de la construcción de apps NiWee con Vue.
</DocsCard>

<DocsCard header="Fedora" href="#fedora" icon="/icons/fedora.png">
  <p>Una guía completa para ponerte al día con los fundamentos de la creación de aplicaciones NiWee con React.</p> <p> </p> <p><strong>Cómo crear aplicaciones NiWee con React</strong>.
</DocsCard>

</DocsCards>

<Debian />

### Instalar las dependencias necesarias

```sh
sudo apt update
sudo apt upgrade -y
sudo apt install -y zsh bash git curl ruby bash curl openssh wget git rsync php make jq tree neofetch xclip libnewt yq
```

### Establecer ZSH como shell por defecto

```sh
chsh -s $(que zsh)
```

## Instalar el paquete NiWee

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

<Arch />

### Instalar dependencias necesarias

```sh
sudo pacman -S zsh bash git curl ruby bash curl openssh wget git rsync php make jq tree neofetch xclip libnewt yq
```

### Instalar YAY

```sh
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### Instalar Docker Desktop

Puede descargar Docker Desktop desde [Docker Hub](https://docs.docker.com/desktop/)

1. 1. Inicie Docker Desktop
2. Sáltate el tutorial
3. Entra en la configuración
4. En Kubernetes, marque la casilla Activar Kubernetes

### 5. Establecer ZSH como shell por defecto

```sh
chsh -s $(que zsh)
```

### Instalar el paquete NiWee

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

<Fedora />

### Instalar dependencias necesarias

```sh
sudo dnf update && sudo dnf upgrade -y && sudo dnf install -y curl git zsh
```

### Instalar Docker Desktop

Puede descargar Docker Desktop desde [Docker Hub](https://docs.docker.com/desktop/)

1. 1. Inicie Docker Desktop
2. Sáltate el tutorial
3. Entra en la configuración
4. En Kubernetes, marque la casilla Activar Kubernetes

### 5. Establecer ZSH como shell por defecto

```sh
chsh -s $(que zsh)
```

### Instalar el paquete NiWee

q

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

Este comando evitará que tengas que introducir tu contraseña cada vez que utilices sudo:

```sh
echo "$USER ALL=(ALL) NOPASSWD:ALL" | sudo tee -a /etc/sudoers.d/nopwd
```
