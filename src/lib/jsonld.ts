import { menu } from '../data/menu';
import { site } from '../data/site';

const sameAs = [site.social.instagram, site.social.facebook];

const openingHoursSpecification = site.hours.weekly.map((block) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: [...block.days],
  opens: block.opens,
  closes: block.closes,
}));

const address = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  postalCode: site.address.postalCode,
  addressRegion: site.address.region,
  addressCountry: site.address.country,
};

const geo = {
  '@type': 'GeoCoordinates',
  latitude: site.geo.lat,
  longitude: site.geo.lng,
};

export function restaurantJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${site.url}/#locale`,
    name: site.name,
    alternateName: ["D'Alina", 'DAlina', "D'Alina Sommariva"],
    description: site.description,
    url: site.url,
    image: [`${site.url}/og.png`, `${site.url}/logo-dalina.png`],
    logo: `${site.url}/logo-dalina.png`,
    telephone: site.telephone,
    email: site.email,
    priceRange: site.priceRange,
    servesCuisine: ['Italiana', 'Pizza', 'Piemontese'],
    menu: `${site.url}/menu`,
    acceptsReservations: 'True',
    address,
    geo,
    hasMap: site.maps.google,
    sameAs,
    openingHoursSpecification,
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: 'it-IT',
    description: site.description,
    publisher: { '@id': `${site.url}/#locale` },
  };
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Dove si trova D'Alina a Sommariva del Bosco?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${site.address.display}. Telefono ${site.telephoneDisplay}.`,
        },
      },
      {
        '@type': 'Question',
        name: "Quali sono gli orari di D'Alina?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${site.hours.display}. ${site.hours.note}`,
        },
      },
      {
        '@type': 'Question',
        name: "D'Alina è una pizzeria o un ristorante?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tutte e due. Pizza al forno e cucina, a Sommariva del Bosco, nel Roero.",
        },
      },
    ],
  };
}

export function menuJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${site.url}/menu#menu`,
    name: `Menu ${site.name}`,
    hasMenuSection: menu.map((section) => ({
      '@type': 'MenuSection',
      name: section.title,
      description: section.subtitle,
      hasMenuItem: section.items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        ...(item.price
          ? {
              offers: {
                '@type': 'Offer',
                price: item.price.replace(',', '.'),
                priceCurrency: 'EUR',
              },
            }
          : {}),
      })),
    })),
  };
}

export function webpageJsonLd(opts: { path: string; title: string; description: string }) {
  const url = new URL(opts.path, site.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    inLanguage: 'it-IT',
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#locale` },
  };
}
