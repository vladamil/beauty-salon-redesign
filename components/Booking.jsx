import Image from 'next/image';
import { FiMessageSquare, FiInstagram, FiArrowRight } from 'react-icons/fi';
import { FaViber } from 'react-icons/fa';
import styles from './Booking.module.css';

const MAPS_URL =
   'https://www.google.com/maps/search/?api=1&query=Janka+%C4%8Cmelika+27%2C+Novi+Sad';

// sms: and viber: links open the app straight away on a phone.
const actions = [
   {
      label: 'POŠALJITE SMS',
      value: '+381 65 237 8902',
      href: 'sms:+381652378902',
      Icon: FiMessageSquare,
      variant: 'cream',
   },
   {
      label: 'VIBER PORUKA',
      value: '+381 65 237 8902',
      href: 'viber://chat?number=%2B381652378902',
      Icon: FaViber,
      variant: 'pink',
   },
   {
      label: 'PIŠITE U DM',
      value: '@bellcabeauty',
      href: 'https://www.instagram.com/bellcabeauty',
      Icon: FiInstagram,
      variant: 'cream',
      external: true,
   },
];

// Drawn street map instead of a Google Maps iframe: loads instantly,
// matches the palette and doesn't contact Google until someone clicks.
function MapIllustration() {
   return (
      <svg
         className={styles.mapArt}
         viewBox="0 0 560 480"
         preserveAspectRatio="xMidYMid slice"
         aria-hidden="true"
      >
         <path
            className={styles.park}
            d="M360 40c60 10 110 50 120 110s-30 90-90 80-100-40-110-90 20-110 80-100z"
         />
         <g className={styles.streets}>
            <path d="M-20 120L600 60" strokeWidth="22" />
            <path d="M-20 330L600 300" strokeWidth="30" />
            <path d="M120 -20L180 520" strokeWidth="18" />
            <path d="M330 -20L300 520" strokeWidth="12" />
            <path d="M460 -20L500 520" strokeWidth="12" />
            <path d="M-20 440L600 200" strokeWidth="10" />
            <path d="M-20 220L600 190" strokeWidth="8" />
         </g>
         <g className={styles.blocks}>
            <rect x="200" y="360" width="80" height="60" rx="8" />
            <rect x="30" y="150" width="70" height="55" rx="8" />
            <rect x="350" y="360" width="90" height="70" rx="8" />
            <rect x="200" y="140" width="95" height="40" rx="8" />
         </g>
         <text className={styles.streetName} transform="translate(40 348) rotate(-2.8)">
            JANKA ČMELIKA
         </text>
         <circle className={styles.pulse} cx="316" cy="306" r="18" />
         <path
            className={styles.pin}
            d="M316 300s-26-24-26-44a26 26 0 0 1 52 0c0 20-26 44-26 44z"
         />
         <circle className={styles.pinDot} cx="316" cy="255" r="9" />
      </svg>
   );
}

export default function Booking() {
   return (
      // #kontakt lives here, so "Zakažite termin" and the nav land on the booking options
      <div id="kontakt" className={styles.booking}>
         <div>
            <span className={styles.kicker}>KONTAKT</span>
            <h2 className={styles.heading}>
               ZAKAŽI
               <br />
               TERMIN<span className={styles.accent}>.</span>
            </h2>
            <p className={styles.intro}>Pošaljite poruku ili svratite u studio.</p>

            <ul className={styles.actions}>
               {actions.map(({ label, value, href, Icon, variant, external }) => (
                  <li key={label}>
                     <a
                        href={href}
                        className={`${styles.action} ${styles[variant]}`}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                     >
                        <span className={styles.icon} aria-hidden="true">
                           <Icon />
                        </span>
                        <span>
                           <span className={styles.label}>{label}</span>
                           <span className={styles.value}>{value}</span>
                        </span>
                        <span className={styles.arrow} aria-hidden="true">
                           <FiArrowRight />
                        </span>
                     </a>
                  </li>
               ))}
            </ul>
         </div>

         <div className={styles.mapWrap}>
            <div className={styles.map}>
               <MapIllustration />
               <div className={styles.mapFooter}>
                  <address className={styles.address}>
                     <span className={styles.label}>POSETITE NAS</span>
                     <span className={styles.street}>Janka Čmelika 27</span>
                     <span className={styles.city}>Detelinara, Novi Sad</span>
                  </address>
                  <a
                     href={MAPS_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.mapsBtn}
                  >
                     OTVORI U MAPS →
                  </a>
               </div>
            </div>

            <div className={styles.polaroid}>
               <span className={styles.tape} aria-hidden="true" />
               <div className={styles.polaroidPhoto}>
                  <Image
                     src="/about/about1.jpg"
                     alt="Bellca studio iznutra"
                     fill
                     sizes="150px"
                     className={styles.polaroidImg}
                  />
               </div>
               <span className={styles.polaroidCaption}>STUDIO</span>
            </div>
         </div>
      </div>
   );
}
