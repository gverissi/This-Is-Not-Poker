
// Message win, loose or duce
function indexMassage(isHeroWin, isVilainWin, heroHandName, vilainHandName) {
	if (isHeroWin && isVilainWin) {
		// id_index_text1.innerText = "Egaliter !"
		// id_message.style.backgroundColor = "#f0ad4e"
		// id_text_hero_res.innerText = "Gagnant :"
		id_text_hero.style.backgroundColor = "#f0ad4e"
		// id_text_vilain_res.innerText = "Gagnant :"
		id_text_vilain.style.backgroundColor = "#f0ad4e"
	}
	else if (isHeroWin) {
		// id_index_text1.innerText = "Vous avez gagner !"
		// id_message.style.backgroundColor = "#2e4600"
		// id_text_hero_res.innerText = "Gagnant :"
		id_text_hero.style.backgroundColor = "#2e4600"
		// id_text_vilain_res.innerText = "Perdant :"
		id_text_vilain.style.backgroundColor = "#9f321e"
	}
	else {
		// id_index_text1.innerText = "Vous avez perdu !"
		// id_message.style.backgroundColor = "#9f321e"
		// id_text_hero_res.innerText = "Perdant :"
		id_text_hero.style.backgroundColor = "#9f321e"
		// id_text_vilain_res.innerText = "Gagnant :"
		id_text_vilain.style.backgroundColor = "#2e4600"
	}
	id_text_hero_hand.innerText = heroHandName
	id_text_vilain_hand.innerText = vilainHandName
	id_message.style.visibility = "visible"
	id_text_hero.style.visibility = "visible"
	id_text_vilain.style.visibility = "visible"
	winnerHandIndexes.forEach(ind => {
		IMAGES_ID[ind].classList.add("highlight")
		IMAGES_ID[ind].classList.add("floating")
	});
}