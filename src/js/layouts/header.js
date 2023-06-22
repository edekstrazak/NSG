const secondOptionBackground = document.querySelector('.h1-option-2-bg')

export const alternateBetweenHeader = () => {
  setInterval(() => {
    console.log('zmiana');
    secondOptionBackground.classList.toggle('max-w')
  }, 4000)
}