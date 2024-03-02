//A lot of player keyboard controls are handled in system.playerkeys().
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
	if (event.key=="\\"){

		}


	if (event.key=="e"){
		console.log("oof");
		}	

	else if (event.key=='f'){
		openFullscreen(); //No fullscreen exit.  Javascript feels defective, fullscreen exit code doesn't work.
		//systems[ps].players[myi].vkactive = false; 
		mousexoffset = fullscreenmousexoffset;
		mouseyoffset = fullscreenmouseyoffset;
		//if (vkeys[vkeys.length-2].x == 420){vkeys[vkeys.length-2].x = 99999;}//Disables mobile support
		}
	else{

	}	

  event.preventDefault();// Cancel the default action to avoid it being handled twice
}, true);	//end of event key handling, not clear what the ", true);" is about		

