
class StraightFlush extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

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