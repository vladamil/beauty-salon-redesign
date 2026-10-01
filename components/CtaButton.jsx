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
         ZAKAŽITE TERMIN <span aria-hidden="true">→</span>
      </button>
   );
}
