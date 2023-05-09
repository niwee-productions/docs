---
Titel: SSH-Schlüssel
slug: /ssh-schluessel
sidebar_label: SSH-Schlüssel
---
# SSH-Schlüssel

SSH-Schlüssel werden verwendet, um Benutzer bei einem NW Server zu authentifizieren. Sie werden anstelle von Passwörtern verwendet, die weniger sicher sind.
Die Passwortauthentifizierung ist auf NW-Servern standardmäßig deaktiviert.

:::caution Kennwort-Authentifizierung
Die Kennwortauthentifizierung ist DEAKTIVIERT. Es ist nicht möglich, sich mit einem Kennwort bei einem NW Server anzumelden. Sie müssen einen SSH-Schlüssel verwenden.
Das Aktivieren der Passwort-Authentifizierung ist VERBOTEN.
:::

## Abrufen des SSH-Hauptschlüssels

Der Haupt-SSH-Schlüssel kann nur vom NW-Server-Administrator : Nicolas Boyer abgefragt werden.

### Richtlinie

* Der SSH-Schlüssel darf nur für die Verbindung zum NW Server verwendet werden.
* Der SSH-Schlüssel muss geheim gehalten werden.
* Der SSH-Schlüssel muss an einem sicheren Ort aufbewahrt werden, in unserem Fall im [1Password](https://niwee.1password.com/) Tresor.

### Herunterladen des SSH-Schlüssels

Sobald Sie Zugriff auf den Schlüssel im 1Password-Tresor haben, können Sie ihn herunterladen, indem Sie auf die Schaltfläche "Herunterladen" klicken.
Sie müssen ihn dann im Ordner `~/.ssh` auf Ihrem Computer unter dem Namen `id_rsa_nw` ablegen.

## Hinzufügen des SSH-Schlüssels zu Ihrem SSH-Agenten

### Linux

```sh
chmod 600 ~/.ssh/id_rsa_nw
eval `ssh-agent -s`
ssh-add ~/.ssh/id_rsa_nw
```

### Windows

```Powershell
ssh-add ~/.ssh/id_rsa_nw
```

## Öffentlichen Schlüssel generieren

```sh
ssh-keygen -y -f ~/.ssh/id_rsa_nw > ~/.ssh/id_rsa_nw.pub
```