document.onkeydown = escrever;
var buttons = document.getElementById("table-calc").rows

function checkSizeNumbers(){
  if(buttons[0].cells[0].innerText.length != 15){
    if(buttons[0].cells[0].innerText.length == 3){
      let troca = buttons[0].cells[0].innerText
      troca = troca[0] + '.' + troca[1] + troca.slice(2, troca.length)
      buttons[0].cells[0].innerText = troca
    }

    else if(buttons[0].cells[0].innerText.length == 5){
      let troca = buttons[0].cells[0].innerText
      troca = troca[0] + troca[2] + '.' + troca.slice(3, troca.length)
      buttons[0].cells[0].innerText = troca
    }
    return true
  }
}

function escrever(key){
  if (key.keyCode === 48 || key.keyCode === 96){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 0
    }
  }
  if (key.keyCode === 49 || key.keyCode === 97){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 1
    }
  }
  if (key.keyCode === 50 || key.keyCode === 98){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 2
    }
  }
  if (key.keyCode === 51 || key.keyCode === 99){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 3
    }
  }
  if (key.keyCode === 52 || key.keyCode === 100){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 4
    }
  }
  if (key.keyCode === 53 || key.keyCode === 101){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 5
    }
  }
  if (key.keyCode === 54 || key.keyCode === 102){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 6
    }
  }
  if (key.keyCode === 55 || key.keyCode === 103){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 7
    }
  }
  if (key.keyCode === 56 || key.keyCode === 104){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 8
    }
  }
  if (key.keyCode === 57 || key.keyCode === 105){
    if (checkSizeNumbers() == true){
      buttons[0].cells[0].innerText += 9
    }
  }
  if (key.keyCode === 8){
    buttons[0].cells[0].innerText = buttons[0].cells[0].innerText.slice(0, buttons[0].cells[0].innerText.length -1)
  }
}