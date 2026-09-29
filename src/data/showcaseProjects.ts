import type { ImageMetadata } from 'astro';
import fdkImage from '../assets/showcase/showcase-fdk.webp';
import konastoneImage from '../assets/showcase/showcase-konastone.webp';
import veloraImage from '../assets/showcase/showcase-velora.webp';
import zaffyImage from '../assets/showcase/showcase-zaffy.webp';

export interface ShowcaseProject {
  title: string;
  description: string;
  url: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    title: 'FDK Elevators',
    description:
      'Industrial engineering and maintenance AMC portal. Features comprehensive service tables, dynamic request forms, and localized SEO keyword mapping.',
    url: 'https://www.fdkelevators.com/',
    image: fdkImage,
    imageAlt: 'FDK Elevators website preview',
  },
  {
    title: 'Zaffy Meat Mart',
    description:
      'Premium butchery catalog and daily specials delivery app in Mombasa. Integrates instant cart totals, local checkout routing, and M-Pesa STK Push checkouts.',
    url: 'https://zaffymeat.techover.pro/',
    image: zaffyImage,
    imageAlt: 'Zaffy Meat Mart website preview',
  },
  {
    title: 'Velora Doors',
    description:
      'Bespoke wood carving and luxury entry door portfolio. Styled with a premium dark-gold aesthetic optimized for architects and high-end developers.',
    url: 'https://veloradoors.com/',
    image: veloraImage,
    imageAlt: 'Velora Doors website preview',
  },
  {
    title: 'Konastone Autos and Imports',
    description:
      'Find quality cars for sale in Mombasa. Browse available cars, compare prices, mileage and vehicle details, then contact our team to arrange a viewing.',
    url: 'https://konastoneautos.co.ke/',
    image: konastoneImage,
    imageAlt: 'Konastone Autos and Imports vehicle listings website preview',
  },
];
