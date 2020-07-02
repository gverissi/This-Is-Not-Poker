
/**
 * Creates an {Array} of 52 unique card's labels {String}.
 *
 * @class Deck
 */
class Deck {

	/**
	 * Creates an instance of Deck.
	 * 
	 * @property {string[]} deck - 52 unique card's labels.
	 * @memberof Deck
	 */
	constructor() {
		this.deck = VALUES.map(v => TYPES.map(t => v + t)).flat()
	}

	/**
	 * Get cards from the deck.
	 *
	 * @param {number} indexStart
	 * @param {number} indexStop
	 * @returns {string[]} card's labels from deck starting at indexStart, ending at indexStop included.
	 * @memberof Deck
	 */
	cards(indexStart, indexStop) {
		return this.deck.slice(indexStart, indexStop + 1)
	}

	/**
	 * Shuffles the string[] deck.
	 *
	 * @memberof Deck
	 */
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
