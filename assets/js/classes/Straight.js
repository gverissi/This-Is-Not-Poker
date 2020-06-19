
class Straight extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	static isValid(player) {
		let orderedCards = new Combo().orderCards(player.cards)
		let scores = orderedCards.map(card => {
			let cardObj = new Card(card)
			return cardObj.valueScore()
		})
		scores = player.unique(scores)
		if (scores.includes(14)) scores.push(1)
		if (scores.length > 4) {
			for (let i = 0; i < scores.length - 4; i++) {
				let u = scores.slice(i,i+5)
				if ((u[0 + 4] == u[0] - 4) && ((5 * (u[0] + u[0 + 4]) / 2) == u.reduce((a, c) => a + c))) {
					player.scoreStraight = u
					return true
				}
			}
		}
		return false
	}

	getHand() {
		let hand = []
		this.player.scoreStraight.forEach(score => {
			let value = score == 1 ? "A" : VALUES[score - 2]
			let orderedCards = this.orderCards(this.player.cards)
			let occur = orderedCards.map(card => new Card(card).value() == value ? card : null).filter(Boolean)
			hand.push(occur[0])
		})
		let cardValue = new Card(hand[0]).value()
		let handName = `Suite : ${VALUES_NAME[cardValue]}`
		return [handName, hand]
	}

	getHandScore() {
		return 5
	}

}