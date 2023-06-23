const popUp = document.querySelector('.pop-up');
const popUpImg = document.querySelector('.pop-up_img');
const images = document.querySelectorAll('.gallery-img');
const closeBtn = document.querySelectorAll('.mark');
const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.prev');
let objectBg;

export const handlePopUp = (e) => {
	objectBg = e.target.getAttribute('src');
	popUp.classList.add('show-pop-up');
	popUpImg.style.backgroundImage = `url(${objectBg})`;
	popUp.classList.remove('close-animation');
	// const currentElement = e.target.parentElement;
	// let prevImage =
	// 	currentElement.previousElementSibling.children[0].getAttribute('src');
	// let nextImage =
	// 	currentElement.nextElementSibling.children[0].getAttribute('src');
};

export const handleClosePopUp = () => {
	popUp.classList.add('close-animation');
	setTimeout(() => {
		popUp.classList.remove('show-pop-up');
		popUpImg.classList.remove(`${objectBg}`);
	}, 300);
};
