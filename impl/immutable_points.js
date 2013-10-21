// Super-constructor
function Point(x, y) {
    this.x = x;
    this.y = y;
    if (this.constructor === Point) {
        Object.freeze(this);
    }
}
Point.prototype.toString = function () {
    return '('+this.x+', '+this.y+')';
};    

// Sub-constructor
function ColorPoint(x, y, color) {
    Point.call(this, x, y);
    this.color = color;
    if (this.constructor === ColorPoint) {
        Object.freeze(this);
    }
}
ColorPoint.prototype = Object.create(Point.prototype);
ColorPoint.prototype.constructor = ColorPoint;
ColorPoint.prototype.toString = function () {
    return this.color+' '+Point.prototype.toString.call(this);
};

exports.Point = Point;
exports.ColorPoint = ColorPoint;