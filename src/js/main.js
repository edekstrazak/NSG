import { alternateBetweenHeader } from './layouts/header';
import { handleParallaxBenefits } from './layouts/breaker';
import { toggleSubnavigation } from './layouts/nav';
import { handlePrallaxAboutUs } from './layouts/aboutus';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
window.onload = (() => {
  alternateBetweenHeader()
  toggleSubnavigation()
})


window.onscroll = () => {
	handleParallaxBenefits();
  toggleSubnavigation()
  handlePrallaxAboutUs();
};





