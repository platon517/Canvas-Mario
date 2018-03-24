import * as gc from "./gameConfig";

export function collision(obj1, obj2, alives = false) {
    let collideSide = null;
    if(gc.gameOver && obj1 === gc.mario || obj1.died) return collideSide;
    if( obj1.x + obj1.size / 2 >= obj2.x - (alives ? obj2.size / 2 : 0) &&
        obj1.x - obj1.size / 2 <= obj2.x + obj2.size / (alives ? 2 : 1) &&
        obj1.y <= obj2.y + obj2.size &&
        obj1.y + obj1.size >= obj2.y){
        collideSide = "all";
        if(obj1.y + obj1.size < obj2.y + obj2.size / 2 && !gc.map.getTileCollider(obj2.x, obj2.y - 40)){
            collideSide = "top";
        }
        if(obj1.y > obj2.y + obj2.size / 2 && Math.abs(obj1.x - (obj2.x + obj2.size / 2)) < 30){
            collideSide = "bottom";
        }
    }
    let isCounted = false;
    let num = null;
    obj1.collidedObj.map((item, index)=>{
        if (item.obj === obj2){
            isCounted = true;
            num = index;
        }
    });
    if(!isCounted && collideSide !== null) {
        obj1.collidedObj.push({obj: obj2, type: collideSide});
    }
    if (isCounted && collideSide === null) {
        obj1.collidedObj.splice(num, 1);
    }
    return collideSide;
}