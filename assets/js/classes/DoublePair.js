
/**
 * Using Combo's methods this class can get the player's hand.
 *
 * @class DoublePair
 * @extends {Combo}
 */
class DoublePair extends Combo {

	/**
	 * Creates an instance of DoublePair.
	 * Should be instanciate only if the player has a double-paire e.g. isValid(player) = true
	 * 
	 * @param {Player} player
	 * @property {Player} player
	 * @memberof DoublePair
	 */
	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * To have a double-pair the player must have at least 2 pairs.
	 *
	 * @static
	 * @param {Player} player
	 * @returns {boolean}
	 * @memberof DoublePair
	 */
	static isValid(player) {
		return player.allIndexOf(player.nbValueOcc, 2).length >= 2
	}

	/**
	 * Returns the 5 best cards hamong the 7 (2 from the player + 5 from the board).
	 * It also stores the hand's name.
	 *
	 * @returns {string[]} the best pair first the the other one and the kicker.
	 * @memberof DoublePair
	 */
	getHand() {
		let hand = this.getCards(this.player.valueOcc, [2, 1])
		let card1Value = new Card(hand[0]).value()
		let card2Value = new Card(hand[2]).value()
		this.handName = `Double Paire : ${FRENCH_VALUES_NAME[card1Value]} et ${FRENCH_VALUES_NAME[card2Value]}`
		return hand
	}

	/**
	 * Get the hand's score in order to compare hand.
	 * Star from 1 for no hand ends with 9 for straght flush.
	 *
	 * @returns {number} 3.
	 * @memberof DoublePair
	 */
	getHandScore() {
		return 3
	}

}