//  À savoir : une carte est une chaîne de caractère qui contient deux parties :
//  - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
//  - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠

describe('bestCombo', () => {

	it('return expected full', () => {
		let player = new Player(["7h", "8d", "7d", "7s", "8s", "3s", "3h"])
		let playerCombo = Combo.factory(player)
		expect(playerCombo.getHand()[1]).toEqual(["7s", "7h", "7d", "8s", "8d"])
	})

	it('return expected full (2 brelan)', () => {
		let player = new Player(["7h", "8d", "7d", "7s", "8s", "8h", "3h"])
		let playerCombo = Combo.factory(player)
		expect(playerCombo.getHand()[1]).toEqual(["8s", "8h", "8d", "7s", "7h"])
	})

	it('return expected flush', () => {
		let player = new Player(["7h", "8h", "7d", "5h", "8s", "2h", "3h"])
		let playerCombo = Combo.factory(player)
		expect(playerCombo.getHand()[1]).toEqual(["8h", "7h", "5h", "3h", "2h"])
	})

	it('return expected pair', () => {
		let player = new Player(["7h", "8h", "Ad", "5d", "8s", "2h", "3h"])
		let playerCombo = Combo.factory(player)
		expect(playerCombo.getHand()[1]).toEqual(["8s", "8h", "Ad", "7h", "5d"])
	})

	it('return expected double pair', () => {
		let player = new Player(["7h", "8h", "Ad", "5d", "8s", "Ah", "3h"])
		let playerCombo = Combo.factory(player)
		expect(playerCombo.getHand()[1]).toEqual(["Ah", "Ad", "8s", "8h", "7h"])
	})

	it('return expected high', () => {
		let player = new Player(["7h", "8h", "Ad", "5d", "Qs", "2h", "3h"])
		let playerCombo = Combo.factory(player)
		expect(playerCombo.getHand()[1]).toEqual(["Ad", "Qs", "8h", "7h", "5d"])
	})
})