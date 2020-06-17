
// Highlight cards
function highlight(tag) {
	let persoHandIndexes
	if (tag.id == "id_text_hero") persoHandIndexes = heroHandIndexes
	else persoHandIndexes = vilainHandIndexes
	winnerHandIndexes.forEach(ind => {
		IMAGES_ID[ind].classList.remove("highlight")
		IMAGES_ID[ind].classList.remove("floating")
	})
	persoHandIndexes.forEach(ind => {
		IMAGES_ID[ind].classList.add("highlight")
		IMAGES_ID[ind].classList.add("floating")
	})
}

// Unhighlight cards
function unHighlight(tag) {
	let persoHandIndexes
	if (tag.id == "id_text_hero") persoHandIndexes = heroHandIndexes
	else persoHandIndexes = vilainHandIndexes
	persoHandIndexes.forEach(ind => {
		IMAGES_ID[ind].classList.remove("highlight")
		IMAGES_ID[ind].classList.remove("floating")
	})
	winnerHandIndexes.forEach(ind => {
		IMAGES_ID[ind].classList.add("highlight")
		IMAGES_ID[ind].classList.add("floating")
	})
}

// Function to flip the cards
function flipCard(elem, src) {
	// id_flipSound.play()
	let width = elem.width
	let sign = 1
	let speed = 48
	let pos = 0
	let toggle = false
	function flip() {
		if (pos >= width && !toggle) {
			sign = -1
			toggle = true
			elem.src = src
			window.requestAnimationFrame(flip)
		}
		else if (pos <= 0 && toggle) {
			elem.style.width = "100%"
			return
		}
		else {
			pos = pos + sign*speed
			elem.style.width = width - pos + 'px'
			elem.style.height = "100%"
			elem.style.left = pos/2 + 'px'
			window.requestAnimationFrame(flip)
		}
	}
	window.requestAnimationFrame(flip)
}