const $ = selector => document.querySelector(selector)

$('#encriptar').addEventListener('click', e => {
  const { value } = $('#inputText')
  value.split('\n').forEach(paragraph => $('#resultText').innerHTML += paragraph + '<br>')

})
