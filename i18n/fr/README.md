---
titre : Readme
slug : /readme
sidebar_label : Readme
hide_table_of_contents : false
---
# Dossier Docs

Le dossier `/docs` contient tous les fichiers markdown. La structure des pages correspond vaguement au routage du site puisque les chemins peuvent être changés dans le frontmatter.

## Versioning

Ce dossier peut également contenir des composants, des actifs, et tout ce qui est destiné à être versionné lorsque le script de versionnement de docusaurus est exécuté. Par exemple, s'il y a un composant de page qui n'est pertinent que pour la section `layout` dans la version actuelle de NiWee, il pourrait être ajouté à un dossier `_components/` dans `docs/layout/`. Quand le script de versioning est exécuté, le composant sera copié dans `versioned_docs/verion-{X}/layout/_components/` et il y aura maintenant un composant séparé dans `docs/layout/_components/` qui peut être supprimé ou mis à jour à la dernière version. Le même concept s'applique aux images et aux autres fichiers.

Si les composants sont destinés à être partagés entre plusieurs versions, ils peuvent être placés dans `src/components/`. Si les images et autres fichiers servis sont destinés à être partagés entre les versions, ils peuvent être placés dans `static/`.

## Fichiers générés automatiquement

Tous les fichiers markdown de ces répertoires sont générés à partir de [scripts](/scripts) :

- `docs/api/`
- `docs/cli/commandes/`
- `docs/native/`
