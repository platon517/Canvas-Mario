
export function verticalImpact(obj, impact, gravity){
    let fallSpeed = gravity;
    return function(){
        let isDenied = null;
        let yCoord = 0;
        obj.collidedObj.map((item)=>{
            if( item.type !== "all" &&
                obj.y + obj.size > item.obj.y &&
                obj.y < item.obj.y + item.obj.size){
                if(item.type === "top"){
                    isDenied = "top";
                    yCoord = item.obj.y - obj.size;
                    obj.gravityImpact = verticalImpact(obj, 0, 9);
                }
                else{
                    isDenied = "bottom";
                    yCoord = item.obj.y + item.obj.size;
                }
            }
        });
        if(isDenied === null) {
            let power = ((fallSpeed += (gravity / 30)) - impact)/3.6;
            obj.isJump = power < 0;
            obj.y += power;
        }
        else {
            obj.y = yCoord;
            if(isDenied === "bottom") {
                obj.y += 1;
                obj.gravityImpact = verticalImpact(obj, 0, 9);
            }
        }
    }
}