import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
   return (
      <>
         <Navbar />
         <Hero />
         <AboutUs />
         <Services />
         <Contact />
         <Footer />
      </>
   );
}
