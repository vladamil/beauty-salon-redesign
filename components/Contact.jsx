import Testimonials from './Testimonials';
import Booking from './Booking';

import styles from './Contact.module.css';

const SPARKLE =
   'M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z';

// The #kontakt anchor sits on the booking panel inside <Booking />.
export default function Contact() {
   return (
      <section className={styles.contact}>
         <svg className={styles.rings} viewBox="0 0 480 480" aria-hidden="true">
            <circle cx="240" cy="240" r="230" />
            <circle cx="240" cy="240" r="170" />
         </svg>
         <svg
            className={`${styles.sparkle} ${styles.sparkleBig}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
         >
            <path d={SPARKLE} />
         </svg>
         <svg
            className={`${styles.sparkle} ${styles.sparkleSmall}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
         >
            <path d={SPARKLE} />
         </svg>

         <div className="container">
            <div className={styles.inner}>
               <Testimonials />
               <Booking />
            </div>
         </div>
      </section>
   );
}
