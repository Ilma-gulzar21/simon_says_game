let gameSeq=[];
let userSeq=[];
let btns=[`pink`,`yellow`,`blue`,`green`]; 
let started= false;
let lavel = 0;
let h2= document.querySelector(`h2`);
document.addEventListener(`keypress`,()=> {
    if(started==false) {
        console.log(`game is started`);
        started=true;
        lavelup();
    }
});

function gameFlash(btn) {
   btn.classList.add("flash");
     setTimeout(function() {
        btn.classList.remove(`flash`);
     },200);
}
function userFlash(btn) {
   btn.classList.add("userflash");
     setTimeout(function() {
        btn.classList.remove(`userflash`);
     },200);
}
function lavelup() {
    userSeq=[];
    lavel++;
    h2.innerText=`lavel ${lavel}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
     gameFlash(randBtn);
} 
function checkbtn(idx) {
   if(userSeq[idx]===gameSeq[idx]) {
   if(userSeq.length== gameSeq.length) {
    setTimeout(lavelup,1000)
    // lavelup();
   }
   } 
   else  {
    h2.innerHTML=`Game Over!<br> press any key to start.<br> Your score:${lavel}`;
    document.querySelector(`body`).style.backgroundColor=`red`;
    setTimeout(function() {
    document.querySelector(`body`).style.backgroundColor=`white`;
    },150);
   reset();
   }
} 
function btnpress() {
    // console.log(this);
     let btn=this;
     userFlash(btn);
   let userColor=btn.getAttribute(`id`);
     userSeq.push(userColor);
     checkbtn(userSeq.length-1);
}
let allbtns=document.querySelectorAll(`.btn`);
for(btn of allbtns) {
    btn.addEventListener(`click`,btnpress);
}

function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    lavel=0;
}

