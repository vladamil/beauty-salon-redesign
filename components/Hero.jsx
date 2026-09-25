import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';
import CtaButton from './CtaButton';
import styles from './Hero.module.css';

export default function Hero() {
   return (
      <header className={styles.hero} id="home">
         <div className={styles.particlesLayer}>
            <ParticlesBackground />
         </div>

         <div className={styles.content}>
            <p>
               Vaš život ne mora biti savršen, ali nokti i trepavice mogu biti
            </p>
            <CtaButton />
         </div>

         <div className={styles.imageWrapper}>
            <Image
               src="/hero.png"
               alt="Beauty model"
               fill
               sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
               priority
               draggable="false"
               className={styles.image}
            />
         </div>
      </header>
   );
}
