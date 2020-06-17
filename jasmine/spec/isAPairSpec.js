
describe('isAPair', () => {
	it('return true (pair combo)', () => {
		expect(isAPair(["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"])).toEqual(true)
	})

	it('return false (without pair)', () => {
		expect(isAPair(["As", "10d", "Jd", "Qs", "8h", "2h", "3c"])).toEqual(false)
	})
})