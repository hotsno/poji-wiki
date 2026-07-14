# About Poji

Poji is a browser-based manga reader for locally supplied CBZ files.

CBZ files can preserve cleaner images than many manga sites, including official services that often serve more compressed pages. But high-resolution pages also make "bad" image scaling more obvious: many readers introduce [Moiré](https://en.wikipedia.org/wiki/Moir%C3%A9_pattern) artifacts that can make detailed screen tones unpleasant to read.

Some apps handle resizing well, but the rest of the workflow was still missing. I wanted bidirectional AniList syncing, chapter splitting inside CBZ volumes, a browser-based reader, and a cross-platform experience. Poji was built to bring those pieces together.

## What Poji Does

- Imports `.cbz` and compatible `.zip` archives.
- Groups volumes into manga series based on file names.
- Detects chapters inside archives when page names include chapter-style numbering.
- Uses Lanczos resizing to reduce Moiré artifacts while reading.
- Stores your local library and reading progress in the browser.
- Lets you choose left-to-right or right-to-left page navigation.
- Optionally connects to AniList for matching, cover art, and chapter progress sync.

## What Poji Does Not Do

- Poji does not provide manga files.
- Poji does not host or distribute manga.
- Poji does not search the web for manga sources.
