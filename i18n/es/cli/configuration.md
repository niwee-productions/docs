---
título: Configuración
---

<head>
  <title>Configuración del condensador | Mantener un archivo de configuración global</title>
  <meta
    name="descripción"
    content="Establecer e imprimir valores de configuración de los archivos de configuración del proyecto y el archivo de configuración global CLI con Ionic CLI. Lee para aprender más sobre la configuración de Capacitor."
  />
</head>

## Archivos

Los valores de configuración se almacenan en archivos JSON. La CLI de Ionic mantiene un archivo de configuración global, normalmente localizado en `~/.ionic/config.json`, y archivos de configuración de proyecto, normalmente en el directorio raíz del proyecto como `ionic.config.json`.

La CLI proporciona comandos para establecer e imprimir los valores de configuración de los archivos de configuración del proyecto y el archivo de configuración global de la CLI. Vea `ionic config --help` o consulte la documentación para el uso de [`ionic config get`](commands/config-get.md) y [`ionic config set`](commands/config-set.md).

### Archivo de configuración del proyecto

Cada proyecto Ionic tiene un archivo de configuración, normalmente en el directorio raíz del proyecto. El siguiente es un archivo `ionic.config.json` anotado.

```json
{
  // El nombre legible de la aplicación.
  "nombre": "Mi App",

  // El tipo de proyecto de la app. La CLI utiliza este valor para determinar qué
  // comandos y opciones de comandos están disponibles, qué mostrar en la documentación de ayuda
  // documentación, y qué utilizar para las construcciones de activos web y el servidor dev.
  "type": "angular",

  // El ID de la aplicación para Appflow.
  "id": "abc123",

  // Objeto de configuración para integraciones como Cordova y Capacitor.
  "integrations": {
    "cordova": {
      ...
    }
  },

  // Configuración de hooks--ver la sección Hooks más abajo para más detalles.
  "hooks": {
    ...
  }
}
```

## Variables de entorno

El CLI buscará las siguientes variables de entorno:

- `IONIC_CONFIG_DIRECTORY`: El directorio de la configuración global de la CLI. Por defecto es `~/.ionic`.
- `IONIC_HTTP_PROXY`: Establecer una dirección URL para proxy todas las solicitudes de CLI a través de. Ver [Usando un Proxy](using-a-proxy.md).
- `IONIC_TOKEN`: Autentica automáticamente con [Appflow](https://ionic.io/appflow).

## Banderas

Las banderas CLI son opciones globales que alteran el comportamiento de un comando CLI.

- `--help`: En lugar de ejecutar el comando, ver su página de ayuda.
- `--verbose`: Muestra todos los mensajes de registro con fines de depuración.
- `--quiet`: Sólo muestra los mensajes de registro `WARN` y `ERROR`.
- `--no-interactive`: Desactiva los mensajes interactivos. Si CI o un terminal no-TTY es detectado, el CLI es automáticamente no-interactivo.
- `--confirm`: Activa la confirmación automática de los mensajes de confirmación. Cuidado: el CLI pregunta antes de hacer algo potencialmente dañino. La auto-confirmación puede tener resultados no deseados.

## Ganchos

El CLI puede ejecutar scripts durante ciertos eventos, como antes y después de las construcciones. Para engancharse al CLI, los siguientes [npm scripts](https://docs.npmjs.com/misc/scripts) pueden ser usados en `package.json`:

- `ionic:serve:before`: se ejecuta antes de que se inicie el servidor de desarrollo
- `ionic:serve:after`: se ejecuta una vez finalizado el servidor de desarrollo
- `ionic:build:before`: se ejecuta antes de que comience la compilación de un activo web
- `ionic:build:after`: se ejecuta una vez finalizada la compilación de un recurso web
- `ionic:capacitor:run:before`: ejecutado durante `ionic capacitor run` antes de que se ejecute capacitor open
- `ionic:capacitor:build:before`: se ejecuta durante `ionic capacitor build` antes de que se ejecute capacitor open
- `ionic:capacitor:sync:after`: ejecutado durante `ionic capacitor sync` después de una sincronización

Cuando se utiliza un script de shell para cualquiera de los hooks, el contexto del hook se define en variables de entorno prefijadas con `IONIC_CLI_HOOK_CTX_`.

El siguiente ejemplo muestra las variables de entorno que se establecen para el hook `ionic:capacitor:build`.

```shell
IONIC_CLI_HOOK_CTX_NAME=capacitor:build:before
IONIC_CLI_HOOK_CTX_BUILD_CORDOVA_ASSETS=true
IONIC_CLI_HOOK_CTX_BUILD_ENGINE=navegador
IONIC_CLI_HOOK_CTX_BUILD_PROJECT=app
IONIC_CLI_HOOK_CTX_BUILD_TYPE=angular
IONIC_CLI_HOOK_CTX_BUILD_VERBOSE=false
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_ID=io.ionic.starter
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_NAME=ionic-starter-app
IONIC_CLI_HOOK_CTX_CAPACITOR_VERBOSE=false
```

Los ganchos también se pueden definir en `ionic.config.json`. Define un objeto `hooks` dentro del proyecto, donde cada clave es el nombre del hook (sin el prefijo `ionic:`), y el valor es una ruta a un archivo JavaScript o un array de rutas.

En el siguiente ejemplo, el archivo se importa y ejecuta durante el hook `ionic:build:before`.

```json
"hooks": {
  "build:before": "./scripts/build-before.js"
},
```

Los archivos hook de JavaScript deben exportar una única función, a la que se le pasa un único argumento (`ctx`) cada vez que se ejecuta el hook.

El argumento es el contexto dado al archivo hook, que difiere de un hook a otro y con diferentes invocaciones.

`./scripts/build-before.js`:

``javascript
module.exports = function (ctx) {
  console.log(ctx);
};
```

## Proyectos Multi-app

<small>
  <em>Disponible en CLI 6.2.0+</em>
</small>

La CLI de Ionic soporta una configuración multi-app, que involucra múltiples apps de Ionic y código compartido dentro de un único repositorio, o [monorepo](../reference/glossary.md#monorepo).

:::nota
Estos documentos dan una visión general de la característica multi-app de Ionic CLI, pero no entran en detalles para cada framework.

Si estás usando Angular, por favor mira [este artículo](https://github.com/ionic-team/ionic-cli/wiki/Angular-Monorepo) para ejemplos.
:::

### Pasos de Configuración

1. Crear un directorio e inicializar un monorepo (ver [Estructura del Proyecto](#estructura-del-proyecto) para más detalles).
1. Inicializa el monorepo como un proyecto Ionic multi-app. Esto creará un archivo multi-app `ionic.config.json`. Ver [Config File](#config-file) para más detalles.

   ```shell
   $ ionic init --multi-app
   ```

1. Usa `ionic start` para crear aplicaciones Ionic o `ionic init` para inicializar aplicaciones existentes (ver [Añadir una aplicación](#adding-an-app) para más detalles).

### Estructura del proyecto

En un proyecto multi-app, la estructura del proyecto es flexible. El único requisito es un archivo multi-app `ionic.config.json` en la raíz del repositorio.

A continuación se muestra un ejemplo de configuración, donde las aplicaciones en el directorio `apps/` están separadas del código compartido en el directorio `lib/`. Observa el archivo raíz `ionic.config.json` y el archivo monorepo `package.json`.

``bash
apps/
├── myApp/
└── miOtraApp/
lib/
ionic.config.json
package.json
```

### Config File

En un proyecto multiaplicación, las aplicaciones comparten un único archivo `ionic.config.json` en la raíz del repositorio en lugar de que cada aplicación tenga el suyo propio. El archivo de configuración multiaplicación contiene la configuración para cada aplicación anidando objetos de configuración en un objeto `projects`. Se puede especificar una aplicación por defecto utilizando `defaultProject`.

A continuación se muestra un archivo de ejemplo, que corresponde a la estructura del archivo anterior.

```json
{
  "defaultProject": "myApp",
  "projects": {
    "miApp": {
      "name": "Mi App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myApp"
    },
    "miOtraApp": {
      "name": "Mi Otra App",
      "integrations": {},
      "type": "angular",
      "root": "apps/miOtraApp"
    }
  }
}
```

Cuando se detecta un proyecto multi-app, el CLI de Ionic operará bajo el contexto de una app configurada en la raíz `ionic.config.json`. El criterio de selección del proyecto es el siguiente:

1. Si se especifica la opción global CLI `--project`, el proyecto se busca por clave en el objeto `projects`. Por ejemplo, `--project=myApp` seleccionará el proyecto `myApp`.
1. Si la CLI detecta que se está ejecutando dentro de una ruta de proyecto, configurada con la clave `root`, seleccionará el proyecto correspondiente. Por ejemplo, usando el CLI dentro del directorio `apps/myOtherApp/src` seleccionará el proyecto `myOtherApp`.
1. Si se especifica un `defaultProject` en `ionic.config.json`, se seleccionará el proyecto especificado cuando no se cumplan los criterios anteriores.

### Añadir una aplicación

Las aplicaciones pueden registrarse en un proyecto multiaplicación utilizando `ionic start` para crear nuevas aplicaciones o `ionic init` para inicializar aplicaciones existentes.

#### Usar `ionic start`

Si se detecta un proyecto multi-app durante `ionic start`, la CLI añadirá la configuración de la app al archivo raíz `ionic.config.json` en lugar de crear uno específico para el proyecto.

La instalación de dependencias se puede omitir usando `--no-deps` si las dependencias se elevan a la raíz del monorepo.

```shell
$ cd apps/
$ ionic start "Mi Nueva App" --no-deps
```

#### Usando `ionic init`

Si una aplicación fue creada de una forma distinta a `ionic start`, por ejemplo usando una plantilla precompilada, usa `ionic init` para registrar la aplicación existente en el proyecto multiaplicación.

Nota
Asegúrate de que la aplicación no tiene un `ionic.config.json` existente.
:::

```shell
$ cd apps/existing-app/
$ ionic init
```

## Configuración avanzada

### Anulación de la compilación

Normalmente, el CLI ejecuta un conjunto de comandos basados en el tipo de proyecto. Por ejemplo, la construcción estándar de activos web para proyectos Angular es `ng run app:build`. La construcción de activos web puede ser anulada y `ionic build` puede seguir siendo utilizado mediante la utilización de `ionic:build` [npm script](https://docs.npmjs.com/misc/scripts). Del mismo modo, el servidor de desarrollo puede ser anulado mediante el uso de la `ionic:serve` npm script.

Preste mucha atención a las banderas suministradas a la secuencia de comandos por la CLI de Ionic. Irregularidades pueden ocurrir si las opciones no son respetadas, especialmente para livereload en dispositivos.

### Opciones de Comando

Las opciones de comando pueden ser expresadas con variables de entorno. Normalmente se establecen con la sintaxis `--opt=value`. El nombre de estas variables de entorno sigue un patrón: empieza por `IONIC_CMDOPTS_`, añade el nombre de la orden (sustituyendo los espacios por guiones bajos), añade el nombre de la opción (sustituyendo los guiones por guiones bajos), y luego escribe todo en mayúsculas. Los indicadores booleanos (opciones de la línea de comandos que no tienen valor) pueden establecerse como `1` o `0`. Elimina el prefijo `--no-` de las opciones booleanas, si existe (`--no-open` en ionic serve puede expresarse con `IONIC_CMDOPTS_SERVE_OPEN=0`, por ejemplo).

Por ejemplo, las opciones de comando en `ionic cordova run ios -lc --livereload-port=1234 --host=0.0.0.0` también se pueden expresar con esta serie de variables de entorno:

```shell
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export IONIC_CMDOPTS_CORDOVA_RUN_HOST=0.0.0.0
```

Si se establecen estas variables en el entorno, `ionic cordova build ios` utilizará los nuevos valores predeterminados para sus opciones.

### Telemetría

La CLI envía datos de uso a Ionic para crear una mejor experiencia. Para desactivar esta funcionalidad, ejecute `ionic config set -g telemetry false`.
