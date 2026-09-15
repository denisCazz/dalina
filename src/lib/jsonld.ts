import { menu } from '../data/menu';
import { faqs, seo, site } from '../data/site';

const origin = site.url;
const sameAs = [site.social.instagram, site.social.facebook];

export const ids = {
  restaurant: `${origin}/#locale`,
  website: `${origin}/#website`,
  logo: `${origin}/#logo`,
  image: `${origin}/#image`,
  menu: `${origin}/menu#menu`,
  webpage: (path: string) => `${new URL(path, origin).href}#webpage`,
};

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

const menuPrices = menu
  .flatMap((section) => section.items)
  .map((item) => Number.parseFloat((item.price ?? '').replace(',', '.')))
  .filter((price) => Number.isFinite(price));

export function logoJsonLd() {
  return {
    '@type': 'ImageObject',
    '@id': ids.logo,
    url: `${origin}/logo-dalina.png`,
    contentUrl: `${origin}/logo-dalina.png`,
    width: 1024,
    height: 1024,
    caption: `${site.name} ristorante pizzeria`,
    inLanguage: site.inLanguage,
  };
}

export function imageJsonLd() {
  return {
    '@type': 'ImageObject',
    '@id': ids.image,
    url: `${origin}/og.png`,
    contentUrl: `${origin}/og.png`,
    width: 1200,
    height: 630,
    caption: seo.ogImageAlt,
    inLanguage: site.inLanguage,
  };
}

export function restaurantJsonLd() {
  return {
    '@type': 'Restaurant',
    '@id': ids.restaurant,
    name: site.name,
    legalName: site.legalName,
    alternateName: ["Dalina", "D'Alina Sommariva", "D'Alina Sommariva del Bosco"],
    slogan: site.tagline,
    description: site.description,
    url: origin,
    image: [{ '@id': ids.image }, { '@id': ids.logo }],
    logo: { '@id': ids.logo },
    telephone: site.telephone,
    email: site.email,
    priceRange: site.priceRange,
    currenciesAccepted: site.currenciesAccepted,
    servesCuisine: ['Italian', 'Pizza', 'Burger'],
    acceptsReservations: true,
    vatID: site.vatId,
    taxID: site.vat,
    knowsLanguage: site.lang,
    address,
    geo,
    hasMap: site.maps.google,
    map: site.maps.google,
    sameAs,
    openingHoursSpecification,
    openingHours: 'We-Su 18:30-01:00',
    hasMenu: `${origin}/menu`,
    menu: `${origin}/menu`,
    areaServed: [
      { '@type': 'City', name: site.address.city },
      { '@type': 'AdministrativeArea', name: 'Roero' },
      { '@type': 'AdministrativeArea', name: 'Provincia di Cuneo' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.telephone,
      email: site.email,
      contactType: 'reservations',
      availableLanguage: ['Italian'],
      areaServed: 'IT',
    },
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Prenota un tavolo',
      target: [
        {
          '@type': 'EntryPoint',
          urlTemplate: `tel:${site.telephone}`,
        },
        {
          '@type': 'EntryPoint',
          urlTemplate: site.whatsapp,
        },
      ],
    },
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    name: site.name,
    url: origin,
    inLanguage: site.inLanguage,
    description: site.description,
    publisher: { '@id': ids.restaurant },
    copyrightHolder: { '@id': ids.restaurant },
  };
}

export function faqJsonLd() {
  return {
    '@type': 'FAQPage',
    '@id': `${origin}/#faq`,
    inLanguage: site.inLanguage,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function menuJsonLd() {
  return {
    '@type': 'Menu',
    '@id': ids.menu,
    name: `Menu ${site.name}`,
    description: seo.menuDescription,
    url: `${origin}/menu`,
    inLanguage: site.inLanguage,
    hasMenuSection: menu.map((section) => ({
      '@type': 'MenuSection',
      name: section.title,
      description: section.subtitle,
      url: `${origin}/menu#${section.id}`,
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
    ...(menuPrices.length > 0
      ? {
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'EUR',
            lowPrice: String(Math.min(...menuPrices)),
            highPrice: String(Math.max(...menuPrices)),
            offerCount: menuPrices.length,
          },
        }
      : {}),
    mainEntityOfPage: { '@id': ids.webpage('/menu') },
  };
}

export function webpageJsonLd(opts: { path: string; title: string; description: string }) {
  const url = new URL(opts.path, origin).href;
  return {
    '@type': 'WebPage',
    '@id': ids.webpage(opts.path),
    url,
    name: opts.title,
    description: opts.description,
    inLanguage: site.inLanguage,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.restaurant },
    primaryImageOfPage: { '@id': ids.image },
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };
}

export function coreGraph() {
  return [logoJsonLd(), imageJsonLd(), restaurantJsonLd(), websiteJsonLd()];
}

export function jsonLdGraph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
