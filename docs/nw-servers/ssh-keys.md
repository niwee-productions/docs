---
title: SSH Keys
slug: /ssh-keys
sidebar_label: SSH Keys
---
# SSH Keys

SSH keys are used to authenticate users to a NW Server. They are used in place of passwords, which are less secure.
Password authentication is disabled by default on NW Servers.

:::warning Password Authentication
Password authentication is DISABLED. It is not possible to log in to a NW Server using a password. You must use an SSH key.
Enabling password authentication is FORBIDDEN.
:::

## Retrieving the main SSH key

The main SSH Key can only be retrieved by asking the NW Server administrator : Nicolas Boyer.

### Policy

* THe SSH key is to be used only for the purpose of connecting to the NW Server.
* The SSH key is to be kept secret.
* The SSH key needs to be stored in a secure location, in our case : the [1Password](https://niwee.1password.com/) vault.

### Downloading the SSH key

Once your have access to the key in the 1Password vault, you can download it by clicking on the "Download" button.
You then need to place it in the `~/.ssh` folder of your computer under the name `id_rsa_nw`.

## Adding the SSH key to your SSH agent

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

## Generate Public Key

```sh
ssh-keygen -y -f ~/.ssh/id_rsa_nw > ~/.ssh/id_rsa_nw.pub
```