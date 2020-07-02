
class Pair extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * To have a pair the player must have two cards with the same value.
	 *
	 * @static
	 * @param {Player} player
	 * @returns {boolean}
	 * @memberof Pair
	 */
	static isValid(player) {
		return player.nbValueOcc.includes(2)
	}

	getHand() {
		let hand = this.getCards(this.player.valueOcc, [2, 1])
		let cardValue = new Card(hand[0]).value()
		this.handName = `Paire : ${FRENCH_VALUES_NAME[cardValue]}`
		return hand
	}

	getHandScore() {
		return 2
	}

}