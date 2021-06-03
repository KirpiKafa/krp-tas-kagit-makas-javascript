      const modal = document.querySelector(".modal");
      const modalbutton = document.querySelector(".modal button");
      const game = document.querySelector(".game");
      const pscore = document.querySelector(".player-score p");
      const cscore = document.querySelector(".computer-score p");
      const button = document.querySelectorAll(".buttons button");
      const playericon = document.querySelector(".player-image img");
      const computericon = document.querySelector(".computer-image img");
      const scoreannounce = document.querySelector(".result ");

      let playerscore = 0;
      let computerscore = 0;
      const options = ["rock", "paper", "scissors"];

      function startgame() {
        modal.classList.toggle("reveal");
      }

      modalbutton.addEventListener("click" , () => 
      {
        modal.classList.toggle("reveal");
        modal.style.pointerEvents = "none";
        game.classList.toggle("reveal");
      });

          button.forEach((item) => {
			  item.addEventListener("click", (e) => {
			  const playerchoise = e.target.getAttribute("data-value");
			  const computerchoise = options[Math.floor(Math.random() * 3)];
			  playericon.src = "./images/rock.png";
			  computericon.src = "./images/rock.png";

			  playericon.classList.toggle("move");
			  computericon.classList.toggle("move");
			  game.classList.toggle("disablebuttons");

			  setTimeout(() => {
				playericon.classList.toggle("move");
				computericon.classList.toggle("move");
				game.classList.toggle("disablebuttons");
				playericon.src = `./images/${playerchoise}.png`;
				computericon.src = `./images/${computerchoise}.png`;
				gameresult(playerchoise.computerchoise);
			  }, 2000);
			  
			  setTimeout(function(){ gameresult(playerchoise,computerchoise); }, 2000);
			  
			});
		  });
      function gameresult(playervalue, computervalue) {
        if (playervalue === "rock") {
          if (computervalue === "rock") {
            scoreannounce.textContent = "Berabere"
          } else if (computervalue === "paper") {
            scoreannounce.textContent = "Kaybettiniz ";
            computerscore++;
            cscore.textContent = computerscore;
          } else if (computervalue === "scissors") {
            scoreannounce.textContent = "Kazandınız";
            playerscore++;
            pscore.textContent = playerscore;
          }
        }

        if (playervalue === "paper") {
          if (computervalue === "rock") {
            scoreannounce.textContent = "Kazandınız"
            playerscore++;
            pscore.textContent = playerscore;
          } else if (computervalue === "paper") {
            scoreannounce.textContent = "Berabere";
          } else if (computervalue === "scissors") {
            scoreannounce.textContent = "Kaybettiniz";
            computerscore++;
            cscore.textContent = computerscore;
          }
        }
        if (playervalue === "scissors") {
          if (computervalue === "rock") {
            scoreannounce.textContent = "Kaybettiniz "
            computerscore++;
            cscore.textContent = computerscore;
          } else if (computervalue === "paper") {
            scoreannounce.textContent = "Kazandınız";
            playerscore++;
            pscore.textContent = playerscore;
          } else if (computervalue === "scissors") {
            scoreannounce.textContent = "Berabere";
          }
        }
      }

      startgame();