var buttons = document.getElementById("table-calc").rows

function checkSizeNumbers(){
  if(buttons[1].cells[0].innerText.length != 15){

    if(buttons[1].cells[0].innerText.length == 1 && buttons[1].cells[0].innerText == 0){
      buttons[1].cells[0].innerText = buttons[1].cells[0].innerText.slice(1, 2)
    }

    else if(buttons[1].cells[0].innerText.length == 3){
      let troca = buttons[1].cells[0].innerText
      troca = troca[0] + '.' + troca.slice(1, troca.length)
      buttons[1].cells[0].innerText = troca
    }

    else if(buttons[1].cells[0].innerText.length == 5){
      let troca = buttons[1].cells[0].innerText
      troca = troca[0] + troca[2] + '.' + troca.slice(3, troca.length)
      buttons[1].cells[0].innerText = troca
    }

    else if(buttons[1].cells[0].innerText.length == 6){
      let troca = buttons[1].cells[0].innerText
      troca = troca.slice(0, 2) + troca[3] + '.' + troca.slice(4, troca.length)
      buttons[1].cells[0].innerText = troca
    }

    else if(buttons[1].cells[0].innerText.length == 7){
      let troca = buttons[1].cells[0].innerText
      troca = troca[0] + '.' + troca.slice(1, 3) + troca[4] + '.' + troca.slice(5, troca.length)
      buttons[1].cells[0].innerText = troca
    }

    return true
  }
}

buttons[2].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[2].cells[0].innerText
  }
})

buttons[2].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[2].cells[1].innerText
  }
})

buttons[2].cells[2].addEventListener("click", ()=>{ //Botão limpar
  buttons[0].cells[0].innerText = null
  buttons[1].cells[0].innerText = 0
})

buttons[2].cells[3].addEventListener("click", ()=>{ //Botão apagar 1 em 1
  buttons[1].cells[0].innerText = buttons[1].cells[0].innerText.slice(0, buttons[1].cells[0].innerText.length -1)
})

buttons[3].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[3].cells[0].innerText
  }
})

buttons[3].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[3].cells[1].innerText
  }
})

buttons[3].cells[2].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[3].cells[2].innerText
  }
})

buttons[3].cells[3].addEventListener("click", ()=>{ //Botão multiplicação
  upMultiple()
})

buttons[4].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[4].cells[0].innerText
  }
})

buttons[4].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[4].cells[1].innerText
  }
})

buttons[4].cells[2].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[4].cells[2].innerText
  }
})

buttons[4].cells[3].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[4].cells[3].innerText
  }
})

buttons[5].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[5].cells[0].innerText
  }
})

buttons[5].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[5].cells[1].innerText
  }
})

buttons[5].cells[2].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[5].cells[2].innerText
  }
})

buttons[5].cells[3].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[5].cells[3].innerText
  }
})

buttons[6].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[6].cells[0].innerText
  }
})

buttons[6].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[6].cells[1].innerText
  }
})

buttons[6].cells[2].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[6].cells[2].innerText
  }
})

buttons[6].cells[3].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[1].cells[0].innerText += buttons[6].cells[3].innerText
  }
})
