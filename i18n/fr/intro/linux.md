---
titre : Linux Setup
slug : /intro/linux
sidebar_label : Linux
---

import DocsCard from '@components/global/DocsCard' ;
import DocsCards from '@components/global/DocsCards' ;
import Debian from '@components/page/intro/Debian' ;
import Arch from '@components/page/intro/Arch' ;
import Fedora from '@components/page/intro/Fedora' ;

<DocsCards>

<DocsCard header="Debian" href="#debian" icon="/icons/debian.png">
  </p> <p>Un guide complet pour vous permettre de maîtriser les bases de la création d'apps NiWee avec Angular.</p>
</DocsCard>

<DocsCard header="Arch" href="#arch" icon="/icons/arch.png">
  </p> <p>Un guide complet pour vous permettre de maîtriser les bases de la création d'applications NiWee avec Vue.</p> <p>
</DocsCard>

<DocsCard header="Fedora" href="#fedora" icon="/icons/fedora.png">
  </p> <p>Un guide complet pour vous permettre de maîtriser les bases de la création d'applications NiWee avec React.</p> <p>
</DocsCard>

</DocsCards>

<Debian />

### Installer les dépendances nécessaires

```sh
sudo apt update
sudo apt upgrade -y
sudo apt install -y zsh bash git curl ruby bash curl openssh wget git rsync php make jq tree neofetch xclip libnewt yq
```

### Définir ZSH comme shell par défaut

```sh
chsh -s $(which zsh)
```

## Installer le paquet NiWee

````sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

<Arch />

### Installer les dépendances nécessaires

```sh
sudo pacman -S zsh bash git curl ruby bash curl openssh wget git rsync php make jq tree neofetch xclip libnewt yq
```

### Installer YAY

```sh
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### Installer Docker Desktop

Vous pouvez télécharger Docker Desktop à partir de [Docker Hub](https://docs.docker.com/desktop/)

1. Lancez Docker Desktop
2. Sauter le tutoriel
3. Aller dans les paramètres
4. Sous Kubernetes, cochez la case Activer Kubernetes.

### Définir ZSH comme shell par défaut

```sh
chsh -s $(which zsh)
```

### Installer le paquet NiWee

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

<Fedora />

### Installer les dépendances nécessaires

```sh
sudo dnf update && sudo dnf upgrade -y && sudo dnf install -y curl git zsh
```

### Installer Docker Desktop

Vous pouvez télécharger Docker Desktop à partir de [Docker Hub](https://docs.docker.com/desktop/)

1. Lancez Docker Desktop
2. Sauter le tutoriel
3. Aller dans les paramètres
4. Sous Kubernetes, cochez la case Activer Kubernetes.

### Définir ZSH comme shell par défaut

```sh
chsh -s $(which zsh)
```

### Installer le paquet NiWee

q

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

Cette commande vous évitera d'avoir à saisir votre mot de passe à chaque fois que vous utiliserez sudo :

```sh
echo "$USER ALL=(ALL) NOPASSWD:ALL" | sudo tee -a /etc/sudoers.d/nopwd
```
