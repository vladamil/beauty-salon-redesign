import styles from './Testimonials.module.css';

const SPARKLE =
   'M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z';

// `tilt` is each sticker's rotation, `short` marks the one-line review.
const columns = [
   [
      {
         name: 'Milica',
         tilt: -1.5,
         variant: 'cream',
         text: 'Bio me je strah gde da dovedem ćerku koja gricka nokte, a da ne izađemo iz salona uz alergiju na materijal. Obe smo bile oduševljene. Cene i više nego korektne za ono što nam je pruženo. Uz to izađete iz salona prezadovoljni i sa osmehom. Mi smo redovni i verni klijenti.',
      },
   ],
   [
      {
         name: 'Tatjana',
         tilt: 1.5,
         variant: 'plum',
         text: 'Trepavice radim dugo, ne mogu bez njih. Kod Branči uvek lepo odremam i probudim se sa sjajnim trepama koje drže do korekcije.',
      },
      {
         name: 'Sanja',
         tilt: -2.5,
         variant: 'cream',
         short: true,
         text: 'Uvek izađem iz studija zadovoljna.',
      },
   ],
   [
      {
         name: 'Lana',
         tilt: 2,
         variant: 'cream',
         text: 'Volim prirodne trepavice, samo se opustim, malo i odremam dok se tretman radi. Posle mi ni puder na licu ne treba — iako radim 1 na 1 tehniku, uvek izgledam našminkana.',
      },
      {
         name: 'Slađana',
         tilt: -1,
         variant: 'plum',
         text: 'Kod moje Branči uvek zagarantovan smeh i super razgovor, a nokti i trepavice — vrh, uvek.',
      },
   ],
];

function TestimonialCard({ name, text, tilt, variant, short }) {
   return (
      <figure
         className={`${styles.card} ${styles[variant]} ${short ? styles.short : ''}`}
         style={{ '--tilt': `${tilt}deg` }}
      >
         <figcaption className={styles.head}>
            <span className={styles.mark} aria-hidden="true">
               &quot;
            </span>
            <span className={styles.avatar} aria-hidden="true">
               <svg viewBox="0 0 24 24">
                  <path d={SPARKLE} />
               </svg>
            </span>
            <span className={styles.name}>{name}</span>
         </figcaption>
         <blockquote className={styles.text}>
            <p>{text}</p>
         </blockquote>
         <div className={styles.stars} aria-hidden="true">
            ★★★★★
         </div>
      </figure>
   );
}

export default function Testimonials() {
   return (
      <div className={styles.testimonials}>
         <span className={styles.kicker}>UTISCI</span>
         <h2 className={styles.heading}>
            ŠTA KAŽU KLIJENTKINJE<span className={styles.accent}>.</span>
         </h2>

         <div className={styles.wall}>
            {columns.map((column, i) => (
               <div key={i} className={styles.column}>
                  {column.map((card) => (
                     <TestimonialCard key={card.name} {...card} />
                  ))}
               </div>
            ))}
         </div>
      </div>
   );
}
