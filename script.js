const closeRules = () => {
	const gameRules = document.getElementById("gameRules");

	if (gameRules.style.display === "flex") {
		gameRules.style.display = "none";
	} else {
		gameRules.style.display = "flex";
	}
};

const options = document.querySelectorAll(".options")
const middle = document.getElementsByClassName("middle")
const bottom = document.getElementsByClassName("bottom")
const next = document.getElementById("next-btn")
let stone = document.getElementsByClassName("stone")
let userChoice;
let computerChoice;
const playAgain = document.getElementById("play-again")


let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
let cpuScore = localStorage.getItem('cpuScore') ? parseInt(localStorage.getItem('cpuScore')) : 0;

document.querySelector(".my-score h1").innerText = userScore;
document.querySelector(".comp-score h1").innerText = cpuScore;

options.forEach((option)=>{
	option.addEventListener('click',(e)=>{
		userChoice = e.target.id;
		//console.log(userChoice)
		userSelected();
	})
})

const userSelected =()=>{
	middle[0].style.display = 'none'
	bottom[0].style.display = 'flex'


	if(userChoice ==="stone"){
		document.querySelector("#userPicked img").src = "stone.png"
		document.querySelector("#userPicked").style.border = "15px solid #0074B6";
	}

	else if(userChoice=== "paper"){
		document.querySelector("#userPicked img").src = "paper.png"
		document.querySelector("#userPicked").style.border = "15px solid #FFA943";
	}

	else{
		document.querySelector("#userPicked img").src = "scissor.png"
		document.querySelector("#userPicked").style.border = "15px solid #BD00FF";
	}
	computerSelected();
	result(userChoice,computerChoice);
	decision(userScore, cpuScore);
}

const computerSelected= ()=>{
	let computerOptions = ['stone', 'paper', 'scissor'];
	computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    //console.log(computerChoice)

	if(computerChoice ==="stone"){
		document.querySelector("#cpuPicked img").src = "stone.png"
		document.querySelector("#cpuPicked").style.border = "15px solid #0074B6";
	}

	else if(computerChoice=== "paper"){
		document.querySelector("#cpuPicked img").src = "paper.png"
		document.querySelector("#cpuPicked").style.border = "15px solid #FFA943";
	}

	else{
		document.querySelector("#cpuPicked img").src = "scissor.png"
		document.querySelector("#cpuPicked").style.border = "15px solid #BD00FF";
	}
}

const result = (userChoice, computerChoice) => {

    document.querySelector("#USER").classList.remove("animate");
    document.querySelector("#CPU").classList.remove("animate");

    if (userChoice === 'stone' && computerChoice === "stone") {
        changes1("TIE UP");
        changes2(" ");
    } 
	else if (userChoice === 'paper' && computerChoice === "paper") {
        changes1("TIE UP");
        changes2(" ");
    } 
	else if (userChoice === 'scissor' && computerChoice === "scissor") {
        changes1("TIE UP");
        changes2(" ");
    } 
	else if ((userChoice === "stone" && computerChoice === "scissor") ||(userChoice === "scissor" && computerChoice === "paper") ||(userChoice === "paper" && computerChoice === "stone")
    ) {
        changes1("YOU WIN");
        UserScore(userScore + 1);
        document.querySelector("#USER").classList.add("animate");
    } 
	else {
        changes1("YOU LOST");
        CpuScore(cpuScore + 1);
        document.querySelector("#CPU").classList.add("animate");
    }
};

const changes1 = (changes1)=>{
document.querySelector( ".result-container h1").innerText = changes1;

}
const changes2 = (changes2)=>{
document.querySelector(".result-container h3").innerText = changes2;
}

const UserScore = (score)=>{
	userScore = score
	document.querySelector(".my-score h1").innerText = score
	localStorage.setItem('userScore', userScore);
}

const CpuScore = (score)=>{
	cpuScore = score
	document.querySelector(".comp-score h1").innerText = score
	localStorage.setItem('cpuScore', cpuScore);
}

playAgain.addEventListener('click',()=>{
	middle[0].style.display = 'flex'
	bottom[0].style.display = 'none'
})

const decision = (userScore, cpuScore)=>{

	if (userScore > cpuScore){
		next.style.display = "flex"
	}

	else if(userScore === cpuScore){
		next.style.display = "none"
	}
	else{
		next.style.display = "none"
	}
}
