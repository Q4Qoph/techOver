import type { ImageMetadata } from 'astro';
import fdkImage from '../assets/showcase/showcase-fdk.webp';
import konastoneImage from '../assets/showcase/showcase-konastone.webp';
import veloraImage from '../assets/showcase/showcase-velora.webp';
import zaffyImage from '../assets/showcase/showcase-zaffy.webp';

export interface ShowcaseProject {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  domain: string;
  url: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    category: 'Corporate & Services',
    categoryColor: 'text-blue-400',
    title: 'FDK Elevators',
    description:
      'Industrial engineering and maintenance AMC portal. Features comprehensive service tables, dynamic request forms, and localized SEO keyword mapping.',
    domain: 'fdkelevators.com',
    url: 'https://www.fdkelevators.com/',
    image: fdkImage,
    imageAlt: 'FDK Elevators website preview',
  },
  {
    category: 'E-Commerce & Retail',
    categoryColor: 'text-red-400',
    title: 'Zaffy Meat Mart',
    description:
      'Premium butchery catalog and daily specials delivery app in Mombasa. Integrates instant cart totals, local checkout routing, and M-Pesa STK Push checkouts.',
    domain: 'zaffymeat.co.ke',
    url: 'https://zaffymeat.techover.pro/',
    image: zaffyImage,
    imageAlt: 'Zaffy Meat Mart website preview',
  },
  {
    category: 'Luxury Showroom Portfolio',
    categoryColor: 'text-amber-400',
    title: 'Velora Doors',
    description:
      'Bespoke wood carving and luxury entry door portfolio. Styled with a premium dark-gold aesthetic optimized for architects and high-end developers.',
    domain: 'veloradoors.com',
    url: 'https://veloradoors.com/',
    image: veloraImage,
    imageAlt: 'Velora Doors website preview',
  },
  {
    category: 'Mombasa Vehicle Dealership',
    categoryColor: 'text-amber-400',
    title: 'Konastone Autos and Imports',
    description:
      'Find quality cars for sale in Mombasa. Browse available cars, compare prices, mileage and vehicle details, then contact our team to arrange a viewing.',
    domain: 'konastoneautos.co.ke',
    url: 'https://konastoneautos.co.ke/',
    image: konastoneImage,
    imageAlt: 'Konastone Autos and Imports vehicle listings website preview',
  },
];
