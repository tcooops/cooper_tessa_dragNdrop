(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the bottom of the page

	const navButtons = document.querySelectorAll('#button-holder img'),
	      puzzleBoard = document.querySelector('.puzzle-board'),
		  dropZones = document.querySelectorAll('.drop-zone')
		  puzzlePiece = document.querySelectorAll('.puzzle-pieces img');

	// store images names here
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// functions go here = what we want to have happen when our triggers fire
	function changeImageSet() {

		// change the thumbnail images on the left to match the button image
		// add an ID to the images
		pieces.forEach((piece, id) => {
			const puzzlePieces = document.querySelector(".puzzle-pieces")
			puzzlePieces.appendChild(puzzlePiece[id])
			puzzlePiece[id].src= `images/${piece + this.dataset.puzzleindex}.jpg`;
			puzzlePiece[id].id= `${piece + this.dataset.puzzleindex}`;
	});

		// and set a background image on the drop zone container
		// debugger;
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`;
	}

	function dragStart(event) {
		console.log('started a drag')

		// capture the id of the element were dragging
		// the dataTrandfer object is part of the drag event -> you can us this to temporarily store
		// store data you can retrieve and use later
		// like an audio track, as an example
		event.dataTransfer.setData("text/plain", this.id);
	}

	function allowDrag(event) {
		event.preventDefault();
		console.log('you dragged something onto me!')
	}

	function allowDrop(event) {
		console.log(event.target)
		if (!this.hasChildNodes()) {

			event.preventDefault();
			console.log('you dropped something onto me!')

		   	let currentPiece = event.dataTransfer.getData ("text/plain");

		   	event.target.appendChild(document.querySelector(`#${currentPiece}`))
		}


	}


	// add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));

	//set up drop and drag event on our puzzle pieces
	puzzlePiece.forEach(piece => piece.addEventListener('dragstart', dragStart));

	//set up the dragover event for our dropZones
	dropZones.forEach(zone => zone.addEventListener('dragover', allowDrag));

	dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

	changeImageSet.call(navButtons[0]);
})();
