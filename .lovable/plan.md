## Update logo marquee on homepage

Replace the 3 placeholder logos (BREAKTIME, Lagos Schools, Partners) in the marquee on `src/routes/index.tsx` with 5 real client names.

### Change

In `src/routes/index.tsx`, update the `logos` array from:

```ts
const logos = ["44DB", "Vida Rosa", "Ile Eko", "BREAKTIME", "Lagos Schools", "Partners"];
```

to:

```ts
const logos = [
  "44DB",
  "Vida Rosa",
  "Ile Eko",
  "Morgan Oxford Education",
  "Nelly Baradi",
  "Fly Trinity Airways",
  "Rita's Bakehouse",
  "Edith Smith",
];
```

No other changes — marquee rendering (triplicated loop, styling) stays the same.