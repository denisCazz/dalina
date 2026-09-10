# D'Alina

Sito vetrina di D'Alina, ristorante e pizzeria in Via Canale 48, Sommariva del Bosco.

## Sviluppo

```sh
npm install
npm run dev
```

Il menu è statico: si modifica in `src/data/menu.ts`.

## Produzione (Coolify)

Il `Dockerfile` costruisce il sito statico con Node 22 Alpine e lo serve con Nginx sulla porta **80**.
