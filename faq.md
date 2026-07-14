# FAQ

## Does Poji include manga?

No. Poji is only a reader for files you provide.

## What file type should I use?

Use `.cbz` files. A CBZ is a ZIP archive of image pages with a comic-book file extension.

## Why did my volume import as one chapter?

Poji groups chapters when it can detect chapter numbers in the image file names. If the pages do not include chapter-style numbering, Poji treats the archive as a full volume.

## Where is my library stored?

Poji stores library metadata and progress in your browser. Depending on your storage setting, it either keeps file handles for your original CBZ files or stores archive data in IndexedDB.

## Why is Poji asking for file permission again?

Browsers may require renewed permission before a site can read a local file handle. Granting access lets Poji reopen the CBZ you imported earlier.

## Is AniList required?

No. AniList is optional. Poji works as a local reader without signing in.

## Why does the library not show cover art?

Poji's UI is minimal and opinionated by design.

If there's enough demand, a more traditional library view may be added later as an option.

## Why is Poji a website instead of a native app?

Running in the browser makes Poji cross-platform and removes the install step. The same library experience can work across desktop operating systems and other supported browsers without maintaining a separate native app for each platform.
