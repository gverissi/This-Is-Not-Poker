
class Flush extends Combo {

	constructor(player) {
		super()
		this.player = player
	}

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