import {Character} from "./characterClass";
import * as gravity from "./gravity";
import * as gc from "./gameConfig";
import {Sound} from "./gameConfig";

export class PlayerChar extends Character{
    constructor(
        walkSpeed,
        idleSprite,
        idleSprite_x, idleSprite_y,
        jumpSprite_x, jumpSprite_y,
        dieSprite,
        walk_animation,
        x, y,
        autoWalk = false
    ){
        super(walkSpeed, idleSprite, idleSprite_x, idleSprite_y, jumpSprite_x, jumpSprite_y, dieSprite, walk_animation, x, y, autoWalk);
        this.direction = 1;
        this.jump_sound = new Sound("mario_jump");
        this.death = new Sound("die");
        this.stomp = new Sound("mario_stomp");
        this.win = new Sound("stage_clear");
    }
    jump(){
        if(this.isStanding){
            if(!gc.gameOver) this.jump_sound.play();
            this.isJump = true;
            this.isStanding = false;
            this.gravityImpact = gravity.verticalImpact(this, 28, 9);
        }
    }
    kill_jump(){
        if(this.isStanding) {
            this.isJump = true;
            this.isStanding = false;
            this.gravityImpact = gravity.verticalImpact(this, 22, 9);
            this.stomp.play();
        }
    }
    isStaningStatus(){
        super.isStaningStatus();
        if(gc.gameOver) this.isStanding = false;
    }
    die(){
        super.die(1000, "top");
        this.jumpSprite_x = this.dieSprite[0];
        this.jumpSprite_y = this.dieSprite[1];
        gc.mario.collidedObj = [];
        gc.gameOver = true;
        this.isStanding = true;
        this.jump();
        gc.bg_music.stop();
        this.death.play();
    }
    flagAnimation(){
        setInterval(()=>{
            if(this.getFlagFrame !== null) this.getFlagFrame = (this.getFlagFrame === 16 ? 0 : 16);
        }, 150);
    }
    preDraw(){
        super.preDraw(true);

        if(this.isWalking && this.isDenied !== this.direction) {
            this.x += this.direction * this.speed;
        }
        if(this.y > gc.deadly_y && !this.died) this.die();
        if(!this.isStanding) {
            this.inside_x = this.jumpSprite_x;
            this.inside_y = this.jumpSprite_y;
        }
        if(this.x + gc.camera.xOffset >= 7920 && !gc.finished) {
            this.stop();
            this.gravityImpact = gravity.verticalImpact(this, 0, 0);
            gc.finished = true;
            gc.bg_music.stop();
            this.win.play();
            this.getFlagFrame = 0;
            this.flagAnimation();
            let endTime = new Date().getTime();
            console.log("time: " + (endTime -  gc.startTime) / 1000);
            setTimeout(()=>{
                this.getFlagFrame = null;
                this.isStanding = true;
                this.jump();
                this.speed = 0.5;
                this.walk(1);
                setTimeout(()=>{
                    setInterval(()=>{
                        let time = parseFloat(gc.game_text.text[7].word);
                        if(time > 0) {
                            gc.game_text.addTime();
                            gc.game_text.addScore(50);
                        }
                    }, 10);
                }, 3000);
            }, 1500);
        }
        if(this.x + gc.camera.xOffset >= 7920 && this.getFlagFrame !== null){
            this.inside_x = 198 + this.getFlagFrame;
            this.inside_y = 34;
        }
        if(this.x + gc.camera.xOffset >= 8180){
            this.render = false;
            gc.win_flag.up();
        }
    }
}