import Image from 'next/image';
import AboutImages from './AboutImages';
import styles from './AboutUs.module.css';

const SPARKLE =
   'M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z';

// Round photo "stamps" under the note
const stamps = [
   { src: '/about/about5.jpg', alt: 'Detalji iz studija' },
   { src: '/about/about7.jpg', alt: 'Terasa studija' },
   { src: '/about/about4.jpg', alt: 'Trepavice izbliza' },
];

function Sparkle({ className }) {
   return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
         <path d={SPARKLE} />
      </svg>
   );
}

export default function AboutUs() {
   return (
      <section id="o-nama" className={styles.about}>
         <svg className={styles.rings} viewBox="0 0 480 480" aria-hidden="true">
            <circle cx="240" cy="240" r="230" />
            <circle cx="240" cy="240" r="170" />
         </svg>
         <Sparkle className={styles.floatingSparkle} />

         <div className="container">
            {/* Three grid areas (header, visual, body) that each breakpoint rearranges */}
            <div className={styles.inner}>
               <AboutImages />

               <div className={styles.header}>
                  <span className={styles.kicker}>
                     <Sparkle className={styles.kickerSparkle} />O NAMA
                  </span>
                  <h2 className={styles.heading}>
                     KVALITET<span className={styles.accent}>.</span>
                     <br />
                     NE KVANTITET<span className={styles.accent}>.</span>
                  </h2>
               </div>

               <div className={styles.body}>
                  {/* Branči's own words, as a note on lined paper */}
                  <figure className={styles.note}>
                     <blockquote className={styles.noteText}>
                        <p>
                           Moj koncept rada je da vam pružim vrhunsku uslugu —
                           bezbedan, ispitan materijal, sterilizovan pribor i
                           čisto radno mesto, baš kao i ljubaznost i prijatna
                           atmosfera.
                        </p>
                     </blockquote>
                     <figcaption className={styles.signature}>
                        <Sparkle className={styles.signatureSparkle} />
                        <span className={styles.signatureName}>BRANČI</span>
                        <span className={styles.signatureRole}>
                           osnivačica studija
                        </span>
                     </figcaption>
                  </figure>

                  <ul className={styles.stamps}>
                     {stamps.map(({ src, alt }) => (
                        <li key={src} className={styles.stamp}>
                           <Image
                              src={src}
                              alt={alt}
                              fill
                              sizes="(max-width: 1099px) 88px, 112px"
                              className={styles.photo}
                           />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}
