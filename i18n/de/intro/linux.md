---
Titel: Linux-Einrichtung
slug: /einführung/linux
sidebar_label: Linux
---

importiere DocsCard von '@components/global/DocsCard';
importiere DocsCards von '@components/global/DocsCards';
import Debian aus '@components/page/intro/Debian';
import Arch von '@components/page/intro/Arch';
import Fedora von '@components/page/intro/Fedora';

<DocsCards>

<DocsCard header="Debian" href="#debian" icon="/icons/debian.png">
  <p>Ein vollständiger Leitfaden, der Sie mit den Grundlagen der Erstellung von Ionic-Apps mit Angular vertraut macht.</p>
</DocsCard>

<DocsCard header="Arch" href="#arch" icon="/icons/arch.png">
  <p>Ein kompletter Leitfaden, der Sie mit den Grundlagen der Erstellung von Ionic-Apps mit Vue vertraut macht.</p>
</DocsCard>

<DocsCard header="Fedora" href="#fedora" icon="/icons/fedora.png">
  <p>Ein kompletter Leitfaden, der Sie mit den Grundlagen der Erstellung von Ionic-Apps mit React vertraut macht.</p>
</DocsCard>

</DocsCards>

<Debian />

### Benötigte Abhängigkeiten installieren

```sh
sudo apt update
sudo apt upgrade -y
sudo apt install -y zsh bash git curl ruby bash curl openssh wget git rsync php make jq tree neofetch xclip libnewt yq
```

### ZSH als Standard-Shell einstellen

```sh
chsh -s $(welche zsh)
```

## Installieren Sie das NiWee-Paket

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

<Arch />

### Installation der benötigten Abhängigkeiten

```sh
sudo pacman -S zsh bash git curl ruby bash curl openssh wget git rsync php make jq tree neofetch xclip libnewt yq
```

### YAY installieren

```sh
sudo pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

### Docker Desktop installieren

Sie können Docker Desktop von [Docker Hub](https://docs.docker.com/desktop/) herunterladen.

1. Starten Sie Docker Desktop
2. Überspringen Sie das Lernprogramm
3. Gehen Sie zu den Einstellungen
4. Aktivieren Sie unter Kubernetes das Kästchen Kubernetes aktivieren

### ZSH als Standard-Shell einstellen

```sh
chsh -s $(welche zsh)
```

### Installieren Sie das NiWee-Paket

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

<Fedora />

### Installation der benötigten Abhängigkeiten

```sh
sudo dnf update && sudo dnf upgrade -y && sudo dnf install -y curl git zsh
```

### Docker Desktop installieren

Sie können Docker Desktop von [Docker Hub](https://docs.docker.com/desktop/) herunterladen.

1. Starten Sie Docker Desktop
2. Überspringen Sie das Lernprogramm
3. Gehen Sie zu den Einstellungen
4. Aktivieren Sie unter Kubernetes das Kästchen Kubernetes aktivieren

### ZSH als Standard-Shell einstellen

```sh
chsh -s $(welche zsh)
```

### Installieren Sie das NiWee-Paket

q

```sh
/bin/zsh -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

Dieser Befehl verhindert, dass Sie Ihr Passwort jedes Mal eingeben müssen, wenn Sie sudo verwenden:

```sh
echo "$USER ALL=(ALL) NOPASSWD:ALL" | sudo tee -a /etc/sudoers.d/nopwd
```
