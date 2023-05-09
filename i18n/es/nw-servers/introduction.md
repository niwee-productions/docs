---
título: Acerca de los servidores NW
slug: /introducción
sidebar_label: Intro
---

# Acerca de NW Servers

## Hoja de ruta

- [ ] Implantar la Intranet a través de Firezone

## Actualmente hay 3 Servidores NW

- [NW1](https://nw1.byniwee.cloud) - El Servidor Principal
- [NW2](https://nw2.byniwee.cloud) - El Servidor Git
- NWM](https://nwm.byniwee.cloud) - El Servidor de Correo

## Próximos servidores (aún no disponibles)

- NW3](https://nw3.byniwee.cloud) - El servidor VPN
- NW4](https://nw4.byniwee.cloud) - El Primer Servidor de Copias de Seguridad
- NW5](https://nw5.byniwee.cloud) - El segundo servidor de copia de seguridad
- NW6](https://nw7.byniwee.cloud) - El Servidor de Base de Datos
- NW6](https://nw8.byniwee.cloud) - El Servidor de Replicación de Base de Datos
- NW7](https://nw9.byniwee.cloud) - El servidor de caché
- NW8](https://nw10.byniwee.cloud) - El Servidor de Colas
- NW9](https://nw11.byniwee.cloud) - Servidor de supervisión

## Contenedor

Todas las instancias anteriores son y/o serán gestionadas a través de Docker con [Portainer](https://www.portainer.io/). Portainer es una interfaz de usuario de gestión ligera que nos permite gestionar fácilmente nuestros contenedores Docker, imágenes, volúmenes, redes y mucho más. También es útil para depurar problemas con contenedores e imágenes.

:::info
Portainer está disponible en [portainer.byniwee.cloud](https://portainer.byniwee.cloud)
:::

:::precaución
El acceso a la instancia de Portainer está restringido a los administradores de los Servidores NW. Si necesita acceso, póngase en contacto con [Nicolas Boyer](mailto:nicolas@niwee.fr).
:::

## Docker

Docker es una plataforma de contenedorización que nos permite desplegar y gestionar aplicaciones fácilmente. Es una alternativa ligera a las máquinas virtuales. Los contenedores Docker se construyen a partir de imágenes, que son esencialmente plantillas para el contenedor. Las imágenes Docker se construyen a partir de Dockerfiles, que son archivos de texto que contienen un conjunto de instrucciones para construir una imagen. Los archivos Docker están escritos en una sintaxis sencilla y legible, y pueden controlarse como cualquier otro código.

Todos los servicios de cualquiera de los servidores anteriores se gestionan a través de Docker. Esto nos permite desplegar y gestionar fácilmente los servicios, y también nos permite escalar fácilmente los servicios hacia arriba o hacia abajo según sea necesario.

:::peligro una nota sobre seguridad
Para poder conectarse a los servidores NW, debe seguir las siguientes guías. El acceso a estos servidores está restringido únicamente a procedimientos específicos. La modificación de estos procedimientos supondrá la revocación inmediata de su acceso a los servidores hasta nuevo aviso.
:::

## Rutas de Copia de Seguridad

### Todos los Servidores

- `/var/lib/mysql`
- home/web/public_html
- `/var/data/portainer`

### NW1

- `/var/data/registry`
