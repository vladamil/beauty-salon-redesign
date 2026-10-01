import Image from 'next/image';
import CtaButton from './CtaButton';
import styles from './Hero.module.css';

export default function Hero() {
   return (
      <header className={styles.hero} id="home">
         <svg
            className={`${styles.sparkle} ${styles.sparkleTop}`}
            width="26"
            height="26"
            viewBox="0 0 24 24"
            aria-hidden="true"
         >
            <path d="M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z" />
         </svg>
         <svg
            className={`${styles.sparkle} ${styles.sparkleBottom}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            aria-hidden="true"
         >
            <path d="M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z" />
         </svg>

         {/* The page's one <h1> — its main heading for Google and screen readers */}
         <h1 className={styles.headline}>
            {/* {' '} adds a real space before each <br>, so Google and screen
                readers get "NOKTI. TREPAVICE. MAGIJA." — invisible on screen */}
            NOKTI.{' '}
            <br />
            TREPAVICE.{' '}
            <br />
            <span className={styles.accent}>MAGIJA.</span>
         </h1>

         <div className={styles.imageWrapper}>
            <svg
               className={styles.blob}
               viewBox="0 0 200 200"
               preserveAspectRatio="none"
               aria-hidden="true"
            >
               <path d="M152 30c23 25 26 70 13 100c-13 30-45 48-80 42c-35-6-65-30-70-64c-5-34 15-70 47-86c32-16 67-17 90 8z" />
            </svg>
            <Image
               src="/hero.png"
               alt="Beauty model"
               fill
               sizes="(max-width: 640px) 78vw, (max-width: 960px) 50vw, 40vw"
               priority
               draggable="false"
               className={styles.image}
            />
         </div>

         <CtaButton />
      </header>
   );
}
