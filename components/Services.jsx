import Nails from './Nails';
import Lashes from './Lashes';
import Gallery from './Gallery';

const nails = [
   '/nails/nokti01.jpg',
   '/nails/nokti02.jpeg',
   '/nails/nokti03.jpeg',
   '/nails/nokti04.jpeg',
   '/nails/nokti05.jpeg',
   '/nails/nokti06.jpeg',
   '/nails/nokti07.jpeg',
   '/nails/nokti08.jpeg',
   '/nails/nokti09.jpeg',
   '/nails/nokti10.jpeg',
   '/nails/nokti11.jpeg',
   '/nails/nokti12.jpeg',
   '/nails/nokti13.jpeg',
   '/nails/nokti14.jpeg',
   '/nails/nokti15.jpeg',
   '/nails/nokti16.jpeg',
];

const lashes = [
   '/lashes/trepavice01.jpg',
   '/lashes/trepavice02.jpg',
   '/lashes/trepavice03.jpg',
   '/lashes/trepavice04.jpg',
   '/lashes/trepavice05.jpg',
   '/lashes/trepavice06.jpg',
   '/lashes/trepavice07.jpg',
   '/lashes/trepavice08.jpg',
   '/lashes/trepavice09.jpg',
   '/lashes/trepavice10.jpg',
   '/lashes/trepavice11.jpg',
   '/lashes/trepavice12.jpeg',
   '/lashes/trepavice13.jpg',
   '/lashes/trepavice14.jpg',
   '/lashes/trepavice15.jpg',
   '/lashes/trepavice16.jpeg',
];

export default function Services() {
   return (
      <>
         <Nails nails={nails} />
         <Lashes lashes={lashes} />
         <Gallery nails={nails} lashes={lashes} />
      </>
   );
}
