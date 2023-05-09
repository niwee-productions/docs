---
Titel: Über NW Server
slug: /introduction
sidebar_label: Intro
---

# Über NW Servers

## Fahrplan

- Implementierung des Intranets über Firezone

## Derzeit gibt es 3 NW-Server

- [NW1](https://nw1.byniwee.cloud) - Der Hauptserver
- [NW2](https://nw2.byniwee.cloud) - Der Git-Server
- [NWM](https://nwm.byniwee.cloud) - Der Mail-Server

## Zukünftige Server (noch nicht verfügbar)

- [NW3](https://nw3.byniwee.cloud) - Der VPN-Server
- [NW4](https://nw4.byniwee.cloud) - Der erste Sicherungsserver
- [NW5](https://nw5.byniwee.cloud) - Der zweite Sicherungsserver
- [NW6](https://nw7.byniwee.cloud) - Der Datenbank-Server
- [NW6](https://nw8.byniwee.cloud) - Der Datenbank-Replikationsserver
- [NW7](https://nw9.byniwee.cloud) - Der Cache-Server
- [NW8](https://nw10.byniwee.cloud) - Der Warteschlangen-Server
- [NW9](https://nw11.byniwee.cloud) - Der Überwachungsserver

## Portainer

Alle oben genannten Instanzen sind und/oder werden über Docker mit [Portainer](https://www.portainer.io/) verwaltet. Portainer ist eine leichtgewichtige Verwaltungsoberfläche, die es uns ermöglicht, unsere Docker-Container, Images, Volumes, Netzwerke und vieles mehr einfach zu verwalten. Es ist auch nützlich für das Debuggen von Problemen mit Containern und Images.

:::info
Portainer ist verfügbar unter [portainer.byniwee.cloud](https://portainer.byniwee.cloud)
:::

:::caution
Der Zugriff auf die Portainer-Instanz ist auf die Administratoren des NW Servers beschränkt. Wenn Sie Zugang benötigen, kontaktieren Sie bitte [Nicolas Boyer](mailto:nicolas@niwee.fr).
:::

## Docker

Docker ist eine Containerisierungsplattform, die es uns ermöglicht, Anwendungen auf einfache Weise bereitzustellen und zu verwalten. Sie ist eine leichtgewichtige Alternative zu virtuellen Maschinen. Docker-Container werden aus Images erstellt, die im Wesentlichen Vorlagen für den Container sind. Docker-Images werden aus Dockerfiles erstellt, das sind Textdateien, die eine Reihe von Anweisungen für die Erstellung eines Images enthalten. Dockerdateien sind in einer einfachen, für Menschen lesbaren Syntax geschrieben und können wie jeder andere Code versioniert werden.

Jeder Dienst auf einem der oben genannten Server wird über Docker verwaltet. Dies ermöglicht uns eine einfache Bereitstellung und Verwaltung von Diensten sowie eine einfache Skalierung von Diensten nach Bedarf.

:::Gefahr EIN HINWEIS ZUR SICHERHEIT
Um eine Verbindung zu den NW-Servern herstellen zu können, müssen Sie die folgenden Anleitungen befolgen. Der Zugang zu diesen Servern ist nur auf bestimmte Verfahren beschränkt. Eine Änderung dieser Verfahren führt zum sofortigen Entzug Ihres Zugangs zu den Servern bis auf weiteres.
:::

## Sicherungspfade

### Alle Server

- `/var/lib/mysql`
- `/home/web/public_html`
- `/var/data/portainer`

### NW1

- `/var/data/registry`
