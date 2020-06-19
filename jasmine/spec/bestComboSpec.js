//  À savoir : une carte est une chaîne de caractère qui contient deux parties :
//  - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
//  - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠

describe('bestCombo', () => {

	var winnerHand
	var winnerHandName

	function getHandAndName(player) {
		let playerCombo = Combo.factory(player)
		Hand = playerCombo.getHand()
		HandName = playerCombo.getHandName()
	}

	it('return expected Straight Flush', () => {
		let player = new Player(["7h", "8h", "7d", "5h", "8s", "6h", "4h"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Quinte Flush : Huit à Coeur", ["8h", "7h", "6h", "5h", "4h"]])
	})

	it('return expected Four of a Kind', () => {
		let player = new Player(["7h", "8h", "Ad", "8c", "8s", "6h", "8d"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Carré : Huit", ["8s", "8h", "8c", "8d", "Ad"]])
	})

	it('return expected Full', () => {
		let player = new Player(["7h", "8d", "7d", "7s", "8s", "3s", "3h"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Full : Sept par les Huit", ["7s", "7h", "7d", "8s", "8d"]])
	})

	it('return expected Full (2 brelan)', () => {
		let player = new Player(["7h", "8d", "7d", "7s", "8s", "8h", "3h"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Full : Huit par les Sept", ["8s", "8h", "8d", "7s", "7h"]])
	})

	it('return expected Flush', () => {
		let player = new Player(["7h", "8h", "7d", "5h", "8s", "2h", "3h"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Couleur : Coeur", ["8h", "7h", "5h", "3h", "2h"]])
	})

	it('return expected Straight', () => {
		let player = new Player(["Ah", "5s", "4h", "5s", "3h", "6h", "2c"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Suite : Six", ["6h", "5s", "4h", "3h", "2c"]])
	})

	it('return expected Straight (Ace)', () => {
		let player = new Player(["Ah", "5s", "4h", "5s", "3h", "7h", "2c"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Suite : Cinq", ["5s", "4h", "3h", "2c", "Ah"]])
	})

	it('return expected Three of a Kind', () => {
		let player = new Player(["7h", "8h", "8d", "5d", "8s", "2h", "3h"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Brelan : Huit", ["8s", "8h", "8d", "7h", "5d"]])
	})

	it('return expected Double Pair', () => {
		let player = new Player(["7h", "8h", "Ad", "5d", "8s", "Ah", "3h"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Double Paire : As et Huit", ["Ah", "Ad", "8s", "8h", "7h"]])
	})

	it('return expected Pair', () => {
		let player = new Player(["7h", "8h", "Ad", "5d", "8s", "2h", "3h"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Paire : Huit", ["8s", "8h", "Ad", "7h", "5d"]])
	})

	it('return expected High', () => {
		let player = new Player(["7h", "8h", "Ad", "5d", "Qs", "2h", "3h"])
		getHandAndName(player)
		expect([HandName, Hand]).toEqual(["Hauteur : As", ["Ad", "Qs", "8h", "7h", "5d"]])
	})
})