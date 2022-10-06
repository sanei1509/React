# USE REDUCER

es muy parecido a `useState` pero nos permite tener un estado más complejo.

## ¿Cómo usar useReducer?

Para usar useReducer tenemos que importarlo de la librería de react.

```js
import React, { useReducer } from "react";
```

### useReducer

El hook `useReducer` nos permite crear un estado en un componente de react.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

En el ejemplo anterior, `state` es el valor del estado y `dispatch` es la función que nos permite modificar el estado.

### Reducer

El reducer es una función que recibe dos parámetros, el estado y la acción.

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
```

### Dispatch

El dispatch es la función que nos permite modificar el estado.

```js
dispatch({ type: "increment" });
```

## Ejemplo

```js
import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default UseReducer;
```

## Referencias

- [useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer)

- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

[]: # Language: markdown
[]: # Path: hooks-app\src\useRef\README.md

# USE REF
