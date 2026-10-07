let modInfo = {
	name: "The Color Tree",
	author: "thecoolcookie366",
	pointsName: "paint",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Cookie's Creations Server",
	discordLink: "https://discord.gg/aUbDYX5Z3a",
	initialStartPoints: new Decimal (0.01), // Used for hard resets and new players
	offlineLimit: 296280,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.00",
	name: "The ... Update",
}

let changelog = `<h1>Changelog:</h1><br>
	<br>
	<h3>Changelog Guide: vA.BC </h3><br>
	A = big update <br>
	B = medium update <br>
	C = small update <br>
	<br>
	<h1>v1.00</h1><br>
		- Wow so cool a new game... haha<br>
		<br>`

let winText = `<i>What a colorful world...</i>`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	if (hasUpgrade('p', 11)) gain = gain.add(0.0005)
	if (hasUpgrade('7', 11)) gain = gain.add(0.8)
	if (hasUpgrade('3', 11)) gain = gain.add(1.618)
	if (hasUpgrade('p', 12)) gain = gain.mul(125)
	if (hasUpgrade('2', 11)) gain = gain.mul(2)
	if (hasUpgrade('2', 12)) gain = gain.mul(24)
	if (hasUpgrade('2', 13)) gain = gain.mul(246)
	if (hasUpgrade('3', 12)) gain = gain.mul(1.618)
	if (hasChallenge('6', 11)) gain = gain.times(challengeEffect('6', 11))
	if (getBuyableAmount("5", 11).gt(0)) gain = gain.times(buyableEffect("5", 11))	
	if (hasUpgrade('1', 11)) gain = gain.pow(1.01)
	if (hasUpgrade('1', 12)) gain = gain.pow(1.1)
	if (hasUpgrade('1', 13)) gain = gain.pow(3.33333333333)
	if (hasUpgrade('3', 13)) gain = gain.pow(1.618)
	if (hasUpgrade('2', 13)) gain = gain.pow(1.05)
	if (hasUpgrade('4', 14)) gain = gain.pow(1.35)
	if (hasMilestone('8', 2)) gain = gain.pow(2)
	if (inChallenge('6', 11)) gain = gain.pow(0.01)
	if (!hasUpgrade("7", 12)) {
		if (gain.gt("1e999999999")) {
			gain = new Decimal("1e999999999")
		}
	}
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e1e1e1e1e6234"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {
}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}