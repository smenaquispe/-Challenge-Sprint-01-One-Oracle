const $ = selector => document.querySelector(selector)

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

$('#encriptar').addEventListener('click', e => {
  const { value } = $('#inputText')
  value.split('\n').forEach(paragraph => $('#resultText').innerHTML += paragraph + '<br>')

})

$('#inputText').addEventListener('keypress', e => {
  checkInput(e)
})
