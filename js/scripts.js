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

var buttons = document.getElementById("table-calc").rows

buttons[1].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[1].cells[0].innerText
  }
})

buttons[1].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[1].cells[1].innerText
  }
})

buttons[1].cells[2].addEventListener("click", ()=>{
  buttons[0].cells[0].innerText = null
})

buttons[1].cells[3].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[1].cells[3].innerText
  }
})

buttons[2].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[2].cells[0].innerText
  }
})

buttons[2].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[2].cells[1].innerText
  }
})

buttons[2].cells[2].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[2].cells[2].innerText
  }
})

buttons[2].cells[3].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[2].cells[3].innerText
  }
})

buttons[3].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[3].cells[0].innerText
  }
})

buttons[3].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[3].cells[1].innerText
  }
})

buttons[3].cells[2].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[3].cells[2].innerText
  }
})

buttons[3].cells[3].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[3].cells[3].innerText
  }
})

buttons[4].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[4].cells[0].innerText
  }
})

buttons[4].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[4].cells[1].innerText
  }
})

buttons[4].cells[2].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[4].cells[2].innerText
  }
})

buttons[4].cells[3].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[4].cells[3].innerText
  }
})

buttons[5].cells[0].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[5].cells[0].innerText
  }
})

buttons[5].cells[1].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[5].cells[1].innerText
  }
})

buttons[5].cells[2].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[5].cells[2].innerText
  }
})

buttons[5].cells[3].addEventListener("click", ()=>{
  if (checkSizeNumbers() == true){
    buttons[0].cells[0].innerText += buttons[5].cells[3].innerText
  }
})
