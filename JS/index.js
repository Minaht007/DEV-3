
const input = document.querySelector(".input")
const btm = document.querySelector(".btm")
const textarea = document.querySelector(".textarea")

function text(e) {    
    e.preventDefault();
    const textInput = input.value
    textarea.value = textInput    
}

btm.addEventListener("click", text)