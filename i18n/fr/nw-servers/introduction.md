---
titre : A propos des serveurs NW
slug : /introduction
sidebar_label : Intro
---

# A propos de NW Servers

## Feuille de route

- Implémenter l'Intranet via Firezone

## Il y a actuellement 3 serveurs NW

- [NW1](https://nw1.byniwee.cloud) - Le serveur principal
- NW2](https://nw2.byniwee.cloud) - Le serveur Git
- [NWM](https://nwm.byniwee.cloud) - Le serveur de messagerie

## Serveurs à venir (pas encore disponibles)

- [NW3](https://nw3.byniwee.cloud) - Le serveur VPN
- NW4](https://nw4.byniwee.cloud) - Le premier serveur de sauvegarde
- NW5](https://nw5.byniwee.cloud) - Le deuxième serveur de sauvegarde
- NW6](https://nw7.byniwee.cloud) - Le serveur de base de données
- NW6](https://nw8.byniwee.cloud) - Le serveur de réplication de base de données
- NW7](https://nw9.byniwee.cloud) - Le serveur de cache
- NW8](https://nw10.byniwee.cloud) - Le serveur de file d'attente
- NW9](https://nw11.byniwee.cloud) - Le serveur de surveillance

## Portainer

Toutes les instances ci-dessus sont et/ou seront gérées via Docker avec [Portainer](https://www.portainer.io/). Portainer est une interface de gestion légère qui nous permet de gérer facilement nos conteneurs Docker, images, volumes, réseaux, et plus encore. Il est également utile pour déboguer les problèmes liés aux conteneurs et aux images.

:::info
Portainer est disponible sur [portainer.byniwee.cloud](https://portainer.byniwee.cloud)
:: :

:::attention
L'accès à l'instance de Portainer est limité aux administrateurs des serveurs NW. Si vous avez besoin d'un accès, veuillez contacter [Nicolas Boyer](mailto:nicolas@niwee.fr).
:: :

## Docker

Docker est une plateforme de conteneurisation qui permet de déployer et de gérer facilement des applications. Il s'agit d'une alternative légère aux machines virtuelles. Les conteneurs Docker sont construits à partir d'images, qui sont essentiellement des modèles pour le conteneur. Les images Docker sont construites à partir de Dockerfiles, qui sont des fichiers texte contenant un ensemble d'instructions pour la construction d'une image. Les Dockerfiles sont écrits dans une syntaxe simple et lisible par l'homme, et peuvent être contrôlés par version comme n'importe quel autre code.

Chaque service sur l'un des serveurs ci-dessus est géré par Docker. Cela nous permet de déployer et de gérer facilement les services, mais aussi de les faire évoluer en fonction des besoins.

:::danger UNE NOTE SUR LA SÉCURITÉ
Pour pouvoir vous connecter aux serveurs NW, vous devez suivre les guides suivants. L'accès à ces serveurs est limité à des procédures spécifiques. Toute modification de ces procédures entraînera la révocation immédiate de votre accès aux serveurs jusqu'à nouvel ordre.
:: :

## Chemins de sauvegarde

### Tous les serveurs

- `/var/lib/mysql`
- `/home/web/public_html`
- `/var/data/portainer`

### NW1

- `/var/data/registry`
