
class Full extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	static isValid(player) {
		return (player.nbValueOcc.includes(3) && player.nbValueOcc.includes(2)) || player.allIndexOf(player.nbValueOcc, 3).length == 2
	}

	getHand() {
		let hand = this.getCards(this.player.valueOcc, [3, 2])
		let card1Value = new Card(hand[0]).value()
		let card2Value = new Card(hand[3]).value()
		let handName = `Full : ${VALUES_NAME[card1Value]} par les ${VALUES_NAME[card2Value]}`
		return [handName, hand]
	}

	getHandScore() {
		return 7
	}

}