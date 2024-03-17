let gameSeq = [];
let userSeq =[];

let btns = ["red","green","blue","purple"];

let statement = false;
let level =0;

let h3 = document.querySelector('h3');

window.addEventListener("keypress",function(){
    if(statement == false){
    statement = true;
    levelUp();
    }
});

window.addEventListener("click",function(){
    if(statement == false){
    statement = true;
    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("blink");
    
    setTimeout(function () {
        btn.classList.remove("blink");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else{
        h3.innerHTML =  `Game Over! Your Score is ${level} Press Any key to Start.`;
        reset();
    }
}

function btnPress() {
    let btn =this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);


    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".box");
for (btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    statement = false;
    gameSeq = [];
    userSeq =[];
    level = 0;
}