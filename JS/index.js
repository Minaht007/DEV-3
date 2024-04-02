
const input = document.querySelector(".input")
const btm = document.querySelector(".btm")
const textarea = document.querySelector(".textarea")
const p = document.querySelector(".p")
const transfer = document.querySelector(".transfer")

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
    startX = e.clientX
    startY = e.clientY
    symbolSelected(startX, startY)
})

p.addEventListener('mousemove', function(e) {
    if(textTransfer == true){
        endX = e.clientX
        endY = e.clientY
        symbolSelected(endX, endY)
    }
})

p.addEventListener('mouseup', function(e) {
    textTransfer = true
    endX = e.clientX
    endY = e.clientY
    lettersTransfer()
    textTransfer = false
})

function symbolSelected(x, y) {   
    const rect = p.getBoundingClientRect();
    const selectedSymbols = [];

    p.childNodes.forEach(symbol => {
        const bounds = symbol.getBoundingClientRect();
        const symbolX = bounds.left - rect.left;
        const symbolY = bounds.top - rect.top;

        if (symbolX >= startX && symbolX <= x && symbolY >= startY && symbolY <= y) {
            selectedSymbols.push(symbol);
            symbol.classList.add('transfer');
        }
    });
}

function lettersTransfer() {
  
    const rect = p.getBoundingClientRect();
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    p.querySelectorAll('.p').forEach(symbol => {
        const bounds = symbol.getBoundingClientRect();
        const symbolX = bounds.left - rect.left + deltaX;
        const symbolY = bounds.top - rect.top + deltaY;

        symbol.style.left = symbolX + 'px';
        symbol.style.top = symbolY + 'px';
        symbol.classList.remove('transfer'); 
    });
}