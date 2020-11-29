	//create an array with all avaiable letters
	var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	//dafault variables
	var win = 0;
	var loss = 0;
	var guessLeft = 9;
	var guessSoFar = [];


	//reset everything to default and start a new game!
	function reset() {
	    guessLeft = 9;

	    guessSoFar = [];
	    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	    console.log(computerGuess);

	}
	reset();

	//give a new letter when user userGuess is the same with computerGuess
	function newword() {
	    guessSoFar = [];
	    guessLeft = 9;
	    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	    console.log(computerGuess);
	}



	//when user press a key it records the 'letter' and save the 'letter' to the userGuess. 
	// convert the typed 'letter' and lower case;
	// convert Unicode values into characters.
	document.onkeyup = function(event) {
	    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	    if (!/[a-z]/.test(userGuess)) {
	        alert("please choose letter only");
	        guessLeft++;
	        //    loss--;
	    }

	    //if a letter is not typed yet, then log it in the guessSoFar array
	    // if user already type a letter then alert user choose another letter. 
	    if (guessSoFar.indexOf(userGuess) === -1) {
	        guessSoFar.push(userGuess);
	    } else {
	        alert("You already guessed this letter, please choose another one");
	        guessLeft++;
	        //   loss--;


	    }
	    //&& computerChoice.indexOf(userGuess) >=0){
	    //guessSoFar[guessSoFar.length]= userGuess;
	    // guessSoFar.push(userGuess);


	    //if userGuess is the same with computerGuess, then record win (#)
	    if (userGuess === computerGuess) {
	        win++;
	        alert("Your guess is right, let's try a new letter");
	        newword();
	    }

	    //if userGuess is not the same with computerGuess, then record loss (#)
	    else {
	        //loss++;
	        //if userGuess is not the same with computerGuess then guessLeft decrease 
	        guessLeft--;
	    }

	    //if guestLeft is 0 then the game reset to the default and start a new game
	    if (guessLeft === 0) {
	        loss++
	        alert("You lost.  Let's try again.")
	        reset();
	    }

	    //write out in HTML body
	    document.querySelector('#win').innerHTML = "Total Wins: " + win;
	    document.querySelector('#loss').innerHTML = "Total Losses: " + loss;
	    document.querySelector('#guessleft').innerHTML = "Number of guess left: " + guessLeft;
	    document.querySelector('#guessofar').innerHTML = " Your guess so far: " + guessSoFar;

	};