const popUp = document.querySelector('.pop-up');
const popUpImg = document.querySelector('.pop-up_img');
const images = document.querySelectorAll('.gallery-img img');
const closeBtn = document.querySelectorAll('.mark');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let objectBg;
let imgIndex;
const handlePopUp = (e, index) => {
  objectBg = e.target.getAttribute('src');
  popUp.classList.add('show-pop-up');
  popUpImg.style.backgroundImage = `url(${objectBg})`;
  popUp.classList.remove('close-animation');
  imgIndex = index + 1;
  
}
images.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    handlePopUp(e, index)
  })
});

const handleClosePopUp = () => {
	popUp.classList.add('close-animation');
	setTimeout(() => {
		popUp.classList.remove('show-pop-up');
		popUpImg.classList.remove(`${objectBg}`);
	}, 300);
};

const handleNextImg = () => {
if (imgIndex < images.length) {
  imgIndex++
  popUpImg.style.backgroundImage = `url('./src/img/img_${imgIndex}.jpeg')`;
} else {
  return
}
}
const handlePrevImg = () => {
if (imgIndex > 1) {
  imgIndex--
  popUpImg.style.backgroundImage = `url('./src/img/img_${imgIndex}.jpeg')`;
} else {
  return
}
}

nextBtn.addEventListener('click', handleNextImg)
prevBtn.addEventListener('click', handlePrevImg)


closeBtn.forEach((btn) => btn.addEventListener('click', handleClosePopUp));
