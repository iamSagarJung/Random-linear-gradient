const body=document.body;
const color=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
const btn=document.querySelector("button");
const gradient=document.querySelector("span");
const grad=document.querySelector("h1")

getdeg=()=>{
    return Math.floor(Math.random()*4)
    
}

getRandomNumber=()=>{
    return Math.floor(Math.random()*color.length)
}

btn.addEventListener("click",()=>{
    let randomColor="#";
    for(i=0;i<=5;i++){
        randomColor+=color[getRandomNumber()]
    }
    let randomColor2="#";
    for(i=0;i<=5;i++){
        randomColor2+=color[getRandomNumber()]
    }
    let randomColor3="#";
    for(i=0;i<=5;i++){
        randomColor3+=color[getRandomNumber()]
    }

    let deg=""
    for(i=0;i<3;i++){
        deg+=getdeg(),"deg";
    }
    console.log(deg)
    gradient.textContent="linear-gradient("+deg+"deg,"+randomColor+","+randomColor2+","+ randomColor3+")";
    body.style.background=gradient.textContent;


})