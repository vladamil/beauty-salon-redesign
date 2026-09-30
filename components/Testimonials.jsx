import styles from './Testimonials.module.css';

const SPARKLE =
   'M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z';

// In reading order (the phone shows them top to bottom like this).
// `area` is the card's grid-area name — the CSS decides where each area sits
// per breakpoint. `tilt` is the sticker's rotation, `short` marks the one-liner.
const testimonials = [
   {
      name: 'Milica',
      area: 'milica',
      tilt: -1.5,
      variant: 'cream',
      text: 'Bio me je strah gde da dovedem ćerku koja gricka nokte, a da ne izađemo iz salona uz alergiju na materijal. Obe smo bile oduševljene. Cene i više nego korektne za ono što nam je pruženo. Uz to izađete iz salona prezadovoljni i sa osmehom. Mi smo redovni i verni klijenti.',
   },
   {
      name: 'Tatjana',
      area: 'tatjana',
      tilt: 1.5,
      variant: 'plum',
      text: 'Trepavice radim dugo, ne mogu bez njih. Kod Branči uvek lepo odremam i probudim se sa sjajnim trepama koje drže do korekcije.',
   },
   {
      name: 'Lana',
      area: 'lana',
      tilt: 2,
      variant: 'cream',
      text: 'Volim prirodne trepavice, samo se opustim, malo i odremam dok se tretman radi. Posle mi ni puder na licu ne treba — iako radim 1 na 1 tehniku, uvek izgledam našminkana.',
   },
   {
      name: 'Slađana',
      area: 'sladjana',
      tilt: -1,
      variant: 'plum',
      text: 'Kod moje Branči uvek zagarantovan smeh i super razgovor, a nokti i trepavice — vrh, uvek.',
   },
   {
      name: 'Sanja',
      area: 'sanja',
      tilt: -2.5,
      variant: 'cream',
      short: true,
      text: 'Uvek izađem iz studija zadovoljna.',
   },
];

function TestimonialCard({ name, area, text, tilt, variant, short }) {
   return (
      <figure
         className={`${styles.card} ${styles[variant]} ${short ? styles.short : ''}`}
         style={{ '--tilt': `${tilt}deg`, gridArea: area }}
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

         {/* Desktop: 3-column sticker wall · tablet: 2 columns · phone: zigzag stack */}
         <div className={styles.wall}>
            {testimonials.map((card) => (
               <TestimonialCard key={card.name} {...card} />
            ))}
         </div>
      </div>
   );
}
