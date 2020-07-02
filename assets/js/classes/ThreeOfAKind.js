
class ThreeOfAKind extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * To have a ThreeOfAKind the player must have three cards with the same value.
	 *
	 * @static
	 * @param {Player} player
	 * @returns {boolean}
	 * @memberof ThreeOfAKind
	 */
	static isValid(player) {
		return player.nbValueOcc.includes(3)
	}

	getHand() {
		let hand = this.getCards(this.player.valueOcc, [3, 1])
		let cardValue = new Card(hand[0]).value()
		this.handName = `Brelan : ${FRENCH_VALUES_NAME[cardValue]}`
		return hand
	}

	getHandScore() {
		return 4
	}

}