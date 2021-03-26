document.onkeydown = escrever;

function escrever(key){
  if (key.keyCode === 48 || key.keyCode === 96){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 0
    }
  }
  if (key.keyCode === 49 || key.keyCode === 97){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 1
    }
  }
  if (key.keyCode === 50 || key.keyCode === 98){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 2
    }
  }
  if (key.keyCode === 51 || key.keyCode === 99){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 3
    }
  }
  if (key.keyCode === 52 || key.keyCode === 100){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 4
    }
  }
  if (key.keyCode === 53 || key.keyCode === 101){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 5
    }
  }
  if (key.keyCode === 54 || key.keyCode === 102){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 6
    }
  }
  if (key.keyCode === 55 || key.keyCode === 103){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 7
    }
  }
  if (key.keyCode === 56 || key.keyCode === 104){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 8
    }
  }
  if (key.keyCode === 57 || key.keyCode === 105){
    if (checkSizeNumbers() == true){
      buttons[1].cells[0].innerText += 9
    }
  }
  if (key.keyCode === 8){
    buttons[1].cells[0].innerText = buttons[1].cells[0].innerText.slice(0, buttons[1].cells[0].innerText.length -1)
  }
}