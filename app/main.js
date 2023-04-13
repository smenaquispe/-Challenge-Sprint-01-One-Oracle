const $ = selector => document.querySelector(selector)

/** check input */
const checkInput = (event, key) => {
  const regex = /^[a-z]*$/;
  if (!regex.test(key)) {
    if(key === ' ' || key === '\r') return true
    event.preventDefault();
    return false;
  }
  return true;
}

const emptyButton = () => {
  if($('#inputText').value.length === 0) {
    $('#encriptar').classList.add('disabled')
    $('#desencriptar').classList.add('disabled')
  } else {
    $('#encriptar').classList.remove('disabled')
    $('#desencriptar').classList.remove('disabled')
  }
}


$('#inputText').addEventListener('keypress', e => {
  const key = String.fromCharCode(e.keyCode);
  checkInput(e, key)
})

$('#inputText').addEventListener('paste', async (e) => {
  e.preventDefault()
  const text = navigator.clipboard.readText()
  text.then(
    t => {
      const good = t.split('').every(ch => checkInput(e, ch))
      if(good) e.target.value = t
    } 
  )
})

/** detect if input is empty */
window.addEventListener('load', e => {
  emptyButton()
})

$('#inputText').addEventListener('keyup', e => {
  emptyButton()
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


