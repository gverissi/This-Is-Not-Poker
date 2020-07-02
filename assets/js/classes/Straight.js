
class Straight extends Combo {

	/**
	 * Creates an instance of Straight.
	 * 
	 * @property {Player} player
	 * @param {Player} player
	 * @memberof Straight
	 */
	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * To have a straight the player must have five cards of sequential rank.
	 * To check that we use an arithmetic progression (https://en.wikipedia.org/wiki/Arithmetic_progression).
	 * 
	 * @static
	 * @param {Player} player
	 * @returns {boolean}
	 * @memberof Straight
	 */
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
		this.handName = `Suite : ${FRENCH_VALUES_NAME[cardValue]}`
		return hand
	}

	getHandScore() {
		return 5
	}

}