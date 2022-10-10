# REDUX

Redux es un `patrón` para administrar el `estado` de nuestra aplicación de una manera `global` y no `directa`, es decir, que todos los componentes de nuestra aplicación puedan acceder a él.

## ¿Qué es el estado?

El estado es la información que se va a mostrar en nuestra aplicación, por ejemplo, si tenemos una aplicación de snippets de código, el estado sería la lista de `loops` que se va a mostrar en pantalla.

## ¿Por qué necesitamos un patrón para administrar el estado?

Porque si tenemos una aplicación con muchos componentes, cada uno de ellos va a tener su propio estado, y si queremos que un componente pueda acceder al estado de otro, tenemos que pasarle el estado como `prop` y eso puede ser un problema, ya que si tenemos muchos componentes, tenemos que pasarle el estado a todos ellos, y si tenemos que actualizar el estado, tenemos que actualizarlo en todos los componentes que lo usan.

## ¿Cómo funciona Redux?

Redux funciona con un `store` que es el que contiene el estado de nuestra aplicación, y con `reducers` que son funciones que reciben el estado actual y una acción, y devuelven el nuevo estado.

## ¿Qué es una acción?

Una acción es un objeto que tiene un `type` y un `payload`, el `type` es un `string` que indica qué tipo de acción es, y el `payload` es la información que se va a usar para actualizar el estado.

## ¿Cómo se actualiza el estado?

El estado se actualiza con una función llamada `dispatch`, que recibe una acción y la envía a los `reducers` para que actualicen el estado.

## ¿Cómo se accede al estado?

El estado se accede con una función llamada `getState`, que devuelve el estado actual.

## ¿Cómo se suscribe a los cambios del estado?

El estado se suscribe con una función llamada `subscribe`, que recibe una función que se va a ejecutar cada vez que el estado cambie.

## ¿Cómo se instala Redux?

Para instalar Redux, tenemos que ejecutar el siguiente comando:

```bash
npm install redux
```

## ¿Cómo se usa Redux?

Para usar Redux, tenemos que importar la función `createStore` de la librería `redux`:

```javascript
import { createStore } from "redux";
```

Luego, tenemos que crear un `store` que va a contener el estado de nuestra aplicación:

```javascript
const store = createStore();
```

Y luego, tenemos que crear un `reducer` que va a actualizar el estado:

```javascript
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
```

Y luego, tenemos que crear una acción que va a actualizar el estado:

```javascript
const action = {
  type: "ADD_LOOP",
  payload: {
    title: "Loop 1",
    code: "for (let i = 0; i < 10; i++) { console.log(i); }",
  },
};
```

Y luego, tenemos que actualizar el estado con la función `dispatch`:

```javascript
store.dispatch(action);
```

Y luego, podemos acceder al estado con la función `getState`:

```javascript
console.log(store.getState());
```

Y luego, podemos suscribirnos a los cambios del estado con la función `subscribe`:

```javascript
store.subscribe(() => {
  console.log(store.getState());
});
```

## ¿Cómo se usa Redux con React?

Para usar Redux con React, tenemos que instalar la librería `react-redux`:

```bash
npm install react-redux
```

Tenemos que crear un `store` que va a contener el estado de nuestra aplicación:

```javascript
const store = createStore();
```

Y luego, tenemos que crear un `reducer` que va a actualizar el estado:

```javascript
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
```

Y luego, tenemos que crear un `Provider` que va a envolver a nuestra aplicación:

```javascript
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Loops />
    </Provider>
  );
};
```
