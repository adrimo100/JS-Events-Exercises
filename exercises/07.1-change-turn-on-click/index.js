var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	switch(currentUser){

		case "Mario":
			currentUser = "Juan";
			break;
		
		case "Juan":
			currentUser = "Josh";
			break;

		case "Josh":
			currentUser = "Mario";
			break;
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
