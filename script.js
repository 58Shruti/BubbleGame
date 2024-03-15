var bubble = " ";
var number = "";
var time = 60;
var hitNum = "";
var score = 0;

function Createbubble(){
    bubble = " ";
    for(var i=1 ; i<=119 ; i++){
        number = Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${number}</div>`;
    }
    document.querySelector('.hero').innerHTML = bubble;
}

function Timer(){
 var setTime = setInterval(() => {
    if(time > 0){
        time--;
        document.querySelector('.timer').textContent = time;
    } else{
        clearInterval(setTime)
        document.querySelector('.hero').innerHTML =`<h1>Game over <br/> Your score :${score}</h1>`;
}
 },1000)
};


function SetHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector('.hits').textContent = hitNum;   
}

function UpdateScore(){
    score += 10;
    document.querySelector('.score').textContent = score;
}

document.querySelector('.hero').addEventListener('click' ,function(h){
 var numClick = Number(h.target.textContent)
 if(numClick === hitNum){
    UpdateScore();
    Createbubble();
    SetHit();
 }
})



Createbubble();
Timer();
SetHit();
