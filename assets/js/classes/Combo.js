
class Combo {

	bestCombo(player) {
		let handName = ""
		let hand = []
		if (player.hasAStraightFlush()) {
			hand = player.handStraightFlush
			let cardValue = new Card(hand[0]).value()
			handName = `Quinte Flush : ${VALUES_NAME[cardValue]}`
		}
		else if (player.hasAFour()) {
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
			handName = `Couleur : ${TYPES_NAME[cardType]}`
		}
		else if (player.hasAStraight()) {
			player.scoreStraight.forEach(score => {
				let value = score == 1 ? "A" : VALUES[score - 2]
				let orderedCards = this.orderCards(player.cards)
				let occur = orderedCards.map(card => new Card(card).value() == value ? card : null).filter(Boolean)
				hand.push(occur[0])
			})
			let cardValue = new Card(hand[0]).value()
			handName = `Suite : ${VALUES_NAME[cardValue]}`
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
			let diffCards = new Card(card2).valueScore() - new Card(card1).valueScore()
			if (diffCards != 0) return diffCards
			else {
				return new Card(card2).typeScore() - new Card(card1).typeScore()
			}
		})
	}

	compareCombos(cards1, cards2) {
		let tri = [cards1, cards2].sort((hand1, hand2) => {
			let diffHands = this.getHandScore(hand2) - this.getHandScore(hand1)
			if (diffHands != 0) return diffHands
			else {
				for (let i = 0; i < hand1.length; i++) {
					let diffCards = new Card(hand2[i]).valueScore() - new Card(hand1[i]).valueScore()
					if (diffCards != 0) return diffCards
					else if (i == hand1.length - 1) {
						let diffTypes = new Card(hand2[i]).typeScore() - new Card(hand1[i]).typeScore()
						if (diffTypes != 0) return diffTypes
					}
				}
				return 0
			}
		})
		return tri[0]
	}
	
	getHandScore(hand) {
		let player = new Player(hand)
		if (player.hasAStraightFlush()) return 9
		else if (player.hasAFour()) return 8
		else if (player.hasAFull()) return 7
		else if (player.hasAFlush()) return 6
		else if (player.hasAStraight()) return 5
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

