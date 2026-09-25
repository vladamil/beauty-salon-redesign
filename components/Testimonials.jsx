'use client';

import { useState, useEffect } from 'react';
import { FaQuoteRight, FaPenNib } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const testimonials = [
   {
      text: 'Prezadovoljna sam profesionalnošću, izborom i kvalitetom materijala, savetima kako da održavam uradjene nokte i zanoktice koje su mi veliki problem. Kao neko ko nema vremena da sam brine o noktima, ništa mi se ne zakine, niti zalomi, na korekciju dolazim svake 3-4 nedelje. Bukvalno odmorim u prijatnom ambijentu Bellca studija.',
      name: 'Biljana',
   },
   {
      text: 'Po prvi put mi prirodne trepavice nisu bukvalno otpale nakon svilenih, ne menjam te nikad.',
      name: 'Ana',
   },
   {
      text: 'Bio me je strah gde da dovedem ćerku koja gricka nokte, a da ne izadjemo iz salona uz alergiju na materijal. Obe smo bile oduševljene. Cene i više nego korektne za ono što nam je pruženo. Uz to izadjete iz salona prezadovoljni i sa osmehom. Mi smo redovni i verni klijenti.',
      name: 'Milica',
   },
   {
      text: 'Trepavice radim dugo, ne mogu bez njih, kod Branči uvek lepo odremam, i probudim se sa sjajnim trepama koje drže do korekcije.',
      name: 'Tatjana',
   },
   {
      text: 'Volim prirodne trepavice, samo se opustim, malo i odremam dok se tretman radi i posle mi ni puder na licu ne treba, jer iako radim 1 na 1 tehniku uvek izgledam našminkana. 🥰',
      name: 'Lana',
   },
   {
      text: 'Kod moje Branči uvek zagarantovan smeh i super razgovor, a nokti i trepavice vrh uvek.',
      name: 'Slađana',
   },
   {
      text: 'Uvek izadjem iz studia zadovoljna.',
      name: 'Sanja',
   },
];

export default function Testimonials() {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setIndex((prev) => (prev + 1) % testimonials.length);
      }, 7000);

      return () => clearInterval(timer);
   }, []);

   return (
      <div className={styles.testimonialBox}>
         <FaQuoteRight className={styles.quote} />

         {testimonials.map((item, i) => (
            <div
               key={i}
               className={`${styles.testimonialItem} ${i === index ? styles.active : styles.inactive}`}
            >
               <p className={styles.text}>{item.text}</p>
            </div>
         ))}
         <div className={styles.signature}>
            <span key={index} className={styles.clientName}>
               <FaPenNib size={18} /> {testimonials[index].name}
            </span>
         </div>
         <div className={styles.progressContainer}>
            <div
               key={index} // Magic: restarts the animation on every switch
               className={styles.progressBar}
            />
         </div>
      </div>
   );
}
