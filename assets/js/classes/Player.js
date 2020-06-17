
class Player {

	constructor(cards) {
		this.valueOcc = {}
		this.typeOcc = {}
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

	hasAFour() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return nbOcc.includes(4)
	}

	hasAFull() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return (nbOcc.includes(3) && nbOcc.includes(2)) || this.allIndexOf(nbOcc, 3).length == 2
	}

	hasAFlush() {
		let nbOcc = Object.values(this.typeOcc).map(cards => cards.length)
		return nbOcc.includes(5) || nbOcc.includes(6) || nbOcc.includes(7)
	}

	hasAStraight() {
		let combo = new Combo()
		let orderedCards = combo.orderCards(this.cards).reverse()
		let scores = orderedCards.map(card => {
			let cardObj = new Card(card)
			return cardObj.valueScore()
		})
		scores = this.unique(scores)
		if (scores.includes(14)) scores = [1].concat(scores)
		console.log("scores", scores)
		if (scores.length > 4) {
			for (let i = 0; i < scores.length - 4; i++) {
				let u0 = scores[i]
				let un = scores[i + 4]
				if (un == u0 + 4) {
					let sumArith = 5 * (u0 + un) / 2
					let sum = 0
					for (let j = i; j < i + 5; j++) {
						sum += scores[j]
					}
					if (sum == sumArith) return true
				}
			}
		}
		return false
	}

	hasAThree() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return nbOcc.includes(3)
	}

	hasADoublePair() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return this.allIndexOf(nbOcc, 2).length >= 2
	}

	hasAPair() {
		let nbOcc = Object.values(this.valueOcc).map(cards => cards.length)
		return nbOcc.includes(2)
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
