
describe('isAPair', () => {

	it('return true (pair combo)', () => {
		let player = new Player(["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"])
		expect(Pair.isValid(player)).toEqual(true)
	})

	it('return false (without pair)', () => {
		let player = new Player(["As", "10d", "Jd", "Qs", "8h", "2h", "3c"])
		expect(Pair.isValid(player)).toEqual(false)
	})
	
})