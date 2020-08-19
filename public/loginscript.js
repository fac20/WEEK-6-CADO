//grab buttons to select which form user wants
const signUpBtn = document.querySelector("#signUpBtn");
const loginBtn = document.querySelector("#logInBtn");
const signupform = document.querySelector(".forminput__signup");
const loginform = document.querySelector(".forminput__login");

const toggleHidden = elem => {
    elem.classList.toggle("hidden");
}

//forminput__signup, forminput__login
//toggle form appearance from hidden if button is clicked
signUpBtn.addEventListener("click", () => toggleHidden(signupform));
loginBtn.addEventListener("click", () => toggleHidden(loginform));