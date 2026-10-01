# DAM Knowledge Base

Base de conocimiento con apuntes del ciclo de Desarrollo de Aplicaciones
Multiplataforma, construida con Astro y Starlight.

## Desarrollo local

Con Docker Compose:

```sh
docker compose up
```

La documentación estará disponible en <http://localhost:4321>.

Para trabajar directamente en el host, instala las dependencias con `npm ci`
y usa `astro dev --background`, tal como indica `AGENTS.md`. El lockfile actual
requiere Node 20.19+ o Node 22.12+; Docker usa Node 24 y evita depender de la
versión instalada en el host. El servidor puede pararse con `astro dev stop` y
consultarse con `astro dev status` o `astro dev logs`.

## Contenido

Los apuntes viven en `src/content/docs`. La barra lateral de
`astro.config.mjs` genera automáticamente las entradas de cada módulo a partir
de sus directorios.

## GitHub Pages

La configuración ya reserva `main` para el despliegue del sitio en
<https://carlosmoshudev.github.io/dam-knowledge/>. Cuando se active el flujo de
GitHub Actions, deberá usar GitHub Pages como destino y construir con el
`package-lock.json` del repositorio.
