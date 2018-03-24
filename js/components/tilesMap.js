import {Tile} from "./tileClass";
import {Coin} from "./coinClass";

export class TilesMap {
    constructor(){
        this.tiles = [];
        this.tilesCoords = [];
        getTilesMap(this);
    }
    getTileCollider(x, y) {
        let isBottomElement = false;
        this.tiles.map((item)=>{
            if(item.x === x && item.y === y && item.collider){
                isBottomElement = true;
            }
        });
        return isBottomElement;
    }
}

function getTilesMap(map){
    for(let i = 0; i < 69; i++){
        map.tilesCoords.push([i * 40, 520, "ground_brick"]);
        map.tilesCoords.push([i * 40, 560, "ground_brick"]);
    }
    for(let i = 71; i < 86; i++){
        map.tilesCoords.push([i * 40, 520, "ground_brick"]);
        map.tilesCoords.push([i * 40, 560, "ground_brick"]);
    }
    for(let i = 89; i < 153; i++){
        map.tilesCoords.push([i * 40, 520, "ground_brick"]);
        map.tilesCoords.push([i * 40, 560, "ground_brick"]);
    }
    for(let i = 155; i < 224; i++){
        map.tilesCoords.push([i * 40, 520, "ground_brick"]);
        map.tilesCoords.push([i * 40, 560, "ground_brick"]);
    }
    for(let i = 0; i < 5; i++){
        const multipler = 1920 * i;
        map.tilesCoords.push([multipler + 320, 117, "cloud-left"]);
        map.tilesCoords.push([multipler + 360, 117, "cloud-middle"]);
        map.tilesCoords.push([multipler + 360, 97, "cloud-middle-top"]);
        map.tilesCoords.push([multipler + 400, 117, "cloud-right"]);

        map.tilesCoords.push([multipler + 760, 80, "cloud-left"]);
        map.tilesCoords.push([multipler + 800, 80, "cloud-middle"]);
        map.tilesCoords.push([multipler + 800, 60, "cloud-middle-top"]);
        map.tilesCoords.push([multipler + 840, 80, "cloud-right"]);

        map.tilesCoords.push([multipler + 1080, 120, "cloud-left"]);
        map.tilesCoords.push([multipler + 1120, 120, "cloud-middle"]);
        map.tilesCoords.push([multipler + 1120, 100, "cloud-middle-top"]);
        map.tilesCoords.push([multipler + 1160, 120, "cloud-middle"]);
        map.tilesCoords.push([multipler + 1160, 100, "cloud-middle-top"]);
        map.tilesCoords.push([multipler + 1200, 120, "cloud-middle"]);
        map.tilesCoords.push([multipler + 1200, 100, "cloud-middle-top"]);
        map.tilesCoords.push([multipler + 1240, 120, "cloud-right"]);

        map.tilesCoords.push([multipler + 1440, 80, "cloud-left"]);
        map.tilesCoords.push([multipler + 1480, 80, "cloud-middle"]);
        map.tilesCoords.push([multipler + 1480, 60, "cloud-middle-top"]);
        map.tilesCoords.push([multipler + 1520, 80, "cloud-middle"]);
        map.tilesCoords.push([multipler + 1520, 60, "cloud-middle-top"]);
        map.tilesCoords.push([multipler + 1560, 80, "cloud-right"]);
    }

    map.tilesCoords.push([640, 360, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 640, 320)]]);
    map.tilesCoords.push([800, 360, "action_brick"]);
    map.tilesCoords.push([840, 360, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 840, 320)]]);
    map.tilesCoords.push([880, 360, "action_brick"]);
    map.tilesCoords.push([920, 360, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 920, 320)]]);
    map.tilesCoords.push([960, 360, "action_brick"]);
    map.tilesCoords.push([880, 200, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 880, 160)]]);

    for(let i = 0; i < 5; i++) {
        const multipler = 1920 * i;

        map.tilesCoords.push([multipler + 0, 480, "hill-left-slide"]);
        map.tilesCoords.push([multipler + 40, 480, "hill-left-inner"]);
        map.tilesCoords.push([multipler + 80, 480, "hill-middle-inner"]);
        map.tilesCoords.push([multipler + 120, 480, "hill-right-inner"]);
        map.tilesCoords.push([multipler + 160, 480, "hill-right-slide"]);
        map.tilesCoords.push([multipler + 40, 440, "hill-left-slide"]);
        map.tilesCoords.push([multipler + 80, 440, "hill-left-inner"]);
        map.tilesCoords.push([multipler + 120, 440, "hill-right-slide"]);
        map.tilesCoords.push([multipler + 80, 400, "hill-top"]);

        map.tilesCoords.push([multipler + 640, 480, "hill-left-slide"]);
        map.tilesCoords.push([multipler + 680, 480, "hill-left-inner"]);
        map.tilesCoords.push([multipler + 720, 480, "hill-right-slide"]);
        map.tilesCoords.push([multipler + 680, 440, "hill-top"]);
    }

    for(let i = 0; i < 5; i++) {
        const multipler = 1920 * i;

        map.tilesCoords.push([multipler + 440, 480, "bush-left"]);
        map.tilesCoords.push([multipler + 480, 480, "bush-middle"]);
        map.tilesCoords.push([multipler + 520, 480, "bush-middle"]);
        map.tilesCoords.push([multipler + 560, 480, "bush-middle"]);
        map.tilesCoords.push([multipler + 600, 480, "bush-right"]);

        map.tilesCoords.push([multipler + 920, 480, "bush-left"]);
        map.tilesCoords.push([multipler + 960, 480, "bush-middle"]);
        map.tilesCoords.push([multipler + 1000, 480, "bush-right"]);

        map.tilesCoords.push([multipler + 1640, 480, "bush-left"]);
        map.tilesCoords.push([multipler + 1680, 480, "bush-middle"]);
        map.tilesCoords.push([multipler + 1720, 480, "bush-middle"]);
        map.tilesCoords.push([multipler + 1760, 480, "bush-right"]);
    }

    map.tilesCoords.push([1120, 480, "pipe-base-left"]);
    map.tilesCoords.push([1160, 480, "pipe-base-right"]);
    map.tilesCoords.push([1120, 440, "pipe-top-left"]);
    map.tilesCoords.push([1160, 440, "pipe-top-right"]);

    map.tilesCoords.push([1520, 480, "pipe-base-left"]);
    map.tilesCoords.push([1560, 480, "pipe-base-right"]);
    map.tilesCoords.push([1520, 440, "pipe-base-left"]);
    map.tilesCoords.push([1560, 440, "pipe-base-right"]);
    map.tilesCoords.push([1520, 400, "pipe-top-left"]);
    map.tilesCoords.push([1560, 400, "pipe-top-right"]);

    map.tilesCoords.push([1840, 480, "pipe-base-left"]);
    map.tilesCoords.push([1880, 480, "pipe-base-right"]);
    map.tilesCoords.push([1840, 440, "pipe-base-left"]);
    map.tilesCoords.push([1880, 440, "pipe-base-right"]);
    map.tilesCoords.push([1840, 400, "pipe-base-left"]);
    map.tilesCoords.push([1880, 400, "pipe-base-right"]);
    map.tilesCoords.push([1840, 360, "pipe-top-left"]);
    map.tilesCoords.push([1880, 360, "pipe-top-right"]);

    map.tilesCoords.push([2280, 480, "pipe-base-left"]);
    map.tilesCoords.push([2320, 480, "pipe-base-right"]);
    map.tilesCoords.push([2280, 440, "pipe-base-left"]);
    map.tilesCoords.push([2320, 440, "pipe-base-right"]);
    map.tilesCoords.push([2280, 400, "pipe-base-left"]);
    map.tilesCoords.push([2320, 400, "pipe-base-right"]);
    map.tilesCoords.push([2280, 360, "pipe-top-left"]);
    map.tilesCoords.push([2320, 360, "pipe-top-right"]);

    map.tilesCoords.push([3080, 360, "action_brick"]);
    map.tilesCoords.push([3120, 360, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3120, 320)]]);
    map.tilesCoords.push([3160, 360, "action_brick"]);

    map.tilesCoords.push([3200, 200, "action_brick"]);
    map.tilesCoords.push([3240, 200, "action_brick"]);
    map.tilesCoords.push([3280, 200, "action_brick"]);
    map.tilesCoords.push([3320, 200, "action_brick"]);
    map.tilesCoords.push([3360, 200, "action_brick"]);
    map.tilesCoords.push([3400, 200, "action_brick"]);
    map.tilesCoords.push([3440, 200, "action_brick"]);
    map.tilesCoords.push([3480, 200, "action_brick"]);

    map.tilesCoords.push([3640, 200, "action_brick"]);
    map.tilesCoords.push([3680, 200, "action_brick"]);
    map.tilesCoords.push([3720, 200, "action_brick"]);
    map.tilesCoords.push([3760, 200, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 160)]]);

    map.tilesCoords.push([3760, 360, "action_brick", [
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320),
        new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320)
    ]]);

    map.tilesCoords.push([4000, 360, "action_brick"]);
    map.tilesCoords.push([4040, 360, "action_brick"]);

    map.tilesCoords.push([4240, 360, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 4240, 320)]]);

    map.tilesCoords.push([4360, 360, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 4360, 320)]]);

    map.tilesCoords.push([4480, 360, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 4480, 320)]]);

    map.tilesCoords.push([4360, 200, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 4360, 160)]]);

    map.tilesCoords.push([4720, 360, "action_brick"]);

    map.tilesCoords.push([4840, 200, "action_brick"]);
    map.tilesCoords.push([4880, 200, "action_brick"]);
    map.tilesCoords.push([4920, 200, "action_brick"]);

    map.tilesCoords.push([5120, 200, "action_brick"]);
    map.tilesCoords.push([5160, 200, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 5160, 160)]]);
    map.tilesCoords.push([5200, 200, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 5200, 160)]]);
    map.tilesCoords.push([5240, 200, "action_brick"]);

    map.tilesCoords.push([5160, 360, "action_brick"]);
    map.tilesCoords.push([5200, 360, "action_brick"]);

    map.tilesCoords.push([5360, 480, "empty_brick"]);
    map.tilesCoords.push([5400, 480, "empty_brick"]);
    map.tilesCoords.push([5440, 480, "empty_brick"]);
    map.tilesCoords.push([5480, 480, "empty_brick"]);
    map.tilesCoords.push([5400, 440, "empty_brick"]);
    map.tilesCoords.push([5440, 440, "empty_brick"]);
    map.tilesCoords.push([5480, 440, "empty_brick"]);
    map.tilesCoords.push([5440, 400, "empty_brick"]);
    map.tilesCoords.push([5480, 400, "empty_brick"]);
    map.tilesCoords.push([5480, 360, "empty_brick"]);

    map.tilesCoords.push([5600, 480, "empty_brick"]);
    map.tilesCoords.push([5640, 480, "empty_brick"]);
    map.tilesCoords.push([5680, 480, "empty_brick"]);
    map.tilesCoords.push([5720, 480, "empty_brick"]);
    map.tilesCoords.push([5600, 440, "empty_brick"]);
    map.tilesCoords.push([5640, 440, "empty_brick"]);
    map.tilesCoords.push([5680, 440, "empty_brick"]);
    map.tilesCoords.push([5600, 400, "empty_brick"]);
    map.tilesCoords.push([5640, 400, "empty_brick"]);
    map.tilesCoords.push([5600, 360, "empty_brick"]);

    map.tilesCoords.push([5920, 480, "empty_brick"]);
    map.tilesCoords.push([5960, 480, "empty_brick"]);
    map.tilesCoords.push([6000, 480, "empty_brick"]);
    map.tilesCoords.push([6040, 480, "empty_brick"]);
    map.tilesCoords.push([5960, 440, "empty_brick"]);
    map.tilesCoords.push([6000, 440, "empty_brick"]);
    map.tilesCoords.push([6040, 440, "empty_brick"]);
    map.tilesCoords.push([6000, 400, "empty_brick"]);
    map.tilesCoords.push([6040, 400, "empty_brick"]);
    map.tilesCoords.push([6040, 360, "empty_brick"]);
    map.tilesCoords.push([6080, 360, "empty_brick"]);
    map.tilesCoords.push([6080, 400, "empty_brick"]);
    map.tilesCoords.push([6080, 440, "empty_brick"]);
    map.tilesCoords.push([6080, 480, "empty_brick"]);

    map.tilesCoords.push([6200, 480, "empty_brick"]);
    map.tilesCoords.push([6200, 440, "empty_brick"]);
    map.tilesCoords.push([6200, 400, "empty_brick"]);
    map.tilesCoords.push([6200, 360, "empty_brick"]);
    map.tilesCoords.push([6240, 480, "empty_brick"]);
    map.tilesCoords.push([6240, 440, "empty_brick"]);
    map.tilesCoords.push([6240, 400, "empty_brick"]);
    map.tilesCoords.push([6280, 480, "empty_brick"]);
    map.tilesCoords.push([6280, 440, "empty_brick"]);
    map.tilesCoords.push([6320, 480, "empty_brick"]);

    map.tilesCoords.push([6520, 480, "pipe-base-left"]);
    map.tilesCoords.push([6560, 480, "pipe-base-right"]);
    map.tilesCoords.push([6520, 440, "pipe-top-left"]);
    map.tilesCoords.push([6560, 440, "pipe-top-right"]);

    map.tilesCoords.push([6720, 360, "action_brick"]);
    map.tilesCoords.push([6760, 360, "action_brick"]);
    map.tilesCoords.push([6800, 360, "bonus_brick", [new Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 6800, 320)]]);
    map.tilesCoords.push([6840, 360, "action_brick"]);

    map.tilesCoords.push([7160, 480, "pipe-base-left"]);
    map.tilesCoords.push([7200, 480, "pipe-base-right"]);
    map.tilesCoords.push([7160, 440, "pipe-top-left"]);
    map.tilesCoords.push([7200, 440, "pipe-top-right"]);

    map.tilesCoords.push([7240, 480, "empty_brick"]);
    map.tilesCoords.push([7280, 480, "empty_brick"]);
    map.tilesCoords.push([7320, 480, "empty_brick"]);
    map.tilesCoords.push([7360, 480, "empty_brick"]);
    map.tilesCoords.push([7400, 480, "empty_brick"]);
    map.tilesCoords.push([7440, 480, "empty_brick"]);
    map.tilesCoords.push([7480, 480, "empty_brick"]);
    map.tilesCoords.push([7520, 480, "empty_brick"]);
    map.tilesCoords.push([7560, 480, "empty_brick"]);

    map.tilesCoords.push([7280, 440, "empty_brick"]);
    map.tilesCoords.push([7320, 440, "empty_brick"]);
    map.tilesCoords.push([7360, 440, "empty_brick"]);
    map.tilesCoords.push([7400, 440, "empty_brick"]);
    map.tilesCoords.push([7440, 440, "empty_brick"]);
    map.tilesCoords.push([7480, 440, "empty_brick"]);
    map.tilesCoords.push([7520, 440, "empty_brick"]);
    map.tilesCoords.push([7560, 440, "empty_brick"]);

    map.tilesCoords.push([7320, 400, "empty_brick"]);
    map.tilesCoords.push([7360, 400, "empty_brick"]);
    map.tilesCoords.push([7400, 400, "empty_brick"]);
    map.tilesCoords.push([7440, 400, "empty_brick"]);
    map.tilesCoords.push([7480, 400, "empty_brick"]);
    map.tilesCoords.push([7520, 400, "empty_brick"]);
    map.tilesCoords.push([7560, 400, "empty_brick"]);

    map.tilesCoords.push([7360, 360, "empty_brick"]);
    map.tilesCoords.push([7400, 360, "empty_brick"]);
    map.tilesCoords.push([7440, 360, "empty_brick"]);
    map.tilesCoords.push([7480, 360, "empty_brick"]);
    map.tilesCoords.push([7520, 360, "empty_brick"]);
    map.tilesCoords.push([7560, 360, "empty_brick"]);

    map.tilesCoords.push([7400, 320, "empty_brick"]);
    map.tilesCoords.push([7440, 320, "empty_brick"]);
    map.tilesCoords.push([7480, 320, "empty_brick"]);
    map.tilesCoords.push([7520, 320, "empty_brick"]);
    map.tilesCoords.push([7560, 320, "empty_brick"]);

    map.tilesCoords.push([7440, 280, "empty_brick"]);
    map.tilesCoords.push([7480, 280, "empty_brick"]);
    map.tilesCoords.push([7520, 280, "empty_brick"]);
    map.tilesCoords.push([7560, 280, "empty_brick"]);

    map.tilesCoords.push([7480, 240, "empty_brick"]);
    map.tilesCoords.push([7520, 240, "empty_brick"]);
    map.tilesCoords.push([7560, 240, "empty_brick"]);

    map.tilesCoords.push([7520, 200, "empty_brick"]);
    map.tilesCoords.push([7560, 200, "empty_brick"]);

    map.tilesCoords.push([7920, 480, "empty_brick"]);

    map.tilesCoords.push([7920, 440, "flag_base"]);
    map.tilesCoords.push([7920, 400, "flag_base"]);
    map.tilesCoords.push([7920, 360, "flag_base"]);
    map.tilesCoords.push([7920, 320, "flag_base"]);
    map.tilesCoords.push([7920, 280, "flag_base"]);
    map.tilesCoords.push([7920, 240, "flag_base"]);
    map.tilesCoords.push([7920, 200, "flag_base"]);
    map.tilesCoords.push([7920, 160, "flag_base"]);
    map.tilesCoords.push([7920, 120, "flag_base"]);

    map.tilesCoords.push([7920, 80, "flag_top"]);

    map.tilesCoords.push([7900, 120, "flag_plane"]);

    map.tilesCoords.push([8080, 480, "castle_brick"]);
    map.tilesCoords.push([8120, 480, "castle_brick"]);
    map.tilesCoords.push([8160, 480, "black"]);
    map.tilesCoords.push([8200, 480, "castle_brick"]);
    map.tilesCoords.push([8240, 480, "castle_brick"]);

    map.tilesCoords.push([8080, 440, "castle_brick"]);
    map.tilesCoords.push([8120, 440, "castle_brick"]);
    map.tilesCoords.push([8160, 440, "castle_brick_door_top"]);
    map.tilesCoords.push([8200, 440, "castle_brick"]);
    map.tilesCoords.push([8240, 440, "castle_brick"]);

    map.tilesCoords.push([8080, 400, "castle_brick_top_snake"]);
    map.tilesCoords.push([8120, 400, "castle_brick_top_snake_2"]);
    map.tilesCoords.push([8160, 400, "castle_brick_top_snake_2"]);
    map.tilesCoords.push([8200, 400, "castle_brick_top_snake_2"]);
    map.tilesCoords.push([8240, 400, "castle_brick_top_snake"]);

    map.tilesCoords.push([8120, 360, "castle_brick_black_right"]);
    map.tilesCoords.push([8160, 360, "castle_brick"]);
    map.tilesCoords.push([8200, 360, "castle_brick_black_left"]);

    map.tilesCoords.push([8120, 320, "castle_brick_top_snake"]);
    map.tilesCoords.push([8160, 320, "castle_brick_top_snake"]);
    map.tilesCoords.push([8200, 320, "castle_brick_top_snake"]);

    map.tilesCoords.map((item)=>{
        let src = "img/blocks/BlocksSheet2.png";
        let collider = false;
        let animation = [];
        let x, y;
        let bonus = (item[3] !== undefined ? item[3] : []);
        let punchable = false;
        let isFlag = false;
        switch (item[2]){
            case "ground_brick":
                collider = true; x = 0; y = 0;
                break;
            case "action_brick":
                collider = true; x = 16; y = 0; punchable = true;
                break;
            case "cloud-left":
                x = 0; y = 328;
                break;
            case "cloud-middle":
                x = 16; y = 328;
                break;
            case "cloud-middle-top":
                x = 16; y = 320;
                break;
            case "cloud-right":
                x = 32; y = 328;
                break;
            case "bush-left":
                x = 176; y = 144;
                break;
            case "bush-middle":
                x = 192; y = 144;
                break;
            case "bush-right":
                x = 208; y = 144;
                break;
            case "hill-left-slide":
                x = 128; y = 128;
                break;
            case "hill-right-slide":
                x = 160; y = 128;
                break;
            case "hill-left-inner":
                x = 128; y = 144;
                break;
            case "hill-middle-inner":
                x = 144; y = 144;
                break;
            case "hill-right-inner":
                x = 160; y = 144;
                break;
            case "hill-top":
                x = 144; y = 128;
                break;
            case "pipe-top-left":
                collider = true; x = 0; y = 128;
                break;
            case "pipe-top-right":
                collider = true; x = 16; y = 128;
                break;
            case "pipe-base-left":
                collider = true; x = 0; y = 144;
                break;
            case "pipe-base-right":
                collider = true; x = 16; y = 144;
                break;
            case "bonus_brick":
                collider = true; x = 384; y = 0; animation = [[384, 0], [400, 0], [416, 0]]; punchable = true;
                break;
            case "empty_brick":
                collider = true; x = 0; y = 16;
                break;
            case "flag_base":
                x = 256; y = 144;
                break;
            case "flag_top":
                x = 256; y = 128;
                break;
            case "flag_plane":
                src = "img/blocks/BlocksSheet.png" ; x = 128; y = 32; isFlag = true;
                break;
            case "castle_brick":
                x = 32; y = 0;
                break;
            case "black":
                x = 208; y = 16;
                break;
            case "castle_brick_door_top":
                x = 192; y = 16;
                break;
            case "castle_brick_top_snake":
                x = 176; y = 0;
                break;
            case "castle_brick_top_snake_2":
                x = 176; y = 16;
                break;
            case "castle_brick_black_right":
                x = 192; y = 0;
                break;
            case "castle_brick_black_left":
                x = 224; y = 0;
                break;
        }
        let tile = new Tile(src, collider, animation, item[0], item[1], x, y, bonus, punchable);
        if(isFlag) {
            tile.down = function () {
                this.y += 1;
            };
        }
        map.tiles.push(tile);
    });
}
