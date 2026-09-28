import Image from 'next/image';
import styles from './Lashes.module.css';

const techniques = [
   {
      name: '1na1 tehnika',
      level: 1,
      photo: 0,
      detail:
         'Prirodan izgled poput maskare — krajnji rezultat najviše zavisi od prirodnih trepavica.',
   },
   {
      name: '2D (YY)',
      level: 2,
      photo: 5,
      detail:
         'Najpopularnija i moja omiljena tehnika — savršene, gušće trepavice, ali prirodnijeg izgleda.',
      featured: true,
   },
   {
      name: '4D',
      level: 3,
      photo: 4,
      detail:
         'Za one koje žele superstar izgled, sa velikom gustinom i drastičnom promenom.',
   },
];

// Lashes per root point for each density level, fanned by these x-offsets.
const FANS = {
   1: { offsets: [0], length: 22, stroke: 1.6 },
   2: { offsets: [-4, 4], length: 22, stroke: 1.5 },
   3: { offsets: [-9, -3, 3, 9], length: 24, stroke: 1.2 },
};

function lashPath(level) {
   const { offsets, length } = FANS[level];
   let d = '';
   for (let i = 1; i <= 9; i++) {
      const t = i / 10;
      // Points along the upper lid curve M20 60 Q100 20 180 60.
      const x = 20 + 160 * t;
      const y = +(60 - 80 * t * (1 - t)).toFixed(1);
      const flare = (x - 100) * 0.25;
      for (const offset of offsets) {
         d += `M${x} ${y}l${flare + offset} -${length}`;
      }
   }
   return d;
}

function LashIllustration({ level }) {
   return (
      <svg className={styles.lashArt} viewBox="0 0 200 84" aria-hidden="true">
         <path d="M20 60Q100 96 180 60" strokeWidth="1.5" opacity="0.25" />
         <path d={lashPath(level)} strokeWidth={FANS[level].stroke} />
         <path d="M20 60Q100 20 180 60" strokeWidth="3.5" />
      </svg>
   );
}

export default function Lashes({ lashes }) {
   return (
      <section id="trepavice" className={styles.trepavice}>
         <div className="container">
            <div className={styles.inner}>
               <div className={styles.header}>
                  <div className={styles.kickerRow}>
                     <span className={styles.badge}>02</span>
                     <span className={styles.kicker}>USLUGE ZA TREPAVICE</span>
                  </div>
                  <h2 className={styles.heading}>TREPAVICE</h2>
                  <div className={styles.legend} aria-hidden="true">
                     <span>PRIRODNO</span>
                     <span className={styles.legendBar} />
                     <span>DRAMATIČNO</span>
                  </div>
               </div>

               <ul className={styles.cards}>
                  {techniques.map(
                     ({ name, level, photo, detail, featured }) => (
                        <li
                           key={name}
                           className={`${styles.card} ${featured ? styles.featured : ''}`}
                        >
                           <div className={styles.photo}>
                              <Image
                                 src={lashes[photo]}
                                 alt={`Trepavice — ${name}`}
                                 fill
                                 sizes="(max-width: 767px) 100px, (max-width: 1099px) 240px, 430px"
                                 className={styles.photoImg}
                              />
                           </div>
                           <div className={styles.body}>
                              <LashIllustration level={level} />
                              <div className={styles.meter} aria-hidden="true">
                                 {[1, 2, 3].map((step) => (
                                    <span
                                       key={step}
                                       className={
                                          step <= level ? styles.on : ''
                                       }
                                    />
                                 ))}
                              </div>
                              <h3 className={styles.cardTitle}>{name}</h3>
                              <p className={styles.cardDetail}>{detail}</p>
                           </div>
                        </li>
                     ),
                  )}
               </ul>

               <figure className={styles.quote}>
                  <div className={styles.stars} aria-hidden="true">
                     ★★★★★
                  </div>
                  <blockquote className={styles.quoteText}>
                     Po prvi put mi prirodne trepavice nisu bukvalno otpale
                     nakon svilenih — ne menjam te nikad.
                  </blockquote>
                  <figcaption className={styles.quoteAuthor}>
                     — Ana, klijentkinja
                  </figcaption>
               </figure>
            </div>
         </div>
      </section>
   );
}
