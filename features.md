# Features

Poji is deliberately small, but it already covers the core manga reading loop.

## Library

Imported volumes are grouped into series. You can reorder series, remove a series from the library, and add more volumes later.

Covers come from the first page of an imported volume by default. If you match a series with AniList, Poji can use the AniList cover instead.

The library UI is intentionally minimal. Poji favors a compact, text-first library over a traditional cover grid, so large collections stay quick to scan.

## Reader

The reader opens a single chapter at a time and displays pages on a canvas. It resizes pages to fit the viewport and preloads nearby pages to keep page turns responsive.

Poji uses Lanczos image resizing when drawing pages. This is especially useful for high-resolution images, where lower-quality resizing can introduce distracting Moiré patterns.

Reader controls include:

- Next and previous page navigation.
- Chapter start and chapter complete states.
- Continue to the next chapter.
- Save the original page image.
- Left-to-right or right-to-left reading direction.

## Progress

Poji saves local progress by series, chapter, and page. When you return to a manga, the library can open the next useful reading point.

If AniList sync is connected, Poji can also update manga chapter progress after you complete a chapter.

## Search

Search lets you quickly jump back into a manga from the library without expanding every series and volume manually.

## AniList

AniList support is optional. When connected, Poji can:

- Search AniList for manga matches.
- Store the matched AniList media ID for a series.
- Download cover art from AniList.
- Read existing AniList chapter progress.
- Save newer chapter progress back to AniList.

## Web App

Poji runs as a website, so it is available anywhere a supported browser can run it. There is no native app to install, no platform-specific library format, and no separate server to maintain for a personal collection.

## Image Quality

Many manga readers resize pages with faster filters that can make fine screen tones shimmer or form Moiré artifacts. Poji's Lanczos-based resizing is designed to keep high-quality CBZ scans readable without forcing you to fall back to lower-quality source images.

For comparison material, see:

- [Poji compared with another iOS manga reader](https://slow.pics/c/LSE8ivcs)
- [How several manga apps handle Moiré](https://slow.pics/c/5JzAn5w7)
