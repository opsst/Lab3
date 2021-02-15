function play(block){
    tictac[block] = 1;
    rule();
    console.log(block);
    console.log((tictac[0]+tictac[1]+tictac[2]+tictac[3]+tictac[4]+tictac[5]+tictac[6]+tictac[7]+tictac[8])+2);
    console.log((tictac[0]+tictac[1]+tictac[2]+tictac[3]+tictac[4]+tictac[5]+tictac[6]+tictac[7]+tictac[8])+2===15);
    let check=0;
    while ((tictac[0]+tictac[1]+tictac[2]+tictac[3]+tictac[4]+tictac[5]+tictac[6]+tictac[7]+tictac[8])+2!==15)
    {
        check = Math.floor(Math.random() * 8) ;
        if(tictac[check]!=1&&tictac[check]!=2)
        {
            
            if (status!==1){
            tictac[check]=2;
            botplay(check);
        }
            console.log('check'+check);
            rule();
            break;
             
        }
    }
    
}
function rule(){
    if((tictac[0]===1&&tictac[1]===1&&tictac[2]===1)||(tictac[3]===1&&tictac[4]===1&&tictac[5]===1)||(tictac[6]===1&&tictac[7]===1&&tictac[8]===1)||(tictac[0]===1&&tictac[4]===1&&tictac[8]===1)||(tictac[2]===1&&tictac[4]===1&&tictac[6]===1)||(tictac[0]===1&&tictac[3]===1&&tictac[6]===1)||(tictac[1]===1&&tictac[4]===1&&tictac[7]===1)||(tictac[2]===1&&tictac[5]===1&&tictac[8]===1)){
     console.log('player win');
        status=1;
        displaywinner("Player Wins");
    }
    if((tictac[0]===2&&tictac[1]===2&&tictac[2]===2)||(tictac[3]===2&&tictac[4]===2&&tictac[5]===2)||(tictac[6]===2&&tictac[7]===2&&tictac[8]===2)||(tictac[0]===2&&tictac[4]===2&&tictac[8]===2)||(tictac[2]===2&&tictac[4]===2&&tictac[6]===2)||(tictac[0]===2&&tictac[3]===2&&tictac[6]===2)||(tictac[1]===2&&tictac[4]===2&&tictac[7]===2)||(tictac[2]===2&&tictac[5]===2&&tictac[8]===2)){
        console.log('computer win');
        status=2;
        displaywinner("Computer Wins");
       }
    if((tictac[0]!==0&&tictac[1]!==0&&tictac[2]!==0&&tictac[3]!==0&&tictac[4]!==0&&tictac[5]!==0&&tictac[6]!==0&&tictac[7]!==0&&tictac[8]!==0)&&status===0){
        status=3;
        displaywinner("Drawn");
    }    
}
function botplay(displayX){
    if(displayX===0){
        t1.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
    if(displayX===1){
        t2.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
    if(displayX===2){
        t3.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
    if(displayX===3){
        t4.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
    if(displayX===4){
        t5.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
    if(displayX===5){
        t6.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
    if(displayX===6){
        t7.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
    if(displayX===7){
        t8.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
    if(displayX===8){
        t9.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2716.svg"
    }
}

let tictac = [0,0,0,0,0,0,0,0,0];
let status = 0;

let t1 = document.querySelector('#s1')
let t2 = document.querySelector('#s2')
let t3 = document.querySelector('#s3')
let t4 = document.querySelector('#s4')
let t5 = document.querySelector('#s5')
let t6 = document.querySelector('#s6')
let t7 = document.querySelector('#s7')
let t8 = document.querySelector('#s8')
let t9 = document.querySelector('#s9')
let displayed = document.querySelector('#displaying')

t1.onclick = function(){
    if(tictac[0]===0&&status===0){
        t1.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
        play(0);
        rule();
    }
}
t2.onclick = function(){
    if(tictac[1]===0&&status===0){
    t2.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
    play(1);
    rule();
    }
}
t3.onclick = function(){
    if(tictac[2]===0&&status===0){
    t3.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
    play(2);
    rule();
    }
}
t4.onclick = function(){
    if(tictac[3]===0&&status===0){
    t4.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
    play(3);
    rule()
    }
}
t5.onclick = function(){
    if(tictac[4]===0&&status===0){
    t5.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
    play(4);
    rule();
    }
}
t6.onclick = function(){
    if(tictac[5]===0&&status===0){
    t6.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
    play(5);
    rule();
    }
}
t7.onclick = function(){
    if(tictac[6]===0&&status===0){
    t7.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
    play(6);
    rule();
    }
}
t8.onclick = function(){
    if(tictac[7]===0&&status===0){
    t8.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
    play(7);
    rule();
    }
}
t9.onclick = function(){
    if(tictac[8]===0&&status===0){
    t9.src="https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/2b55.svg"
    play(8);
    rule();
    }
}

function displaywinner(text){
    displayed.innerHTML = text;
}