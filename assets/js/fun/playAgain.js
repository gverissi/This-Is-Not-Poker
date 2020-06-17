
function playAgain() {
	
	// Display all cards at once
	for (let k = 0; k < 9; k++) {
		IMAGES_ID[k].src = "assets/images/cards/back_scale.png"
	}

	id_message.style.visibility = "hidden"
	id_text_hero.style.visibility = "hidden"
	id_text_vilain.style.visibility = "hidden"
	id_play_btn.disabled = false
	winnerHandIndexes.forEach(ind => {
		IMAGES_ID[ind].classList.remove("highlight")
		IMAGES_ID[ind].classList.remove("floating")
	})
}