import {ViewPort} from "./viewPort";
import {TilesMap} from "./tilesMap";
import {PlayerChar} from "./playerCharacterClass";
import {Enemy} from "./enemyClass";
import {Tile} from "./tileClass";
import {Font} from "./fontClass";

export class Sound{
    constructor(val, loop = false){
        this.elem = document.createElement('audio');
        let src;
        switch (val){
            case "bg":
                src = "sounds/Theme.mp3";
                break;
            case "die":
                src = "sounds/mariodie.wav";
                break;
            case "mario_jump":
                src = "sounds/jump.wav";
                break;
            case "mario_stomp":
                src = "sounds/stomp.wav";
                break;
            case "bump":
                src = "sounds/bump.wav";
                break;
            case "coin":
                src = "sounds/coin.wav";
                break;
            case "stage_clear":
                src = "sounds/stage_clear.wav";
                break;
        }
        this.elem.volume = 0.1;
        this.elem.src = src;
        this.elem.loop = loop;
        this.elem.style.display = "none";
        document.body.appendChild(this.elem);
    }
    play(){
        this.elem.play();
    }
    stop(){
        this.elem.pause();
    }
}

export let gameWindow = document.getElementById("game_window");
export let ctx = gameWindow.getContext('2d');
export let w = 800;
export let h = 600;
gameWindow.width = w;
gameWindow.height = h;

export let startTime = new Date().getTime();

export let bg_music = new Sound("bg", true);
bg_music.play();

export let game_text = new Font();

export let mapSize = 224;

export let fps = 1000/300;

export let gameOver = false;

export let finished = false;

export let camera = new ViewPort();

export let map = new TilesMap();

export let deadly_y = gameWindow.height + 40;

export let mario = new PlayerChar(1, "img/mario/MarioSheet.png", 80, 34, 165, 34, [182, 34], [50, [97, 34], [114, 34], [131, 34]], 120, 480);

export let enemies = [];
//enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 660, 320, false));

enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 900, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 1620, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 2060, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 2120, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 3220, 160, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 3300, 160, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 3900, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 3960, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 4580, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 4640, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 4960, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 5020, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 5120, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 5180, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 6980, 480, true));
enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 7040, 480, true));

export let win_flag = new Tile("img/blocks/BlocksSheet.png", false, [], 8160, 340, 128, 0, [], false);
win_flag.up = function () {
    setInterval(()=>{
        if(this.y > 280) this.y -= 1;
    }, 25);
};