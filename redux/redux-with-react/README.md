# CICLO DE VIDA DE UN REDUCER

// 1. Se ejecuta la función reducer
// 2. Se evalúa el estado inicial
// 3. Se evalúa la acción
// 4. Se retorna el nuevo estado
// 5. Se ejecuta el store
// 6. Se ejecuta el componente
// 7. Se ejecuta el mapStateToProps
// 8. Se ejecuta el render
// 9. Se ejecuta el componentDidMount
// 10. Se ejecuta el componentDidUpdate
// 11. Se ejecuta el componentWillUnmount

# FUNCIONAMIENTO

el `State` abastece la vista de la página,

## Sigamos el siguiente flujo :

contexto -> aplicación de TODOS -

1 . el usuario se encuentra en la app y se le ocurre querer agregar un nuevo todo.

## ¿Como se comporta la aplicacón en esta situación?

- La página no muta el store directamente.

## 1ero Creamos una `Action`

## Le pasamos el action al `REDUCER` quien va a saber que decidir en base al tipo de action que le haya llegado.

## ¿ Porque lo sabe ? -> porque este tiene un mapeo de las acciones que tenemos en nuestra aplicación.

En caso de recibir una acción no mapeada solo devuelve el estado inicial por default.
