

//setting up global variables
var artistArray = ["madonna", "christeena", "edshereen", "taylor"];
var wins = 0;
var loses = 0;
var arrayLetter = [];

//start of a the main function this is called in the main
function startGame() {

	var userGuess = [];
	var underScores = [];
	var counter = 0;
	var guessesLeft = 12;
	var randWord = artistArray[Math.floor(Math.random() * artistArray.length)];

	console.log("random word :" + randWord);//to show which word is guesssed by the computer

	//make a set of underscores matching the length of the random word
	for (var i = 0; i < randWord.length; i++) {
		underScores.push(' _ ');
	}
	//to remove commas use join 
	document.getElementById("cword").textContent = underScores.join("  ");
	//show up the initial chances in the begining of the game
	document.getElementById("gleft").textContent = guessesLeft;

	function winlose() {
		if (counter === randWord.length) {

			arrayLetter = [];
			alert("winner word is : " +randWord);
			document.getElementById("win").textContent = ++wins;
			document.getElementById("aguessed").textContent = arrayLetter;
			
			//var guessesLeft = 12;
			startGame();
		}
		else if (guessesLeft === 0) {
			loses++;
			alert("loses= " + loses + " !! PLAY AGAIN");
			arrayLetter = [];
			//document.getElementById("gleft").textContent = 0;
			document.getElementById("aguessed").textContent = arrayLetter;
			document.getElementById("lose").textContent = loses;
			startGame();

		}
		else {
			document.getElementById("gleft").textContent = guessesLeft;
			document.getElementById("aguessed").textContent = arrayLetter;
		}

	}

//works when we type a key
	document.onkeyup = function (event) {
		userGuess = event.key;
		arrayLetter.push(userGuess);//adds the typed letter to an array
		console.log(userGuess);//shows the guessed letter in console
		if (randWord.indexOf(userGuess) > -1) {
			console.log(randWord.indexOf(userGuess));
			for (var i = 0; i < randWord.length; i++) {
				if (randWord[i] === userGuess) {
					underScores[i] = userGuess;					
					document.getElementById("cword").textContent = underScores.join("");
					console.log(underScores);
					counter++;
					guessesLeft--;
					winlose();
				}
			}
		}
		else {
			guessesLeft--;
			//console.log(guessesLeft);
			winlose();
		}
	};

}

//main in the scope of global variables
startGame();








