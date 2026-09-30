import Image from 'next/image';
import styles from './AboutUs.module.css';

// Swap this for a photo of Branči when there is one (and update the alt text).
const PORTRAIT = {
   src: '/about/about3.jpg',
   alt: 'Lakovi za nokte',
};

// Two taped polaroids: the studio in the back, the "portrait" in front.
export default function AboutImages() {
   return (
      <div className={styles.visual}>
         <div className={`${styles.polaroid} ${styles.studioShot}`}>
            <div className={styles.polaroidPhoto}>
               <Image
                  src="/about/about6.jpg"
                  alt="Radno mesto u Bellca studiju"
                  fill
                  sizes="(max-width: 767px) 60vw, (max-width: 1099px) 204px, 336px"
                  className={styles.photo}
               />
            </div>
         </div>

         <div className={`${styles.polaroid} ${styles.portrait}`}>
            <span className={styles.tape} aria-hidden="true" />
            <div className={styles.polaroidPhoto}>
               <Image
                  src={PORTRAIT.src}
                  alt={PORTRAIT.alt}
                  fill
                  sizes="(max-width: 767px) 52vw, (max-width: 1099px) 174px, 276px"
                  className={styles.photo}
               />
            </div>
         </div>
      </div>
   );
}
