import { Poppins, Italianno } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
   subsets: ['latin'],
   display: 'swap', // Prevents invisible text during loading
   weight: ['200', '400', '500', '700'],
});

const italianno = Italianno({
   subsets: ['latin'],
   display: 'swap', // Prevents invisible text during loading
   weight: ['400'],
   variable: '--font-italianno',
});

export const metadata = {
   title: 'Bellca Branchie, kozmetički studio',
   description:
      'Kozmetički salon, izlivanje, nadogradnja noktiju, gellak. Nadogradnja svilenih trepavica. Janka Čmelika 27, Detelinara, Novi Sad',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={`${poppins.className} ${italianno.variable}`}>
         <body>{children}</body>
      </html>
   );
}
