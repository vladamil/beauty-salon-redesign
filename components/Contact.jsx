import Testimonials from './Testimonials';
import Location from './Location';

import styles from './Contact.module.css';

export default function Contact() {
   return (
      <section id="kontakt">
         <div className="container">
            <div className={styles.contact}>
               <Testimonials />
               <Location />
            </div>
         </div>
      </section>
   );
}
