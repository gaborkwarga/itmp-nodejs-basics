# 1. modul workshop - NodeJS telepítése, egyszerű express project létrehozása

- NodeJS telepítése
- Projekt inicializálása
- Express telepítése
- Express szerver és egy GET endpoint létrehozása
- Legenerált projektfájlok tanulmányozása

## NodeJS telepítése

- Telepítsd a NodeJS-t [innen](https://nodejs.org/en)
- Ellenőrizd, hogy sikeresen települt-e:
  ```sh
  node -v
  npm -v
  ```

## Projekt inicializálása

- Készíts egy mappát a számítógépeden, ahova majd a projektfájlok fognak kerülni. Ezt a mappát nyisd meg VS Code-ban.
- Nyiss egy terminált, ami ebbe a mappába mutat. A legegyszerűbb VS Code-ban: **View > Terminal**
- Add ki az `npm init -y` parancsot. Ha elahogyod a `-y` flaget, akkor fel fog tenni pár kérdést a projekttel kapcsolatban, ezt is kipróbálhatod. (`npm init`) Ha egyszer már inicializálva lett a projekt ezzel a paranccsal, akkor többször már nem kell kiadni.

## Express telepítése

Telepítsd az express NPM package-t az `npm install express` paranccsal

## Express szerver és egy GET endpoint létrehozása

Készíts egy index.js fájlt a következő tartalommal:

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

A kész fájlt futtasd a `node index.js` parancs segítségével. Ha mindent jól csináltál, akkor a konzolon ki lesz írva a `console.log`-ban látott üzenet.  
Az app ezután elérhető lesz a `http://localhost:3000` címen.

Próbáld értelmezni, hogy melyik sor mit csinál. Ha elakadsz, bátran fordulj a mentorodhoz!

## Legenerált projektfájlok tanulmányozása

Az `npm init` valamint az `npm install` parancsok legeneráltak nekünk mindenféle fájlokat és mappákat (`package.json`, `pacakge-lock.json`, `node_modules`). Nézd meg és tanulmányozd ezeket az állományokat. Gondold végig, hogy az egyes állományoknak mi a szerepe. Ha valamiben nem vagy biztos, akkor kérd a mentorod segítségét!
