
class Combo {

	static factory(player) {
		let ClassName = Combo.comboName(player)
		return new ClassName(player)
	}

	static comboName(player) {
		for (let i = 0; i < COMBOS_LIST.length - 1; i++) {
			let ClassName = COMBOS_LIST[i]
			if (ClassName.isValid(player)) return ClassName
		}
		return COMBOS_LIST[COMBOS_LIST.length - 1]
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

	compareCombos(comboHand1, comboHand2) {
		let tri = [comboHand1, comboHand2].sort((combo1, combo2) => {
			let diffHands = combo2.getHandScore() - combo1.getHandScore()
			if (diffHands != 0) return diffHands
			else {
				for (let i = 0; i < combo1.getHand()[1].length; i++) {
					let diffCards = new Card(combo2.getHand()[1][i]).valueScore() - new Card(combo1.getHand()[1][i]).valueScore()
					if (diffCards != 0) return diffCards
					else if (i == combo1.getHand()[1].length - 1) {
						let diffTypes = new Card(combo2.getHand()[1][i]).typeScore() - new Card(combo1.getHand()[1][i]).typeScore()
						if (diffTypes != 0) return diffTypes
					}
				}
				return 0
			}
		})
		return tri[0]
	}

	areHandsEqual(hand1, hand2) {
		return hand1.length === hand2.length && hand1.every((value, index) => {
			let card1Obj = new Card(value)
			let card2Obj = new Card(hand2[index])
			return card1Obj.value() === card2Obj.value()
		})
	}

}

