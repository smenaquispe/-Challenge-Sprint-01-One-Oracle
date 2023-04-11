const $ = selector => document.querySelector(selector)

/** check input */
const checkInput = event => {
  const regex = /^[a-z]*$/;
  const key = String.fromCharCode(event.keyCode);
  if (!regex.test(key)) {
    if(key === ' ' || key === '\r') return true
    event.preventDefault();
    return false;
  }
  return true;
}


$('#inputText').addEventListener('keypress', e => {
  checkInput(e)
})

/** encripting and desincriptying */
const encrypting = (input) => {
  let encripted = input
  const encrpytingKeys = {
    a : 'ai',
    e : 'enter',
    i : 'imes',
    o : 'ober',
    u : 'ufat'
  }

  for(const [key, value] of Object.entries(encrpytingKeys)) {
    encripted = encripted.replaceAll(key, value)
  }
  
  return encripted
}

document.addEventListener('click', e => {
  if(e.target.matches('#encriptar')){
    const { value } = $('#inputText')
    const encripted = encrypting(value)
    encripted.split('\n').forEach(paragraph => $('#resultText').innerHTML += paragraph + '<br>')
  }
})
