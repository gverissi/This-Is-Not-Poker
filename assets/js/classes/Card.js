
class Card {

	constructor(label) {
		this.label = label
	}

	value() {
		return this.label.slice(0, this.label.length - 1)
	}

	type() {
		return this.label.charAt(this.label.length - 1)
	}

	valueScore() {
		return VALUES.indexOf(this.value()) + 2
	}

	typeScore() {
		return TYPES.indexOf(this.type()) + 1
	}

	// Get the file name of a card: c = "Ac" => return "ace_of_clubs.png"
	cardName() {
		let v = this.value()
		let t = this.type()
		return `assets/images/cards/${[VALUES_NAME[v], TYPES_NAME[t]].join('_of_')}.png`
	}
}