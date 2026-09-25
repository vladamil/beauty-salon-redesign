import AboutImages from './AboutImages';
import styles from './AboutUs.module.css';

export default function AboutUs() {
   return (
      <section id="o-nama" className={styles.about}>
         <div className="container">
            <h1>Bellca Beauty Studio</h1>
            <div className={styles.line}></div>
            <p>
               Moj koncept rada je da Vam pružim vrhunsku uslugu, nebitan mi je
               kvantitet nego kvalitet.
               <br />
               Bezbedan ispitan materijal, sterilizovan pribor i čisto radno
               mesto je nešto što se podrazumeva, baš kao i ljubaznost i
               prijatna atmosfera.
            </p>
            <AboutImages />
         </div>
      </section>
   );
}
