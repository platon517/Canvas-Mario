import * as collision from "./collision";
import * as gc from "./gameConfig";
import {Sound} from "./gameConfig";

export class Tile {
    constructor(idleSprite, collider, animation_array, x, y, inside_x, inside_y, bonus, punchable){
        this.canvasObject = new Image();
        this.canvasObject.src = idleSprite;
        this.x = x;
        this.y = y;
        this.xStart = x;
        this.yStart = y;
        this.size = 40;
        this.inside_x = inside_x;
        this.inside_y = inside_y;
        this.collider = collider;
        this.animation_array = animation_array;
        if(animation_array.length > 0) this.animate(this.animation_array, 200);
        this.punchable = punchable;
        this.isPunched = false;
        this.bonus = bonus;
        this.bonus_used = false;
        if(punchable) this.bump_sound = new Sound("bump");
    }
    animate(coordsArray, time){
        function getFrame(){
            let i = 0;
            return function(){
                if(i > coordsArray.length - 1){
                    i = 0;
                }
                i++;
                return i - 1;
            }
        }
        let frame = getFrame();
        setInterval(()=>{
            if(this.bonus_used) return false;
            this.inside_x = coordsArray[frame()][0];
            this.inside_y = coordsArray[frame()][1];
        }, time);
    }
    punched(){
        if(this.isPunched){
            this.y -= 1;
        } else if(this.y < this.yStart) {
            this.y += 1;
        }
    }
    draw(){
        if(this.down !== undefined && gc.finished && this.y < 440) this.down();
        if(this.bonus.length > 0) this.bonus[0].draw();
        if(this.collider && collision.collision(gc.mario, this) === "bottom"){
            if(gc.mario.isJump){
                this.bump_sound.play();
                this.isPunched = true;
                if(this.bonus.length > 0) {
                    this.bonus[0].activate(this);
                    if(this.bonus.length <= 1){
                        this.bonus_used = true;
                        if(this.animation_array.length !== 0){
                            this.inside_x = this.animation_array[this.animation_array.length - 1][0] + 16;
                            this.inside_y = this.animation_array[this.animation_array.length - 1][1];
                        }
                    }
                }
                setTimeout(() => {
                    this.isPunched = false;
                }, 100);
            }
        }

        if(this.collider){
            gc.enemies.map((item)=>{
                if (collision.collision(item, this) === "all") item.direction = item.direction === -1 ? 1 : -1;
            });
        }

        if(this.punchable) this.punched();
        this.x = this.xStart - gc.camera.xOffset;
        //this.y = this.yStart - gc.camera.yOffset;
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
    }
}