const buttons = document.querySelectorAll('#table-calc button')

buttons[1].addEventListener('click', () => {
  buttons[0].innerText = buttons[1].innerText
})