# Getting Started

Poji runs in the browser and reads manga archives that you provide.

## Import Volumes

1. Open Poji.
2. Import one or more `.cbz` files.
3. Wait for Poji to scan the archives and add them to your library.
4. Select a series, then open a volume or chapter.

## File Names

Poji uses the archive name to infer the series name and volume number.

Recommended volume names:

```text
Series Name v01.cbz
Series Name v02.cbz
```

If no volume number is found, Poji still imports the file and treats it as an unnumbered volume.

## Chapter Detection

When image files within the `.cbz` include chapter numbers like `c001`, Poji groups pages into chapters. If no chapter numbers are found, the archive is treated as one full-volume chapter.

## Storage

Poji supports two storage modes:

- **File System** uses the original `.cbz` file on your disk. As of now, only Chromium-based browsers support this well.
- **IndexedDB** creates a copy of the `.cbz` inside your browser's storage.

When using **File System** Poji may ask for permission to read a file again later. Chrome has the option to remember this permission forever.
