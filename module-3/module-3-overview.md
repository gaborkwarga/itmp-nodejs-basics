# 3. modul elméleti áttekintés és demo - Adatbázis és Prisma

- Adatok kezelése a backendben
- SQLite adatbázis kezelése
- Egyéb adatbázis driver-ek használata
- ORM-ek használata

## Prisma és SQLite bevezetés

- **Mi az ORM?**: Az ORM (Object-Relational Mapping) egy olyan eszköz, amely lehetővé teszi, hogy az adatbázisokban tárolt adatokat objektumként kezeljük a programozási nyelvünkben, megkönnyítve az adatbázis-műveleteket anélkül, hogy közvetlen SQL lekérdezéseket kellene írnunk.

- **Mi az a Prisma ORM?**: A Prisma egy ORM eszköz JavaScript/TypeScript projektekhez, amely segít a fejlesztőknek az adatbázisok kezelésében, automatikus migrációk készítésében és típusbiztos adatkezelésben.

- **SQLite adatbázis**: Az SQLite egy könnyen telepíthető, fájl alapú adatbázis, amely egyszerű CRUD műveletekhez tökéletes.
  - **VS Code Extension**: Nagyon egyszerűen telepíthető VS Code-ba bővítményként innen: [https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)

## Más DB driver

- **Mi van, ha nekem MySQL vagy PostgreSQL kell?**

- **Prisma DB dirverek**: A Prisma sok DB drivert támogat. Ez azt jelenti, hogy különböző típusú adatbázisokat (pl. PostgreSQL, MySQL, SQLite, MongoDB) használhatsz anélkül, hogy más ORM-re vagy jelentős kódmódosításokra lenne szükség. Ez rugalmasságot ad, és könnyebbé teszi az adatbázis-váltást vagy különböző projektekben való használatot.
  - [https://www.prisma.io/docs/orm/overview/databases](https://www.prisma.io/docs/orm/overview/databases)
