const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const slotOne = document.getElementById("slot-one")
const slotTwo = document.getElementById("slot-two")
let passwordOne = ""
let passwordTwo = ""
let pswLength = document.getElementById("psw-length")


function generateChar(){
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function newPasswords() {
    let passwordLength = pswLength.value
    for(let i = 0; i < passwordLength; i++){
        passwordOne += generateChar()
    }
        for(let i = 0; i < passwordLength; i++){
        passwordTwo += generateChar()
    }
    slotOne.textContent = passwordOne
    slotTwo.textContent = passwordTwo  
}


function copyOne() {
    let copyText = slotOne.textContent
    navigator.clipboard.writeText(copyText)
    if(copyText != ""){
        slotOne.style.border = "2px solid #55F991"
        slotTwo.style.border = "none"
    }
}

function copyTwo() {
    let copyText = slotTwo.textContent
    navigator.clipboard.writeText(copyText)
    if(copyText != ""){
        slotTwo.style.border = "2px solid #55F991"
        slotOne.style.border = "none"
    }
}

function clearPasswords(){
    passwordOne = ""
    passwordTwo = ""
    slotOne.textContent = passwordOne
    slotTwo.textContent = passwordTwo
    slotOne.style.border = "none"
    slotTwo.style.border = "none"
    pswLength.value = ''
}
