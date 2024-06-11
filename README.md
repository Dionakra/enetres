# Ñ3 - Website
Web espejo alternativa a [https://n3videojuegos.com](https://n3videojuegos.com), página oficial de la conferencia hispanohablante de videojuegos iniciada en 2024.

## Instalación
Debes tener instalado NodeJS 20.
```sh
$ node --version
v20.13.1

$ git clone https://github.com/Dionakra/enetres.git
$ cd enetres
$ npm install
```

## Desarrollo
Parar desarrollar, ejecutar el comando `npm run dev -- --open`, que abrirá una pestaña nueva con el contenido.

La web está desarrollada con [SvelteKit](https://kit.svelte.dev/) y [TailwindCSS](https://tailwindcss.com/).

## Despliegue
La web se despliega automáticamente con GitHub Actions en el GitHub Pages del repositorio.