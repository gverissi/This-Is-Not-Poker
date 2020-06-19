
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const TYPES = ["d", "c", "h", "s"]

const VALUES_NAME = {
	"2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "10": "10",
	"J": "jack", "Q": "queen", "K": "king", "A": "ace"
}
const TYPES_NAME = {"d": "diamonds", "c": "clubs", "h": "hearts", "s": "spades"}

const FRENCH_VALUES_NAME = {
	"2": "Deux", "3": "Trois", "4": "Quatre", "5": "Cinq", "6": "Six", "7": "Sept", "8": "Huit", "9": "Neuf", "10": "Dix",
	"J": "Valet", "Q": "Dame", "K": "Roi", "A": "As"
}
const FRENCH_TYPES_NAME = {"d": "Carreaux", "c": "Trèfle", "h": "Coeur", "s": "Pique"}

const COMBOS_LIST = [
	StraightFlush,
	FourOfAKind,
	Full,
	Flush,
	Straight,
	ThreeOfAKind,
	DoublePair,
	Pair,
	High
]
