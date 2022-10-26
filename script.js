document.getElementById("heading1").innerHTML = "PLAYER INFORMATION FORM TO BE FILLED BEFORE PLAYING THE GAME ";
console.log("\n");


function resetom() {

	var ele= document.getElementsByName("Gender");
	for(var i=0; i<ele.length; i++){
		ele[i].checked= false;
	}
	event.preventDefault();
}

function stop_reload(){
	event.preventDefault();
}