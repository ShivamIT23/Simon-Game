let col = ["red","green","blue","purple"];
let h3 = document.querySelector('h3');
let statement = false;
window.addEventListener("click",function(){
    if(statement == false){
    h3.innerHTML = "Game Started";
    statement = true;
    }
})

function blink(color){
    let div = document.querySelector(`.${color}`)
    
    setTimeout(()=>{

    })
}
