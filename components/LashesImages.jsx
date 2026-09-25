'use client';

import Image from 'next/image';
import { useLightbox } from '@/context/LightboxContext';

import styles from './Nails.module.css';

export default function LashesImages({ lashes }) {
   const { openLightbox } = useLightbox();

   return (
      <div className={styles.bentoGrid}>
         <div className={styles.item}>
            <Image
               src={lashes[0]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[0])}
            />
         </div>
         <div className={`${styles.item} ${styles.wide}`}>
            <Image
               src={lashes[1]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[1])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[2]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[2])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[3]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[3])}
            />
         </div>
         <div className={`${styles.item} ${styles.wide}`}>
            <Image
               src={lashes[4]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[4])}
            />
         </div>
         <div className={`${styles.item} ${styles.full}`}>
            <Image
               src={lashes[5]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[5])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[6]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[6])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[7]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[7])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[8]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[8])}
            />
         </div>
         <div className={`${styles.item} ${styles.tall}`}>
            <Image
               src={lashes[9]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[9])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[10]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[10])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[11]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[11])}
            />
         </div>
         <div className={`${styles.item} ${styles.tall}`}>
            <Image
               src={lashes[12]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[12])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[13]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[13])}
            />
         </div>
         <div className={`${styles.item} ${styles.wide}`}>
            <Image
               src={lashes[14]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[14])}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={lashes[15]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Lashes"
               onClick={() => openLightbox(lashes[15])}
            />
         </div>
      </div>
   );
}
