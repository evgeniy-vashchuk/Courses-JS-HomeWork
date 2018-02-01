// Home Work #6 (29.01.2018)

document.addEventListener('DOMContentLoaded', function() {

	function validation() {
		var emailText = document.getElementById("email").value;
		var passwordText = document.getElementById("password").value;

		var emailValidation = /\S+@\S+\.\S+/
		var passwordValidation = /\S{4,20}/

		var emailResult = emailValidation.test(emailText);
		var passwordResult = passwordValidation.test(passwordText);

		var validationError = document.getElementById('validationError');

		if (emailResult === false || passwordResult === false) {
			validationError.style.display = 'block';
		} else {
			validationError.style.display = 'none';
			document.getElementById("myForm").submit();
		}

	}

	document.getElementById('submit').onclick = function() {
		validation();
	};

});