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
