
class StraightFlush extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * To have a StraightFlush the player must have first a flush then a straight.
	 * In that very specific case we must get the player's hand to check if he has a StraightFlush,
	 * so if he does then we store the hand in the well called variable handStraightFlush.
	 * 
	 * @static
	 * @param {Player} player
	 * @returns {boolean}
	 * @memberof StraightFlush
	 */
	static isValid(player) {
		if (Flush.isValid(player)) {
			let combo = new Combo()
			let hand = combo.getCards(player.typeOcc, [7, 6, 5])
			let flushPlayer = new Player(hand)
			if (Straight.isValid(flushPlayer)) {
				player.handStraightFlush = hand
				return true
			}
		}
		return false
	}

	getHand() {
		let hand = this.player.handStraightFlush
		let cardValue = new Card(hand[0]).value()
		let cardType = new Card(hand[0]).type()
		this.handName = `Quinte Flush : ${FRENCH_VALUES_NAME[cardValue]} à ${FRENCH_TYPES_NAME[cardType]}`
		return hand
	}

	getHandScore() {
		return 9
	}

}