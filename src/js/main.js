import { alternateBetweenHeader } from './layouts/header';
import { handleParallaxBenefits } from './layouts/breaker';
import { toggleSubnavigation } from './layouts/nav';
import { handlePrallaxAboutUs } from './layouts/aboutus';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
window.onload = () => {
	alternateBetweenHeader();
	toggleSubnavigation();
};

window.onscroll = () => {
	handleParallaxBenefits();
	toggleSubnavigation();
	handlePrallaxAboutUs();
};

// const nav = document.querySelector('nav');
// const navHeight = nav.offsetHeight;

// const handleScrollSpy = () => {
// 	let sectionArr = [];
// 	const spySections = document.querySelectorAll('.spy');
// 	const navItems = document.querySelectorAll(
// 		'.nav-desktop-anchors .nav-list-item a'
// 	);
// 	spySections.forEach((sec) => {
// 		if (window.scrollY <= sec.offsetTop + sec.offsetHeight - navHeight) {
// 			sectionArr.push(sec);
// 			const sectionName = sectionArr[0].getAttribute('id');
// 			const currentSec = document.querySelector(
// 				`.nav-desktop-anchors .nav-list-item [href*="${sectionName}"]`
// 			);
// 			navItems.forEach((item) => item.classList.remove('active-section'));
// 			currentSec.classList.add('active-section');
// 		}
// 	});
// };

// window.addEventListener('scroll', handleScrollSpy);
