let sun = document.querySelector(".sun");
let sunWaves=[];
let wavesNum = 3;
let dir = +1; 
let pos = 0;
let colors = ["#e6c94d", "#ecd679", "#f3e4a6"];

for ( let currentWave = 1 ; currentWave<wavesNum+1; currentWave++ ){
    let wave = {};

    wave.x = Math.floor(Math.random() * 25)* currentWave; 
    wave.y = Math.floor(Math.random() * 25)* currentWave; 
    wave.blur = Math.floor(Math.random() * 20) + 20 * currentWave;
    wave.spread = Math.floor(Math.random() * 10) + 20 * currentWave;
    wave.color = colors[currentWave-1];
    sunWaves.push(wave);
}

function sunlightMove(){
    if( pos === 2){
        dir=-1;
    }else if( pos === 0){
        dir=+1;
    }

    pos+=dir;

    sunWaves.map((wave) => {
        wave.x += dir;
        wave.y += dir;
        wave.blur += dir;
        wave.spread += dir;
    });
    sunlightPrint();
}

function sunlightPrint() {
    let sunUpdate = `${sunWaves[0].x}px ${sunWaves[0].y}px ${sunWaves[0].blur}px ${sunWaves[0].spread}px ${sunWaves[0].color}, ${sunWaves[1].x}px ${sunWaves[1].y}px ${sunWaves[1].blur}px ${sunWaves[1].spread}px ${sunWaves[1].color}, ${sunWaves[2].x}px ${sunWaves[2].y}px ${sunWaves[2].blur}px ${sunWaves[2].spread}px ${sunWaves[2].color}`;
    console.log(sunUpdate)
    sun.style.boxShadow = sunUpdate;
}


setInterval(sunlightMove, 300)
