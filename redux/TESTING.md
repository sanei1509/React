# Testing con jest

Para testear nuestro código, vamos a usar la librería `jest`.

## Instalación

Para instalar `jest`, tenemos que ejecutar el siguiente comando:

```bash

npm install --save-dev jest

```

## ¿Cómo se usa jest?

Para usar `jest`, tenemos que crear un archivo `package.json` en la raíz del proyecto:

```bash

npm init -y

```

Luego, tenemos que crear un archivo `test.js` en la carpeta `src`:

```javascript
const sum = (a, b) => a + b;

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

Y luego, tenemos que ejecutar el siguiente comando:

```bash

npm test

```

Y luego, podemos ver el resultado del test:

```bash

PASS src/test.js

✓ adds 1 + 2 to equal 3 (5ms)

Test Suites: 1 passed, 1 total

Tests: 1 passed, 1 total

Snapshots: 0 total

Time: 0.9s

Ran all test suites.

```

## ¿Cómo se usa jest con React?

Para usar `jest` con `React`, tenemos que crear un archivo `package.json` en la raíz del proyecto:

```bash

npm init -y

```

Luego, tenemos que crear un archivo `test.js` en la carpeta `src`:

```javascript
import React from "react";

import { render } from "@testing-library/react";

import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);

  const linkElement = getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
```

Y luego, tenemos que ejecutar el siguiente comando:

```bash

npm test

```

Y luego, podemos ver el resultado del test:

```bash

PASS src/test.js

✓ renders learn react link (5ms)

Test Suites: 1 passed, 1 total

Tests: 1 passed, 1 total

Snapshots: 0 total

Time: 0.9s

Ran all test suites.

```

## ¿Cómo se usa jest con Redux?

Para usar `jest` con `Redux`, tenemos que crear un archivo `package.json` en la raíz del proyecto:

```bash

npm init -y

```

Luego, tenemos que crear un archivo `test.js` en la carpeta `src`:

```javascript
import { createStore } from "redux";

test("adds 1 + 2 to equal 3", () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_LOOP":
        return {
          ...state,

          loops: [...state.loops, action.payload],
        };

      default:
        return state;
    }
  };

  const store = createStore(reducer, { loops: [] });

  store.dispatch({ type: "ADD_LOOP", payload: "loop1" });

  store.dispatch({ type: "ADD_LOOP", payload: "loop2" });

  expect(store.getState().loops).toEqual(["loop1", "loop2"]);
});
```

Y luego, tenemos que ejecutar el siguiente comando:

```bash


npm test

```

Y luego, podemos ver el resultado del test:

```bash

PASS src/test.js

✓ adds 1 + 2 to equal 3 (5ms)

Test Suites: 1 passed, 1 total

Tests: 1 passed, 1 total

Snapshots: 0 total

Time: 0.9s


Ran all test suites.

```

## ¿Cómo se usa jest con Express?

Para usar `jest` con `Express`, tenemos que crear un archivo `package.json` en la raíz del proyecto:

```bash


npm init -y

```

Luego, tenemos que crear un archivo `test.js` en la carpeta `src`:

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

test("GET /", async () => {
  const response = await request(app).get("/");

  expect(response.statusCode).toBe(200);
});
```
