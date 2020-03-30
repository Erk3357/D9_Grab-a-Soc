//--------ON DOCUMENT LOAD--------//

sessionStorage.clear();
var elementsToClear = document.getElementsByClassName('soc-container');
for (i = 0; i < elementsToClear.length; i++) {
	elementsToClear[i].style.display = 'none';
}

var overlay = document.getElementById('overlay');

//---------BUTTON FUNCTIONS----------//
function sendMail() {
	alert('An email request to join this Club has been sent to the Club President, Check your inbox for a reply!');
}

function overlayOn() {
	overlay.style.display = 'block';
	overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
}

function overlayOff() {
	overlay.style.display = 'none';
}

function interestToggle(num) {
	var targetedEl = document.getElementById('tab' + num);
	targetedEl.classList.toggle('active');
	document.getElementById('title').style.display = 'none';

	for (i = 0; i < elementsToClear.length; i++) {
		elementsToClear[i].style.display = 'none';
	}

	var searchTerms = document.getElementsByClassName('active');

	sessionStorage.clear();

	for (i = 0; i < searchTerms.length; i++) {
		sessionStorage.setItem('search' + i, searchTerms[i].textContent);
	}

	//_________________________________Interests_____________________________________________

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Outdoors') {
			var elementsToShow = document.getElementsByClassName('Outdoors');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Fitness') {
			var elementsToShow = document.getElementsByClassName('Fitness');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Watersport') {
			var elementsToShow = document.getElementsByClassName('Watersport');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Dancing') {
			var elementsToShow = document.getElementsByClassName('Dancing');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Combat-Sport') {
			var elementsToShow = document.getElementsByClassName('Combat-Sport');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'GAA') {
			var elementsToShow = document.getElementsByClassName('GAA');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Soccer') {
			var elementsToShow = document.getElementsByClassName('Soccer');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Team-Sports') {
			var elementsToShow = document.getElementsByClassName('Team-Sports');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Individual-Sports') {
			var elementsToShow = document.getElementsByClassName('Individual-Sports');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Net-Games') {
			var elementsToShow = document.getElementsByClassName('Net-Games');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Tennis') {
			var elementsToShow = document.getElementsByClassName('Tennis');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Rugby') {
			var elementsToShow = document.getElementsByClassName('Rugby');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Outdoors') {
			var elementsToShow = document.getElementsByClassName('Outdoors');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Animals') {
			var elementsToShow = document.getElementsByClassName('Animals');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}

	for (i = 0; i < sessionStorage.length; i++) {
		var searchedTerm = sessionStorage.getItem('search' + i);

		if (searchedTerm == 'Self-Defence') {
			var elementsToShow = document.getElementsByClassName('Self-Defence');

			for (j = 0; j < elementsToShow.length; j++) {
				elementsToShow[j].style.display = 'block';
			}
		}
	}
}
