import {Character} from "./characterClass";
import * as gc from "./gameConfig";
import * as collision from "./collision";

export class Enemy extends Character{
    die(time, type){
        super.die(time, type);
        if(this !== gc.mario){
            gc.mario.isStanding = true;
            gc.mario.kill_jump();
            gc.mario.collidedObj.map((item, index)=>{
                if(item.obj === this) gc.mario.collidedObj.splice(index, 1);
            });
            gc.game_text.addScore(100);
        }
        this.autoWalk = false;
    }
    preDraw(isCamFollow = false) {
        super.preDraw();
        if(this.isWalking && this.isDenied !== this.direction && !(this.x - gc.mario.x > gc.gameWindow.width - gc.mario.x + gc.mario.size / 2 && !gc.gameOver)) {
            this.x += this.direction * this.speed;
        }
        if (gc.mario.isWalking && gc.mario.direction === 1 && gc.mario.isDenied === null && gc.mario.x >= gc.gameWindow.width / 2) this.x -= gc.mario.speed;
        if(!this.died){
            let collideType = collision.collision(gc.mario, this, true);
            if(collideType === "top" && !gc.gameOver){
                this.die(300, "top");
            } else if (collideType !== null){
                gc.mario.die();
            }
        }
    }
}