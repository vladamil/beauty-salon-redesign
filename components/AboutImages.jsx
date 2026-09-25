'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './AboutUs.module.css';

const images = [
   '/about/about1.jpg',
   '/about/about2.jpg',
   '/about/about3.jpg',
   '/about/about4.jpg',
   '/about/about5.jpg',
   '/about/about6.jpg',
   '/about/about7.jpg',
];

export default function AboutImages() {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000); // change every 5s

      return () => clearInterval(interval);
   }, []);

   return (
      <div className={styles.imgContainer}>
         {images.map((src, index) => (
            <Image
               key={index}
               src={src}
               fill
               alt="Kozmetički salon Bellca Branchie"
               sizes="(max-width: 768px) 250px, 350px"
               className={`${styles.image} ${
                  index === currentIndex ? styles.active : ''
               }`}
            />
         ))}
      </div>
   );
}
