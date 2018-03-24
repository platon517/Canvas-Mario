import * as gravity from "./gravity";
import * as gc from "./gameConfig";

export class Character {
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
        this.canvasObject = new Image();
        this.canvasObject.src = idleSprite;
        this.idle();
        this.x = x;
        this.y = y;
        this.size = 40;
        this.const_speed = walkSpeed;
        this.speed = this.const_speed;
        this.isWalking = false;
        this.isStanding = true;
        this.isJump = false;
        this.jumpSprite_x = jumpSprite_x;
        this.jumpSprite_y = jumpSprite_y;
        this.direction = -1;
        this.reverse_y = 1;
        this.walk_animation = walk_animation;
        this.inside_x_idle = idleSprite_x;
        this.inside_y_idle = idleSprite_y;
        this.inside_x = idleSprite_x;
        this.inside_y = idleSprite_y;
        this.animate(this.walk_animation);
        this.collidedObj = [];
        this.gravityImpact = gravity.verticalImpact(this, 0, 9);
        this.autoWalk = autoWalk;
        this.dieSprite = dieSprite;
        this.died = false;
        this.render = true;
    }
    idle(){
        this.inside_x = this.inside_x_idle;
        this.inside_y = this.inside_y_idle;
    }
    walk(direction){
        if(!this.isWalking){
            this.isWalking = true;
            this.direction = direction;
        }
    }
    animate(coordsArray){
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
            if(this.isWalking){
                let now_frame = frame();
                this.inside_x = coordsArray[now_frame][0];
                this.inside_y = coordsArray[now_frame][1];
            }
        }, coordsArray[0]);
    }
    sprint(val){
        this.speed = val ? this.const_speed * 2 : this.const_speed;
    }
    stop(){
        this.isWalking = false;
        this.idle();
    }
    die(time, type){
        this.died = true;
        this.stop();
        if(type === "top"){
            this.inside_x_idle = this.dieSprite[0];
            this.inside_y_idle = this.dieSprite[1];
        } else {
            this.reverse_y = -1;
            this.collidedObj = [];
            this.isStanding = true;
            this.gravityImpact = gravity.verticalImpact(this, 24, 9);
            this.speed *= 2;
            this.walk(1);
        }
        setTimeout(()=>{
            this.render = false;
        }, time)
    }
    isStaningStatus(){
        this.isStanding = !(this.collidedObj.length === 0);
        let stands = false;
        this.collidedObj.map((item)=>{
            if(item.type === "top"){
                this.isJump = true;
                stands = true;
                if(item.obj.isPunched) this.die(1000, "bottom");
            }
        });
        this.isStanding = stands;
    }
    preDraw(isCamFollow = false){
        if(this.autoWalk){
            this.walk(this.direction);
        }
        if(this.isWalking){
            this.isDenied = null;
            this.collidedObj.map((item)=>{
                if(item.type === "all"){
                    this.isDenied = (this.x < item.obj.x + item.obj.size / 2) ? 1 : -1;
                }
            });

            if(this.isDenied !== this.direction) {
                if( isCamFollow &&
                    this.direction === 1 &&
                    this.x >= gc.gameWindow.width / 2 &&
                    this.x + this.size / 2 + gc.camera.xOffset < gc.mapSize * 40 - gc.gameWindow.width / 2
                ){
                    gc.camera.move(-this.speed * this.direction, 0);
                    if(this.x >= gc.gameWindow.width / 2) this.x = gc.gameWindow.width / 2;
                }
            }

            if(isCamFollow && this.x + this.direction * this.speed - this.size / 2 < 0){
                this.x = this.size / 2;
            }

        }

        if(!this.isStanding) {
            this.gravityImpact();
        }

        this.isStaningStatus();

        if(!this.isWalking && this.collidedObj.length !== 0){
            this.idle();
        }

    }
    draw(){
        if(this.render){
            this.preDraw();
            gc.ctx.save();
            gc.ctx.scale(this.direction, this.reverse_y);
            gc.ctx.drawImage(
                this.canvasObject,
                this.inside_x,
                this.inside_y,
                16, 16,
                this.direction * this.x - (this.size / 2),
                this.reverse_y * this.y - (this.reverse_y === -1 ? this.size : 0),
                this.size,
                this.size
            );
            gc.ctx.restore();
        }
    }
}