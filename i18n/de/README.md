---
Titel: Liesmich
slug: /readme
sidebar_label: Liesmich
hide_table_of_contents: false
---
# Ordner Docs

Der Ordner `/docs` enthält alle Markdown-Dateien. Die Seitenstruktur entspricht in etwa dem Routing auf der Website, da die Pfade im Frontmatter geändert werden können.

## Versionierung

Dieser Ordner kann auch Komponenten, Assets und alles andere enthalten, das versioniert werden soll, wenn das docusaurus versioning script ausgeführt wird. Wenn es zum Beispiel eine Seitenkomponente gibt, die in der aktuellen Version von NiWee nur für den Abschnitt "Layout" relevant ist, könnte sie zu einem Ordner "Komponenten/" in "docs/layout/" hinzugefügt werden. Wenn das Versionierungsskript ausgeführt wird, wird die Komponente nach `versioned_docs/verion-{X}/layout/_components/` kopiert und es gibt nun eine separate Komponente in `docs/layout/_components/`, die gelöscht oder auf die neueste Version aktualisiert werden kann. Das gleiche Konzept gilt für Bilder und andere Dateien.

Wenn Komponenten über Versionen hinweg gemeinsam genutzt werden sollen, können sie in `src/components/` abgelegt werden. Wenn Bilder und andere Dateien über Versionen hinweg gemeinsam genutzt werden sollen, können sie in `static/` abgelegt werden.

## Automatisch generierte Dateien

Alle Markdown-Dateien in diesen Verzeichnissen werden von [scripts](/scripts) generiert:

- `docs/api/`
- `docs/cli/befehle/`
- `docs/native/`
