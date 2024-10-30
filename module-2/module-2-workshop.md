# 2. modul workshop - NodeJS és Express CRUD alkalmazás elkészítése

## CRUD alkalmazás elkészítése

- Készítsd el a 2. modulban elkészített CRUD alkalmazást

- Ezek az endpointok kellenek:

  - **GET** `/api/users` - Az összes felhasználó kilistázása
  - **GET** `/api/users/:id` - 1 felhasználó visszaadása
  - **POST** `/api/users` - Felhasználó létrehozása
  - **PUT** `/api/users/:id` - Felhasználó szerkesztése
  - **DELETE** `/api/users/:id` - Felhasználó törlése

- Alapul veheted az 1. modul megoldását

- Bátran kérd a mentorok segítségét, vagy nézd meg a megoldást a `module-2/workshop-solution` mappában

- Itt egy `users` tömb kezdésnek:

```js
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: "3",
    name: "Sam Johnson",
    email: "sam.johnson@example.com",
  },
];
```

## API tesztelése

- Teszteld az elkészített endpointokat Thunder Client-tel
