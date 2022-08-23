const counter=document.getElementById("counter");
const increase=document.getElementById("increase");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");

let count=0;

increase.addEventListener("click",() =>{
    count++
    counter.innerHTML=count;
})

decrease.addEventListener("click",() =>{
    if(count>0){
        count--
        counter.innerHTML=count;
    }

})

reset.addEventListener("click",() =>{
    count=0
    counter.innerHTML=count;
})