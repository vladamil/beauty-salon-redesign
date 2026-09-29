import { FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from './MobileNavbar.module.css';

export default function MobileNavbar({ open, onClose, scrollToSection }) {
   return (
      <>
         <div
            className={`${styles.backdrop} ${open ? styles.open : ''}`}
            onClick={onClose}
            aria-hidden="true"
         />
         <div
            className={`${styles.sideMenu} ${open ? styles.open : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobilna navigacija"
         >
            <button
               className={styles.sideClose}
               onClick={onClose}
               aria-label="Zatvori meni"
            >
               <FaTimes />
            </button>
            <div className={styles.sideTitle}>BELLCA BEAUTY STUDIO</div>
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
                           scrollToSection('galerija');
                           onClose();
                        }}
                     >
                        Galerija
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
               <a
                  href="https://www.facebook.com/bellca.branchie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={styles.socialIcon}
               >
                  <FaFacebook />
               </a>
               <a
                  href="https://www.instagram.com/bellcabeauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={styles.socialIcon}
               >
                  <FaInstagram />
               </a>
               <span className={styles.handle}>@bellcabeauty</span>
            </div>
         </div>
      </>
   );
}
