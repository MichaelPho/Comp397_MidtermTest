"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            //background
            this.background = new createjs.Bitmap(config.Game.ASSETS.getResult("background"));
            this.addChild(this.background);
            //label section
            this.result1 = new objects.Label("blank", "12px", "Consolas", "#000000", 200, 300, true);
            this.result2 = new objects.Label("blank", "12px", "Consolas", "#000000", 430, 300, true);
            //dice and roll button
            this.roll = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult("diceBlank"), 200, 200, true);
            this.dice2 = new objects.Button(config.Game.ASSETS.getResult("diceBlank"), 430, 200, true);
            //          this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var _this = this;
            // Button and number result section
            this.addChild(this.roll);
            this.addChild(this.result1);
            this.addChild(this.result2);
            //dice section
            this.addChild(this.dice1);
            this.addChild(this.dice2);
            // section for spinning
            this.roll.on("click", function () {
                var outCome = [1, 1];
                for (var spin2 = 0; spin2 < 5000; spin2++) {
                    for (var spin = 0; spin < 2; spin++) {
                        var result = Math.floor((Math.random() * 6) + 1);
                        //assign result
                        switch (result) {
                            case 1:
                                outCome[spin] = 1;
                                break;
                            case 2:
                                outCome[spin] = 2;
                                break;
                            case 3:
                                outCome[spin] = 3;
                                break;
                            case 4:
                                outCome[spin] = 4;
                            case 5:
                                outCome[spin] = 5;
                            case 6:
                                outCome[spin] = 6;
                        }
                    }
                }
                _this.result1.setText(outCome[0].toString());
                _this.removeChild(_this.dice1);
                _this.dice1 = new objects.Button(config.Game.ASSETS.getResult("dice" + outCome[0].toString()), 200, 200, true);
                _this.addChild(_this.dice1);
                _this.result2.setText(outCome[1].toString());
                _this.removeChild(_this.dice2);
                _this.dice2 = new objects.Button(config.Game.ASSETS.getResult("dice" + outCome[1].toString()), 430, 200, true);
                _this.addChild(_this.dice2);
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map