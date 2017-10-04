/*
CORE STATS:
HEALTH
describes how much health an entity has. When an entity drops to 0 health it dies.

INTELLIGENCE
something something spells

DAMAGE
describes how much damage an entities attacks do

ACCURACY
describes how likely an entity is to hit something.

DEFENSE
describes how much of the damaga gets blocked

EVASION
describes how likely an entity is to avoid getting hit
*/

function getXP(level){
	return Math.floor(level + 300 * Math.pow(2, level / 7));
}

function getDungeonLength(level){
	return  Math.floor((Math.random() * level) + (4 * Math.pow(1.5, level / 10)));
}

function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
}

function MakeDungeon(level){
	//create dungeon object
	dungeon = {
		totalRooms: 0,
		XP: 0,
		XPPerRoom: 0,
		room: []
	};
	
	//set dungeon properties
	dungeon.totalRooms = getDungeonLength(level);
	dungeon.XP = getXP(level);
	dungeon.XPPerRoom = Math.floor(dungeon.XP/ dungeon.totalRooms);
	
	//populate dungeon rooms
	for(i = 0; i < dungeon.totalRooms; i +=1 ){
		dungeon.room[i] = "monster";
	}
	return dungeon ;
}

function MakeMonster(xp, minimumDifficulty, maximumDifficulty){
	var options = [];
	var choice;
	for(var key in monsters){
		if (key.difficulty >= minimumDifficulty && key.difficulty <= maximumDifficulty){
			options[options.length-1] = key;
		}
	}
	if (options == undefined ){
		choice = monsters.slime;
	}else{
		choice = options[Math.round(Math.random() * options.length)]
	}
	return choice;
}

monsters = {
	slime : {
		//fluff
		name: "Slime",
		description: "The green goo wobbles menacingly.",
		attackText: "The goo lunges at you!",
		deathText: "The green slime is defeated!",
		
		//atributes
		difficulty: 1,
		//core attribute multipliers become core stats in the constructor
		health: 1.5,
		intelligence: 0.5,
		damage: 0.5,
		accuracy: 1.5,
		defense: 1.5,
		evasion: 0.5
	},
	mosquittoSwarm : {
		//fluff
		name: "Mosquitto swarm",
		description: "Noo, not the mosquittos!",
		attackText: "The swarm surrounds you!",
		deathText: "The swarm disperses.",
		
		//atributes
		difficulty: 1,
		//core attribute multipliers become core stats in the constructor
		health: 0.5,
		intelligence: 0.5,
		damage: 1.5,
		accuracy: 1.5,
		defense: 0.5,
		evasion: 1.5
	},
	rat : {
		//fluff
		name: "Rat",
		description: "It's glittering eyes look positively evil.",
		attackText: "The rat knaws at you.",
		deathText: "You've managed to kill a rat. GG!",
		
		//atributes
		difficulty: 1,
		//core attribute multipliers become core stats in the constructor
		health: 0.5,
		intelligence: 1.5,
		damage: 0.5,
		accuracy: 1.5,
		defense: 0.5,
		evasion: 1.5
	},
	LivingBrick : {
		//fluff
		name: "Brick",
		description: "OH NO! It's a brick!!!!",
		attackText: "The brick hurls itself at you.",
		deathText: "The brick shatters into 7 pieces.",
		
		//atributes
		difficulty: 2,
		//core attribute multipliers become core stats in the constructor
		health: 3,
		intelligence: 3,
		damage: 1.5,
		accuracy: 1,
		defense: 2,
		evasion: 0.5
	}
};

console.log(MakeMonster(0, 0, 5));
console.log(MakeMonster(0, 1, 1));
console.log(MakeMonster(0, 6, 8));
