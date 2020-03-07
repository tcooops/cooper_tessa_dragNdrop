(() => {
	
//	const resetButton = document.querySelectorAll('reset-button');


//	function resetPuzzleBoard () {
		//console.log('you reset the board')
		
		//debugger;
//		document.getElementById('puzzle-board').reset();
//	}


//	resetButton.addEventListener('click', resetPuzzleBoard);



///////////////////////////////////////////


	const	puzzlePiece = document.querySelectorAll('.puzzle-pieces img');
			
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];


// functions go here = what we want to have happen when our triggers fire
	function resetPuzzleBoard() {
		console.log('you reset the board')
		if (!this.hasChildNodes()) {
		dropZones.parentNode.removeChild(dropZones);
		// capture the id of the element we're dragging
		// the dataTrandfer object is part of the drag event -> you can us this to temporarily store
		// store data you can retrieve and use later
		// like an audio track, as an example
		//event.dataTransfer.setData("text/plain", this.id);
	}

	// add some event handling for the  reset buttons
	puzzlePiece.forEach(piece => piece.addEventListener('click', resetPuzzleBoard));

})();



