
class Player {

	constructor(cards) {
		this.valueOcc = {}
		this.typeOcc = {}
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

	hasAStraightFlush() {
		if (this.hasAFlush()) {
			let combo = new Combo()
			let hand = combo.getCards(this.typeOcc, [7, 6, 5])
			let flushPlayer = new Player(hand)
			if (flushPlayer.hasAStraight()) {
				this.handStraightFlush = hand
				return true
			}
		}
		return false
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
		let orderedCards = combo.orderCards(this.cards)
		let scores = orderedCards.map(card => {
			let cardObj = new Card(card)
			return cardObj.valueScore()
		})
		scores = this.unique(scores)
		if (scores.includes(14)) scores.push(1)
		if (scores.length > 4) {

			// for (let i = 0; i < scores.length - 4; i++) {
			// 	let u0 = scores[i]
			// 	let un = scores[i + 4]
			// 	if (un == u0 - 4) {
			// 		let sumArith = 5 * (u0 + un) / 2
			// 		let sum = 0
			// 		for (let j = i; j < i + 5; j++) {
			// 			sum += scores[j]
			// 		}
			// 		if (sum == sumArith) {
			// 			this.scoreStraight = scores.slice(i,i+5)
			// 			return true
			// 		}
			// 	}
			// }

			// for (let i = 0; i < scores.length - 4; i++) {
			// 	for (let j = i + 1; j < i + 5; j++) {
			// 		if (scores[j] != scores[j - 1] - 1) break
			// 		else if (j == i + 4) {
			// 			this.scoreStraight = scores.slice(i,i+5)
			// 			return true
			// 		}
			// 	}
			// }

			for (let i = 0; i < scores.length - 4; i++) {
				let u = scores.slice(i,i+5)
				if ((u[0 + 4] == u[0] - 4) && ((5 * (u[0] + u[0 + 4]) / 2) == u.reduce((a, c) => a + c))) {
					this.scoreStraight = u
					return true
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
