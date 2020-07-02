
/**
 * This class stores the player cards (2 of his own + 5 from the board).
 * It also compute some variables and implements methods,
 * that willbe used in the hand's class. 
 *
 * @class Player
 */
class Player {

	/**
	 * Creates an instance of Player.
	 * 
	 * @param {string[]} cards - array of 7 card's labels.
	 * @memberof Player
	 */
	constructor(cards) {
		this.valueOcc = {}
		this.typeOcc = {}
		this.nbValueOcc = {}
		this.nbTypeOcc = {}
		this.scoreStraight = []
		this.handStraightFlush = []
		this.cards = cards
		this.valueOccurences()
		this.typeOccurences()
	}

	/**
	 * Computes valueOcc and nbValueOcc. They are used to know witch hand the player have.
	 * If cards = ["10h", "8s", "3c", "10s", "10c", "8h", "5s"] then:
	 * valueOcc = {"10": ["10h", "10s", "10c"], "8": ["8s", "8h"], "3": ["3c"], "5": ["5s"]}
	 * nbValueOcc = {"0": 3, "1": 2, "2": 1, "3": 1}
	 *
	 * @memberof Player
	 */
	valueOccurences() {
		this.cards.map(card => new Card(card)).forEach(cardObj => {
			if (this.valueOcc[cardObj.value()]) {
				this.valueOcc[cardObj.value()].push(cardObj.label)
			}
			else {
				this.valueOcc[cardObj.value()] = [cardObj.label]
			}
		})
		this.nbValueOcc = Object.values(this.valueOcc).map(cards => cards.length)
	}

	/**
	 * Computes typeOcc and nbTypeOcc. They are used to know witch hand the player have.
	 * If cards = ["10h", "8s", "3c", "10s", "10c", "8h", "5s"] then:
	 * typeOcc = {"h": ["10h", "8h"], "s": ["8s", "10s", "5s"], "c": ["3c", "10c"]}
	 * nbTypeOcc = {"0": 2, "1": 3, "2": 2}
	 *
	 * @memberof Player
	 */
	typeOccurences() {
		this.cards.map(card => new Card(card)).forEach(cardObj => {
			if (this.typeOcc[cardObj.type()]) {
				this.typeOcc[cardObj.type()].push(cardObj.label)
			}
			else {
				this.typeOcc[cardObj.type()] = [cardObj.label]
			}
		})
		this.nbTypeOcc = Object.values(this.typeOcc).map(cards => cards.length)
	}

	/**
	 * Kind a extends the native function indexOf.
	 *
	 * @param {array} arry
	 * @param {*} value
	 * @returns {number[]} an array contenning all the indexes where arry[index] = value.
	 * @memberof Player
	 */
	allIndexOf(arry, value) {
		if (arry.indexOf(value) >= 0) {
			let indexes = []
			for( let i = arry.indexOf(value); i >= 0; i = arry.indexOf(value,i+1) ) {
				indexes.push(i)
			}
			return indexes
		}
		else return []
	}

	/**
	 * Since js doesn't have this function, I have to do it my self!
	 *
	 * @param {array} arr
	 * @returns {array} an array with unique values.
	 * @memberof Player
	 */
	unique (arr) {
		let result = []
		for (let i = 0; i < arr.length; i++)
			if (!(result.includes(arr[i]))) {
				result.push(arr[i])
			}
		return result
	}

}
