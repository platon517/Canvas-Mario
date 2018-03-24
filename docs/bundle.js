/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.win_flag = exports.enemies = exports.mario = exports.deadly_y = exports.map = exports.camera = exports.finished = exports.gameOver = exports.fps = exports.mapSize = exports.game_text = exports.bg_music = exports.startTime = exports.h = exports.w = exports.ctx = exports.gameWindow = exports.Sound = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewPort = __webpack_require__(6);

var _tilesMap = __webpack_require__(7);

var _playerCharacterClass = __webpack_require__(9);

var _enemyClass = __webpack_require__(10);

var _tileClass = __webpack_require__(8);

var _fontClass = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sound = exports.Sound = function () {
    function Sound(val) {
        var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, Sound);

        this.elem = document.createElement('audio');
        var src = void 0;
        switch (val) {
            case "bg":
                src = "sounds/Theme.mp3";
                break;
            case "die":
                src = "sounds/mariodie.wav";
                break;
            case "mario_jump":
                src = "sounds/jump.wav";
                break;
            case "mario_stomp":
                src = "sounds/stomp.wav";
                break;
            case "bump":
                src = "sounds/bump.wav";
                break;
            case "coin":
                src = "sounds/coin.wav";
                break;
            case "stage_clear":
                src = "sounds/stage_clear.wav";
                break;
        }
        this.elem.volume = 0.1;
        this.elem.src = src;
        this.elem.loop = loop;
        this.elem.style.display = "none";
        document.body.appendChild(this.elem);
    }

    _createClass(Sound, [{
        key: "play",
        value: function play() {
            this.elem.play();
        }
    }, {
        key: "stop",
        value: function stop() {
            this.elem.pause();
        }
    }]);

    return Sound;
}();

var gameWindow = exports.gameWindow = document.getElementById("game_window");
var ctx = exports.ctx = gameWindow.getContext('2d');
var w = exports.w = 800;
var h = exports.h = 600;
gameWindow.width = w;
gameWindow.height = h;

var startTime = exports.startTime = new Date().getTime();

var bg_music = exports.bg_music = new Sound("bg", true);
bg_music.play();

var game_text = exports.game_text = new _fontClass.Font();

var mapSize = exports.mapSize = 224;

var fps = exports.fps = 1000 / 300;

var gameOver = exports.gameOver = false;

var finished = exports.finished = false;

var camera = exports.camera = new _viewPort.ViewPort();

var map = exports.map = new _tilesMap.TilesMap();

var deadly_y = exports.deadly_y = gameWindow.height + 40;

var mario = exports.mario = new _playerCharacterClass.PlayerChar(1, "img/mario/MarioSheet.png", 80, 34, 165, 34, [182, 34], [50, [97, 34], [114, 34], [131, 34]], 120, 480);

var enemies = exports.enemies = [];
//enemies.push(new Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 660, 320, false));

enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 900, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 1620, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 2060, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 2120, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 3220, 160, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 3300, 160, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 3900, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 3960, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 4580, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 4640, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 4960, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 5020, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 5120, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 5180, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 6980, 480, true));
enemies.push(new _enemyClass.Enemy(0.25, "img/chars/chars.png", 0, 16, 0, 16, [32, 16], [100, [0, 16], [16, 16]], 7040, 480, true));

var win_flag = exports.win_flag = new _tileClass.Tile("img/blocks/BlocksSheet.png", false, [], 8160, 340, 128, 0, [], false);
win_flag.up = function () {
    var _this = this;

    setInterval(function () {
        if (_this.y > 280) _this.y -= 1;
    }, 25);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verticalImpact = verticalImpact;
function verticalImpact(obj, impact, gravity) {
    var fallSpeed = gravity;
    return function () {
        var isDenied = null;
        var yCoord = 0;
        obj.collidedObj.map(function (item) {
            if (item.type !== "all" && obj.y + obj.size > item.obj.y && obj.y < item.obj.y + item.obj.size) {
                if (item.type === "top") {
                    isDenied = "top";
                    yCoord = item.obj.y - obj.size;
                    obj.gravityImpact = verticalImpact(obj, 0, 9);
                } else {
                    isDenied = "bottom";
                    yCoord = item.obj.y + item.obj.size;
                }
            }
        });
        if (isDenied === null) {
            var power = ((fallSpeed += gravity / 30) - impact) / 3.6;
            obj.isJump = power < 0;
            obj.y += power;
        } else {
            obj.y = yCoord;
            if (isDenied === "bottom") {
                obj.y += 1;
                obj.gravityImpact = verticalImpact(obj, 0, 9);
            }
        }
    };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.collision = collision;

var _gameConfig = __webpack_require__(0);

var gc = _interopRequireWildcard(_gameConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function collision(obj1, obj2) {
    var alives = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var collideSide = null;
    if (gc.gameOver && obj1 === gc.mario || obj1.died) return collideSide;
    if (obj1.x + obj1.size / 2 >= obj2.x - (alives ? obj2.size / 2 : 0) && obj1.x - obj1.size / 2 <= obj2.x + obj2.size / (alives ? 2 : 1) && obj1.y <= obj2.y + obj2.size && obj1.y + obj1.size >= obj2.y) {
        collideSide = "all";
        if (obj1.y + obj1.size < obj2.y + obj2.size / 2 && !gc.map.getTileCollider(obj2.x, obj2.y - 40)) {
            collideSide = "top";
        }
        if (obj1.y > obj2.y + obj2.size / 2 && Math.abs(obj1.x - (obj2.x + obj2.size / 2)) < 30) {
            collideSide = "bottom";
        }
    }
    var isCounted = false;
    var num = null;
    obj1.collidedObj.map(function (item, index) {
        if (item.obj === obj2) {
            isCounted = true;
            num = index;
        }
    });
    if (!isCounted && collideSide !== null) {
        obj1.collidedObj.push({ obj: obj2, type: collideSide });
    }
    if (isCounted && collideSide === null) {
        obj1.collidedObj.splice(num, 1);
    }
    return collideSide;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Coin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameConfig = __webpack_require__(0);

var gc = _interopRequireWildcard(_gameConfig);

var _gravity = __webpack_require__(1);

var gravity = _interopRequireWildcard(_gravity);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coin = exports.Coin = function () {
    function Coin(sprite_map, sprites, animation_speed, insideSprite_x, insideSprite_y, x, y) {
        _classCallCheck(this, Coin);

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
        this.sound = new _gameConfig.Sound("coin");
    }

    _createClass(Coin, [{
        key: "animate",
        value: function animate(coordsArray, time) {
            var _this = this;

            function getFrame() {
                var i = 1;
                return function () {
                    if (i > coordsArray.length - 1) {
                        i = 1;
                    }
                    i++;
                    return i - 1;
                };
            }
            var frame = getFrame();
            setInterval(function () {
                var now_frame = frame();
                _this.inside_x = coordsArray[now_frame][0];
                _this.inside_y = coordsArray[now_frame][1];
            }, time);
        }
    }, {
        key: "preDraw",
        value: function preDraw() {
            if (!this.isStanding) {
                this.gravityImpact();
            }
            if (this.active && this.y >= this.yStart) {
                this.render = false;
                this.parent.bonus.splice(0, 1);
            }
        }
    }, {
        key: "activate",
        value: function activate(parent) {
            if (!this.active) {
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
    }, {
        key: "draw",
        value: function draw() {
            if (this.render) {
                this.preDraw();
                this.x = this.xStart - gc.camera.xOffset;
                gc.ctx.save();
                gc.ctx.scale(1, 1);
                gc.ctx.drawImage(this.canvasObject, this.inside_x, this.inside_y, 16, 16, this.x, this.y, this.size, this.size);
                gc.ctx.restore();
            }
        }
    }]);

    return Coin;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Character = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gravity = __webpack_require__(1);

var gravity = _interopRequireWildcard(_gravity);

var _gameConfig = __webpack_require__(0);

var gc = _interopRequireWildcard(_gameConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = exports.Character = function () {
    function Character(walkSpeed, idleSprite, idleSprite_x, idleSprite_y, jumpSprite_x, jumpSprite_y, dieSprite, walk_animation, x, y) {
        var autoWalk = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

        _classCallCheck(this, Character);

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

    _createClass(Character, [{
        key: "idle",
        value: function idle() {
            this.inside_x = this.inside_x_idle;
            this.inside_y = this.inside_y_idle;
        }
    }, {
        key: "walk",
        value: function walk(direction) {
            if (!this.isWalking) {
                this.isWalking = true;
                this.direction = direction;
            }
        }
    }, {
        key: "animate",
        value: function animate(coordsArray) {
            var _this = this;

            function getFrame() {
                var i = 1;
                return function () {
                    if (i > coordsArray.length - 1) {
                        i = 1;
                    }
                    i++;
                    return i - 1;
                };
            }
            var frame = getFrame();
            setInterval(function () {
                if (_this.isWalking) {
                    var now_frame = frame();
                    _this.inside_x = coordsArray[now_frame][0];
                    _this.inside_y = coordsArray[now_frame][1];
                }
            }, coordsArray[0]);
        }
    }, {
        key: "sprint",
        value: function sprint(val) {
            this.speed = val ? this.const_speed * 2 : this.const_speed;
        }
    }, {
        key: "stop",
        value: function stop() {
            this.isWalking = false;
            this.idle();
        }
    }, {
        key: "die",
        value: function die(time, type) {
            var _this2 = this;

            this.died = true;
            this.stop();
            if (type === "top") {
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
            setTimeout(function () {
                _this2.render = false;
            }, time);
        }
    }, {
        key: "isStaningStatus",
        value: function isStaningStatus() {
            var _this3 = this;

            this.isStanding = !(this.collidedObj.length === 0);
            var stands = false;
            this.collidedObj.map(function (item) {
                if (item.type === "top") {
                    _this3.isJump = true;
                    stands = true;
                    if (item.obj.isPunched) _this3.die(1000, "bottom");
                }
            });
            this.isStanding = stands;
        }
    }, {
        key: "preDraw",
        value: function preDraw() {
            var _this4 = this;

            var isCamFollow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.autoWalk) {
                this.walk(this.direction);
            }
            if (this.isWalking) {
                this.isDenied = null;
                this.collidedObj.map(function (item) {
                    if (item.type === "all") {
                        _this4.isDenied = _this4.x < item.obj.x + item.obj.size / 2 ? 1 : -1;
                    }
                });

                if (this.isDenied !== this.direction) {
                    if (isCamFollow && this.direction === 1 && this.x >= gc.gameWindow.width / 2 && this.x + this.size / 2 + gc.camera.xOffset < gc.mapSize * 40 - gc.gameWindow.width / 2) {
                        gc.camera.move(-this.speed * this.direction, 0);
                        if (this.x >= gc.gameWindow.width / 2) this.x = gc.gameWindow.width / 2;
                    }
                }

                if (isCamFollow && this.x + this.direction * this.speed - this.size / 2 < 0) {
                    this.x = this.size / 2;
                }
            }

            if (!this.isStanding) {
                this.gravityImpact();
            }

            this.isStaningStatus();

            if (!this.isWalking && this.collidedObj.length !== 0) {
                this.idle();
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            if (this.render) {
                this.preDraw();
                gc.ctx.save();
                gc.ctx.scale(this.direction, this.reverse_y);
                gc.ctx.drawImage(this.canvasObject, this.inside_x, this.inside_y, 16, 16, this.direction * this.x - this.size / 2, this.reverse_y * this.y - (this.reverse_y === -1 ? this.size : 0), this.size, this.size);
                gc.ctx.restore();
            }
        }
    }]);

    return Character;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gameConfig = __webpack_require__(0);

var gc = _interopRequireWildcard(_gameConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

document.onkeydown = function (e) {
    if (!gc.gameOver && !gc.finished) {
        var key = window.event ? e.keyCode : e.which;
        //console.log(key);
        switch (key) {
            case 39:
            case 37:
                gc.mario.walk(key === 39 ? 1 : -1);
                break;
            case 16:
                gc.mario.sprint(true);
                break;
            case 32:
                gc.mario.jump();
                break;
            default:
                break;
        }
    }
};
document.onkeyup = function (e) {
    if (!gc.gameOver && !gc.finished) {
        var key = window.event ? e.keyCode : e.which;
        switch (key) {
            case 39:
            case 37:
                gc.mario.stop();
                break;
            case 16:
                gc.mario.sprint(false);
                break;
            case 32:
                break;
            default:
                break;
        }
    }
};

setInterval(function () {
    if (!gc.finished && !gc.gameOver) {
        gc.game_text.addTime();
    }
}, 500);

function update() {
    gc.ctx.clearRect(0, 0, gc.w, gc.h);
    gc.ctx.fillStyle = "#6b8cff";
    gc.ctx.fillRect(0, 0, gc.gameWindow.width, gc.gameWindow.height);
    gc.ctx.imageSmoothingEnabled = false;
    gc.win_flag.draw();
    gc.map.tiles.map(function (item) {
        item.draw();
    });
    gc.enemies.map(function (item) {
        item.draw();
    });
    gc.mario.draw();
    gc.game_text.draw();
}
setInterval(update, gc.fps);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewPort = exports.ViewPort = function () {
    function ViewPort() {
        _classCallCheck(this, ViewPort);

        this.xOffset = 0;
        this.yOffset = 0;
    }

    _createClass(ViewPort, [{
        key: "move",
        value: function move(x, y) {
            this.xOffset -= x;
            this.yOffset -= y;
        }
    }]);

    return ViewPort;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TilesMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tileClass = __webpack_require__(8);

var _coinClass = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TilesMap = exports.TilesMap = function () {
    function TilesMap() {
        _classCallCheck(this, TilesMap);

        this.tiles = [];
        this.tilesCoords = [];
        getTilesMap(this);
    }

    _createClass(TilesMap, [{
        key: "getTileCollider",
        value: function getTileCollider(x, y) {
            var isBottomElement = false;
            this.tiles.map(function (item) {
                if (item.x === x && item.y === y && item.collider) {
                    isBottomElement = true;
                }
            });
            return isBottomElement;
        }
    }]);

    return TilesMap;
}();

function getTilesMap(map) {
    for (var i = 0; i < 69; i++) {
        map.tilesCoords.push([i * 40, 520, "ground_brick"]);
        map.tilesCoords.push([i * 40, 560, "ground_brick"]);
    }
    for (var _i = 71; _i < 86; _i++) {
        map.tilesCoords.push([_i * 40, 520, "ground_brick"]);
        map.tilesCoords.push([_i * 40, 560, "ground_brick"]);
    }
    for (var _i2 = 89; _i2 < 153; _i2++) {
        map.tilesCoords.push([_i2 * 40, 520, "ground_brick"]);
        map.tilesCoords.push([_i2 * 40, 560, "ground_brick"]);
    }
    for (var _i3 = 155; _i3 < 224; _i3++) {
        map.tilesCoords.push([_i3 * 40, 520, "ground_brick"]);
        map.tilesCoords.push([_i3 * 40, 560, "ground_brick"]);
    }
    for (var _i4 = 0; _i4 < 5; _i4++) {
        var multipler = 1920 * _i4;
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

    map.tilesCoords.push([640, 360, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 640, 320)]]);
    map.tilesCoords.push([800, 360, "action_brick"]);
    map.tilesCoords.push([840, 360, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 840, 320)]]);
    map.tilesCoords.push([880, 360, "action_brick"]);
    map.tilesCoords.push([920, 360, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 920, 320)]]);
    map.tilesCoords.push([960, 360, "action_brick"]);
    map.tilesCoords.push([880, 200, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 880, 160)]]);

    for (var _i5 = 0; _i5 < 5; _i5++) {
        var _multipler = 1920 * _i5;

        map.tilesCoords.push([_multipler + 0, 480, "hill-left-slide"]);
        map.tilesCoords.push([_multipler + 40, 480, "hill-left-inner"]);
        map.tilesCoords.push([_multipler + 80, 480, "hill-middle-inner"]);
        map.tilesCoords.push([_multipler + 120, 480, "hill-right-inner"]);
        map.tilesCoords.push([_multipler + 160, 480, "hill-right-slide"]);
        map.tilesCoords.push([_multipler + 40, 440, "hill-left-slide"]);
        map.tilesCoords.push([_multipler + 80, 440, "hill-left-inner"]);
        map.tilesCoords.push([_multipler + 120, 440, "hill-right-slide"]);
        map.tilesCoords.push([_multipler + 80, 400, "hill-top"]);

        map.tilesCoords.push([_multipler + 640, 480, "hill-left-slide"]);
        map.tilesCoords.push([_multipler + 680, 480, "hill-left-inner"]);
        map.tilesCoords.push([_multipler + 720, 480, "hill-right-slide"]);
        map.tilesCoords.push([_multipler + 680, 440, "hill-top"]);
    }

    for (var _i6 = 0; _i6 < 5; _i6++) {
        var _multipler2 = 1920 * _i6;

        map.tilesCoords.push([_multipler2 + 440, 480, "bush-left"]);
        map.tilesCoords.push([_multipler2 + 480, 480, "bush-middle"]);
        map.tilesCoords.push([_multipler2 + 520, 480, "bush-middle"]);
        map.tilesCoords.push([_multipler2 + 560, 480, "bush-middle"]);
        map.tilesCoords.push([_multipler2 + 600, 480, "bush-right"]);

        map.tilesCoords.push([_multipler2 + 920, 480, "bush-left"]);
        map.tilesCoords.push([_multipler2 + 960, 480, "bush-middle"]);
        map.tilesCoords.push([_multipler2 + 1000, 480, "bush-right"]);

        map.tilesCoords.push([_multipler2 + 1640, 480, "bush-left"]);
        map.tilesCoords.push([_multipler2 + 1680, 480, "bush-middle"]);
        map.tilesCoords.push([_multipler2 + 1720, 480, "bush-middle"]);
        map.tilesCoords.push([_multipler2 + 1760, 480, "bush-right"]);
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
    map.tilesCoords.push([3120, 360, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3120, 320)]]);
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
    map.tilesCoords.push([3760, 200, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 160)]]);

    map.tilesCoords.push([3760, 360, "action_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320), new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 3760, 320)]]);

    map.tilesCoords.push([4000, 360, "action_brick"]);
    map.tilesCoords.push([4040, 360, "action_brick"]);

    map.tilesCoords.push([4240, 360, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 4240, 320)]]);

    map.tilesCoords.push([4360, 360, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 4360, 320)]]);

    map.tilesCoords.push([4480, 360, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 4480, 320)]]);

    map.tilesCoords.push([4360, 200, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 4360, 160)]]);

    map.tilesCoords.push([4720, 360, "action_brick"]);

    map.tilesCoords.push([4840, 200, "action_brick"]);
    map.tilesCoords.push([4880, 200, "action_brick"]);
    map.tilesCoords.push([4920, 200, "action_brick"]);

    map.tilesCoords.push([5120, 200, "action_brick"]);
    map.tilesCoords.push([5160, 200, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 5160, 160)]]);
    map.tilesCoords.push([5200, 200, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 5200, 160)]]);
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
    map.tilesCoords.push([6800, 360, "bonus_brick", [new _coinClass.Coin("img/blocks/BlocksSheet.png", [[144, 112], [160, 112], [176, 112], [192, 112]], 100, 144, 112, 6800, 320)]]);
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

    map.tilesCoords.map(function (item) {
        var src = "img/blocks/BlocksSheet2.png";
        var collider = false;
        var animation = [];
        var x = void 0,
            y = void 0;
        var bonus = item[3] !== undefined ? item[3] : [];
        var punchable = false;
        var isFlag = false;
        switch (item[2]) {
            case "ground_brick":
                collider = true;x = 0;y = 0;
                break;
            case "action_brick":
                collider = true;x = 16;y = 0;punchable = true;
                break;
            case "cloud-left":
                x = 0;y = 328;
                break;
            case "cloud-middle":
                x = 16;y = 328;
                break;
            case "cloud-middle-top":
                x = 16;y = 320;
                break;
            case "cloud-right":
                x = 32;y = 328;
                break;
            case "bush-left":
                x = 176;y = 144;
                break;
            case "bush-middle":
                x = 192;y = 144;
                break;
            case "bush-right":
                x = 208;y = 144;
                break;
            case "hill-left-slide":
                x = 128;y = 128;
                break;
            case "hill-right-slide":
                x = 160;y = 128;
                break;
            case "hill-left-inner":
                x = 128;y = 144;
                break;
            case "hill-middle-inner":
                x = 144;y = 144;
                break;
            case "hill-right-inner":
                x = 160;y = 144;
                break;
            case "hill-top":
                x = 144;y = 128;
                break;
            case "pipe-top-left":
                collider = true;x = 0;y = 128;
                break;
            case "pipe-top-right":
                collider = true;x = 16;y = 128;
                break;
            case "pipe-base-left":
                collider = true;x = 0;y = 144;
                break;
            case "pipe-base-right":
                collider = true;x = 16;y = 144;
                break;
            case "bonus_brick":
                collider = true;x = 384;y = 0;animation = [[384, 0], [400, 0], [416, 0]];punchable = true;
                break;
            case "empty_brick":
                collider = true;x = 0;y = 16;
                break;
            case "flag_base":
                x = 256;y = 144;
                break;
            case "flag_top":
                x = 256;y = 128;
                break;
            case "flag_plane":
                src = "img/blocks/BlocksSheet.png";x = 128;y = 32;isFlag = true;
                break;
            case "castle_brick":
                x = 32;y = 0;
                break;
            case "black":
                x = 208;y = 16;
                break;
            case "castle_brick_door_top":
                x = 192;y = 16;
                break;
            case "castle_brick_top_snake":
                x = 176;y = 0;
                break;
            case "castle_brick_top_snake_2":
                x = 176;y = 16;
                break;
            case "castle_brick_black_right":
                x = 192;y = 0;
                break;
            case "castle_brick_black_left":
                x = 224;y = 0;
                break;
        }
        var tile = new _tileClass.Tile(src, collider, animation, item[0], item[1], x, y, bonus, punchable);
        if (isFlag) {
            tile.down = function () {
                this.y += 1;
            };
        }
        map.tiles.push(tile);
    });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collision = __webpack_require__(2);

var collision = _interopRequireWildcard(_collision);

var _gameConfig = __webpack_require__(0);

var gc = _interopRequireWildcard(_gameConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = exports.Tile = function () {
    function Tile(idleSprite, collider, animation_array, x, y, inside_x, inside_y, bonus, punchable) {
        _classCallCheck(this, Tile);

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
        if (animation_array.length > 0) this.animate(this.animation_array, 200);
        this.punchable = punchable;
        this.isPunched = false;
        this.bonus = bonus;
        this.bonus_used = false;
        if (punchable) this.bump_sound = new _gameConfig.Sound("bump");
    }

    _createClass(Tile, [{
        key: "animate",
        value: function animate(coordsArray, time) {
            var _this = this;

            function getFrame() {
                var i = 0;
                return function () {
                    if (i > coordsArray.length - 1) {
                        i = 0;
                    }
                    i++;
                    return i - 1;
                };
            }
            var frame = getFrame();
            setInterval(function () {
                if (_this.bonus_used) return false;
                _this.inside_x = coordsArray[frame()][0];
                _this.inside_y = coordsArray[frame()][1];
            }, time);
        }
    }, {
        key: "punched",
        value: function punched() {
            if (this.isPunched) {
                this.y -= 1;
            } else if (this.y < this.yStart) {
                this.y += 1;
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            var _this2 = this;

            if (this.down !== undefined && gc.finished && this.y < 440) this.down();
            if (this.bonus.length > 0) this.bonus[0].draw();
            if (this.collider && collision.collision(gc.mario, this) === "bottom") {
                if (gc.mario.isJump) {
                    this.bump_sound.play();
                    this.isPunched = true;
                    if (this.bonus.length > 0) {
                        this.bonus[0].activate(this);
                        if (this.bonus.length <= 1) {
                            this.bonus_used = true;
                            if (this.animation_array.length !== 0) {
                                this.inside_x = this.animation_array[this.animation_array.length - 1][0] + 16;
                                this.inside_y = this.animation_array[this.animation_array.length - 1][1];
                            }
                        }
                    }
                    setTimeout(function () {
                        _this2.isPunched = false;
                    }, 100);
                }
            }

            if (this.collider) {
                gc.enemies.map(function (item) {
                    if (collision.collision(item, _this2) === "all") item.direction = item.direction === -1 ? 1 : -1;
                });
            }

            if (this.punchable) this.punched();
            this.x = this.xStart - gc.camera.xOffset;
            //this.y = this.yStart - gc.camera.yOffset;
            gc.ctx.drawImage(this.canvasObject, this.inside_x, this.inside_y, 16, 16, this.x, this.y, this.size, this.size);
        }
    }]);

    return Tile;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PlayerChar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _characterClass = __webpack_require__(4);

var _gravity = __webpack_require__(1);

var gravity = _interopRequireWildcard(_gravity);

var _gameConfig = __webpack_require__(0);

var gc = _interopRequireWildcard(_gameConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerChar = exports.PlayerChar = function (_Character) {
    _inherits(PlayerChar, _Character);

    function PlayerChar(walkSpeed, idleSprite, idleSprite_x, idleSprite_y, jumpSprite_x, jumpSprite_y, dieSprite, walk_animation, x, y) {
        var autoWalk = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

        _classCallCheck(this, PlayerChar);

        var _this = _possibleConstructorReturn(this, (PlayerChar.__proto__ || Object.getPrototypeOf(PlayerChar)).call(this, walkSpeed, idleSprite, idleSprite_x, idleSprite_y, jumpSprite_x, jumpSprite_y, dieSprite, walk_animation, x, y, autoWalk));

        _this.direction = 1;
        _this.jump_sound = new _gameConfig.Sound("mario_jump");
        _this.death = new _gameConfig.Sound("die");
        _this.stomp = new _gameConfig.Sound("mario_stomp");
        _this.win = new _gameConfig.Sound("stage_clear");
        return _this;
    }

    _createClass(PlayerChar, [{
        key: "jump",
        value: function jump() {
            if (this.isStanding) {
                if (!gc.gameOver) this.jump_sound.play();
                this.isJump = true;
                this.isStanding = false;
                this.gravityImpact = gravity.verticalImpact(this, 28, 9);
            }
        }
    }, {
        key: "kill_jump",
        value: function kill_jump() {
            if (this.isStanding) {
                this.isJump = true;
                this.isStanding = false;
                this.gravityImpact = gravity.verticalImpact(this, 22, 9);
                this.stomp.play();
            }
        }
    }, {
        key: "isStaningStatus",
        value: function isStaningStatus() {
            _get(PlayerChar.prototype.__proto__ || Object.getPrototypeOf(PlayerChar.prototype), "isStaningStatus", this).call(this);
            if (gc.gameOver) this.isStanding = false;
        }
    }, {
        key: "die",
        value: function die() {
            _get(PlayerChar.prototype.__proto__ || Object.getPrototypeOf(PlayerChar.prototype), "die", this).call(this, 1000, "top");
            this.jumpSprite_x = this.dieSprite[0];
            this.jumpSprite_y = this.dieSprite[1];
            gc.mario.collidedObj = [];
            gc.gameOver = true;
            this.isStanding = true;
            this.jump();
            gc.bg_music.stop();
            this.death.play();
        }
    }, {
        key: "flagAnimation",
        value: function flagAnimation() {
            var _this2 = this;

            setInterval(function () {
                if (_this2.getFlagFrame !== null) _this2.getFlagFrame = _this2.getFlagFrame === 16 ? 0 : 16;
            }, 150);
        }
    }, {
        key: "preDraw",
        value: function preDraw() {
            var _this3 = this;

            _get(PlayerChar.prototype.__proto__ || Object.getPrototypeOf(PlayerChar.prototype), "preDraw", this).call(this, true);

            if (this.isWalking && this.isDenied !== this.direction) {
                this.x += this.direction * this.speed;
            }
            if (this.y > gc.deadly_y && !this.died) this.die();
            if (!this.isStanding) {
                this.inside_x = this.jumpSprite_x;
                this.inside_y = this.jumpSprite_y;
            }
            if (this.x + gc.camera.xOffset >= 7920 && !gc.finished) {
                this.stop();
                this.gravityImpact = gravity.verticalImpact(this, 0, 0);
                gc.finished = true;
                gc.bg_music.stop();
                this.win.play();
                this.getFlagFrame = 0;
                this.flagAnimation();
                var endTime = new Date().getTime();
                console.log("time: " + (endTime - gc.startTime) / 1000);
                setTimeout(function () {
                    _this3.getFlagFrame = null;
                    _this3.isStanding = true;
                    _this3.jump();
                    _this3.speed = 0.5;
                    _this3.walk(1);
                    setTimeout(function () {
                        setInterval(function () {
                            var time = parseFloat(gc.game_text.text[7].word);
                            if (time > 0) {
                                gc.game_text.addTime();
                                gc.game_text.addScore(50);
                            }
                        }, 10);
                    }, 3000);
                }, 1500);
            }
            if (this.x + gc.camera.xOffset >= 7920 && this.getFlagFrame !== null) {
                this.inside_x = 198 + this.getFlagFrame;
                this.inside_y = 34;
            }
            if (this.x + gc.camera.xOffset >= 8180) {
                this.render = false;
                gc.win_flag.up();
            }
        }
    }]);

    return PlayerChar;
}(_characterClass.Character);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Enemy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _characterClass = __webpack_require__(4);

var _gameConfig = __webpack_require__(0);

var gc = _interopRequireWildcard(_gameConfig);

var _collision = __webpack_require__(2);

var collision = _interopRequireWildcard(_collision);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = exports.Enemy = function (_Character) {
    _inherits(Enemy, _Character);

    function Enemy() {
        _classCallCheck(this, Enemy);

        return _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).apply(this, arguments));
    }

    _createClass(Enemy, [{
        key: "die",
        value: function die(time, type) {
            var _this2 = this;

            _get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), "die", this).call(this, time, type);
            if (this !== gc.mario) {
                gc.mario.isStanding = true;
                gc.mario.kill_jump();
                gc.mario.collidedObj.map(function (item, index) {
                    if (item.obj === _this2) gc.mario.collidedObj.splice(index, 1);
                });
                gc.game_text.addScore(100);
            }
            this.autoWalk = false;
        }
    }, {
        key: "preDraw",
        value: function preDraw() {
            var isCamFollow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            _get(Enemy.prototype.__proto__ || Object.getPrototypeOf(Enemy.prototype), "preDraw", this).call(this);
            if (this.isWalking && this.isDenied !== this.direction && !(this.x - gc.mario.x > gc.gameWindow.width - gc.mario.x + gc.mario.size / 2 && !gc.gameOver)) {
                this.x += this.direction * this.speed;
            }
            if (gc.mario.isWalking && gc.mario.direction === 1 && gc.mario.isDenied === null && gc.mario.x >= gc.gameWindow.width / 2) this.x -= gc.mario.speed;
            if (!this.died) {
                var collideType = collision.collision(gc.mario, this, true);
                if (collideType === "top" && !gc.gameOver) {
                    this.die(300, "top");
                } else if (collideType !== null) {
                    gc.mario.die();
                }
            }
        }
    }]);

    return Enemy;
}(_characterClass.Character);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Font = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameConfig = __webpack_require__(0);

var gc = _interopRequireWildcard(_gameConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Font = exports.Font = function () {
    function Font() {
        _classCallCheck(this, Font);

        this.canvasObject = new Image();
        this.canvasObject.src = "img/font.png";
        this.size = 20;
        this.text = [{ word: "mario", x: 20, y: 10 }, { word: "000000", x: 20, y: 30 }, { word: "world", x: gc.gameWindow.width / 2 + 20, y: 10 }, { word: "1-1", x: gc.gameWindow.width / 2 + 40, y: 30 }, { word: "coins", x: gc.gameWindow.width / 2 - 20 * 6, y: 10 }, { word: "000", x: gc.gameWindow.width / 2 - 20 * 5, y: 30 }, { word: "time", x: gc.gameWindow.width - 20 * 5, y: 10 }, { word: "400", x: gc.gameWindow.width - 20 * 4, y: 30 }];
        this.fontArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "", "", "-"];
    }

    _createClass(Font, [{
        key: "addCoin",
        value: function addCoin() {
            this.addValue(5, 1, 3);
        }
    }, {
        key: "addScore",
        value: function addScore(val) {
            this.addValue(1, val, 6);
        }
    }, {
        key: "addTime",
        value: function addTime() {
            this.addValue(7, -1, 3);
        }
    }, {
        key: "addValue",
        value: function addValue(type, val, size) {
            var newScoreVal = parseFloat(this.text[type].word) + val;
            var extraZero = "";
            for (var i = 1; i < size; i++) {
                if (Math.floor(newScoreVal / Math.pow(10, i)) === 0) {
                    extraZero += "0";
                }
            }
            this.text[type].word = extraZero + newScoreVal.toString();
        }
    }, {
        key: "draw_word",
        value: function draw_word(word, x, y) {
            for (var i = 0; i < word.length; i++) {
                var num = this.fontArr.indexOf(word.charAt(i));
                var inside_x = 8 * (num % 16);
                var inside_y = 8 * Math.floor(num / 16);
                gc.ctx.drawImage(this.canvasObject, inside_x, inside_y, 8, 8, x + this.size * i, y, this.size, this.size);
            }
        }
    }, {
        key: "draw",
        value: function draw() {
            var _this = this;

            this.text.map(function (item) {
                _this.draw_word(item.word, item.x, item.y);
            });
        }
    }]);

    return Font;
}();

/***/ })
/******/ ]);