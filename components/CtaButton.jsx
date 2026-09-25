'use client';

import styles from './Hero.module.css';

export default function CtaButton() {
   return (
      <button
         className={styles.cta}
         onClick={() => {
            document.getElementById('kontakt').scrollIntoView();
         }}
      >
         Zakažite termin
      </button>
   );
}
