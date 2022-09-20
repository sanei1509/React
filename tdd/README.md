# TDD - Crear el código para que pase las pruebas

1 - crear un test que falle (RED)
2 - Lo minimo necesario para que el test pase (GREEN)
3 - REFACTORS (clean code, code smells)

## Ejemplo

| tenemos 2 archivos en nuestra app react

suponiendo que la app fue iniciada por `create react app` las librerías de testing ya estan incluídas.

-> product-page.js

-> product-page.test.js

creamos el archivo de test como se ve abajo:

```javascript
describe("ProductPage", () => {
  it("Debe mostrar un titulo/encabezado", () => {
    // renderizamos
    render(<ProductPage />);
    // afirmamos
    expect(screen.queryByText(/product page/i)).toBeInTheDocument();
  });
});
```
