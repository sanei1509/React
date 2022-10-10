# Hooks en react

## ¿Qué son los hooks?

Los hooks son una nueva característica de react que nos permite reutilizar el estado y otras características de react sin tener que usar clases.

## ¿Por qué usar hooks?

Los hooks nos permiten reutilizar el estado y otras características de react sin tener que usar clases. Esto nos permite tener un código más limpio y fácil de entender.

## ¿Cómo usar hooks?

Para usar hooks tenemos que importarlos de la librería de react.

```js
import React, { useState } from "react";
```

### useState

El hook `useState` nos permite crear un estado en un componente de react.

```js
const [count, setCount] = useState(0);
```

En el ejemplo anterior, `count` es el valor del estado y `setCount` es la función que nos permite modificar el estado.

### useEffect

El hook `useEffect` nos permite ejecutar código cuando se renderiza el componente o cuando cambia el estado.

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

En el ejemplo anterior, el código se ejecuta cada vez que se renderiza el componente.

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

En el ejemplo anterior, el código se ejecuta cada vez que cambia el estado `count`.

### useContext

El hook `useContext` nos permite acceder al contexto de react.

```js
const value = useContext(MyContext);
```

En el ejemplo anterior, `value` es el valor del contexto.

### useReducer

El hook `useReducer` nos permite crear un estado en un componente de react.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

En el ejemplo anterior, `state` es el valor del estado y `dispatch` es la función que nos permite modificar el estado.

### useCallback

El hook `useCallback` nos permite crear una función que no cambia entre renderizados.

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

En el ejemplo anterior, `memoizedCallback` es la función que no cambia entre renderizados.

### useMemo

El hook `useMemo` nos permite crear un valor que no cambia entre renderizados.

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

En el ejemplo anterior, `memoizedValue` es el valor que no cambia entre renderizados.

### useRef

El hook `useRef` nos permite crear una referencia a un elemento del DOM.

```js
const refContainer = useRef(initialValue);
```

En el ejemplo anterior, `refContainer` es la referencia al elemento del DOM.

### useImperativeHandle

El hook `useImperativeHandle` nos permite crear una referencia a un elemento del DOM.

```js
useImperativeHandle(ref, () => ({
  focus() {
    inputElement.current.focus();
  },
}));
```

En el ejemplo anterior, `ref` es la referencia al elemento del DOM.

### useLayoutEffect

El hook `useLayoutEffect` nos permite ejecutar código cuando se renderiza el componente o cuando cambia el estado.

```js
useLayoutEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

En el ejemplo anterior, el código se ejecuta cada vez que se renderiza el componente.

```js
useLayoutEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

En el ejemplo anterior, el código se ejecuta cada vez que cambia el estado `count`.

### useDebugValue

El hook `useDebugValue` nos permite mostrar un valor en la pestaña de react devtools.

```js
useDebugValue(customValue);
```

En el ejemplo anterior, `customValue` es el valor que se muestra en la pestaña de react devtools.

## ¿Cómo usar hooks personalizados?

Para usar hooks personalizados tenemos que crear una función que empiece con `use`.

```js
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

En el ejemplo anterior, `useFriendStatus` es un hook personalizado.

## ¿Cómo usar hooks personalizados con dependencias?

Para usar hooks personalizados con dependencias tenemos que crear una función que empiece con `use` y que reciba como parámetro las dependencias.

```js
function useWindowWidth(width) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return windowWidth;
}
```

En el ejemplo anterior, `useWindowWidth` es un hook personalizado con dependencias.

## ¿Cómo usar hooks personalizados con dependencias y estado?

Para usar hooks personalizados con dependencias y estado tenemos que crear una función que empiece con `use` y que reciba como parámetro las dependencias y el estado.

```js
function useWindowWidth(width) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return windowWidth;
}
```

En el ejemplo anterior, `useWindowWidth` es un hook personalizado con dependencias y estado.

## ¿Cómo usar hooks personalizados con dependencias, estado y contexto?

Para usar hooks personalizados con dependencias, estado y contexto tenemos que crear una función que empiece con `use` y que reciba como parámetro las dependencias, el estado y el contexto.

```js
function useWindowWidth(width) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return windowWidth;
}
```

En el ejemplo anterior, `useWindowWidth` es un hook personalizado con dependencias, estado y contexto.
