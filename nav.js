let prev,curr, height,width;

prev=window.pageYOffset;
height=document.querySelector(".header").offsetHeight;

const header=()=>{
    curr=window.pageYOffset;    
    
    if(curr<prev){
        document.querySelector('.header').style.top=`0px`;
        document.querySelector('.menu').style.top=`+${height}px`;
       
    }else if(curr>prev){
        document.querySelector('.header').style.top=`-${height}px`; 
        document.querySelector('.menu').style.top=`-${height+10}px`; 
    }

    prev=curr;
}


const hide=()=>{
     width=innerWidth;
    if(width<=1200){
        document.querySelector('.nav__list').style.display="none";
        document.querySelector('.nav__i').style.display="flex";
    }else{
        document.querySelector('.nav__list').style.display="flex";
        document.querySelector('.nav__i').style.display="none";
        document.querySelector('.menu').style.display="none";
    }
}
// show mobile menu
const showH=()=>document.querySelector('.menu').style.display="flex";
// hide mobile menu
const hideH=()=>document.querySelector('.menu').style.display="none";




//events
document.addEventListener("scroll",header);
window.addEventListener('load', hideH);
window.addEventListener('resize', hide);
window.addEventListener('load', hide);
document.querySelector('.nav__i').addEventListener("click", showH);
document.querySelector('.close__h').addEventListener("click", hideH);




