function getPassword() {
    const password = (((Math.random() * 10000) + " ").split('.')[0]);
    if (password.length === 4) {
        return password;
    }
    
}
// display password
document.getElementById("pin").addEventListener("click", function () {
    const display = document.getElementById("pin-display");
    display.value = getPassword();
})


// typing display
const buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", function(e){
   const digit = (e.target.innerText);
   if(isNaN(digit)){
       return false;

   }else{  
    const inputDisplay = document.getElementById("input-display");
    inputDisplay.value = inputDisplay.value + digit;
   }
   
})



























// function getFullName(firstName, lastName){
//     let fullName = "";
//     // const result= [...arguments].join("");
//     for(var i= 0; i<arguments.length; i++){
//         const namePart = arguments[i];
//         fullName = fullName + " " +namePart;
//     }

//     return fullName;
// }

// const name = getFullName("Kazi","Ahosun", "Habib", "Ripon", "Habi");
// console.log(name);