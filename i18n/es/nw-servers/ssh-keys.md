---
título: Claves SSH
slug: /ssh-keys
sidebar_label: Claves SSH
---
# Claves SSH

Las claves SSH se utilizan para autenticar usuarios en un Servidor NW. Se utilizan en lugar de contraseñas, que son menos seguras.
La autenticación por contraseña está desactivada por defecto en los Servidores NW.

:::caution Autenticación de Contraseña
La autenticación por contraseña está DESHABILITADA. No es posible iniciar sesión en un Servidor NW utilizando una contraseña. Debe utilizar una clave SSH.
Habilitar la autenticación por contraseña está PROHIBIDO.
:::

## Recuperación de la clave SSH principal

La clave SSH principal sólo puede ser recuperada preguntando al administrador del Servidor NW : Nicolas Boyer.

### Política

* La clave SSH sólo debe utilizarse para conectarse al Servidor NW.
* La clave SSH debe mantenerse en secreto.
* La clave SSH debe ser almacenada en un lugar seguro, en nuestro caso: la bóveda [1Password](https://niwee.1password.com/).

### Descarga de la clave SSH

Una vez que tenga acceso a la clave en la bóveda de 1Password, puede descargarla haciendo clic en el botón "Descargar".
A continuación, debe colocarla en la carpeta `~/.ssh` de su ordenador con el nombre `id_rsa_nw`.

## Añadir la clave SSH a su agente SSH

### Linux

```sh
chmod 600 ~/.ssh/id_rsa_nw
eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa_nw
```

### Windows

```powershell
ssh-add ~/.ssh/id_rsa_nw
```

## Generar clave pública

```sh
ssh-keygen -y -f ~/.ssh/id_rsa_nw > ~/.ssh/id_rsa_nw.pub
```