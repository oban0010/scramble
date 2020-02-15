const words = ["APPLE", "MANGO","COMPUTER","SHIRT","MOUSE","KEYBOARD","DOOR","GLASS","TEA","CUP"]
const gameobj = {
	'acitve':false,
	'randomWords':'',
	'currentword':'',
	'strikes':0,
	'points':0,
	'maxStrikes':3,
	'passes':3
}

function shuffle (src) {
  const copy = [...src]

  const length = copy.length
  for (let i = 0; i < length; i++) {
    const x = copy[i]
    const y = Math.floor(Math.random() * length)
    const z = copy[y]
    copy[i] = z
    copy[y] = x
  }

  if (typeof src === 'string') {
    return copy.join('')
  }

  return copy
}

function start(){
	if(!gameobj.acitve){
	gameobj.acitve = true;
	gameobj.strikes =3;
	gameobj.points =0;
	gameobj.passes =3;
	gameobj.randomWords = shuffle(words);
	gameobj.currentword = shuffle(gameobj.randomWords[gameobj.randomWords.length-1]);
	console.log(gameobj.currentword);
}
else{
	console.log("Game already started")
}
}

function guess(word){
		if(gameobj.acitve){
		word = word.toUpperCase();
	if(word == gameobj.randomWords[gameobj.randomWords.length-1]){
		gameobj.randomWords.pop();
		if(gameobj.randomWords.length !=0){
		gameobj.currentword = shuffle(gameobj.randomWords[gameobj.randomWords.length-1]);
		gameobj.points += 1;
		console.log("correct! current scroe: ",gameobj.points);
		console.log("Next word:")
		console.log('"'+gameobj.currentword+'"')
	}
	else{
		gameobj.acitve = false;
		console.log("you won the game....");
	}
	}
	else{
		gameobj.strikes -= 1;
		if(gameobj.strikes !=0){
		console.log("Wrong! you have " + gameobj.strikes + " strikes left");
		console.log("Next word:")
		console.log('"'+gameobj.currentword+'"')
	}
	else{
		gameobj.acitve = false;
	console.log("Game over!");
	}
	}
}
else{

	console.log("There is no current game");
	console.log("Please use start() to start new game");
}
}


function pass(){
		if(gameobj.acitve){
	if(gameobj.passes != 0){
		gameobj.passes -= 1;
		gameobj.randomWords.pop();
		gameobj.currentword = shuffle(gameobj.randomWords[gameobj.randomWords.length-1]);
		console.log("you used a pass you have " + gameobj.passes + " passes left")
		console.log("Next word:")
		console.log('"'+gameobj.currentword+'"')

	}
	else{
		console.log("you don't have any pass")
			console.log("Next word:")
		console.log('"'+gameobj.currentword+'"')
	}
	}
else{
	console.log("There is no current game");
	console.log("Please use start() to start new game");
}
}


function help(){
	console.log("Welcome to Scramble\nThe game where you unscramble letter to make words\n\n")
	console.log("once you start the game, you will be given a scrabled word.if you correctly guess the word, you will reccive a point. if you guess incorrectly you will reccive a strike. you can also pass a word\n\n")
	console.log(" To start new game start()");
 	console.log("To make guess use guess()");
 	console.log("To skip word use pass pass()");
 	console.log("To show the instruction use  help()");
}
help();
