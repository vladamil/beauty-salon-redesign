import Image from 'next/image';
import styles from './Nails.module.css';

const services = [
   { name: 'Manikir', color: '#f5c6cf' },
   { name: 'Gellak', color: '#f09aab' },
   {
      name: 'Ojačavanje prirodnih noktiju',
      detail: 'Rubber bazom ili gelom, zavisno od tipa nokatne ploče.',
      color: '#c9486a',
   },
   {
      name: 'Izlivanje',
      detail: 'Tehnikom dual formi, gornjih i donjih.',
      color: '#a3344f',
   },
   {
      name: 'Nadogradnja Gel X tipsama',
      detail:
         'Tipse nove generacije izrađene od gela, koje se apliciraju na nokat rubber bazom umesto lepkom.',
      color: '#6e1f35',
   },
   { name: 'Građeni frenč', color: '#f4ddd3', french: true },
];

const techniques = [
   ['frenč', '#ffffff'],
   ['ombre', '#f09aab'],
   ['fade', '#c9486a'],
   ['cirkoni', '#d9d2e9'],
   ['nail art', '#e8637a'],
   ['transfer folije', '#c9a45c'],
   ['blossom', '#f5c6cf'],
   ['cat eye', '#3b0a2a'],
   ['aurora', '#8fb8c9'],
];

const SPARKLE =
   'M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z';

// Nails svg component
function NailSwatch({ color, french }) {
   return (
      <svg className={styles.swatch} viewBox="0 0 26 40" aria-hidden="true">
         <path
            d="M13 1C6 1 2 9 2 20v15c0 2.5 1.5 4 4 4h14c2.5 0 4-1.5 4-4V20C24 9 20 1 13 1Z"
            fill={color}
         />
         {french ? (
            <path
               d="M2 17C2.8 8 6.5 1 13 1s10.2 7 11 16Z"
               fill="#ffffff"
               stroke="var(--bg-color)"
               strokeWidth="0.6"
               strokeOpacity="0.35"
            />
         ) : (
            <ellipse
               cx="9"
               cy="13"
               rx="2.2"
               ry="5"
               fill="#ffffff"
               opacity="0.55"
            />
         )}
      </svg>
   );
}

export default function Nails({ nails }) {
   return (
      <section id="nokti" className={styles.nokti}>
         <svg className={styles.rings} viewBox="0 0 480 480" aria-hidden="true">
            <circle cx="240" cy="240" r="230" />
            <circle cx="240" cy="240" r="170" />
         </svg>

         <div className="container">
            <div className={styles.inner}>
               <div className={styles.header}>
                  <div className={styles.kickerRow}>
                     <span className={styles.badge}>01</span>
                     <span className={styles.kicker}>USLUGE ZA NOKTE</span>
                  </div>
                  <h2 className={styles.heading}>NOKTIĆI</h2>
               </div>

               <div className={styles.visual}>
                  <div className={styles.arch}>
                     <Image
                        src={nails[1]}
                        alt="Noktići urađeni u Bellca studiju"
                        fill
                        sizes="(max-width: 767px) 220px, (max-width: 1099px) 240px, 360px"
                        className={styles.photo}
                     />
                  </div>
                  <div className={styles.circle}>
                     <Image
                        src={nails[0]}
                        alt="Detalj noktiju"
                        fill
                        sizes="190px"
                        className={styles.photo}
                     />
                  </div>
                  <div className={styles.spinBadge} aria-hidden="true">
                     <svg className={styles.spinText} viewBox="0 0 124 124">
                        <defs>
                           <path
                              id="noktiBadgeCircle"
                              d="M62 62m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0"
                           />
                        </defs>
                        <text>
                           <textPath
                              href="#noktiBadgeCircle"
                              textLength="272"
                              lengthAdjust="spacing"
                           >
                              BELLCA ✦ NOKTIĆI ✦ BELLCA ✦ NOKTIĆI ✦
                           </textPath>
                        </text>
                     </svg>
                     <svg className={styles.spinSparkle} viewBox="0 0 24 24">
                        <path d={SPARKLE} />
                     </svg>
                  </div>
               </div>

               <ul className={styles.cards}>
                  {services.map(({ name, detail, color, french }, i) => (
                     <li
                        key={name}
                        className={`${styles.card} ${i >= 2 ? styles.fullMobile : ''}`}
                     >
                        <NailSwatch color={color} french={french} />
                        <div>
                           <div className={styles.cardTitle}>{name}</div>
                           {detail && (
                              <div className={styles.cardDetail}>{detail}</div>
                           )}
                        </div>
                     </li>
                  ))}
                  <li className={`${styles.card} ${styles.wide}`}>
                     <div className={styles.cardTitle}>Tehnike ukrašavanja</div>
                     <ul className={styles.techList}>
                        {techniques.map(([name, color]) => (
                           <li key={name} className={styles.techChip}>
                              <span
                                 className={styles.dot}
                                 style={{ background: color }}
                              />
                              {name}
                           </li>
                        ))}
                     </ul>
                  </li>
               </ul>

               <figure className={styles.quote}>
                  <div className={styles.stars} aria-hidden="true">
                     ★★★★★
                  </div>
                  <blockquote className={styles.quoteText}>
                     Bukvalno odmorim u prijatnom ambijentu Bellca studija.
                  </blockquote>
                  <figcaption className={styles.quoteAuthor}>
                     — Biljana, klijentkinja
                  </figcaption>
               </figure>
            </div>
         </div>
      </section>
   );
}
