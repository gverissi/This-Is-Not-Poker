
function sendEmail() {
	let email = id_email.value
	fetchEmail(email)
}

function fetchEmail(email) {

	let data = {
		email: email
	};
	let options = {
		method: 'POST',
		body: JSON.stringify(data)
	};
	let url = "http://localhost:1664/api/email/add";

	fetch(url, options).then(
		function (response) {
			if (response.ok) {
				console.log("response = ", response)
			} else {
				console.log("Mauvaise réponse du réseau : ", response)
			}
		}
	).catch(
		function (error) {
			console.log("Il y a eu un problème avec l'opération fetch : ", error.message)
		}
	)

}