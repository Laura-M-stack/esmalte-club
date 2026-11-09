/**
 * All business content lives here. Turning the demo into a real client site
 * means editing this file only.
 */
export const site = {
  name: 'Esmalte Club',
  kind: 'Nail bar',
  neighborhood: 'Palermo',
  city: 'Buenos Aires',
  address: 'Calle Ficticia 123, Palermo, CABA',
  instagram: '@esmalte.club',
  /**
   * Demo: empty, so WhatsApp links open the share picker with the message ready
   * instead of writing to a real stranger. For a client, digits only: "5491112345678".
   */
  whatsappNumber: '',
  isDemo: true,
  author: { name: 'Laura Moyano', url: 'https://laura-moyano-web.pages.dev/' },
};

export function whatsappUrl(message = `Hola ${site.name}, quiero reservar un turno.`): string {
  const text = encodeURIComponent(message);
  return site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const FACTS = [
  { value: '45 min', label: 'por turno, puntuales' },
  { value: '+120', label: 'colores en carta' },
  { value: 'Autoclave', label: 'esterilización real' },
];

export type PriceItem = { name: string; detail: string; price: string };
export type PriceGroup = { title: string; items: PriceItem[] };

/** Demo prices in ARS. */
export const MENU: PriceGroup[] = [
  {
    title: 'Manos',
    items: [
      { name: 'Semipermanente', detail: 'Dura hasta 3 semanas', price: '$ 12.000' },
      { name: 'Kapping gel', detail: 'Refuerzo sobre uña natural', price: '$ 15.000' },
      { name: 'Esculpidas', detail: 'Largo y forma a elección', price: '$ 22.000' },
      { name: 'Retiro', detail: 'Sin limar la uña natural', price: '$ 4.000' },
    ],
  },
  {
    title: 'Pies',
    items: [
      { name: 'Pedicuría spa', detail: 'Exfoliación e hidratación', price: '$ 14.000' },
      { name: 'Semi en pies', detail: 'Incluye limado y cutículas', price: '$ 10.000' },
    ],
  },
  {
    title: 'Extras',
    items: [
      { name: 'Nail art', detail: 'Por uña, a mano alzada', price: '$ 1.000' },
      { name: 'Francesita', detail: 'Clásica o de color', price: '$ 2.500' },
      { name: 'Cromo o glitter', detail: 'Todas las uñas', price: '$ 3.000' },
    ],
  },
];

export type Photo = {
  /** Unsplash base URL (no query); sizes are requested with imgix params. */
  src: string;
  alt: string;
  author: string;
  authorUrl: string;
  photoUrl: string;
};

const utm = '?utm_source=esmalte-club&utm_medium=referral';

export const PHOTOS = {
  hero: {
    src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067',
    alt: 'Mano con uñas pintadas de rosa sobre un fondo rosa',
    author: 'Kartik Gada',
    authorUrl: `https://unsplash.com/@kartikgada${utm}`,
    photoUrl: `https://unsplash.com/photos/-4iMX-4MIZ8${utm}`,
  },
  hearts: {
    src: 'https://images.unsplash.com/photo-1754799670410-b282791342c3',
    alt: 'Uñas con diseño de corazones rosas y lunares blancos',
    author: 'Ari Kurniawan',
    authorUrl: `https://unsplash.com/@arikurniawan${utm}`,
    photoUrl: `https://unsplash.com/photos/qVZNmigGmFE${utm}`,
  },
  matte: {
    src: 'https://images.unsplash.com/photo-1772322586649-fc11154e76b9',
    alt: 'Uñas cortas cuadradas en rosa mate',
    author: 'Margarita Yutsaytis',
    authorUrl: `https://unsplash.com/@marsnails${utm}`,
    photoUrl: `https://unsplash.com/photos/Sk-cBSR_BkM${utm}`,
  },
  working: {
    src: 'https://images.unsplash.com/photo-1792679430537-e839a310e071',
    alt: 'Manicurista con guantes rosas aplicando esmalte en gel',
    author: 'Stefan Vibes',
    authorUrl: `https://unsplash.com/@eusuntvibes${utm}`,
    photoUrl: `https://unsplash.com/photos/Fr_hnLyqWrk${utm}`,
  },
  bottles: {
    src: 'https://images.unsplash.com/photo-1619607146034-5a05296c8f9a',
    alt: 'Estantes dorados con frascos de esmalte de muchos colores',
    author: 'H&CO',
    authorUrl: `https://unsplash.com/@hngstrm${utm}`,
    photoUrl: `https://unsplash.com/photos/OpjlRo-31SI${utm}`,
  },
  french: {
    src: 'https://images.unsplash.com/photo-1772322586785-3a34772cbc61',
    alt: 'Uñas almendradas francesas con puntas marmoladas violeta y negro',
    author: 'Margarita Yutsaytis',
    authorUrl: `https://unsplash.com/@marsnails${utm}`,
    photoUrl: `https://unsplash.com/photos/v3-AHQ63Wws${utm}`,
  },
} satisfies Record<string, Photo>;

export const STEPS = [
  { title: 'Elegí qué te hacés', text: 'Mirá la carta y elegí el servicio. Si dudás, te asesoramos por mensaje.' },
  { title: 'Escribinos', text: 'Te pasamos los horarios libres de la semana y reservás el que te quede cómodo.' },
  { title: 'Vení y relajate', text: 'Llegá cinco minutos antes. En 45 minutos te vas con las uñas listas.' },
];

export const FAQ = [
  {
    q: '¿Cuánto dura el semipermanente?',
    a: 'Entre dos y tres semanas, según el largo y el cuidado. Te damos tips para que dure más.',
  },
  {
    q: '¿Daña la uña natural?',
    a: 'No, si se retira bien. Lo hacemos con removedor y sin limar de más, por eso el retiro va en la carta.',
  },
  {
    q: '¿Puedo llevar mi diseño?',
    a: 'Sí. Mandanos la foto cuando reservás y te decimos cuánto tiempo y costo extra suma.',
  },
  {
    q: '¿Qué pasa si llego tarde?',
    a: 'Te esperamos hasta 10 minutos. Después de eso puede que tengamos que acortar el servicio o reprogramar.',
  },
  {
    q: '¿Cómo pago?',
    a: 'Efectivo, transferencia o tarjeta de débito. Los precios de la carta son finales.',
  },
];

export const HOURS = [
  { days: 'Martes a viernes', hours: '11:00 – 20:00' },
  { days: 'Sábados', hours: '10:00 – 18:00' },
  { days: 'Domingo y lunes', hours: 'Cerrado' },
];
