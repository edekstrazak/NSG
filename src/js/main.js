const section = document.querySelector('.benefits');
const cards = document.querySelectorAll('.benefits-card');
const handleParallaxBenefits = () => {
	let scrollValue = window.scrollY;

	const observer = scrollValue - section.offsetTop + window.innerHeight;

	const rate = observer / 30;

	if (observer >= window.innerHeight / 2) {
		cards[0].style.transform = `translateX(-${rate}px)`;
		cards[1].style.transform = `translateX(${rate}px)`;
	} else {
		cards[0].style.transform = `translateX(-${rate}px)`;
		cards[1].style.transform = `translateX(${rate}px)`;
	}
};

document.addEventListener('scroll', handleParallaxBenefits);
