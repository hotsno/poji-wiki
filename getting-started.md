# Getting Started

Poji runs in the browser and reads manga archives that you provide.

## Import Volumes

1. Open Poji.
2. Import one or more `.cbz` files.
3. Wait for Poji to scan the archives and add them to your library.
4. Select a series, then open a volume or chapter.

Poji also accepts ZIP-style comic archives when they use the `.cbz` format.

## File Names

Poji uses the archive name to infer the series name and volume number.

Recommended volume names:

```text
Series Name v01.cbz
Series Name v02.cbz
```

If no volume number is found, Poji still imports the file and treats it as an unnumbered volume.

## Chapter Detection

Poji reads image files inside the CBZ and sorts pages naturally, so `page2` comes before `page10`.

When page names include chapter numbers like `c001`, Poji groups pages into chapters. If no chapter numbers are found, the archive is treated as one full-volume chapter.

## Storage

Poji supports two storage modes:

- **File System** keeps a browser file handle for each imported CBZ when the browser supports it.
- **IndexedDB** stores archive data inside the browser profile.

If Poji asks for permission to read a file again later, grant access so it can reopen the original CBZ.
