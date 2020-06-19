
class Hight extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	getHand() {
		let hand = this.orderCards(this.player.cards).slice(0, 5)
		let cardValue = new Card(hand[0]).value()
		let handName = `Hauteur : ${VALUES_NAME[cardValue]}`
		return [handName, hand]
	}

	getHandScore() {
		return 1
	}

}