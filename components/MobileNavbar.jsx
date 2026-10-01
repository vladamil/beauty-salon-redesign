'use client';

import { useEffect } from 'react';
import { FaTimes, FaFacebook, FaInstagram } from 'react-icons/fa';

import styles from './MobileNavbar.module.css';

export default function MobileNavbar({ open, onClose, scrollToSection }) {
   // While the drawer is open, the page behind it must not scroll.
   useEffect(() => {
      if (!open) return;

      const body = document.body;
      const previous = {
         overflow: body.style.overflow,
         paddingRight: body.style.paddingRight,
      };
      // Hiding the scrollbar would make the page jump sideways by its width,
      // so pad the body by that same width while it's hidden.
      const scrollbarWidth =
         window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;

      // The drawer only exists below 1100px. If the window grows past that
      // while it's open, close it so the page doesn't stay locked.
      const desktop = window.matchMedia('(min-width: 1100px)');
      const handleResize = (e) => {
         if (e.matches) onClose();
      };
      desktop.addEventListener('change', handleResize);

      // Cleanup runs when the drawer closes: put everything back.
      return () => {
         body.style.overflow = previous.overflow;
         body.style.paddingRight = previous.paddingRight;
         desktop.removeEventListener('change', handleResize);
      };
   }, [open, onClose]);

   return (
      <>
         <div
            className={`${styles.backdrop} ${open ? styles.open : ''}`}
            onClick={onClose}
            aria-hidden="true"
         />
         {/* inert while closed: the off-screen links can't be reached with
             Tab and screen readers skip the whole drawer */}
         <div
            id="mobile-menu"
            className={`${styles.sideMenu} ${open ? styles.open : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobilna navigacija"
            inert={!open}
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
