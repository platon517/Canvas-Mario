import * as gc from "./components/gameConfig";

document.onkeydown = (e) => {
    if(!gc.gameOver && !gc.finished){
        let key = window.event ? e.keyCode : e.which;
        //console.log(key);
        switch (key){
            case 39:
            case 37:
                gc.mario.walk(key === 39 ? 1 : -1);
                break;
            case 16:
                gc.mario.sprint(true);
                break;
            case 32:
                gc.mario.jump();
                break;
            default:
                break;
        }
    }
};
document.onkeyup = (e) => {
    if(!gc.gameOver && !gc.finished){
        let key = window.event ? e.keyCode : e.which;
        switch (key){
            case 39:
            case 37:
                gc.mario.stop();
                break;
            case 16:
                gc.mario.sprint(false);
                break;
            case 32:
                break;
            default:
                break;
        }
    }
};

setInterval(()=>{
    if(!gc.finished && !gc.gameOver) {
        gc.game_text.addTime();
    }
}, 500);

function update(){
    gc.ctx.clearRect(0, 0, gc.w, gc.h);
    gc.ctx.fillStyle = "#6b8cff";
    gc.ctx.fillRect(0, 0, gc.gameWindow.width, gc.gameWindow.height);
    gc.ctx.imageSmoothingEnabled = false;
    gc.win_flag.draw();
    gc.map.tiles.map((item)=>{
        item.draw();
    });
    gc.enemies.map((item)=> {
        item.draw();
    });
    gc.mario.draw();
    gc.game_text.draw();
}
setInterval(update, gc.fps);