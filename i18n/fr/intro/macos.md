---
titre : MacOS Setup
---

## Installer Docker Desktop

[Télécharger Docker CE depuis Docker Hub](https://docs.byniwee.cloud/docs/getting-started/setup-workstation/macos#install-docker-desktop)

1. Lancez Docker Desktop
2. Sauter le tutoriel
3. Aller dans les paramètres
4. Sous Kubernetes, cochez la case Activer Kubernetes.

## Installez le paquet NiWee (si vous y avez accès)[](https://docs.byniwee.cloud/docs/getting-started/setup-workstation/macos#install-the-niwee-package-if-you-have-access)

```bash
/bin/bash -c "$(curl -fsSL https://gitlab.com/-/snippets/2156826/raw/main/install.sh)"
```

## Installer VScode

[Télécharger Visual Studio Code depuis Microsoft](https://code.visualstudio.com/download)

- Ouvrez-le
- `Command + Shift + p` pour ouvrir la palette de commandes
- Rechercher `path` (chemin)
- Utiliser la commande Install \'code\' dans PATH
