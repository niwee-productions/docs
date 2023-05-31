# Live Reload

Usando la opción Live Reload se recargará el navegador o [Web View](../core-concepts/webview.md) cuando cambies el código de tu aplicación en tu entorno de desarrollo. Esto es particularmente útil para desarrollar usando dispositivos de hardware.

## Términos

Live Reload es un término confuso. Con `niwee serve`, Live Reload sólo se refiere a recargar el navegador cuando se realizan cambios. Live Reload también se puede utilizar con Capacitor y Cordova para proporcionar la misma experiencia en dispositivos virtuales y de hardware, lo que elimina la necesidad de volver a desplegar un binario nativo.

## Uso

Dado que Live Reload requiere que la Vista Web cargue tu aplicación desde una URL alojada en tu ordenador en lugar de simplemente leer archivos en el dispositivo, configurar Live Reload para dispositivos hardware puede ser complicado.

Al igual que con los despliegues regulares de dispositivos, necesitarás un cable para conectar tu dispositivo a tu ordenador. La diferencia es que la CLI de NiWee configura la Vista Web para cargar tu aplicación desde el servidor de desarrollo en tu ordenador.

### Condensador

Para utilizar Live Reload con Capacitor, asegúrate de que estás utilizando un dispositivo virtual o un dispositivo de hardware conectado a la misma red Wi-Fi que tu ordenador. A continuación, tendrás que especificar que deseas utilizar una dirección IP externa para el servidor de desarrollo utilizando el indicador `--external`.

```shell
$ niwee capacitor run ios -l --external
$ niwee capacitor run android -l --external
```

:::nota
Recuerda, con la opción `--external`, otras personas en tu red Wi-Fi podrán acceder a tu aplicación.
:::

### :::Cordova

#### Android

Para dispositivos Android, el CLI de NiWee redireccionará automáticamente el puerto del servidor de desarrollo. Esto significa que puedes usar una dirección `localhost` y se referirá a tu ordenador cuando se cargue en la Vista Web, no al dispositivo.

El siguiente comando todo-en-uno iniciará un servidor live-reload en `localhost` y desplegará la aplicación en un dispositivo Android usando Cordova:

```shell
niwee cordova run android -l
```

#### iOS

Para los dispositivos iOS, el reenvío de puertos aún no es una opción. Esto significa que tendrás que conectar tu dispositivo a la misma red Wi-Fi que tu ordenador y utilizar una dirección externa para el servidor de desarrollo.

En algunos casos, el CLI de NiWee no sabrá la dirección con la que configurar la Vista Web, por lo que se te pedirá que selecciones una. Asegúrate de seleccionar la dirección de tu ordenador en tu red Wi-Fi.

El siguiente comando todo en uno iniciará un servidor live-reload en **todas las direcciones** y desplegará la app en un dispositivo iOS usando Cordova:

```shell
niwee cordova run ios -l --external
```

:::nota
Recuerda, con la opción `--external`, otras personas en tu red Wi-Fi podrán acceder a tu aplicación.
:::

## Consejos

- Con Cordova, utiliza las opciones `--device`, `--emulator` y `--target` para limitar los dispositivos de destino. Utilice la opción `--list` para listar todos los objetivos. Consulte el uso en [command docs](commands/cordova-run.md).
- Puede separar el proceso del servidor de desarrollo y el proceso de despliegue utilizando `niwee serve` y la opción `--livereload-url` de `niwee cordova run` o `niwee capacitor run`.
- Para Android, es posible configurar [adb](https://developer.android.com/studio/command-line/adb) para que siempre reenvíe puertos mientras el servidor adb está en ejecución (ver `adb reverse`). Con el reenvío de puertos configurado, ya no será necesaria una dirección externa. También puede configurar el puente adb sobre TCP de forma que los despliegues posteriores ya no necesiten un cable USB.

### Uso de SSL

Live reload utilizará HTTP por defecto, lo que hará que las APIs web que requieran un contexto seguro (como [web crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)) fallen. Para establecer un contexto seguro puede usar el argumento `--ssl` para usar HTTPS.

Por ejemplo, con una aplicación Angular puedes ejecutar lo siguiente para pasar un certificado y una clave privada y servir tu aplicación con HTTPS:
```shell
niwee capacitor run android --livereload --external --ssl -- --ssl-cert='servidor.crt' --ssl-key='servidor.key'
```

Utilizar un certificado autofirmado y asegurarse de que el dispositivo confía en él es un tema complicado que se trata en [este artículo](https://niwee.zendesk.com/hc/en-us/articles/11384425513623).