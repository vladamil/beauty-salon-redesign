'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './Gallery.module.css';

const SPARKLE =
   'M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2L12 0z';

// Horizontal drag (px) that counts as a swipe; anything shorter is a click.
const SWIPE_THRESHOLD = 40;

const pad = (n) => String(n).padStart(2, '0');

function Arrow({ flip }) {
   return (
      <svg viewBox="0 0 24 24" className={styles.arrow} aria-hidden="true">
         <path d={flip ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} />
      </svg>
   );
}

function Deck({ number, title, label, photos, mirrored, onOpen }) {
   const [index, setIndex] = useState(0);
   // Only animate the top card after the first interaction, not on page load.
   const [dealt, setDealt] = useState(false);
   const startX = useRef(null);
   const swiped = useRef(false);

   const count = photos.length;
   const at = (offset) => photos[(index + offset) % count];
   const counter = `${pad(index + 1)} / ${pad(count)}`;

   const step = (dir) => {
      setIndex((i) => (i + dir + count) % count);
      setDealt(true);
   };

   const handlePointerDown = (e) => {
      startX.current = e.clientX;
      swiped.current = false;
   };

   const handlePointerUp = (e) => {
      if (startX.current === null) return;
      const dx = e.clientX - startX.current;
      startX.current = null;
      if (Math.abs(dx) < SWIPE_THRESHOLD) return;
      swiped.current = true;
      step(dx < 0 ? 1 : -1);
   };

   const handleCardClick = () => {
      if (swiped.current) {
         swiped.current = false;
         return;
      }
      onOpen(index);
   };

   return (
      <div className={`${styles.deck} ${mirrored ? styles.mirrored : ''}`}>
         <div className={styles.deckTitle}>
            <span className={styles.badge}>{number}</span>
            <h3>{title}</h3>
         </div>

         <div
            className={styles.stack}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => (startX.current = null)}
         >
            {[3, 2, 1].map((offset) => (
               <div
                  key={offset}
                  className={`${styles.card} ${styles.under} ${styles[`under${offset}`]}`}
                  aria-hidden="true"
               >
                  <div className={styles.photo}>
                     <Image
                        src={at(offset)}
                        alt=""
                        fill
                        sizes="302px"
                        className={styles.photoImg}
                        draggable={false}
                     />
                  </div>
                  <div className={styles.caption} />
               </div>
            ))}

            <button
               key={index}
               type="button"
               className={`${styles.card} ${styles.top} ${dealt ? styles.deal : ''}`}
               onClick={handleCardClick}
               aria-label={`Uvećaj fotografiju: ${label} ${counter}`}
            >
               <span className={styles.photo}>
                  <Image
                     src={at(0)}
                     alt=""
                     fill
                     sizes="302px"
                     className={styles.photoImg}
                     draggable={false}
                  />
                  <span className={styles.zoom} aria-hidden="true">
                     <svg viewBox="0 0 24 24">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                     </svg>
                  </span>
               </span>
               <span className={styles.caption}>
                  <span>{label.toUpperCase()}</span>
                  <span>{counter}</span>
               </span>
            </button>
         </div>

         <div className={styles.controls}>
            <button
               type="button"
               className={styles.prev}
               onClick={() => step(-1)}
               aria-label={`Prethodna fotografija — ${label}`}
            >
               <Arrow />
            </button>
            <button
               type="button"
               className={styles.next}
               onClick={() => step(1)}
               aria-label={`Sledeća fotografija — ${label}`}
            >
               SLEDEĆA →
            </button>
         </div>

         <p className={styles.srOnly} aria-live="polite">
            {label} {counter}
         </p>
      </div>
   );
}

export default function Gallery({ nails, lashes }) {
   // Each deck opens the lightbox with only its own photos.
   const [open, setOpen] = useState(false);
   const [photos, setPhotos] = useState([]);
   const [index, setIndex] = useState(0);

   const openDeck = (deckPhotos) => (i) => {
      setPhotos(deckPhotos);
      setIndex(i);
      setOpen(true);
   };

   return (
      <section id="galerija" className={styles.gallery}>
         <svg className={styles.rings} viewBox="0 0 480 480" aria-hidden="true">
            <circle cx="240" cy="240" r="230" />
            <circle cx="240" cy="240" r="170" />
         </svg>
         <svg
            className={`${styles.sparkle} ${styles.sparkleLeft}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
         >
            <path d={SPARKLE} />
         </svg>
         <svg
            className={`${styles.sparkle} ${styles.sparkleRight}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
         >
            <path d={SPARKLE} />
         </svg>

         <div className="container">
            <div className={styles.header}>
               <div>
                  <span className={styles.kicker}>GALERIJA</span>
                  <h2 className={styles.heading}>
                     NAŠI RADOVI<span className={styles.accent}>.</span>
                  </h2>
               </div>
               <p className={styles.intro}>
                  Dva špila, dve kolekcije. Listajte — klik na fotografiju je
                  otvara preko celog ekrana.
               </p>
            </div>

            <div className={styles.decks}>
               <Deck
                  number="01"
                  title="NOKTIĆI"
                  label="Nokti"
                  photos={nails}
                  onOpen={openDeck(nails)}
               />

               <div className={styles.spinBadge} aria-hidden="true">
                  <svg className={styles.spinText} viewBox="0 0 170 170">
                     <defs>
                        <path
                           id="galleryBadgeCircle"
                           d="M85 85m-62 0a62 62 0 1 1 124 0a62 62 0 1 1-124 0"
                        />
                     </defs>
                     <text>
                        <textPath
                           href="#galleryBadgeCircle"
                           textLength="386"
                           lengthAdjust="spacing"
                        >
                           BELLCA ✦ NAŠI RADOVI ✦ BELLCA ✦ NAŠI RADOVI ✦
                        </textPath>
                     </text>
                  </svg>
                  <svg className={styles.spinSparkle} viewBox="0 0 24 24">
                     <path d={SPARKLE} />
                  </svg>
               </div>

               <Deck
                  number="02"
                  title="TREPAVICE"
                  label="Trepavice"
                  photos={lashes}
                  onOpen={openDeck(lashes)}
                  mirrored
               />
            </div>
         </div>

         <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={photos.map((src) => ({ src }))}
            on={{ view: ({ index: i }) => setIndex(i) }}
            render={{
               slide: ({ slide }) => (
                  <div className={styles.lightboxSlide}>
                     <Image
                        src={slide.src}
                        alt=""
                        fill
                        sizes="100vw"
                        style={{ objectFit: 'contain' }}
                        loading="eager"
                     />
                  </div>
               ),
            }}
         />
      </section>
   );
}
