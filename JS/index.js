
const input = document.querySelector(".input")
const btm = document.querySelector(".btm")
const textarea = document.querySelector(".textarea")
const p = document.querySelector(".p")

function text(e) {    
    e.preventDefault();
    const textInput = input.value
    textarea.value = textInput 
    p.textContent = textInput   
}

btm.addEventListener("click", text)

// part two

let textTransfer = false;

let startX
let endX
let startY
let endY


p.addEventListener('mousedown', function(e) {
    textTransfer = true
    startX = e.value
    startY = e.value
    symbolSelected(startX, startY)
})

p.addEventListener('mousemove', function(e) {
    if(textTransfer == true){
        endX = e.value
        endY = e.value
        symbolSelected(startX, startY, endX, endY)
    }
})

p.addEventListener('mouseup', function(e) {
    textTransfer = true
    endX = e.value
    endY = e.value
    symbolSelected(endX, endY)
})