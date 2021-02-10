# tw-resume

This is a printable resume structure built with TailwindCSS.

## Download

Use the package manager [npm](https://www.npmjs.com/) to install necessary dependencies

```bash
npm run install
```

## Usage

Page is set to print in A4 size by default **in Chrome only** (Firefox page print settings mean it cannot print a full-bleed PDF)

This is set by code in css/styles.css:
```
@media print {
    body {
        width: 21cm;
        height: 29cm;
        margin: 0 0 0 0;
        /* change the margins as you want them to be. */
    }
}
```

Open in Chrome browser and in 'More Settings' make sure print margins are set to none (this should also erase the checkbox 'print headers and footers')

Tick 'Background Graphics' checkbox to print with background image (currently a white textured bg). Leave unticked to print plain white background.
