import { alternateBetweenHeader } from './layouts/header';
import { handleParallaxBenefits } from './layouts/breaker';
import { handleClosePopUp, handlePopUp } from './layouts/galery';
// window.onload = (() => {
//   alternateBetweenHeader()
// })

window.onscroll = () => {
	handleParallaxBenefits();
};

const images = document.querySelectorAll('.gallery-img');
const closeBtn = document.querySelectorAll('.mark');

closeBtn.forEach((btn) => btn.addEventListener('click', handleClosePopUp));
images.forEach((el) => el.addEventListener('click', handlePopUp));
