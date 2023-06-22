import { alternateBetweenHeader } from './layouts/header';
import { handleParallaxBenefits } from './layouts/breaker';

// window.onload = (() => {
//   alternateBetweenHeader()
// })

window.onscroll = () => {
	handleParallaxBenefits();
};
