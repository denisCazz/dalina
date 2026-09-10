export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: 'pizze-classiche',
    title: 'Pizze classiche',
    subtitle: 'Il forno, senza complicazioni.',
    items: [
      { name: 'Marinara', description: 'Pomodoro, aglio, origano, olio.', price: '6' },
      { name: 'Margherita', description: 'Pomodoro, mozzarella, basilico.', price: '7' },
      { name: 'Napoli', description: 'Pomodoro, mozzarella, acciughe, capperi.', price: '8' },
      { name: 'Diavola', description: 'Pomodoro, mozzarella, salame piccante.', price: '8.50' },
      { name: 'Prosciutto e funghi', description: 'Pomodoro, mozzarella, prosciutto cotto, funghi.', price: '9' },
      { name: 'Quattro formaggi', description: 'Mozzarella e selezione di formaggi.', price: '9.50' },
    ],
  },
  {
    id: 'pizze-speciali',
    title: 'Pizze speciali',
    subtitle: 'Quelle della casa.',
    items: [
      {
        name: "D'Alina",
        description: 'La pizza della casa. Chiedi al banco la versione del momento.',
        price: '11',
      },
      { name: 'Capricciosa', description: 'Pomodoro, mozzarella, cotto, funghi, carciofi, olive.', price: '10' },
      { name: 'Vegetariana', description: 'Pomodoro, mozzarella, verdure di stagione.', price: '9.50' },
      { name: 'Calzone', description: 'Ripieno classico, chiuso e infornato.', price: '9' },
    ],
  },
  {
    id: 'cucina',
    title: 'Cucina',
    subtitle: 'Oltre la pizza.',
    items: [
      { name: 'Tagliere', description: 'Salumi e formaggi del territorio.', price: '14' },
      { name: 'Lasagne', description: 'Al forno, come in casa.', price: '12' },
      { name: 'Griglia mista', description: 'Selezione del giorno.', price: '18' },
    ],
  },
  {
    id: 'dolci',
    title: 'Dolci',
    items: [
      { name: 'Tiramisù', price: '5' },
      { name: 'Panna cotta', price: '5' },
      { name: 'Cheesecake', price: '5' },
    ],
  },
];
