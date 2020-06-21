
window.addEventListener('load', function () {
	rewardMessage()
})

function rewardMessage() {

	// Get the winner from localStorage
	let isHeroWin = localStorage.isHeroWin
	let isVilainWin = localStorage.isVilainWin

	if (isHeroWin === "true" && isVilainWin === "true") {
		id_reward_text1.innerText = "Egaliter !"
		id_reward_text2.innerText = "Entrez votre email pour decouvrir votre petit cadeau !"
	}
	else if (isHeroWin === "true") {
		id_reward_text1.innerText = "Vous avez gagner !"
		id_reward_text2.innerText = "Entrez votre email pour decouvrir votre cadeau !"
	}
	else {
		id_reward_text1.innerText = "Vous avez perdu !"
		id_reward_text2.innerText = "Entrez votre email pour decouvrir votre cadeau de consolation !"
	}

	// Render the form
	id_form.style.visibility = "visible"

}