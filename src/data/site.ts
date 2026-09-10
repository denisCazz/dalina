export const site = {
  name: "D'Alina",
  legalName: 'ALPHA SNC di Amariutei Ciprian Stefanel e Cazacu Carmen Alina & C.',
  vat: '04037790047',
  tagline: 'Ristorante · Pizzeria',
  shortDescription: 'Ristorante e pizzeria a Sommariva del Bosco, nel Roero.',
  description:
    "D'Alina è ristorante e pizzeria a Sommariva del Bosco: pizza, cucina e serate in compagnia. Via Canale 48, provincia di Cuneo.",
  url: 'https://dalina.bitora.it',
  lang: 'it',
  locale: 'it_IT',
  telephone: '+393791348946',
  telephoneDisplay: '379 134 8946',
  email: 'stein@steinbeerfood.it',
  whatsapp: 'https://wa.me/393791348946',
  priceRange: '€€',
  address: {
    street: 'Via Canale, 48',
    city: 'Sommariva del Bosco',
    postalCode: '12048',
    region: 'CN',
    regionName: 'Piemonte',
    country: 'IT',
    countryName: 'Italia',
    display: 'Via Canale, 48 — 12048 Sommariva del Bosco (CN)',
  },
  geo: {
    lat: 44.770611,
    lng: 7.78992,
  },
  maps: {
    google:
      'https://www.google.com/maps/search/?api=1&query=Via+Canale+48+Sommariva+del+Bosco',
    embed:
      'https://www.google.com/maps?q=Via+Canale+48+Sommariva+del+Bosco&hl=it&z=17&output=embed',
  },
  social: {
    instagram: 'https://www.instagram.com/stein.beer.food/',
    facebook: 'https://www.facebook.com/people/Stein-Beer-Food/61561833041625/',
  },
  creator: {
    name: 'bitora.it',
    url: 'https://bitora.it',
  },
  hours: {
    display: 'Mercoledì – Domenica, 18:30 – 01:00',
    note: 'Lunedì e martedì chiusi. Meglio una telefonata prima di passare.',
    weekly: [
      {
        days: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const,
        daysIt: 'Mer – Dom',
        opens: '18:30',
        closes: '01:00',
      },
    ],
  },
  keywords: [
    "D'Alina",
    'DAlina',
    'pizzeria Sommariva del Bosco',
    'ristorante Sommariva del Bosco',
    'pizza Roero',
    'pizzeria Cuneo',
    'ristorante Cuneo',
    'Via Canale 48',
  ],
} as const;

export const offerings = [
  {
    id: 'pizza',
    title: 'Pizza',
    text: 'Impasto, forno, classiche e speciali. La base di ogni serata.',
  },
  {
    id: 'cucina',
    title: 'Cucina',
    text: 'Piatti della casa, griglia e primi. Per chi vuole restare a tavola.',
  },
  {
    id: 'serate',
    title: 'Serate',
    text: 'Musica, eventi a tema e tavoli lunghi. Un posto dove stare insieme.',
  },
] as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/contatti', label: 'Contatti' },
] as const;
