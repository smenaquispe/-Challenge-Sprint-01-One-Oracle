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

const doFunction = (funct) => {
  const { value } = $('#inputText')
  const result = funct(value)

  $('#resultText').innerHTML = ''
  result.split('\n').forEach((paragraph, index, array) => {
    $('#resultText').innerHTML += paragraph 
    if(index !== array.length - 1) $('#resultText').innerHTML += '<br>'
  })
}

/**
 * click board
 */

const copy = () => {
  const result = $('#resultText').innerHTML.split('<br>').join('\n')
  navigator.clipboard.writeText(result);
}

/**
 * click events
 */
$('#encriptar').addEventListener('click', e => doFunction(encrypting))
$('#desencriptar').addEventListener('click', e => doFunction(desincriptying))
$('#copy').addEventListener('click', e => copy())


