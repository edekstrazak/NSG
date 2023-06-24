import { alternateBetweenHeader } from './layouts/header';
import { handleParallaxBenefits } from './layouts/breaker';
import { toggleSubnavigation } from './layouts/nav';
window.onload = (() => {
  alternateBetweenHeader()
  toggleSubnavigation()
})

window.onscroll = () => {
	handleParallaxBenefits();
  toggleSubnavigation()
};

