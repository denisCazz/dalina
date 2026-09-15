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
      { name: 'Marinara', description: 'Pomodoro, aglio.', price: '5' },
      { name: 'Margherita', description: 'Pomodoro, fiordilatte.', price: '5.50' },
      { name: 'Napoli', description: 'Pomodoro, fiordilatte, acciughe.', price: '6' },
      { name: 'Siciliana', description: 'Pomodoro, acciughe, capperi.', price: '6.50' },
      {
        name: 'Prosciutto e Funghi',
        description: 'Pomodoro, fiordilatte, champignon, cotto.',
        price: '7.50',
      },
      { name: 'Prosciutto', description: 'Pomodoro, fiordilatte, cotto.', price: '6.50' },
      { name: 'Diavola', description: 'Pomodoro, fiordilatte, salamino.', price: '6.50' },
      { name: 'Wurstel', description: 'Pomodoro, fiordilatte, wurstel.', price: '6.50' },
      { name: 'Salsiccia', description: 'Pomodoro, fiordilatte, salsiccia.', price: '7.50' },
      {
        name: 'Valdostana',
        description: 'Pomodoro, fiordilatte, cotto, fontina DOP.',
        price: '7.50',
      },
      {
        name: 'Vegetariana',
        description: 'Pomodoro, fiordilatte, verdure di stagione.',
        price: '7.50',
      },
      {
        name: '4 Formaggi',
        description: 'Pomodoro San Marzano, fiordilatte, gorgonzola, fontina, pecorino.',
        price: '8',
      },
      {
        name: 'Americana',
        description: 'Pomodoro San Marzano, fiordilatte, wurstel, patatine.',
        price: '7.50',
      },
      {
        name: 'Calabrese',
        description: "Pomodoro, fiordilatte, 'nduja, soppressata calabra.",
        price: '8',
      },
      { name: 'Speck e Brie', description: 'Fiordilatte, speck, brie.', price: '7.50' },
      {
        name: 'Estiva',
        description: 'Fiordilatte, pomodorini, rucola, stracchino.',
        price: '7',
      },
      {
        name: 'Capricciosa',
        description: 'Pomodoro, fiordilatte, salamino, cotto, champignon, carciofi, olive.',
        price: '8.50',
      },
      {
        name: '4 Stagioni',
        description: 'Pomodoro, fiordilatte, cotto, funghi, carciofini, olive.',
        price: '8',
      },
      {
        name: 'Gorgonzola',
        description: 'Pomodoro, fiordilatte, gorgonzola DOP.',
        price: '7',
      },
      { name: 'Tonno', description: 'Pomodoro, fiordilatte, tonno.', price: '7' },
      {
        name: 'Tropea',
        description: 'Pomodoro, fiordilatte, cipolla di Tropea.',
        price: '6',
      },
      {
        name: 'Pugliese',
        description: 'Pomodoro, fiordilatte, cipolla di Tropea, tonno.',
        price: '7.50',
      },
      { name: 'Friarielli', description: 'Fiordilatte, salsiccia, friarielli.', price: '8' },
      {
        name: 'Carmagnola',
        description: 'Fiordilatte, pomodoro San Marzano, peperone, salsiccia.',
        price: '8',
      },
      {
        name: 'Regina',
        description: 'Mozzarella di bufala campana, pomodoro San Marzano.',
        price: '8.50',
      },
      {
        name: 'Tricolore',
        description: 'Fiordilatte, rucola, prosciutto crudo di Parma, scaglie di grana, pomodorini.',
        price: '8.50',
      },
      {
        name: 'Portico',
        description: 'Pomodoro, fiordilatte, cotto, salsiccia, champignon, pecorino, uovo.',
        price: '9',
      },
    ],
  },
  {
    id: 'focacce',
    title: 'Focacce',
    subtitle: 'Aperte, calde, da spezzare.',
    items: [
      { name: 'Speck o Crudo', description: 'Speck o prosciutto crudo.', price: '6' },
      { name: 'Burrata e Crudo', description: 'Burrata, prosciutto crudo.', price: '8' },
      {
        name: 'Vulcano',
        description: 'Pomodorini, salmone affumicato, burrata.',
        price: '9',
      },
    ],
  },
  {
    id: 'dolci',
    title: 'Dolci',
    subtitle: 'Per chiudere la serata.',
    items: [
      { name: 'Panna cotta', price: '5' },
      { name: 'Bunet della nonna', price: '5' },
      { name: 'Tiramisù dello chef', price: '5' },
      { name: 'Meringata', price: '5' },
      { name: 'Profiterol', price: '5' },
      { name: 'Sorbetto al limone', price: '4' },
      { name: 'Sorbetto alla mela verde', price: '4' },
    ],
  },
  {
    id: 'supplementi',
    title: 'Supplementi',
    subtitle: 'Da aggiungere alla pizza.',
    items: [
      { name: 'Ingrediente speciale', price: '1.50' },
      { name: 'Burrata o bufala', price: '2.50' },
      { name: 'Impasto integrale', price: '1.50' },
    ],
  },
];
