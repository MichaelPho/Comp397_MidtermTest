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
    var image = /** @class */ (function (_super) {
        __extends(image, _super);
        // constructor
        function image(imagePath, x, y, isCentered) {
            if (imagePath === void 0) { imagePath = config.Game.ASSETS.getResult("button"); }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, imagePath, x, y, isCentered) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        image.prototype._checkBounds = function () {
        };
        // PUBLIC METHODS
        image.prototype.MouseOver = function () {
            this.alpha = 0.7;
        };
        image.prototype.MouseOut = function () {
            this.alpha = 1.0;
        };
        /**
         * This function is used for initialization
         *
         * @memberof Button
         */
        image.prototype.Start = function () {
            this.name = "Button";
        };
        image.prototype.Update = function () {
        };
        image.prototype.Reset = function () {
        };
        return image;
    }(objects.GameObject));
    objects.image = image;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map