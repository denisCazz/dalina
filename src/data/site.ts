export const site = {
  name: "D'Alina",
  legalName: 'ALPHA SNC di Amariutei Ciprian Stefanel e Cazacu Carmen Alina & C.',
  vat: '04037790047',
  vatId: 'IT04037790047',
  tagline: 'Ristorante · Pizzeria',
  shortDescription: 'Ristorante e pizzeria a Sommariva del Bosco, nel Roero.',
  description:
    "D'Alina è pizzeria e ristorante in Via Canale 48 a Sommariva del Bosco (CN). Pizza al forno, cucina e serate nel Roero. Aperti mercoledì–domenica 18:30–01:00. Tel. 379 134 8946.",
  url: 'https://dalina.bitora.it',
  lang: 'it',
  locale: 'it_IT',
  inLanguage: 'it-IT',
  telephone: '+393791348946',
  telephoneDisplay: '379 134 8946',
  email: 'stein@steinbeerfood.it',
  whatsapp: 'https://wa.me/393791348946',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
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
    'pizza Sommariva',
    'pizza Roero',
    'pizzeria Cuneo',
    'ristorante Roero',
    'Via Canale 48',
  ],
} as const;

export const seo = {
  homeTitle: "Pizzeria e ristorante a Sommariva del Bosco | D'Alina",
  menuTitle: "Menu pizza e cucina | D'Alina Sommariva del Bosco",
  menuDescription:
    "Menu di D'Alina a Sommariva del Bosco: pizze classiche e speciali, cucina e dolci. Carta in Via Canale 48, nel Roero. Per allergie chiedi al banco.",
  contactsTitle: 'Orari, telefono e mappa | D\'Alina Sommariva del Bosco',
  contactsDescription: `Contatti D'Alina, ${site.address.display}. Aperti mercoledì–domenica 18:30–01:00. Tel. ${site.telephoneDisplay}. Prenota un tavolo o passa in Via Canale.`,
  ogImageAlt: "D'Alina — ristorante e pizzeria a Sommariva del Bosco, nel Roero",
  notFoundTitle: "Pagina non trovata | D'Alina",
} as const;

export const faqs = [
  {
    question: "Dove si trova D'Alina a Sommariva del Bosco?",
    answer: `${site.name} è in ${site.address.display}, nel Roero. Telefono ${site.telephoneDisplay}.`,
  },
  {
    question: "Quali sono gli orari di D'Alina?",
    answer: `${site.hours.display}. ${site.hours.note}`,
  },
  {
    question: "Come si prenota un tavolo da D'Alina?",
    answer: `Chiama ${site.telephoneDisplay} o scrivi su WhatsApp. Siamo a Sommariva del Bosco, in Via Canale 48.`,
  },
  {
    question: "D'Alina è una pizzeria o un ristorante?",
    answer:
      'Tutte e due. Pizza al forno e cucina, a Sommariva del Bosco, nel Roero.',
  },
] as const;

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
