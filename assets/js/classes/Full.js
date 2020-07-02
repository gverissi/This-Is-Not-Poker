
class Full extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * To have a Full the player must have a ThreeOfAKind and a pair or 2 ThreeOfAKind.
	 *
	 * @static
	 * @param {Player} player
	 * @returns {boolean}
	 * @memberof Full
	 */
	static isValid(player) {
		return (player.nbValueOcc.includes(3) && player.nbValueOcc.includes(2)) || player.allIndexOf(player.nbValueOcc, 3).length == 2
	}

	getHand() {
		let hand = this.getCards(this.player.valueOcc, [3, 2])
		let card1Value = new Card(hand[0]).value()
		let card2Value = new Card(hand[3]).value()
		this.handName = `Full : ${FRENCH_VALUES_NAME[card1Value]} par les ${FRENCH_VALUES_NAME[card2Value]}`
		return hand
	}

	getHandScore() {
		return 7
	}

}