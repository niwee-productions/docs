---
title: Linux Setup
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';
import Debian from '@components/page/intro/Debian';
import Arch from '@components/page/intro/Arch';
import Fedora from '@components/page/intro/Fedora';

<DocsCards>

<DocsCard header="Debian" href="#debian" icon="/icons/debian.png">
  <p>A complete guide to get you up to speed with the basics of building Ionic apps with Angular.</p>
</DocsCard>

<DocsCard header="Arch" href="#arch" icon="/icons/arch.png">
  <p>A complete guide to get you up to speed with the basics of building Ionic apps with Vue.</p>
</DocsCard>

<DocsCard header="Fedora" href="#fedora" icon="/icons/fedora.png">
  <p>A complete guide to get you up to speed with the basics of building Ionic apps with React.</p>
</DocsCard>

</DocsCards>

<Debian />

### Install needed dependencies

```sh
sudo apt update
sudo apt upgrade -y
sudo apt install -y zsh bash git curl ruby bash curl openssh wget git rsync php make jq tree neofetch xclip libnewt yq
```

### Set ZSH as default shell

```sh
chsh -s $(which zsh)
```

## Install the NiWee Package

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

<Arch />

### Install needed dependencies

```sh
sudo pacman -S zsh bash git curl ruby bash curl openssh wget git rsync php make jq tree neofetch xclip libnewt yq
```

### Install YAY

```sh
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### Install Docker Desktop

You can download Docker Desktop from [Docker Hub](https://docs.docker.com/desktop/)

1. Launch Docker Desktop
2. Skip the tutorial
3. Go into settings
4. Under Kubernetes, check the box Enable Kubernetes

### Set ZSH as default shell

```sh
chsh -s $(which zsh)
```

### Install the NiWee Package

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

<Fedora />

### Install needed dependencies

```sh
sudo dnf update && sudo dnf upgrade -y && sudo dnf install -y curl git zsh
```

### Install Docker Desktop

You can download Docker Desktop from [Docker Hub](https://docs.docker.com/desktop/)

1. Launch Docker Desktop
2. Skip the tutorial
3. Go into settings
4. Under Kubernetes, check the box Enable Kubernetes

### Set ZSH as default shell

```sh
chsh -s $(which zsh)
```

### Install the NiWee Package

q

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

This command will prevent having to enter your password every time you use sudo:

```sh
echo "$USER ALL=(ALL) NOPASSWD:ALL" | sudo tee -a /etc/sudoers.d/nopwd
```
