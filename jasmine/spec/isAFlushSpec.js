
describe('isAFlush', () => {

	it('return true (flush combo)', () => {
		let player = new Player(["As", "10s", "Js", "Qs", "Ah", "2s", "3c"])
		expect(Flush.isValid(player)).toEqual(true)
	})

	it('return false (without flush combo)', () => {
		let player = new Player(["As", "10s", "Js", "Qs", "Ah", "2d", "3c"])
		expect(Flush.isValid(player)).toEqual(false)
	})

})