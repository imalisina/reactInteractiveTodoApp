// add smooth scroll function for pricing section
export const handleSmoothScroll = (elementClass) => {
       console.log(elementClass);
       const element = document.querySelector(elementClass);
       window.scrollTo({
              top: element?.getBoundingClientRect().top,
              left: 0,
              behavior: 'smooth',
       });
}