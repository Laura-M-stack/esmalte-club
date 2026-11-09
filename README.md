# Esmalte Club — landing de nail bar

Landing de demostración para un nail bar ficticio, con estética **neobrutalista clara y editorial**: blanco, rosa y negro, esquinas rectas, tipografía display en mayúsculas y sombras duras.

**Demo:** https://laura-m-stack.github.io/esmalte-club/

> Esmalte Club es un negocio ficticio creado para mostrar el tipo de sitio que diseño y desarrollo para negocios de belleza y servicios.

## Qué incluye

- Hero tipográfico con collage de fotos
- **Carta de precios** con formato de menú (puntos guía entre servicio y precio)
- Galería en mosaico asimétrico, con crédito de cada foto
- Cómo reservar en tres pasos y preguntas frecuentes con `<details>` (accesibles sin JavaScript)
- Reserva por WhatsApp con mensaje armado
- Contenido centralizado en `src/data/site.ts`: adaptarlo a un cliente real es editar un solo archivo
- **Casi cero JavaScript**: solo el menú móvil, como mejora progresiva (sin JS el menú queda visible)
- Imágenes servidas por el CDN de Unsplash en el tamaño justo para cada pantalla (`srcset`), con dimensiones explícitas para evitar saltos de layout
- Accesibilidad: contraste AA, foco visible, enlace para saltar al contenido, `prefers-reduced-motion`

## Stack

Astro 5 · TypeScript · CSS puro · GitHub Actions + GitHub Pages

## Desarrollo

```bash
npm install
npm run dev
npm run build   # chequea tipos y genera el sitio estático en dist/
```

Cada push a `main` publica el sitio automáticamente con GitHub Actions (`.github/workflows/deploy.yml`).

## Créditos

- Fotos de [Unsplash](https://unsplash.com/?utm_source=esmalte-club&utm_medium=referral): Kartik Gada, Ari Kurniawan, Margarita Yutsaytis, Stefan Vibes y H&CO.
- Diseño y desarrollo: [Laura Moyano](https://laura-moyano-web.pages.dev/)
