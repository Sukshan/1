// array of player of information
let players= [];


// funtion to add player after some event happens
const addplayer=(ev)=>{
	// console.log('yes add player funtion ran')
	ev.preventDefault();
	let player={
		id: Date.now(),
		fname: document.getElementById('fname').value,
		lname: document.getElementById('lname').value,
		gender: document.getElementsByName('Gender').value,
		age: document.getElementById('age').value
	}
	// console.log('reached this point')
	players.push(player);
	document.getElementById('iniregform').reset();


	//instead of adding print statement, lets add a standard message
	console.warn('added', {players});


	//saving to local storage
	localStorage.setItem('PlayerList', JSON.stringify(players));
}

document.addEventListener('DOMContentLoaded', ()=>{
	document.getElementById('submit').addEventListener('click', addplayer);
});




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

const checkwin= ()=>{
	let wins=[
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	wins.forEach(e=>{
		
	})
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
