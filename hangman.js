//REQUIRE INQUIRER
var inquirer = require('inquirer');

var dictionary = ["inspirational", "khaled", "win", "key", "another", "success", "faith", "smart", "loyal", "genius", "victory", "best", "turntables", "record", "greater", "tunes", "beat", "artist", "god", "blessed", "sneakers", "chains", "grill", "keys", "back", "shower", "cocoa", "butter", "almond", "milk"]
var wins = 0;
var losses = 0;
var lives = 10;
var guesses = [];
var computerGuess = [];
var correctGuesses = [];
var wordLength = computerGuess.length;
var char = [];
var n;
var checker = [];
var userGuess;
function hangman(){
	var computerGuess = dictionary[Math.floor(Math.random() * dictionary.length)]; 
	console.log(computerGuess)
				
	inquirer.prompt([{
		name: "guess",
		message: "which letter are you guessing?"
		}]).then(function(answers) { 
			var userGuess = answers.guess
			console.log(userGuess)		
			if ((userGuess == 'q') || (userGuess == 'w') || (userGuess == 'e') || (userGuess == 'r') || (userGuess == 't') || (userGuess == 'y') || (userGuess == 'u') || (userGuess == 'i') || (userGuess == 'o') || (userGuess == 'p') || (userGuess == 'a') || (userGuess == 's') || (userGuess == 'd') || (userGuess == 'f') || (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') || (userGuess == 'z') || (userGuess == 'x') || (userGuess == 'c') || (userGuess == 'v') || (userGuess == 'b') || (userGuess == 'n') || (userGuess == 'm'));{
				var number = (computerGuess.length - correctGuesses.length);
				console.log(number)
				n = (checker.indexOf(userGuess));
				console.log(n)
				if ( n == -1) {
					checker.push(userGuess);
					console.log("checker" + checker);

					for ( var i = 0; i < computerGuess.length; i++) {
						if (computerGuess[i] == userGuess){

						console.log("correct")
						correctGuesses.push(userGuess);

						}
						
					
					if (correctGuesses.length == computerGuess.length) {	
						console.log("Oh No! How'd you win win win? The key is to enjoy life, because they don't want you to enjoy life.");
						wins++, lives = 10, correctGuesses = [], guesses = [], char = [], checker = [];
						computerGuess = dictionary[Math.floor(Math.random() * dictionary.length)];
						console.log("win") 	
						for (z = 0; z < computerGuess.length; z++) { 
							char[z] = "_"
						}
						console.log("YErp")
							
					}		
					}
					if (number == (computerGuess.length - correctGuesses.length))	{	
						lives--;
						console.log("INCORRECT")
						if (lives < 1)
										{	alert("I've got no time for losers. The key to more sucess is cocoa butter.");
											losses++, lives = 10, correctGuesses = [], guesses = [], char = [], checker = [];
											computerGuess = dictionary[Math.floor(Math.random() * dictionary.length)];
											{	for (z = 0; z < computerGuess.length; z++)
												{ 	char[z] = "_"
												}
												console.log("Nope")
											}
										}
					}

					var letter = computerGuess.split("");
								{	for( x = 0; x < computerGuess.length; x++)
									{	if(userGuess == letter[x])
										{ char[x] = " " + userGuess + " "; 
										}
									}
								}
				}
		}

})
}
	




hangman();