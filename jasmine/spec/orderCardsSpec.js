
describe('orderCards', () => {
	it('return expected array of size 5', () => {
		let cards1 = ["Qd", "7h", "8d", "As", "Qs"]
		expect(orderCards(cards1)).toEqual(["As", "Qs", "Qd", "8d", "7h"])
		let cards2 = ["Qd", "9h", "8d", "As", "Qs"]
		expect(orderCards(cards2)).toEqual(["As", "Qs", "Qd", "9h", "8d"])
	})
	it('return expected array of size 7', () => {
		let cards1 = ["Qd", "7h", "8d", "As", "Ah", "2c", "7d"]
		expect(orderCards(cards1)).toEqual(["As", "Ah", "Qd", "8d", "7h", "7d", "2c"])
		let cards2 = ["2d", "3h", "8d", "As", "Ah", "Ad", "Ac"]
		expect(orderCards(cards2)).toEqual(["As", "Ah", "Ac", "Ad", "8d", "3h", "2d"])
	})
})