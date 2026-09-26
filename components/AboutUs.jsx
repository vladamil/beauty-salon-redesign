import AboutImages from './AboutImages';
import styles from './AboutUs.module.css';

export default function AboutUs() {
   return (
      <section id="o-nama" className={styles.about}>
         <div className="container">
            <div className={styles.inner}>
               <div className={styles.text}>
                  <span className={styles.kicker}>O NAMA</span>
                  <h2 className={styles.heading}>
                     KVALITET.
                     <br />
                     NE KVANTITET.
                  </h2>
                  <p className={styles.body}>
                     Moj koncept rada je da vam pružim vrhunsku uslugu —
                     bezbedan, ispitan materijal, sterilizovan pribor i čisto
                     radno mesto, baš kao i ljubaznost i prijatna atmosfera.
                  </p>
                  <div className={styles.signature}>
                     <span className={styles.avatar} />
                     <span className={styles.signatureText}>
                        — Branči, osnivačica studija
                     </span>
                  </div>
               </div>
               <AboutImages />
            </div>
         </div>
      </section>
   );
}
