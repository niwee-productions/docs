---
titre : Clés SSH
slug : /ssh-keys
sidebar_label : Clés SSH
---
# Clés SSH

Les clés SSH sont utilisées pour authentifier les utilisateurs sur un serveur NW. Elles sont utilisées à la place des mots de passe, qui sont moins sûrs.
L'authentification par mot de passe est désactivée par défaut sur les serveurs NW.

:::caution Authentification par mot de passe
L'authentification par mot de passe est DÉSACTIVÉE. Il n'est pas possible de se connecter à un serveur NW à l'aide d'un mot de passe. Vous devez utiliser une clé SSH.
L'activation de l'authentification par mot de passe est INTERDITE.
:: :

## Récupération de la clé SSH principale

La clé SSH principale ne peut être récupérée qu'en s'adressant à l'administrateur du serveur NW : Nicolas Boyer.

### Politique

* La clé SSH ne doit être utilisée que pour se connecter au serveur NW.
* La clé SSH doit être gardée secrète.
* La clé SSH doit être stockée dans un endroit sûr, dans notre cas : le coffre-fort de [1Password](https://niwee.1password.com/).

### Téléchargement de la clé SSH

Une fois que vous avez accès à la clé dans le coffre-fort de 1Password, vous pouvez la télécharger en cliquant sur le bouton "Télécharger".
Vous devez ensuite la placer dans le dossier `~/.ssh` de votre ordinateur sous le nom `id_rsa_nw`.

## Ajouter la clé SSH à votre agent SSH

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

## Générer la clé publique

```sh
ssh-keygen -y -f ~/.ssh/id_rsa_nw > ~/.ssh/id_rsa_nw.pub
```