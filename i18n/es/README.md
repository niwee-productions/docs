---
título: Léame
slug: /readme
sidebar_label: Léame
hide_table_of_contents: false
---
# Carpeta Docs

La carpeta `/docs` contiene todos los archivos markdown. La estructura de la página se corresponde vagamente con el enrutamiento en el sitio, ya que las rutas se pueden cambiar en el frontmatter.

## Versionado

Esta carpeta también puede contener componentes, activos y cualquier otra cosa que deba ser versionada cuando se ejecute el script de versionado de docusaurus. Por ejemplo, si hay un componente de página que sólo es relevante para la sección `layout` en la versión actual de NiWee, podría ser añadido a una carpeta `_components/` en `docs/layout/`. Cuando se ejecute el script de versionado, el componente se copiará a `versioned_docs/verion-{X}/layout/_components/` y ahora habrá un componente separado en `docs/layout/_components/` que puede ser borrado o actualizado a la última versión. El mismo concepto se aplica a las imágenes y otros archivos.

Si los componentes están destinados a ser compartidos entre versiones, se pueden poner en `src/components/`. Si las imágenes y otros archivos servidos están destinados a ser compartidos a través de versiones que se pueden poner en `static/`.

## Archivos autogenerados

Todos los archivos markdown en estos directorios son generados desde [scripts](/scripts):

- `docs/api/`
- `docs/cli/commands/`
- `docs/native/`
