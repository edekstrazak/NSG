const aboutUs = document.querySelector('.aboutus-content');
export const handlePrallaxAboutUs = () => {
	if (window.innerWidth < 768) return;
	let scrollValue = window.scrollY;
	const observer = scrollValue - aboutUs.offsetTop + window.innerHeight;
	const rate = observer / 5;
	aboutUs.style.transform = `translateY(calc(80% - ${rate}px))`;
};
