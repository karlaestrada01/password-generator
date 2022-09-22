/**
 * characters used for passwords
 */
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


firstPassword = document.getElementById("first-password")
secondPassword = document.getElementById("second-password")

passwordOne=""
passwordTwo = ""

/**
 * Generate creates two random passwords
 */
function generate() {
    passwordOne=""
    passwordTwo=""
    for(let i=0; i<15;i++){
        passwordOne += characters[Math.floor(Math.random() * characters.length)]
    }
    for(let i=0; i<15;i++){
        passwordTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    firstPassword.textContent = passwordOne;
    secondPassword.textContent = passwordTwo;
    
}

/**
 * Copies the first password to user's clipboard
 */
function copyFirstPassword() {
    const password = document.getElementById("first-password").textContent;
    navigator.clipboard.writeText(password);
    document.getElementById("first-password").textContent = "Copied!"
    
}

/**
 * Copies the second password to user's clipboard
 */
function copySecondPassword() {
    const password2= document.getElementById("second-password").textContent;
    navigator.clipboard.writeText(password2);
    document.getElementById("second-password").textContent = "Copied!";


}
