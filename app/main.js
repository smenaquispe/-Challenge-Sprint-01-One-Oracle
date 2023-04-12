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
const encrpytingKeys = {
  a : 'ai',
  e : 'enter',
  i : 'imes',
  o : 'ober',
  u : 'ufat'
}

const encrypting = (input) => {
  const chars = input.split('')
  let encripted = ''
  chars.forEach(ch => encrpytingKeys[ch] ? encripted += encrpytingKeys[ch] : encripted += ch)
  return encripted
}

const desincriptying = (input) => {
  let desencripted = input
  for(const [key, value] of Object.entries(encrpytingKeys))
    desencripted = desencripted.replaceAll(value, key)
  return desencripted
}

document.addEventListener('click', e => {
  if(e.target.matches('#encriptar')){
    const { value } = $('#inputText')
    const encripted = encrypting(value)
    encripted.split('\n').forEach(paragraph => $('#resultText').innerHTML += paragraph + '<br>')
  }

  if(e.target.matches('#desencriptar')){
    const { value } = $('#inputText')
    const desencripted = desincriptying(value)
    desencripted.split('\n').forEach(paragraph => $('#resultText').innerHTML += paragraph + '<br>')
  }
  
})
