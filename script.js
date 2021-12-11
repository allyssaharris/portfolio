
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#messsage");
const error= document.querySelector(".error");





function validateForm(){
    console.log(Hiya Earth!!);
    if(nameInput.value.length< 1){
        errorNodes[0].innerTest = "Name cannot be blank"
        nameInput.classList.add("error-border");

    }
    if(!emailISValid(email.value)){
        errorNodes[0].innerText = "Invalid email addresss"
    }
    

}
function clearMessage(){
    for (let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = " ";

    }
    nameInput.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\+\.\S+/;
    return pattern.test(email);
}
