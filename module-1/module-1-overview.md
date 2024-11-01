# 1. modul elméleti áttekintés - Bevezetés a Node.js-be

- Node.js és NPM alapok
- NPM
- Bevezetés a backendbe, REST
- ExpressJS bevezetés
- Alkalmazás futtatása Node.js-sel

## Node.js alapok

- **Mi az a Node.js?**: Node.js egy szerveroldali JavaScript runtime környezet. Lehetővé teszi, hogy JavaScript-ben szerveroldali kódot írjunk és futtassunk, melynek köszönhetően ugyanazt a nyelvet használhatjuk frontend és backend oldalon.

- **Node.js telepítése**:

  - Telepítsük a Node.js LTS verzióját a [https://nodejs.org/en](https://nodejs.org/en) oldalról
  - Ellenőrizhetjük a `node -v` paranccsal

- **Node.js felhasználási területei**: Kiemelném, hogy a Node.js nemcsak backend REST API-k készítésére használható, hanem:

  - Parancssori eszközök létrehozására (CLI),
  - Valós idejű alkalmazások (chat applikációk),
  - Különböző scriptek
  - Web Appok

- **A kurzus fókusza: REST API backend készítés Express használatával**: Bár a Node.js széles körben használható, ezen a kurzuson a REST API fejlesztésére koncentrálunk az Express keretrendszer segítségével. (Hogy mi az Express és a REST API, arról később)

## NPM

- **Mi az NPM?**:

  - Node Package Manager
  - Az NPM a Node.js csomagkezelője, amely segítségével más fejlesztők által írt csomagokat használhatunk újra. Ezáltal nem szükséges mindent nulláról írni.
  - A Node.js telepítésekor az NPM automatikusan települ

- **Csomagok kezelése és telepítése**:

  - `npm init` – egy új projekt inicializálása, ami létrehozza a projekt csomagkezelő fájlját, a `package.json`-t. Fel fog tenni kérdéseket (projekt név, leírás, stb.), de az `npm init -y` flaggel ez átugorható, és alapértelmezett értékeket fog használni. Ezek aztán belekerülnek a `package.json`-ba.
  - A `package.json`-t manifesztként használjuk, amely információkat tárol az alkalmazásról, modulokról és csomagokról.
  - `npm install <name>` - csomagok telepítése, később látunk rá példát. Rövidítése `npm i`.

- **Globális csomagok (-g)**: A -g flag használatával globálisan telepíthetünk csomagokat

- **`package-lock.json`**: A package-lock.json biztosítja, hogy a projekt minden függősége ugyanazon a verzión maradjon, ahogy azt eredetileg telepítették, így garantálva a stabil működést és elkerülve a verzióváltozásból adódó hibákat.

- **`node_modules`**: A node_modules mappa tárolja a projekt minden szükséges külső csomagját és azok függőségeit, így az alkalmazás ezekre támaszkodhat a futás során.

## Backend, REST

- **Mi az a backend?**: A backend tulajdonképpen a szerveroldal, amely feldolgozza a kéréseket, adatokat kezel, és választ ad a frontendnek. A felhasználó számára ez nem látható.

- **Hogyan kommunikál a frontend és a backend?**: A frontend HTTP kéréseket küld a backendhez, amely ezekre válaszol (pl. adatokat ad vissza vagy feldolgozza a felhasználói bemenetet).

- **REST API**:

  - A REST (Representational State Transfer) egy architektúra, amelyet webszolgáltatások létrehozására használunk. Egyszerűen HTTP kérésekkel dolgozik (GET, POST, PUT, DELETE).
  - API: Application Programming Interface – egy interfész, amellyel a kliensek kommunikálnak a szerverrel.

- **JSON**: Egy egyszerű, szöveges adatformátum, amelyet adatok strukturált tárolására és átvitelére használnak, kulcs-érték párok formájában. A REST API-k JSON formátumot használnak az adatok küldésére és fogadására, mivel könnyen olvasható, és jól támogatott a legtöbb programozási nyelvben.

- **HTTP metódusok: GET, POST, PUT, DELETE**:
  - Ezekkel mondjuk el, hogy milyen típusú műveletet fogunk végrehajtani. Ezek határozzák meg, hogy a szerver hogyan kezelje a kéréseket az adott erőforrásokkal:
  - GET: Adatok lekérése (pl. egy felhasználó adatainak megjelenítése)
  - POST: Új adat létrehozása (pl. új felhasználó létrehozása)
  - PUT: Létező adat módosítása (pl. felhasználó adatainak szerkesztése)
  - DELETE: Adat törlése (pl. felhasználó törlése)
  - A REST-ben kulcsszerepet játszanak, hiszen a REST API-kat gyakran úgy tervezik, hogy ezekkel a szabványos HTTP metódusokkal vezéreljék az adatkezelést, így egyszerű, érthető és szabványosított felületeket kínálnak a kliens-szerver kommunikációhoz.

## ExpressJS bevezetés

- **Mi az Express?**: Az Express egy minimalista és flexibilis library, amely megkönnyíti az API-k fejlesztését Node.js-ben. Segít a route-ok, middleware-ek, és HTTP metódusok kezelésében. A 2. modulban fogunk látni nagyobb példát.

- **Node.js project inicializálása**: Hozzunk létre egy mappát a számítógépünkön, majd nyissuk meg VS Code-ban, vagy valamilyen más editorban. A mappában adjuk ki az `npm init -y` parancsot.

- **Express telepítése NPM-mel**: A firssen inicializált projektünkben futtassuk az `npm install express` parancsot

- **Express szerver létrehozása**: Hozzunk létre egy index.js fájlt, aminek a tartalma legyen a következő:

  ```js
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello ITMP!");
  });

  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
  ```

## Alkalmazás futtatása Node.js-sel

- `node <filename>`
- Kiterjesztés `(.js)` elhagyható
- Ha módosítunk a kódon, akkor újra kell indítani (megoldás később)
- Kilépni a `Ctrl+C` billentyűkombóval lehet
- Ha nem egy Expresses alkalmazásról van szó, tehát az alkalmazás nem fut "örökre", akkor csak szimplán végrehajtja az utasításokat. Például egy egyszerű egy soros `console.log`.
