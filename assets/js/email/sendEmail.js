
function sendEmail() {
	let email = id_email.value
	let isValid = validateEmail(email)
	if (isValid) {
		fetchEmail(email)
	}
}

function validateEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true
	}
	alert("Votre adresse email n'est pas valide !")
	return false
}

function fetchEmail(email) {

	let data = {
		email: email
	};
	let options = {
		method: 'POST',
		body: JSON.stringify(data)
	};
	// let options = {
	// 	method: 'POST',
	// 	body: JSON.stringify(data),
	// 	mode: 'no-cors',
	// 	headers: {'Access-Control-Allow-Origin':'*'}
	// };

	// // Local
	// let url = "http://localhost:1664/api/email";

	// Heroku
	let url = "https://api-email-greg.herokuapp.com/api/email";

	fetch(url, options).then(
		function () {
			alert("Votre email a bien été envoyé !\nVous allez être redirigé vers la page d'accueille.")
			window.location.replace("index.html");
		}
	).catch(
		function (error) {
			alert("Il y a eu un problème lors de l'envoie de votre email !\n Réessayer.")
			console.log("Il y a eu un problème avec l'opération fetch : ", error.message)
		}
	)

}