
class Combo {

	bestCombo(player) {
		let handName = ""
		let hand = []
		if (player.hasAFour()) {
			hand = this.getCards(player.valueOcc, [4, 1])
			let cardValue = new Card(hand[0]).value()
			handName = `Carré : ${VALUES_NAME[cardValue]}`
		}
		else if (player.hasAFull()) {
			hand = this.getCards(player.valueOcc, [3, 2])
			let card1Value = new Card(hand[0]).value()
			let card2Value = new Card(hand[3]).value()
			handName = `Full : ${VALUES_NAME[card1Value]} par les ${VALUES_NAME[card2Value]}`
		}
		else if (player.hasAFlush()) {
			hand = this.getCards(player.typeOcc, [7, 6, 5])
			let cardType = new Card(hand[0]).type()
			handName = `Flush : ${TYPES_NAME[cardType]}`
		}
		else if (player.hasAStraight()) {
			hand = this.getCards(player.valueOcc, [1])
			let cardValue = new Card(hand[0]).value()
			handName = `Suite hauteur : ${VALUES_NAME[cardValue]}`
		}
		else if (player.hasAThree()) {
			hand = this.getCards(player.valueOcc, [3, 1])
			let cardValue = new Card(hand[0]).value()
			handName = `Brelan : ${VALUES_NAME[cardValue]}`
		}
		else if (player.hasADoublePair()) {
			hand = this.getCards(player.valueOcc, [2, 1])
			let card1Value = new Card(hand[0]).value()
			let card2Value = new Card(hand[2]).value()
			handName = `Double Pair : ${VALUES_NAME[card1Value]} et ${VALUES_NAME[card2Value]}`
		}
		else if (player.hasAPair()) {
			hand = this.getCards(player.valueOcc, [2, 1])
			let cardValue = new Card(hand[0]).value()
			handName = `Pair : ${VALUES_NAME[cardValue]}`
		}
		else {
			hand = this.orderCards(player.cards).slice(0, 5)
			let cardValue = new Card(hand[0]).value()
			handName = `Hauteur : ${VALUES_NAME[cardValue]}`
		}
		return [handName, hand]
	}

	getCards(occ, nbArr) {
		let cards = []
		nbArr.forEach(nb => {
			cards.push(this.whereValueOccures(occ, nb))
		});
		return cards.flat().slice(0, 5)
	}
	
	whereValueOccures(occ, nb) {
		let values = Object.keys(occ).map(k => occ[k].length == nb ? occ[k] : null).filter(Boolean)
		values = this.orderCards(values.flat())
		if (nb == 2) {
			if (values.length > 4) values = values.slice(0, 4)
		}
		return values
	}

	orderCards(cards) {
		let orderedCards = cards.slice(0, cards.length)
		return orderedCards.sort((card1, card2) => {
			let card1Obj = new Card(card1)
			let card2Obj = new Card(card2)
			if (card1Obj.valueScore() > card2Obj.valueScore()) return -1
			else if (card1Obj.valueScore() < card2Obj.valueScore()) return 1
			else {
				if (card1Obj.typeScore() > card2Obj.typeScore()) return -1
				else return 1
			}
		})
	}

	compareCombos(cards1, cards2) {
		let tri = [cards1, cards2].sort((hand1, hand2) => {
			let score1 = this.getHandScore(hand1)
			let score2 = this.getHandScore(hand2)
			if (score1 > score2) return -1
			else if (score1 < score2) return 1
			else {
				for (let i = 0; i < hand1.length; i++) {
					let card1Obj = new Card(hand1[i])
					let card2Obj = new Card(hand2[i])
					if (card1Obj.valueScore() > card2Obj.valueScore()) return -1
					else if (card1Obj.valueScore() < card2Obj.valueScore()) return 1
					else if (i == hand1.length - 1) {
						if (card1Obj.typeScore() > card2Obj.typeScore()) return -1
						else if (card1Obj.typeScore() < card2Obj.typeScore()) return 1
					}
				}
				return 0
			}
		})
		return tri[0]
	}
	
	getHandScore(hand) {
		let player = new Player(hand)
		if (player.hasAFour()) return 7
		else if (player.hasAFull()) return 6
		else if (player.hasAFlush()) return 5
		else if (player.hasAThree()) return 4
		else if (player.hasADoublePair()) return 3
		else if (player.hasAPair()) return 2
		else return 1
	}

	areHandsEqual(hand1, hand2) {
		return hand1.length === hand2.length && hand1.every((value, index) => {
			let card1Obj = new Card(value)
			let card2Obj = new Card(hand2[index])
			return card1Obj.value() === card2Obj.value()
		})
	}

}

