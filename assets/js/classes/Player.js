
class Player {

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

	unique (arr) {
		let result = []
		for (let i = 0; i < arr.length; i++)
			if (!(result.includes(arr[i]))) {
				result.push(arr[i])
			}
		return result
	}

}
