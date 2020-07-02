
class Flush extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * To have a flush the player must have at least 5 cards of the same type.
	 *
	 * @static
	 * @param {Player} player
	 * @returns {boolean}
	 * @memberof Flush
	 */
	static isValid(player) {
		return player.nbTypeOcc.includes(5) || player.nbTypeOcc.includes(6) || player.nbTypeOcc.includes(7)
	}

	getHand() {
		let hand = this.getCards(this.player.typeOcc, [7, 6, 5])
		let cardType = new Card(hand[0]).type()
		this.handName = `Couleur : ${FRENCH_TYPES_NAME[cardType]}`
		return hand
	}

	getHandScore() {
		return 6
	}

}