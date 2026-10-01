'use client';

import { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaBars } from 'react-icons/fa';
import MobileNavbar from './MobileNavbar';
import styles from './Navbar.module.css';

export default function Navbar() {
   const [scrollNav, setScrollNav] = useState(false);
   const [openMobileMenu, setOpenMobileMenu] = useState(false);
   const triggerRef = useRef(null);

   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
         // scrollIntoView provides smooth scrolling without changing the URL
         element.scrollIntoView();
      }
   };

   const closeMobileMenu = () => {
      setOpenMobileMenu(false);
   };

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            // If the trigger is NOT intersecting (scrolled past), shrink the nav
            setScrollNav(!entry.isIntersecting);
         },
         { threshold: 0 }, // Fire as soon as 1 pixel leaves/enters
      );

      if (triggerRef.current) {
         observer.observe(triggerRef.current);
      }

      return () => observer.disconnect();
   }, []);

   return (
      <>
         {/* Sentinel div for triggering scroll style for navbar */}
         <div ref={triggerRef} className={styles.trigger} />

         <nav
            className={`${scrollNav && styles.navScroll} ${styles.navbar}`}
            aria-label="Main Desktop Nav"
         >
            <div className={styles.title}>BELLCA BEAUTY STUDIO</div>
            <div className={styles.navRight}>
               <ul className={styles.navList}>
                  <li>
                     <button
                        className={`${styles.navItem} ${styles.navItemActive}`}
                        onClick={() => scrollToSection('home')}
                     >
                        Home
                     </button>
                  </li>
                  <li>
                     <button
                        className={styles.navItem}
                        onClick={() => scrollToSection('o-nama')}
                     >
                        O nama
                     </button>
                  </li>
                  <li>
                     <button
                        className={styles.navItem}
                        onClick={() => scrollToSection('nokti')}
                     >
                        Noktići
                     </button>
                  </li>
                  <li>
                     <button
                        className={styles.navItem}
                        onClick={() => scrollToSection('trepavice')}
                     >
                        Trepavice
                     </button>
                  </li>
                  <li>
                     <button
                        className={styles.navItem}
                        onClick={() => scrollToSection('galerija')}
                     >
                        Galerija
                     </button>
                  </li>
                  <li>
                     <button
                        className={styles.navItem}
                        onClick={() => scrollToSection('kontakt')}
                     >
                        Kontakt
                     </button>
                  </li>
               </ul>
               <div className={styles.socialLinks}>
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
               </div>
            </div>
         </nav>
         {/* MOBILE MENU BUTTON — a real <button>, so Tab and screen readers reach it */}
         <button
            type="button"
            className={styles.mobileBtn}
            onClick={() => setOpenMobileMenu(true)}
            aria-label="Otvori meni"
            aria-expanded={openMobileMenu}
            aria-controls="mobile-menu"
         >
            <FaBars aria-hidden="true" />
         </button>
         {/* MOBILE NAVIGATION */}
         <MobileNavbar
            open={openMobileMenu}
            onClose={closeMobileMenu}
            scrollToSection={scrollToSection}
         />
      </>
   );
}
