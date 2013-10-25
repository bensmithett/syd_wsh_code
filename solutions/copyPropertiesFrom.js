function copyPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source)
    .forEach(function (key) {
        Object.defineProperty(target, key,
            Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
module.exports = copyPropertiesFrom;