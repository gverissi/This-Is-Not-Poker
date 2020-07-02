
class High extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

	/**
	 * If the player has no combo, the hand is the five firsts sorted cards.
	 *
	 * @returns {string[]}
	 * @memberof High
	 */
	getHand() {
		let hand = this.orderCards(this.player.cards).slice(0, 5)
		let cardValue = new Card(hand[0]).value()
		this.handName = `Hauteur : ${FRENCH_VALUES_NAME[cardValue]}`
		return hand
	}

	getHandScore() {
		return 1
	}

}