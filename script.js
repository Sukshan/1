

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

console.log("Welcome to Tic Tac Toe");
let music= new Audio("D:/project/tic_tak_toe/1/media_files/music.mp3");
let audioturn= new Audio("D:/project/tic_tak_toe/1/media_files/ting.mp3");
let gameover= new Audio("D:/project/tic_tak_toe/1/media_files/gameover.mp3");

let turn= "X";


//funtion to change the turn
const change_turn= ()=>{
	return turn ==="X"?"O": "X";
}

//funtion to check whether some one won or not
const checkwin =()=>{

}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
	let boxtext= element.querySelector('.boxtext');
	element.addEventListener('click', ()=>{
		if(boxtext.innerText ===''){
			boxtext.innerText = turn;
			turn=  change_turn();
			audioturn.play();
			checkwin();
			document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
		}
	})
})

