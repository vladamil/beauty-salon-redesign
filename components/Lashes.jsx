import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import LashesImages from './LashesImages';
import styles from './Nails.module.css';

export default function Lashes({ lashes }) {
   return (
      <section id="trepavice" className={styles.nails}>
         <div className="container">
            {/* BACKGROUND WRAPPER DIV*/}
            <div className={styles.contentBg}>
               <Image
                  src="/about/about5.jpg"
                  alt="Background"
                  fill
                  sizes="(max-width: 768px) 400px, 50vw"
                  className={styles.bgImage}
                  draggable="false"
               />
               <div className={`${styles.content} ${styles.reverse}`}>
                  {/* Services List */}

                  <div className={styles.services}>
                     <h3 className={styles.right}>Trepavice</h3>
                     <p>
                        <FaStar className={styles.icon} />
                        1na1 tehnika: prirodan izgled poput maskare, krajnji
                        rezultat najviše zavisi od prirodnih trepavica.
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        2d (YY) : najpopularnija i moja omiljena tehnika jer
                        omogućava savršene, gušće trepavice ali prirodnijeg
                        izgleda
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        4d : za one koje žele superstar izgled, sa velikom
                        gustinom i drastičnom promenom
                     </p>
                  </div>

                  {/* Images Grid */}

                  <LashesImages lashes={lashes} />
               </div>
            </div>
         </div>
      </section>
   );
}
