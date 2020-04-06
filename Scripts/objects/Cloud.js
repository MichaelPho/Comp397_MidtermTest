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
var objects;
(function (objects) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("Cloud"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        Cloud.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        Cloud.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset;
            }
        };
        // PUBLIC METHODS
        Cloud.prototype.Start = function () {
            this.alpha = 0.5; // set transparency to 50$
            // this._verticalSpeed = 2; // 2 px per frame
            // this.velocity = new Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Cloud.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Cloud.prototype.Reset = function () {
            this._verticalSpeed = util.Mathf.RandomRange(5, 10); // 2 px per frame
            this._horizonSpeed = util.Mathf.RandomRange(-2, 2);
            this.velocity = new objects.Vector2(this._horizonSpeed, this._verticalSpeed);
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            var randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            this.position = new objects.Vector2(randomX, randomY);
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=Cloud.js.map