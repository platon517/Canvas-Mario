import * as gc from "./gameConfig";

export class Font{
    constructor(){
        this.canvasObject = new Image();
        this.canvasObject.src = "img/font.png";
        this.size = 20;
        this.text = [
            {word: "mario", x: 20, y: 10},
            {word: "000000", x: 20, y: 30},
            {word: "world", x: gc.gameWindow.width / 2 + 20, y: 10},
            {word: "1-1", x: gc.gameWindow.width / 2 + 40, y: 30},
            {word: "coins", x: gc.gameWindow.width / 2 - 20 * 6, y: 10},
            {word: "000", x: gc.gameWindow.width / 2 - 20 * 5, y: 30},
            {word: "time", x: gc.gameWindow.width - 20 * 5, y: 10},
            {word: "400", x: gc.gameWindow.width - 20 * 4, y: 30}
            ];
        this.fontArr = [
            "0", "1", "2", "3" , "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h",
            "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "", "", "", "", "-"
        ]
    }
    addCoin(){
        this.addValue(5, 1, 3);
    }
    addScore(val){
        this.addValue(1, val, 6);
    }
    addTime(){
        this.addValue(7, -1, 3);
    }
    addValue(type, val, size){
        let newScoreVal = parseFloat(this.text[type].word) + val;
        let extraZero = "";
        for(let i = 1; i < size; i++){
            if(Math.floor(newScoreVal / Math.pow(10, i)) === 0){
                extraZero += "0";
            }
        }
        this.text[type].word = extraZero + newScoreVal.toString();
    }
    draw_word(word, x, y){
        for(let i = 0; i < word.length; i++){
            let num = this.fontArr.indexOf(word.charAt(i));
            let inside_x = 8 * (num % 16);
            let inside_y = 8 * Math.floor(num / 16);
            gc.ctx.drawImage(
                this.canvasObject,
                inside_x,
                inside_y,
                8, 8,
                x + this.size * i,
                y,
                this.size,
                this.size
            );
        }
    }
    draw(){
        this.text.map((item)=>{
            this.draw_word(item.word, item.x, item.y);
        });
    }
}