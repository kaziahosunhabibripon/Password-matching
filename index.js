function getPassword() {
    const password = (((Math.random() * 10000) + " ").split('.')[0]);
    if (password.length === 4) {
        return password;}
    
}
// display password
document.getElementById("pin").addEventListener("click", function () {
    const display = document.getElementById("pin-display");
    display.value = getPassword();
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