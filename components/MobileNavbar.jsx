import { FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from './MobileNavbar.module.css';

export default function MobileNavbar({ open, onClose, scrollToSection }) {
   return (
      <div className={`${styles.sideMenu} ${open ? styles.open : ''}`}>
         <button className={styles.sideClose} onClick={onClose}>
            <FaTimes />
         </button>
         <div className={styles.sideTitle}>Bellca Branchie Studio</div>
         <nav className={styles.sideLinks}>
            <ul className={styles.navList}>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('home');
                        onClose();
                     }}
                  >
                     Home
                  </button>
               </li>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('o-nama');
                        onClose();
                     }}
                  >
                     O nama
                  </button>
               </li>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('nokti');
                        onClose();
                     }}
                  >
                     Noktići
                  </button>
               </li>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('trepavice');
                        onClose();
                     }}
                  >
                     Trepavice
                  </button>
               </li>
               <li>
                  <button
                     className={styles.navItem}
                     onClick={() => {
                        scrollToSection('kontakt');
                        onClose();
                     }}
                  >
                     Kontakt
                  </button>
               </li>
            </ul>
         </nav>
         <div className={styles.sideSocials}>
            <p>
               <a
                  href="https://www.facebook.com/bellca.branchie/"
                  target="_blank"
               >
                  <FaFacebook />
               </a>
            </p>
            <p>
               <a href="https://www.instagram.com/bellcabeauty" target="_blank">
                  <FaInstagram />
               </a>
            </p>
         </div>
      </div>
   );
}
