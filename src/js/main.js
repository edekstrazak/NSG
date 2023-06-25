import { alternateBetweenHeader } from './layouts/header';
import { handleParallaxBenefits } from './layouts/breaker';
import { toggleSubnavigation } from './layouts/nav';
window.onload = (() => {
  alternateBetweenHeader()
  toggleSubnavigation()
})

const handlePrallaxAboutUs = () => {
  if(window.innerWidth < 768) return
  const aboutUs = document.querySelector('.aboutus-content');
  
  let scrollValue = window.scrollY;
  const observer = scrollValue - aboutUs.offsetTop + window.innerHeight;
  const rate = observer / 5;
  console.log(rate);

    aboutUs.style.transform = `translateY(calc(8rem - ${rate}px))`;

}
window.onscroll = () => {
	handleParallaxBenefits();
  toggleSubnavigation()
  handlePrallaxAboutUs();
};




