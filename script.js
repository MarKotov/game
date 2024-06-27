let freeElement = 16
let back = 0 
c = -1
let z 
let nums = 0
let tiles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let sec = 0
let inter = 0
let vinnergame = 0
function shafle(){
        c++
        return(tiles[c])
}
function shafle2(tiles2){
    tiles2.sort(()=>Math.random()-0.5)
}

function drow(){
    shafle2(tiles)
    for(let y = 0; y < 4; y++){
        for(let x = 0; x < 4; x++){
            createCellNull(y,x)
        }
    }
    for(let y = 0; y < 4; y++){
        for(let x = 0; x < 4; x++){
            createNumers(y,x)}
        }

}
function createCellNull(x,y){
    let square = document.createElement("div");
    square.classList.add("field_cell");
    square.classList.add("field_cell_null");
    setCellOffset(square,y,x)
    document.querySelector(".field").appendChild(square)


}
function setCellOffset(cell, x,y){
    cell.style.left = `${4 +(4+10)*y}vmin`
    cell.style.top = `${4 +(4+10)*x}vmin`
}

function createNumers(y,x){
    let b = y * 4 + x + 1
    if (b != freeCell(3,3)){
        let gameblock = document.createElement("div");
        gameblock.classList.add("field_cell");
        gameblock.classList.add("field_cell--tile");
        nums = shafle()
        gameblock.id = `a${nums-1}`
        gameblock.innerHTML=nums;
        setCellOffset(gameblock,y,x)
        document.querySelector(".field").appendChild(gameblock)
    }

}
function freeCell(i,j){
    freeElement = [i,j];
    let c = freeElement[0] * 4 + freeElement[1] + 1;
    return (c)
}

document.onclick = (event) =>{
    if(event.target.classList.contains("field_cell--tile")){
        let a = event.target.style.left;
        let b = event.target.style.top;
        let freeCord = freeElement;
        let trua = a.slice(0,-4)*1
        let trub = b.slice(0,-4)*1
        let posiblea = Math.floor((trua*1+2)/4/4)
        let posibleb = Math.floor((trub*1+2)/4/4)
        if((posibleb == freeCord[0] || posiblea == freeCord[1]) && (Math.abs(posibleb - freeCord[0]) == 1 || Math.abs(posiblea - freeCord[1])==1)){
             setCellOffset(event.target,freeCord[0], freeCord[1]);
            freeElement[0] = Math.floor((trub*1+2)/4/4);
            freeElement[1] = Math.floor((trua*1+2)/4/4);

    
        
    }
    checkwin()
}
    }
function checkwin(){
    if(document.querySelector("#a0").style.left == `${4}vmin` &&
        document.querySelector("#a0").style.top == `${4}vmin` &&
        document.querySelector("#a1").style.left == `${18}vmin`&&
        document.querySelector("#a1").style.top == `${4}vmin`&&
        document.querySelector("#a14").style.left == `${32}vmin`&&
        document.querySelector("#a14").style.top == `${46}vmin`&&
        document.querySelector("#a13").style.left == `${18}vmin`&&
        document.querySelector("#a13").style.top == `${46}vmin`&&
        document.querySelector("#a9").style.left == `${18}vmin`&&
        document.querySelector("#a9").style.top == `${32}vmin`)
        {
        finish()
        return 1;
    }

}
function restart(z, vinnergame){
    window.location.reload(z)
    
}
function finish(){
    document.querySelector("#modal").classList.add("modal--visiable")
    document.querySelector("#modal").innerHTML = `Вы победили за ${sec} сек`
    clearInterval(inter);
    return true
}
function init(){

        inter = setInterval(function tick() {
            sec++;
        document.querySelector(".time2").innerHTML = `${sec} сек`
        }, 1000);
    
}


drow()
init()















