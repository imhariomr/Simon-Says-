let gameSeq = [];
let userSeq = [];

let color = ["yellow","green","purple","red"];
let h2 = document.querySelector('h2');
let started = false;
let level = 0;



const startgame = ()=>{
    if(started==false){
        started = true;
        setTimeout(levelup(),2000);
    }
}


document.addEventListener("keypress",startgame);
document.addEventListener("touchstart",startgame);

const btnflash = (btn)=>{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

const levelup = ()=>{
    userSeq = [];   
    level++;
    h2.innerText = `Difficulty Level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randCol = color[randomIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    console.log(randBtn);
    gameSeq.push(randCol);
    btnflash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerText = `Your Score : ${level} \n GameOver!!! Press any key to restart`;

        reset();
    }
}
function btnpress(){
    let btn  = this;
    btnflash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
    btn.addEventListener("touchstart", btnpress);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
}
