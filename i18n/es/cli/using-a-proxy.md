# Utilizar un proxy

El soporte para proxy está incorporado en el CLI de NiWee. Los ajustes de proxy se pueden configurar a través del archivo de configuración o una variable de entorno.

Para configurar los ajustes del proxy a través del archivo de configuración, ejecute lo siguiente con la URL del servidor proxy:

```shell
niwee config set -g proxy http://proxy.example.com:8888
```

Para configurar el proxy a través de una variable de entorno, utilice una de las siguientes opciones:

```shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # también usado por npm
$ export HTTPS_PROXY="https://proxy.example.com:8888" # también utilizado por npm
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### Otras CLIs

Cada CLI que utilices debe configurarse por separado para proxyar las peticiones de red.

#### npm

```shell
npm config set proxy http://proxy.company.com:8888
```

#### git

```shell
git config --global http.proxy http://proxy.example.com:8888
```

### Configuración SSL

El CLI de NiWee puede ser configurado para usar varios ajustes SSL para peticiones HTTP.

```shell
$ niwee config set -g ssl.cafile /path/to/cafile # ruta a tu certificado raíz CA
$ niwee config set -g ssl.certfile /path/to/certfile # ruta al certificado del cliente
$ niwee config set -g ssl.keyfile /path/to/keyfile # ruta a un archivo de claves de cliente
```

Las entradas `cafile`, `certfile` y `keyfile` pueden editarse manualmente como matrices de cadenas en `~/.niwee/config.json` para incluir varios archivos.
