import Image from 'next/image';
import {
   FaRegEnvelope,
   FaViber,
   FaInstagram,
   FaMapMarkerAlt,
} from 'react-icons/fa';
import styles from './Location.module.css';

export default function Location() {
   return (
      <div className={styles.contentBg}>
         <Image
            src="/about/about1.jpg"
            alt="Background"
            fill
            sizes="(max-width: 768px) 400px, 50vw"
            className={styles.bgImage}
            draggable="false"
         />

         <div className={styles.location}>
            <div className={styles.box}>
               <h3 className={styles.title}>Zakažite Vaš termin</h3>
               <div>
                  <p className={styles.info}>pošaljite SMS:</p>
                  <p className={styles.infoText}>
                     <FaRegEnvelope style={{ color: 'silver' }} />
                     +381652378902
                  </p>
               </div>
               <div>
                  <p className={styles.info}>pošaljite Viber poruku:</p>
                  <p className={styles.infoText}>
                     <FaViber style={{ color: '#7360f2' }} />
                     +381652378902
                  </p>
               </div>
               <div>
                  <p className={styles.info}>pišite u DM:</p>
                  <a
                     href="https://www.instagram.com/bellcabeauty"
                     target="_blank"
                     style={{ textDecoration: 'none', color: 'white' }}
                  >
                     <p className={styles.infoText}>
                        <FaInstagram style={{ color: '#fcaf45' }} />
                        Bellca Beauty Studio
                     </p>
                  </a>
               </div>
               <div>
                  <p className={styles.info}>posetite nas:</p>
                  <p className={styles.infoText}>
                     <FaMapMarkerAlt style={{ color: 'var(--main-color)' }} />
                     Janka Čmelika 27, Novi Sad
                  </p>
               </div>
            </div>
            <div className={styles.map}>
               <iframe
                  title="Beauty Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.490440796016!2d19.809175578132592!3d45.258095924768526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11b48382448d%3A0x7a14494d6f9426a0!2z0IjQsNC90LrQsCDQp9C80LXQu9C40LrQsCAyNywg0J3QvtCy0Lgg0KHQsNC0!5e0!3m2!1ssr!2srs!4v1710247247008!5m2!1ssr!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', outline: 'none' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
         </div>
      </div>
   );
}
