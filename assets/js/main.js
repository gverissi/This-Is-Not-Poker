/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 * 
 * Exemple dealer() => [["As", "3s", "2h", "8d", "8s"], ["As", "3s", "2h", "8d", "8s"]]
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 * 
 */

var heroHandIndexes = []
var vilainHandIndexes = []
var winnerHandIndexes = []

function main() {
	id_chipSound.play()
	id_play_btn.disabled = true

	// Create a shuffled deck of 52 cards
	let deck = new Deck()
	deck.shuffle()
	
	// Create arrays of all cards (9) and url's for the images id
	let allCards = deck.cards(0, 8)
	// allCards = ["2h", "4h", "5d", "2s", "6d", "5s", "4d", "3d", "2d"]
	// allCards = ["2h", "Jh", "5d", "Qs", "6d", "5s", "4d", "3d", "2d"]
	// allCards = ["2h", "Jh", "5d", "As", "6d", "5s", "4d", "3d", "2d"]
	// allCards = ["2h", "Jh", "5h", "Qs", "Qd", "Js", "10d", "9d", "8d"]
	// allCards = ["2h", "Jh", "5h", "Qs", "Kd", "Js", "10d", "9d", "7d"]
	// allCards = ["2h", "Ah", "5h", "Qs", "Kd", "Js", "10d", "9d", "7d"]
	// allCards = ["2h", "Ah", "5h", "5s", "Kd", "Js", "4d", "3d", "2d"]
	console.log("allCards = ", allCards)
	let imagesSrc = allCards.map(card => {
		let cardObj = new Card(card)
		return cardObj.cardName()
	})
	
	// Preload images
	function preloadImage(url)
	{
		var img=new Image()
		img.src=url
	}
	for (let j = 0; j < imagesSrc.length; j++) {
		preloadImage(imagesSrc[j])
	}

	// Set of cards
	let board = allCards.slice(4, 9)
	let heroCards = [allCards[0], allCards[2], board].flat()
	let vilainCards = [allCards[1], allCards[3], board].flat()

	// Players
	hero = new Player(heroCards)
	vilain = new Player(vilainCards)

	// Combo
	let combo = new Combo()

	// Hands
	let [heroHandName, heroHand] = combo.bestCombo(hero)
	let [vilainHandName, vilainHand] = combo.bestCombo(vilain)
	
	// Winner
	let winnerHand = combo.compareCombos(heroHand, vilainHand)
	let winnerScore = combo.getHandScore(winnerHand)
	let heroScore = combo.getHandScore(heroHand)
	let vilainScore = combo.getHandScore(vilainHand)
	let isHeroWin = combo.areHandsEqual(winnerHand, heroHand) && heroScore == winnerScore
	let isVilainWin = combo.areHandsEqual(winnerHand, vilainHand) && vilainScore == winnerScore

	// Indexes hand
	heroHandIndexes = []
	heroHand.forEach(card => {
		heroHandIndexes.push(allCards.indexOf(card))
	})
	vilainHandIndexes = []
	vilainHand.forEach(card => {
		vilainHandIndexes.push(allCards.indexOf(card))
	})
	winnerHandIndexes = []
	winnerHand.forEach(card => {
		winnerHandIndexes.push(allCards.indexOf(card))
	})

	// Store the winner
	localStorage.isHeroWin = isHeroWin
	localStorage.isVilainWin = isVilainWin

	// Flip cards one by one
	let intSwitchCard = setInterval(switchCard, 200)
	let i = 0
	function switchCard() {
		if (i == 9) {
			indexMassage(isHeroWin, isVilainWin, heroHandName, vilainHandName)
			clearInterval(intSwitchCard)
		}
		else {
			flipCard(IMAGES_ID[i], imagesSrc[i])
			i++
		}
	}

	// // Display all cards at once
	// for (let k = 0; k < 9; k++) {
	// 	IMAGES_ID[k].src = imagesSrc[k]
	// }
	// indexMassage(isHeroWin, isVilainWin, heroHandName, vilainHandName)

	console.log("Pour le hero :")
	console.log("heroHand = ", heroHand)

	console.log("Pour le vilain :")
	console.log("vilainHand = ", vilainHand)

	console.log("Winner :")
	console.log("winnerHand = ", winnerHand)
	
	console.log("==================")

}