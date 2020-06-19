
class FourOfAKind extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

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