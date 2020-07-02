
/**
 * A card object is define by his label {String} e.g. "4h" (four of hearts).
 *
 * @class Card
 */
class Card {

	/**
	 * Creates an instance of Card.
	 * 
	 * @param {string} label e.g. "4h"
	 * @memberof Card
	 */
	constructor(label) {
		this.label = label
	}
	
	/**
	 * Get the card's value e.g. "4".
	 *
	 * @returns {string} the card's value.
	 * @memberof Card
	 */
	value() {
		return this.label.slice(0, this.label.length - 1)
	}

	/**
	 * Get the card's type e.g. "h".
	 *
	 * @returns {string} the card's type.
	 * @memberof Card
	 */
	type() {
		return this.label.charAt(this.label.length - 1)
	}

	/**
	 * Get the value's score. Starting from 2 upto 14 for an ace.
	 *
	 * @returns {number} the value's score.
	 * @memberof Card
	 */
	valueScore() {
		return VALUES.indexOf(this.value()) + 2
	}

	/**
	 * Get the type's score. "d" = 1, "c" = 2, "h" = 3, "s" = 4.
	 *
	 * @returns {number} the value's score.
	 * @memberof Card
	 */
	typeScore() {
		return TYPES.indexOf(this.type()) + 1
	}

	/**
	 * Get the file name of a card. e.g. "4_of_hearts.png" that will be loaded in the html file.
	 *
	 * @returns {string}
	 * @memberof Card
	 */
	cardName() {
		let v = this.value()
		let t = this.type()
		return `assets/images/cards/${[VALUES_NAME[v], TYPES_NAME[t]].join('_of_')}.png`
	}
}