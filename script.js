let btn_start=document.getElementById("btn_start");
let btn_game=document.getElementById("btn_game");
let btn_gameStart=document.getElementById("btn_gameStart");
let view_test=document.getElementById("test");
let btn_cancle=document.getElementById("btn_cancle");
let btn_cancleG=document.getElementById("btn_cancleG");
let fragment=document.getElementById("fragment");
let fragmentGame=document.getElementById("fragmentGame");
let btn_lottery=document.getElementById("btn_lottery");
let loading=document.getElementById("loading");
let reward=document.getElementById("reward");
let arr=["OneA_Rin.png","OneA_Rin_Last.png","OneB.png","OneC.png","OneD.png","OneE.png","OneF.png","OneG.png"]
let word=["恭喜你抽到A賞","恭喜你抽到最後賞","恭喜你抽到B賞","恭喜你抽到C賞","恭喜你抽到D賞","恭喜你抽到E賞","恭喜你抽到F賞","恭喜你抽到G賞"]
let pos=[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
let index=0;
var bx=0;
var by=0;
var comboNum=0;
var comboVal=100;
var scoreNum=0;
var time=20;
var timer;
var comBar;

btn_start.addEventListener("click",function(){
    fragmentGame.style.display="none";
    fragment.style.display="initial";
})
btn_game.addEventListener("click",function(){
    fragment.style.display="none";
    fragmentGame.style.display="initial";
})
btn_cancle.addEventListener("click",function(){
    fragment.style.display="none";
    fragmentGame.style.display="none";
    loading.style.display="none";
    reward.innerHTML="";
})
btn_cancleG.addEventListener("click",function(){
    fragment.style.display="none";
    fragmentGame.style.display="none";
    loading.style.display="none";
    reward.innerHTML="";
})
btn_lottery.addEventListener("click",function(){
    loading.style.display="initial";
    loading.src="";
    reward.innerHTML="少女生火中....";
    loading.src="https://i0.wp.com/drunkenanimeblog.com/wp-content/uploads/2018/02/diligentthankfulhalcyon-size_restricted.gif?fit=500%2C282&ssl=1";
    setTimeout(function(){
        let num=Math.floor(Math.random()*8);
        loading.src=arr[num];
        reward.innerHTML=word[num];
    },5000);
})

function changpos(){
    btn_start.style.bottom=pos[index%pos.length]+"px";
    btn_game.style.bottom=pos[index%pos.length]+"px";
    index+=1;
}
function comboTime(){
    comboVal=Math.max(0,comboVal-1);
    $("#comboBar").val(comboVal);
    if(comboVal==0){
        comboNum=0;
        $("#comboText").text("COMBO "+comboNum);
    }
}
function rdTime(){
    time-=1;
    $("#timeView").text(time);
    if (time==0){
        $("#lastScore").text(scoreNum);
        scoreNum=0;
        time=20;
        comboNum=0;
        $("#score").text(0);
        $("#timeView").text(20);
        $("#ball").hide();
        $("#btn_gameStart").show();
        $("#comboView").hide();
        $("#score").hide();
        $("#timeView").hide();
        $("#lastScore").show();
        clearInterval(timer);
        clearInterval(comBar);
    }
}

setInterval(changpos,18);

$("#btn_gameStart").click(function(){
    $("#ball").show();
    $("#btn_gameStart").hide();
    $("#comboView").show();
    $("#score").show();
    $("#timeView").show();
    $("#lastScore").hide();
    comBar=setInterval(comboTime,18);
    timer=setInterval(rdTime,1000);
})
$("#ball").click(function(){
    comboVal=100;
    bx=(Math.floor(Math.random()*85)+1).toString();
    by=(Math.floor(Math.random()*85)+1).toString();
    console.log("asd");
    $("#ball").css("left",bx+"%");
    $("#ball").css("top",by+"%");
    if(comboVal>0){
        comboNum+=1;
        $("#comboText").text("COMBO "+comboNum);
    }
    scoreNum=scoreNum+10+1*(comboNum-1);
    $("#score").text(scoreNum);
})



