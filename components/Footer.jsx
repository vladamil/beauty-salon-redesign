import { FaFacebook } from 'react-icons/fa';
import { FiInstagram, FiArrowUp } from 'react-icons/fi';
import ScrollLink from './ScrollLink';
import styles from './Footer.module.css';

const SPARKLE =
   'M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z';

const menu = [
   { label: 'O nama', to: 'o-nama' },
   { label: 'Noktići', to: 'nokti' },
   { label: 'Trepavice', to: 'trepavice' },
   { label: 'Galerija', to: 'galerija' },
   { label: 'Kontakt', to: 'kontakt' },
];

const socials = [
   {
      label: '@bellcabeauty',
      href: 'https://www.instagram.com/bellcabeauty',
      Icon: FiInstagram,
   },
   {
      label: 'Facebook',
      href: 'https://www.facebook.com/bellca.branchie/',
      Icon: FaFacebook,
   },
];

function Label({ children }) {
   return (
      <h2 className={styles.label}>
         <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={SPARKLE} />
         </svg>
         {children}
      </h2>
   );
}

export default function Footer() {
   const year = new Date().getFullYear();

   return (
      <footer className={styles.footer}>
         <svg className={styles.rings} viewBox="0 0 480 480" aria-hidden="true">
            <circle cx="240" cy="240" r="230" />
            <circle cx="240" cy="240" r="170" />
         </svg>

         <div className="container">
            {/* Four grid areas (brand, menu, studio, social), rearranged per breakpoint */}
            <div className={styles.grid}>
               <div className={styles.brand}>
                  <div>
                     <p className={styles.brandName}>BELLCA BEAUTY STUDIO</p>
                     <p className={styles.brandBy}>by Brankica</p>
                  </div>
                  <ScrollLink to="home" className={styles.toTop}>
                     <FiArrowUp aria-hidden="true" />
                     <span>NA VRH</span>
                  </ScrollLink>
               </div>

               <nav className={styles.menu} aria-label="Navigacija u podnožju">
                  <Label>MENI</Label>
                  <ul className={styles.links}>
                     {menu.map(({ label, to }) => (
                        <li key={to}>
                           <ScrollLink to={to} className={styles.link}>
                              {label}
                           </ScrollLink>
                        </li>
                     ))}
                  </ul>
               </nav>

               <div className={styles.studio}>
                  <Label>STUDIO</Label>
                  <address className={styles.address}>
                     Janka Čmelika 27
                     <br />
                     Detelinara, Novi Sad
                  </address>
                  <a href="tel:+381652378902" className={styles.phone}>
                     +381 65 237 8902
                  </a>
                  <p className={styles.muted}>SMS · Viber</p>
               </div>

               <div className={styles.social}>
                  <Label>PRATITE NAS</Label>
                  <ul className={styles.links}>
                     {socials.map(({ label, href, Icon }) => (
                        <li key={href}>
                           <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.socialLink}
                           >
                              <span
                                 className={styles.socialIcon}
                                 aria-hidden="true"
                              >
                                 <Icon />
                              </span>
                              {label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className={styles.legal}>
               <span>© {year} Bellca Beauty Studio. Sva prava zadržana.</span>
               <span>Novi Sad</span>
            </div>
         </div>
      </footer>
   );
}
