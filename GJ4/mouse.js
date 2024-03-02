document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
    mdx =  e.clientX - canvas.width/2+mousexoffset;
	mdy =  e.clientY - canvas.height/2+mouseyoffset;
	moused = -1*Math.atan2(mdx,mdy) - Math.PI/2;
	mousedistance = Math.sqrt(mdx*mdx+mdy*mdy);
	}
document.addEventListener("mousedown", mouseDownHandler, false);
function mouseDownHandler(e) {
	mousestate = e.buttons;
	moused = -1*Math.atan2(mdx,mdy) - Math.PI/2;
	mousedistance = Math.sqrt(mdx*mdx+mdy*mdy);
	}
document.addEventListener("mouseup", mouseUpHandler, false);
function mouseUpHandler(e) {
	mousestate = e.buttons;
	}
document.addEventListener("wheel", mouseWheelHandler, {passive: false});
function mouseWheelHandler(e) {

	}


function fullscreenchanged(event) {
  if (document.fullscreenElement) {
    console.log(`entered fullscreen mode.`);
	mousexoffset = fullscreenmousexoffset;
	mouseyoffset = fullscreenmouseyoffset;
	
  } else {
	mousexoffset = windowmousexoffset;
	mouseyoffset = windowmouseyoffset;
  }
}

//const el = document.getElementById('fullscreen-div');
const e1 = document.getElementById('gameCanvas');
e1.addEventListener('fullscreenchange', fullscreenchanged);

