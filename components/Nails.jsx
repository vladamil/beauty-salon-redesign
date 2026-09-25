import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import NailsImages from './NailsImages';

import styles from './Nails.module.css';

export default function Nails({ nails }) {
   return (
      <section id="nokti" className={styles.nails}>
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

               <div className={styles.content}>
                  {/* Services List */}

                  <div className={styles.services}>
                     <h3>Noktići</h3>

                     <p>
                        <FaStar className={styles.icon} />
                        manikir
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        gellak
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        ojačavanje prirodnih noktiju (rubber bazom ili gelom
                        zavisno od tipa nokatne ploče)
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        izlivanje (tehnikom dual formi, gornjih i donjih )
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        nadogradnja Gel x tipsama (tipse nove generacije koje su
                        izrađene od gela, a apliciraju se na nokat rubber bazom
                        umesto lepkom)
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        građeni frenč
                     </p>
                     <p>
                        <FaStar className={styles.icon} />
                        tehnike ukrašavanja : frenč, ombre, fade, cirkoni, nail
                        art, transfer folije, blossom, cat eye, aurora
                     </p>
                  </div>

                  {/* Images Grid */}
                  <NailsImages nails={nails} />
               </div>
            </div>
         </div>
      </section>
   );
}
