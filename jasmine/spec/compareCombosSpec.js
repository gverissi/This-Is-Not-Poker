//  À savoir : une carte est une chaîne de caractère qui contient deux parties :
//  - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
//  - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠

describe('compareCombos', () => {
	var combo

	beforeEach(function () {
		combo = new Combo()
	})

	it('return expected full vs flush', () => {
		let player1 = new Player(["7s", "7h", "7d", "8s", "8d"])
		let player2 = new Player(["8h", "7h", "5h", "3h", "2h"])
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["7s", "7h", "7d", "8s", "8d"])
	})

	it('return expected full vs pair', () => {
		let player1 = new Player(["8s", "8h", "Ad", "7h", "5d"])
		let player2 = new Player(["7s", "7h", "7d", "8s", "8d"])
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["7s", "7h", "7d", "8s", "8d"])
	})

	it('return expected flush vs pair', () => {
		let player1 = new Player(["8s", "8h", "Ad", "7h", "5d"])
		let player2 = new Player(["8h", "7h", "5h", "3h", "2h"])
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["8h", "7h", "5h", "3h", "2h"])
	})

	it('return expected flush vs high', () => {
		let player1 = new Player(["8h", "7h", "5h", "3h", "2h"])
		let player2 = new Player(["Ad", "Qs", "8h", "7h", "5d"])
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["8h", "7h", "5h", "3h", "2h"])
	})

	it('return expected pair vs high', () => {
		let player1 = new Player(["8s", "8h", "Ad", "7h", "5d"])
		let player2 = new Player(["Ad", "Qs", "8h", "7h", "5d"])
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["8s", "8h", "Ad", "7h", "5d"])
	})

	it('return expected high vs high', () => {
		let player1 = new Player(["Ad", "Ks", "8h", "7h", "5d"])
		let player2 = new Player(["Ad", "Qs", "8h", "7h", "5d"])
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["Ad", "Ks", "8h", "7h", "5d"])
	})

	it('return expected double pair vs double pair', () => {
		let player1 = new Player(["Js", "Jc", "7s", "7h", "10h"])
		let player2 = new Player(["Js", "Jc", "10h", "10d", "Qc"])
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["Js", "Jc", "10h", "10d", "Qc"])
	})

	it('return expected high vs high', () => {
		let allCards = ["3h", "Ac", "Jc", "Qc", "Kd", "6s", "4c", "9d", "2h"]
		let board = allCards.slice(4, 9)
		let player1 = new Player([allCards[0], allCards[2], board].flat())
		let player2 = new Player([allCards[1], allCards[3], board].flat())
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["Ac", "Kd", "Qc", "9d", "6s"])
	})

	it('return expected 3 Pair vs 2 Pair', () => {
		let allCards = ["2d", "Qc", "Ac", "8c", "2s", "Ks", "Kc", "3d", "3h"]
		let board = allCards.slice(4, 9)
		let player1 = new Player([allCards[0], allCards[2], board].flat())
		let player2 = new Player([allCards[1], allCards[3], board].flat())
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["Ks", "Kc", "3h", "3d", "Ac"])
	})

	it('return expected Brelan vs 2 Hauteur', () => {
		let allCards = ["5s", "3d", "5d", "10d", "5h", "9h", "Jh", "7d", "6h"]
		let board = allCards.slice(4, 9)
		let player1 = new Player([allCards[0], allCards[2], board].flat())
		let player2 = new Player([allCards[1], allCards[3], board].flat())
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["5s", "5h", "5d", "Jh", "9h"])
	})

	it('return expected egalité DP vs 2 DP', () => {
		let allCards = ["2h", "Jh", "Jd", "2s", "Kc", "9d", "3c", "Ks", "3s"]
		let board = allCards.slice(4, 9)
		let player1 = new Player([allCards[0], allCards[2], board].flat())
		let player2 = new Player([allCards[1], allCards[3], board].flat())
		let [name1, cards1] = combo.bestCombo(player1)
		let [name2, cards2] = combo.bestCombo(player2)
		expect(combo.compareCombos(cards1, cards2)).toEqual(["Ks", "Kc", "3s", "3c", "Jh"])
	})

})