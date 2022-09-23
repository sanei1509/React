# Crear un proyecto con VITE

1- npm init vite@latest

2- npm install para instalar dependencias
(bastante más rapido que npx en este sentido)

## Estructura básica de un proyecto vite

## Testing

Para correr los tests debe ejecutar el siguiente comando

```bash
	npm run tests
```

que por detras es un script que ejecuta lo siguiente:

```bash

	jest --watchAll
```

### Instalar babel y configurarlo

instalación pedida en la documentación de `jest`

comando ->

```

```

nombre del archivo -> `babel.config.cjs`

contenido del archivo -> `

```module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Listado de diferentes tipos de pruebas que aprendi a realizar:

1. `Comparar valor esperado con el retorno devuelto`

```javascript
expect() toBe ()
```

2. `Controlar tipo de las variables`

```javascript
expect(typeof var_cualquiera).toBe("number");
```

2. `Esperar cualquier retorno pero de un tipo específico`

```javascript
expect(var_cualquiera).toEqual(expect.any(String));
```

3.

```

```
