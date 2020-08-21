//grab buttons to select which form user wants
const signUpBtn = document.querySelector('#signUpBtn');
const loginBtn = document.querySelector('#logInBtn');
const signupform = document.querySelector('.forminput__signup');
const loginform = document.querySelector('.forminput__login');

const usernamesuError = document.querySelector('#usernamesuError');

const usernameliError = document.querySelector('#usernameliError');

//grab input elements from form
const signupinputs = signupform.querySelectorAll('input');

const toggleHidden = (elem, elemB) => {
	elem.classList.toggle('hidden');
	elemB.classList.add('hidden');
};

//forminput__signup, forminput__login
//toggle form appearance from hidden if button is clicked
signUpBtn.addEventListener('click', () => toggleHidden(signupform, loginform));
loginBtn.addEventListener('click', () => toggleHidden(loginform, signupform));

// //disable native validation so we can add custom validation
// signupform.setAttribute("novalidate", "");

signupform.addEventListener('submit', event => {
	const allInputsValid = event.target.checkValidity();
	if (!allInputsValid) {
		event.preventDefault();
	}
});

//also username is case sensitive & there is a bug!
loginform.addEventListener('submit', event => {
	if (!event.target.checkValidity()) {
		event.preventDefault();
	}
});

//going over each input on the signup form
//making sure that the aria label is not invalid before anything has been entered
//set a listener so if any inputs do become invalid,
//we will handle that invalid input
function handleInvalidInput(event) {
	const input = event.target;
	input.setAttribute('aria-invalid', true);
	const errorId = input.id + 'Error';
	const errorContainer = signupform.querySelector('#' + errorId);

	// custom error messages
	let message = '';
	if (input.validity.valueMissing) {
		message = 'Bark! Enter something!';
	} else if (input.validity.tooShort) {
		message = 'Too short! BARK! BARK!! Add another bark!!';
	} else if (input.validity.patternMismatch) {
		message = "B!tch Please! That doesn't match the pattern!";
	} else if (input.validity.typeMismatch) {
		message = 'BARK!!! Try again!';
	}

	errorContainer.textContent = message;
}

signupinputs.forEach(input => {
	input.setAttribute('aria-invalid', false);
	input.addEventListener('invalid', handleInvalidInput);
	input.addEventListener('input', clearValidity);
});

function clearValidity(event) {
	const input = event.target;
	input.setAttribute('aria-invalid', 'false');
	const errorId = input.id + 'Error';
	const errorContainer = signupform.querySelector('#' + errorId);
	errorContainer.textContent = '';
}

function checkUsernameExists(userValue) {
	console.log('user-value', userValue);
	return fetch('/get-usernames')
		.then(res => {
			if (!res.ok) {
				throw new Error('Server error');
			} else {
				return res;
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			const filterUser = data.filter(user => user.username === userValue);
			console.log(filterUser.length);
			if (filterUser.length === 1) {
				return true;
			} else {
				return false;
			}
		})
		.catch(error => console.log(error));
}
