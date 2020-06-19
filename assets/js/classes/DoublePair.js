
class DoublePair extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	static isValid(player) {
		return player.allIndexOf(player.nbValueOcc, 2).length >= 2
	}

	getHand() {
		let hand = this.getCards(this.player.valueOcc, [2, 1])
		let card1Value = new Card(hand[0]).value()
		let card2Value = new Card(hand[2]).value()
		let handName = `Double Pair : ${VALUES_NAME[card1Value]} et ${VALUES_NAME[card2Value]}`
		return [handName, hand]
	}

	getHandScore() {
		return 3
	}

}