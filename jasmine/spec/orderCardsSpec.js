
describe('orderCards', () => {

	var combo

	beforeEach(function () {
		combo = new Combo()
	})

	it('return expected array of size 5', () => {
		let cards1 = ["Qd", "7h", "8d", "As", "Qs"]
		expect(combo.orderCards(cards1)).toEqual(["As", "Qs", "Qd", "8d", "7h"])
	})

	it('return expected array of size 5', () => {
		let cards2 = ["Qd", "9h", "8d", "As", "Qs"]
		expect(combo.orderCards(cards2)).toEqual(["As", "Qs", "Qd", "9h", "8d"])
	})

	it('return expected array of size 7', () => {
		let cards1 = ["Qd", "7h", "8d", "As", "Ah", "2c", "7d"]
		expect(combo.orderCards(cards1)).toEqual(["As", "Ah", "Qd", "8d", "7h", "7d", "2c"])
	})

	it('return expected array of size 7', () => {
		let cards2 = ["2d", "3h", "8d", "As", "Ah", "Ad", "Ac"]
		expect(combo.orderCards(cards2)).toEqual(["As", "Ah", "Ac", "Ad", "8d", "3h", "2d"])
	})

})