'use client';

import Image from 'next/image';
import { useLightbox } from '@/context/LightboxContext';

import styles from './Nails.module.css';

export default function NailsImages({ nails }) {
   const { openLightbox } = useLightbox();

   return (
      <div className={styles.bentoGrid}>
         <div className={styles.item}>
            <Image
               src={nails[0]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[0]);
               }}
            />
         </div>
         <div className={`${styles.item} ${styles.wide}`}>
            <Image
               src={nails[1]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[1]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[2]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[2]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[3]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[3]);
               }}
            />
         </div>
         <div className={`${styles.item} ${styles.wide}`}>
            <Image
               src={nails[4]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[4]);
               }}
            />
         </div>
         <div className={`${styles.item} ${styles.full}`}>
            <Image
               src={nails[5]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[5]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[6]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[6]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[7]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[7]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[8]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[8]);
               }}
            />
         </div>
         <div className={`${styles.item} ${styles.tall}`}>
            <Image
               src={nails[9]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[9]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[10]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[10]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[11]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[11]);
               }}
            />
         </div>
         <div className={`${styles.item} ${styles.tall}`}>
            <Image
               src={nails[12]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[12]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[13]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[13]);
               }}
            />
         </div>
         <div className={`${styles.item} ${styles.wide}`}>
            <Image
               src={nails[14]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[14]);
               }}
            />
         </div>
         <div className={styles.item}>
            <Image
               src={nails[15]}
               fill
               sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
               alt="Nails"
               onClick={() => {
                  openLightbox(nails[15]);
               }}
            />
         </div>
      </div>
   );
}
