function StringBuilder() {
    var buffer = [];
    this.add = function (str) {
        buffer.push(str);
    };
    this.toString = function () {
        return buffer.join('');
    };
}
module.exports = StringBuilder;