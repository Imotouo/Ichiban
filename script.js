let btn_start=document.getElementById("btn_start");
let view_test=document.getElementById("test");
let btn_cancle=document.getElementById("btn_cancle");
let fragment=document.getElementById("fragment");
let btn_lottery=document.getElementById("btn_lottery");
let loading=document.getElementById("loading");
let reward=document.getElementById("reward");
let arr=["OneA_Rin.png","OneA_Rin_Last.png","OneB.png","OneC.png","OneD.png","OneE.png","OneF.png","OneG.png"]
let word=["恭喜你抽到A賞","恭喜你抽到最後賞","恭喜你抽到B賞","恭喜你抽到C賞","恭喜你抽到D賞","恭喜你抽到E賞","恭喜你抽到F賞","恭喜你抽到G賞"]
let pos=[0,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
let dot=[".","..","...","...."]
let index=0;

btn_start.addEventListener("click",function(){
    fragment.style.display="initial";
})
btn_cancle.addEventListener("click",function(){
    fragment.style.display="none";
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
    index+=1;
}

setInterval(changpos,25);