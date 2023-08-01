const fullName = document.querySelector('input[name="fullName"]')
const email = document.querySelector('input[name="email"]')
const msg = document.querySelector('textarea[name="msg"]')
const formBtn = document.querySelector('.contact button')
const errorInfo = document.querySelector('.error-info')

formBtn.addEventListener('click', (e) => {
  if(email.length === 0){
    errorInfo.textContent = 'Wpisz email'
    return e.preventDefault()
  }
  else {
    const emailSplitWithAt = email.value.split('@')
    if(emailSplitWithAt.length === 2 && emailSplitWithAt[0].length > 0){
      const emailDomainSplitWithPeriod = emailSplitWithAt[1].split('.')
      if(emailDomainSplitWithPeriod.length !== 2){
        errorInfo.textContent = 'Podaj poprawną domenę maila (adres po małpie)'
        return e.preventDefault()
      }
    }
    else {
      errorInfo.textContent = 'Email nie zawiera małpy, bądź członu przed nią'
      return e.preventDefault()
    }
  }
  if(msg.value.length === 0 || fullName.value.length === 0) {
    errorInfo.textContent = 'Pusta wiadomość, bądź imię i naziwsko'
    return e.preventDefault()
  }
  else {
    const nameSplit = fullName.value.split(' ')
    if(nameSplit.length === 1){
      errorInfo.textContent = 'Podaj pełne imię i nazwisko'
      return e.preventDefault()
    }
  }
})