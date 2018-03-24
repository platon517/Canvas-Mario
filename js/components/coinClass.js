import * as gc from "./gameConfig";
import * as gravity from "./gravity";
import {Sound} from "./gameConfig";

export class Coin{
    constructor(sprite_map, sprites, animation_speed, insideSprite_x, insideSprite_y, x, y){
        this.canvasObject = new Image();
        this.canvasObject.src = sprite_map;
        this.xStart = x;
        this.yStart = y;
        this.x = x;
        this.y = y;
        this.size = 40;
        this.isStanding = true;
        this.isJump = false;
        this.direction = -1;
        this.reverse_y = 1;
        this.inside_x = insideSprite_x;
        this.inside_y = insideSprite_y;
        this.animate(sprites, animation_speed);
        this.gravityImpact = gravity.verticalImpact(this, 0, 9);
        this.render = false;
        this.active = false;
        this.collidedObj = [];
        this.sound = new Sound("coin");

    }
    animate(coordsArray, time){
        function getFrame(){
            let i = 1;
            return function(){
                if(i > coordsArray.length - 1){
                    i = 1;
                }
                i++;
                return i - 1;
            }
        }
        let frame = getFrame();
        setInterval(()=>{
            let now_frame = frame();
            this.inside_x = coordsArray[now_frame][0];
            this.inside_y = coordsArray[now_frame][1];
        }, time);
    }
    preDraw(){
        if(!this.isStanding) {
            this.gravityImpact();
        }
        if(this.active && this.y >= this.yStart){
            this.render = false;
            this.parent.bonus.splice(0, 1);
        }
    }
    activate(parent){
        if(!this.active){
            this.parent = parent;
            this.active = true;
            this.render = true;
            this.sound.play();
            this.isStanding = true;
            this.gravityImpact = gravity.verticalImpact(this, 24, 9);
            this.isStanding = false;
            gc.game_text.addCoin();
            gc.game_text.addScore(200);
        }
    }
    draw(){
        if(this.render){
            this.preDraw();
            this.x = this.xStart - gc.camera.xOffset;
            gc.ctx.save();
            gc.ctx.scale(1, 1);
            gc.ctx.drawImage(
                this.canvasObject,
                this.inside_x,
                this.inside_y,
                16, 16,
                this.x,
                this.y,
                this.size,
                this.size
            );
            gc.ctx.restore();
        }
    }
}