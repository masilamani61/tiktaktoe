let turn ="X"
const changeturn=()=>{
    return turn==="X"?"0":"X"
}
const checkwin=()=>{
    let boxtest=document.querySelectorAll(".boxtext");
    
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    
    for (i=0;i<9;i++){
        var e=win[i];
        
        if (boxtest[e[0]].textContent===boxtest[e[1]].textContent){
            if (boxtest[e[1]].textContent===boxtest[e[2]].textContent){
                
                if (boxtest[e[0]].textContent!==""){
                    var a2=new Audio("gameover.mp3")
                    a2.play()
                    document.querySelector('img').src="winner.gif";
                    return "winner is "+boxtest[e[0]].textContent
                }


            }
        }
    }
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    
    let boxtest=element.querySelector(".boxtext");
    

    element.addEventListener('click',()=>{
    if (boxtest.textContent===''){
        boxtest.textContent=turn;
        turn=changeturn();
        var a=new Audio("decidemp3-14575.mp3")
        a.play()
        document.querySelector('h3').textContent="turn for "+turn
        wins=checkwin();
        
        document.querySelector('h3').textContent=wins

        
    }
}
    )
})