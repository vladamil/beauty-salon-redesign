import Image from 'next/image';
import styles from './AboutUs.module.css';

const photos = [
   { src: '/about/about1.jpg', wrap: styles.photoOne, frame: styles.frameOne },
   { src: '/about/about4.jpg', wrap: styles.photoTwo, frame: styles.frameTwo },
   {
      src: '/about/about3.jpg',
      wrap: styles.photoThree,
      frame: styles.frameThree,
   },
];

export default function AboutImages() {
   return (
      <div className={styles.gallery}>
         {photos.map(({ src, wrap, frame }) => (
            <div key={src} className={`${styles.polaroid} ${wrap}`}>
               <div className={`${styles.frame} ${frame}`}>
                  <Image
                     src={src}
                     alt="Atelje Bellca Beauty Studio"
                     fill
                     sizes="(max-width: 768px) 45vw, 500px"
                     className={styles.photo}
                  />
               </div>
            </div>
         ))}
      </div>
   );
}
