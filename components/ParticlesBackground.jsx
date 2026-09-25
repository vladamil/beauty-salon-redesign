'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
   const [init, setInit] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

   // Check for screen size
   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth < 768);
      };

      handleResize(); // Check once on mount
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   // 1. Initialize the engine once
   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   // 2. Only render after initialization is complete
   if (!init) return null;

   return (
      <Particles
         id="tsparticles"
         options={{
            fullScreen: { enable: false },
            detectRetina: true,
            particles: {
               number: { value: isMobile ? 60 : 150 },
               color: { value: ['#ffffff', '#9b111e'] },
               size: {
                  value: isMobile ? { min: 1, max: 3 } : { min: 1, max: 5 },
               },
               opacity: { value: 0.5 },
               move: {
                  enable: true,
                  direction: 'bottom',
                  speed: 2.5,
                  random: true,
               },
            },
         }}
      />
   );
}
