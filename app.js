const board = document.querySelector(".board");
let topper = document.querySelectorAll("h1");
let topperRes = document.querySelector("h2");
let fields =document.querySelectorAll(".field");
let btn =document.getElementById("play-again");
let realBtn= document.querySelector(".btn");
let body = document.querySelector("body");

let top_left =document.getElementById("top-left");
let top_middle =document.getElementById("top-middle");
let top_right =document.getElementById("top-right");

let middle_left =document.getElementById("middle-left");
let middle_middle =document.getElementById("middle-middle");
let middle_right =document.getElementById("middle-right");

let bottom_left =document.getElementById("bottom-left");
let bottom_middle =document.getElementById("bottom-middle");
let bottom_right =document.getElementById("bottom-right");


let curr =" x";
let noW="";
let cnt=0;

function isTie(){
    fields.forEach(function(field){
        if(field.classList.contains("x") || field.classList.contains("circle")){
            cnt++;
            console.log(cnt);
        }
    })
    if(cnt>8)return true;
    else return false;
    
      
}
function isWinner(curr){
    if(curr===" x") noW="x";
    if(curr===" circle") noW="circle";

//Poziome
    if(top_left.classList.contains(noW) && top_middle.classList.contains(noW) && top_right.classList.contains(noW)) return true;

    if(middle_left.classList.contains(noW) && middle_middle.classList.contains(noW) && middle_right.classList.contains(noW)) return true;

    if(bottom_left.classList.contains(noW) && bottom_middle.classList.contains(noW) && bottom_right.classList.contains(noW)) return true;
//Pionowe
    if(top_left.classList.contains(noW) && middle_left.classList.contains(noW) && bottom_left.classList.contains(noW)) return true;

    if(top_middle.classList.contains(noW) && middle_middle.classList.contains(noW) && bottom_middle.classList.contains(noW)) return true;

    if(top_right.classList.contains(noW) && middle_right.classList.contains(noW) && bottom_right.classList.contains(noW)) return true;
//Przekatne
    if(top_left.classList.contains(noW) && middle_middle.classList.contains(noW) && bottom_right.classList.contains(noW)) return true;

    if(top_right.classList.contains(noW) && middle_middle.classList.contains(noW) && bottom_left.classList.contains(noW)) return true;

    return false;
    
}

function switchCurr(){
    console.log("Switching!");
    if(curr==" x"){
        return " circle";
    }else if(curr==" circle") {
        return " x";
    };
};
function changeTopper(a){
    topper[0].textContent=`${a}'s turn!`;
}

board.addEventListener('mousedown', function (e) {
    if(e.target.classList=="field"){
        e.target.classList+=curr;
        cnt=0;
        if(!isTie() && !isWinner(curr)){
            curr=switchCurr();  
            changeTopper(curr);
        }else if(isWinner(curr)){
            topperRes.textContent=`${curr} is a winner!!`;
            btn.style.display="flex";
            board.style.display="none";
            topper.textContent="";
            body.style.overflow="hidden";
        }else if(isTie()){
            topperRes.textContent="TIED!";
            btn.style.display="flex";
            board.style.display="none";
            topper.textContent="";
        }
        
    }
});
realBtn.addEventListener('click', function(){
    btn.style.display="none";
    location.reload();
})