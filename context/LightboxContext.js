'use client';

import { createContext, useContext, useState } from 'react';

const LightboxContext = createContext();

export function LightboxProvider({ children, images }) {
   const [isOpen, setIsOpen] = useState(false);
   const [currentIndex, setCurrentIndex] = useState(-1);

   const openLightbox = (src) => {
      const index = images.findIndex((img) => img === src);
      setCurrentIndex(index);
      setIsOpen(true);
   };

   const closeLightbox = () => setIsOpen(false);

   return (
      <LightboxContext.Provider
         value={{
            isOpen,
            currentIndex,
            openLightbox,
            closeLightbox,
            setCurrentIndex,
         }}
      >
         {children}
      </LightboxContext.Provider>
   );
}

export const useLightbox = () => useContext(LightboxContext);
