export class ViewPort{
    constructor(){
        this.xOffset = 0;
        this.yOffset = 0;
    }
    move(x, y){
        this.xOffset -= x;
        this.yOffset -= y;
    }
}