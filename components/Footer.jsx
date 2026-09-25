import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

import styles from './Footer.module.css';

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.content}>
               <div className={styles.address}>
                  <p>Bellca Beauty Studio</p>
                  <p>Janka Čmelika 27</p>
                  <p>Novi Sad</p>
                  <p>tel: (065)2378902</p>
               </div>
               <div>
                  <Image
                     src="/logo.png"
                     width={200}
                     height={113}
                     alt="logo"
                     draggable="false"
                  />
                  <p className={styles.small}>
                     &copy; 2026 all rights reserved
                  </p>
               </div>
               <div className={styles.socials}>
                  <a
                     href="https://www.facebook.com/profile.php?id=61551700088201"
                     target="_blank"
                  >
                     <FaFacebook />
                  </a>

                  <a
                     href="https://www.instagram.com/bellcabeauty?igsh=MWFza2dqY2gxMmk2ZA%3D%3D"
                     target="_blank"
                  >
                     <FaInstagram />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
