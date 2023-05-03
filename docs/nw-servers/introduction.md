---
title: About NW Servers
---

# About NW Servers

## Roadmap

- [ ] Implement the Intranet via Firezone

## There are currently 3 NW Servers

- [NW1](https://nw1.byniwee.cloud) - The Main server
- [NW2](https://nw2.byniwee.cloud) - The Git Server
- [NWM](https://nwm.byniwee.cloud) - The Mail Server

## Upcoming servers (not yet available)

- [NW3](https://nw3.byniwee.cloud) - The VPN Server
- [NW4](https://nw4.byniwee.cloud) - The First Backup Server
- [NW5](https://nw5.byniwee.cloud) - The Second Backup Server
- [NW6](https://nw7.byniwee.cloud) - The Database Server
- [NW6](https://nw8.byniwee.cloud) - The Database Replication Server
- [NW7](https://nw9.byniwee.cloud) - The Cache Server
- [NW8](https://nw10.byniwee.cloud) - The Queue Server
- [NW9](https://nw11.byniwee.cloud) - The Monitoring Server

## Portainer

All of the above instances are and/or will be managed via Docker with [Portainer](https://www.portainer.io/). Portainer is a lightweight management UI which allows us to easily manage our Docker containers, images, volumes, networks, and more. It is also useful for debugging issues with containers and images.

:::info
Portainer is available at [portainer.byniwee.cloud](https://portainer.byniwee.cloud)
:::

:::warning
Access to the Portainer instance is restricted to the administrators of the NW Servers. If you need access, please contact [Nicolas Boyer](mailto:nicolas@niwee.fr).
:::

## Docker

Docker is a containerization platform that allows us to easily deploy and manage applications. It is a lightweight alternative to virtual machines. Docker containers are built from images, which are essentially templates for the container. Docker images are built from Dockerfiles, which are text files that contain a set of instructions for building an image. Dockerfiles are written in a simple, human-readable syntax, and can be version controlled just like any other code.

Every service on any of the above servers is managed through Docker. This allows us to easily deploy and manage services, and also allows us to easily scale services up or down as needed.

:::danger A NOTE ON SECURITY
To be able to connect to the NW Servers, you must follow the next guides. Access to these servers is restricted to specific procedures only. Modification of these procedures will result in the immediate revocation of your access to the servers until further notice.
:::

## Backup Paths

### All Servers

- `/var/lib/mysql`
- `/home/web/public_html`
- `/var/data/portainer`

### NW1

- `/var/data/registry`
