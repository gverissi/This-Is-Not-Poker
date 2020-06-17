
class Deck {

	constructor() {
		this.deck = VALUES.map(v => TYPES.map(t => v + t)).flat()
	}

	cards(indexStart, indexStop) {
		return this.deck.slice(indexStart, indexStop + 1)
	}

	shuffle() {
		let shufDeck = [];
		let i = 0
		while (this.deck.length > 0) {
			i = Math.floor(Math.random() * this.deck.length)
			shufDeck.push(this.deck[i])
			this.deck.splice(i, 1)
		}
		this.deck = shufDeck
	}
}
