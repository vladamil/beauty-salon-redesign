'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useLightbox } from '@/context/LightboxContext';
import Image from 'next/image';

export default function LigthboxWrapper({ images }) {
   const { isOpen, closeLightbox, currentIndex, setCurrentIndex } =
      useLightbox();

   const slides = images.map((src) => ({ src }));

   return (
      <Lightbox
         open={isOpen}
         close={closeLightbox}
         index={currentIndex}
         slides={slides}
         on={{
            view: ({ index }) => setCurrentIndex(index),
         }}
         render={{
            slide: ({ slide }) => (
               <div
                  style={{
                     position: 'relative',
                     width: '100%',
                     height: '100%',
                  }}
               >
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
   );
}
