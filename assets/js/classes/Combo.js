
/**
 * Define a factory to instanciate the hand's class and methods that will be used by those  classes.
 *
 * @class Combo
 */
class Combo {

	/**
	 * Creates an instance of Combo.
	 * 
	 * @property {string} handName - the hand name e.g. "Paire" or "Full" or ...
	 * @memberof Combo
	 */
	constructor() {
		this.handName = ""
	}

	/**
	 * This method is used to instanciate the right hand's class.
	 *
	 * @static
	 * @param {Player} player
	 * @returns {object} an instance of an hand's class depanding on witch combo the player have.
	 * @memberof Combo
	 */
	static factory(player) {
		let ClassName = Combo.comboName(player)
		return new ClassName(player)
	}

	/**
	 * Get the right combo's class from the array COMBOS_LIST.
	 * For that we call the isValid() method of each hand's class,
	 * in descending order.
	 *
	 * @static
	 * @param {Player} player
	 * @returns {object} the class correponding to the highest player's combo.
	 * @memberof Combo
	 */
	static comboName(player) {
		for (let i = 0; i < COMBOS_LIST.length - 1; i++) {
			let ClassName = COMBOS_LIST[i]
			if (ClassName.isValid(player)) return ClassName
		}
		return COMBOS_LIST[COMBOS_LIST.length - 1]
	}

	/**
	 * Once we know witch combo the player have, this method get the right cards.
	 * occ can be valueOcc or typeOcc depending on witch combo the player have.
	 * nbArr represents the number of card's occurences we are looking for.
	 * For a Full nbArr = [3, 2].
	 *
	 * @param {object} occ - valueOcc or typeOcc from player.
	 * @param {number[]} nbArr
	 * @returns {string[]} the best player combo.
	 * @memberof Combo
	 */
	getCards(occ, nbArr) {
		let cards = []
		nbArr.forEach(nb => {
			cards.push(this.whereValueTypeOccures(occ, nb))
		});
		return cards.flat().slice(0, 5)
	}
	
	/**
	 * Returns the cards in occ that occures nb times.
	 * It's used for both values and types.
	 * For values occ = valueOcc from the player.
	 * If valueOcc = {"10": ["10h", "10s", "10c"], "8": ["8s", "8h"], "3": ["3c"], "5": ["5s"]}
	 * and nb = 2 then returns ["8s", "8h"].
	 *
	 * @param {object} occ
	 * @param {number} nb
	 * @returns {string[]} an array of card's label.
	 * @memberof Combo
	 */
	whereValueTypeOccures(occ, nb) {
		let values = Object.keys(occ).map(k => occ[k].length == nb ? occ[k] : null).filter(Boolean)
		values = this.orderCards(values.flat())
		// Case we are checking for pairs
		if (nb == 2) {
			// If there are 3 pairs we only keep two (the highest)
			if (values.length > 4) values = values.slice(0, 4)
		}
		return values
	}

	/**
	 * Uses the native sort() function, with valueScore() and typeScore() from the Card's class,
	 * in order to sort the 7 cards of a player in descending order.
	 * Values in ascending order: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A.
	 * Types in ascending order: d => ♦, c => ♣, h => ♥, s => ♠.
	 *
	 * @param {string[]} cards
	 * @returns {string[]} a sorted array containing the card's labels.
	 * @memberof Combo
	 */
	orderCards(cards) {
		let orderedCards = cards.slice(0, cards.length)
		return orderedCards.sort((card1, card2) => {
			let diffCards = new Card(card2).valueScore() - new Card(card1).valueScore()
			if (diffCards != 0) return diffCards
			else {
				return new Card(card2).typeScore() - new Card(card1).typeScore()
			}
		})
	}

	/**
	 * Uses the native sort() function, with getHandScore() from the hand's class,
	 * valueScore() and typeScore() from the Card's class,
	 * in order to sort the two combohands in descending order. Returns the first one.
	 * If handScores are equal it checks the valueScores of each cards.
	 * If valueScores are equal then it's a duce but it checks the typeScores to have a convention.
	 *
	 * @param {string[]} comboHand1
	 * @param {string[]} comboHand2
	 * @returns the best hand between comboHand1 and comboHand2.
	 * @memberof Combo
	 */
	compareCombos(comboHand1, comboHand2) {
		let tri = [comboHand1, comboHand2].sort((combo1, combo2) => {
			let diffHands = combo2.getHandScore() - combo1.getHandScore()
			if (diffHands != 0) return diffHands
			else {
				for (let i = 0; i < combo1.getHand().length; i++) {
					let diffCards = new Card(combo2.getHand()[i]).valueScore() - new Card(combo1.getHand()[i]).valueScore()
					if (diffCards != 0) return diffCards
					else if (i == combo1.getHand().length - 1) {
						let diffTypes = new Card(combo2.getHand()[i]).typeScore() - new Card(combo1.getHand()[i]).typeScore()
						if (diffTypes != 0) return diffTypes
					}
				}
				return 0
			}
		})
		return tri[0]
	}

	/**
	 * Returns true if the two hands have the same card's value.
	 * Types doesn't matter.
	 *
	 * @param {string[]} hand1
	 * @param {string[]} hand2
	 * @returns {boolean}
	 * @memberof Combo
	 */
	areHandsEqual(hand1, hand2) {
		return hand1.length === hand2.length && hand1.every((value, index) => {
			let card1Obj = new Card(value)
			let card2Obj = new Card(hand2[index])
			return card1Obj.value() === card2Obj.value()
		})
	}

	getHandName() {
		return this.handName
	}

}

