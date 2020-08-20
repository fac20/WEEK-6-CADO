//grab buttons to select which form user wants
const signUpBtn = document.querySelector("#signUpBtn");
const loginBtn = document.querySelector("#logInBtn");
const signupform = document.querySelector(".forminput__signup");
const loginform = document.querySelector(".forminput__login");

//grab input elements from form
const inputs = signupform.querySelectorAll("input");

const toggleHidden = elem => {
    elem.classList.toggle("hidden");
}

//forminput__signup, forminput__login
//toggle form appearance from hidden if button is clicked
signUpBtn.addEventListener("click", () => toggleHidden(signupform));
loginBtn.addEventListener("click", () => toggleHidden(loginform));

//disable native validation so we can add custom validation
signupform.setAttribute("novalidate", "");

signupform.addEventListener("submit", (event) => {
    const allInputsValid = signupform.checkValidity();
    if (!allInputsValid) {
        event.preventDefault();
    }
});

//going over each input on the signup form
//making sure that the aria label is not invalid before anything has been entered
//set a listener so if any inputs do become invalid, 
//we will handle that invalid input
function handleInvalidInput(event) {
    const input = event.target;
    input.setAttribute("aria-invalid", true);
    console.log(input.validationMessage);
    // const errorId = input.id + "Error"; errorId = input.usernameError 
    // const errorContainer = signupform.querySelector("#" + errorId);
    // errorContainer.textContent = input.validationMessage;
}

inputs.forEach((input) => {
    input.setAttribute("aria-invalid", false);
    input.addEventListener("invalid", handleInvalidInput);
});
  

