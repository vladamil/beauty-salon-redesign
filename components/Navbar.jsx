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
         {/* SEntinel div for triggering scroll style for navbar */}
         <div ref={triggerRef} className={styles.trigger} />

         <nav
            className={`${scrollNav && styles.navScroll} ${styles.navbar}`}
            aria-label="Main Desktop Nav"
         >
            <div className={styles.title}>Bellca Branchie Studio</div>
            <ul className={styles.navList}>
               <li>
                  <button
                     className={styles.navItem}
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
                     onClick={() => scrollToSection('kontakt')}
                  >
                     Kontakt
                  </button>
               </li>
            </ul>
            <div>
               <a
                  href="https://www.facebook.com/bellca.branchie/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaFacebook className={styles.socialIcon} />
               </a>

               <a
                  href="https://www.instagram.com/bellcabeauty"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaInstagram className={styles.socialIcon} />
               </a>
            </div>
         </nav>
         {/* MOBILE MENU BUTTON */}
         <div
            className={styles.mobileBtn}
            onClick={() => setOpenMobileMenu(true)}
         >
            <FaBars />
         </div>
         {/* MOBILE NAVIGATION */}
         <MobileNavbar
            open={openMobileMenu}
            onClose={closeMobileMenu}
            scrollToSection={scrollToSection}
         />
      </>
   );
}
