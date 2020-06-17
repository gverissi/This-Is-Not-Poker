
describe('isAFlush', () => {
	it('return true (flush combo)', () => {
		expect(isAFlush(["As", "10s", "Js", "Qs", "Ah", "2s", "3c"])).toEqual(true)
	})

	it('return false (without flush combo)', () => {
		expect(isAFlush(["As", "10s", "Js", "Qs", "Ah", "2d", "3c"])).toEqual(false)
	})
})