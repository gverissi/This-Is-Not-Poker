
describe('dealer', () => {

	it('return 52 different cards', () => {
		let deck = new Deck()
		deck.shuffle()
		let deck52 = deck.cards(0, 51)
		deck52.forEach((element1, index1) => {
			deck52.forEach((element2, index2) => {
				if (index1 != index2) expect(element1 == element2).toEqual(false)
			})
		})
	})

})