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

// const images = document.querySelectorAll('.gallery-img');
// const closeBtn = document.querySelectorAll('.mark');

// closeBtn.forEach((btn) => btn.addEventListener('click', handleClosePopUp));
// images.forEach((el) => el.addEventListener('click', handlePopUp));
