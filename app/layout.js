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

export const metadata = {
   title: 'Bellca Branchie, kozmetički studio',
   description:
      'Kozmetički salon, izlivanje, nadogradnja noktiju, gellak. Nadogradnja svilenih trepavica. Janka Čmelika 27, Detelinara, Novi Sad',
};

export default function RootLayout({ children }) {
   return (
      // sr-Latn = Serbian in Latin script (plain "sr" can mean Cyrillic)
      <html lang="sr-Latn" className={`${spaceGrotesk.className} ${anton.variable}`}>
         <body>{children}</body>
      </html>
   );
}
