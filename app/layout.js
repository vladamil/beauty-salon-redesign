import { Anton, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
   subsets: ['latin'],
   display: 'swap', // Prevents invisible text during loading
   weight: ['400', '500', '600', '700'],
});

const anton = Anton({
   subsets: ['latin'],
   display: 'swap', // Prevents invisible text during loading
   weight: ['400'],
   variable: '--font-display',
});

// Vercel sets this to the project's production domain (its shortest custom
// domain, or the .vercel.app one) at build time. Locally it's undefined.
const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = productionDomain
   ? `https://${productionDomain}`
   : 'http://localhost:3000';

const description =
   'Izlivanje noktiju, gel lak, Gel X i trepavice 1na1, 2D i 4D na Detelinari u Novom Sadu. Sterilizovan pribor, proveren materijal.';

// The share image comes from app/opengraph-image.png (+ its .alt.txt),
// which Next.js finds and adds to the tags below on its own.
export const metadata = {
   metadataBase: new URL(siteUrl),
   title: 'Nokti i trepavice u Novom Sadu | Bellca Beauty Studio',
   description,
   alternates: { canonical: '/' },
   openGraph: {
      type: 'website',
      locale: 'sr_RS',
      siteName: 'Bellca Beauty Studio',
      url: '/',
      title: 'Bellca Beauty Studio — Nokti i trepavice, Novi Sad',
      description,
   },
   twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
   return (
      // sr-Latn = Serbian in Latin script (plain "sr" can mean Cyrillic)
      <html lang="sr-Latn" className={`${spaceGrotesk.className} ${anton.variable}`}>
         <body>{children}</body>
      </html>
   );
}
