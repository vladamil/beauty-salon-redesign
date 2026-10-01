'use client';

// A real link to a section (#id) that scrolls there smoothly without adding
// "#id" to the address bar. Without JavaScript it still works as a normal
// anchor link. Smoothness comes from `scroll-behavior: smooth` in globals.css.
export default function ScrollLink({ to, className, children, ...rest }) {
   const handleClick = (e) => {
      const target = document.getElementById(to);
      if (!target) return; // let the browser handle it normally
      e.preventDefault();
      target.scrollIntoView();
   };

   return (
      <a href={`#${to}`} className={className} onClick={handleClick} {...rest}>
         {children}
      </a>
   );
}
