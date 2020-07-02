
class FourOfAKind extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * To have a FourOfAKind the player must have 4 cards of the same value.
	 *
	 * @static
	 * @param {Player} player
	 * @returns {boolean}
	 * @memberof FourOfAKind
	 */
	static isValid(player) {
		return player.nbValueOcc.includes(4)
	}

	getHand() {
		let hand = this.getCards(this.player.valueOcc, [4, 1])
		let cardValue = new Card(hand[0]).value()
		this.handName = `Carré : ${FRENCH_VALUES_NAME[cardValue]}`
		return hand
	}

	getHandScore() {
		return 8
	}

}