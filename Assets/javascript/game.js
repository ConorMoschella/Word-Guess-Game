
      // Create an array of words
      var words = [
        "pancreas",
        "heart",
        "brain",
        "gallbladder"
      ];
      function hangMan() {
        // Picks a random word
        var word = words[Math.floor(Math.random() * words.length)];
        // Places the _ for the answer
        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
          answerArray[i] = "_";
        }
        var remainingLetters = word.length;
        var lives = 9;
        // Lopps the game until finished
        while (remainingLetters > 0 && lives > 0) {
          // Shows current correct guesses
          alert(answerArray.join(" "));
          // Ask player for a letter
          var guess = prompt("Guess a letter, or click Cancel to stop playing. " + lives + " Lives left");
          if (guess === null) {
            // Stops game if you hit cancel
            break;
          } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
          } else {
            // Inserts the proper guess into its spots
            for (var j = 0; j < word.length; j++) {
              if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
              }
              
            }
            //subtracts a life if guess isn't in the word
            if (!answerArray.includes(guess)) {
              lives--;
            }
          }
          
          // The end of the game loop
        }
        // Show the answer and congratulate the player
        alert(answerArray.join(" "));
        alert("Good job! The answer was " + word);
        hangMan();
      }
      hangMan();
