// random password generator
function getPassword() {
    const password = (((Math.random() * 10000) + " ").split('.')[0]);
    if (password.length === 4) {
        return password;
    }else{
        console.log("Password is sort!");
        return getPassword();
    }
    
}
// display password
function passwordGenerator(){
    const displayPin = document.getElementById("pin-display");
    displayPin.value = getPassword();
}

// typing display
function DisplayButton(event){
    const digit = (event.target.innerText);
   if(isNaN(digit)){
      // handle <
      // handle c
      if(digit==="C"){
        const typedPin = document.getElementById("input-display");
        typedPin.value = "";
      }
      if(digit==="<"){
        let typedPin = document.getElementById("input-display");
        // typedPin.value = typedPin.value.substring(0, typedPin.value.length - 1);
        typedPin.value = typedPin.value.slice(0, typedPin.value.length - 1);
      }
   }else{  
    const typedPin = document.getElementById("input-display");
    typedPin.value = typedPin.value + digit;
   }
}


// Match pin
function pinMatch(){
    const displayPin = document.getElementById("pin-display").value;
    const typedPin = document.getElementById("input-display").value;
    if(displayPin === typedPin){
        displayMatchResult("block", "none");
    }else{
        displayMatchResult("none", "block");
    }
}
function displayMatchResult(rightStatus, wrongStatus){
    const right = document.getElementById("right");
    right.style.display= rightStatus;
    const wrong = document.getElementById("wrong");
    wrong.style.display= wrongStatus;
}


























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