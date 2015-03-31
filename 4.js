String.prototype.render = function(obj) {
    str = this;
    for (var key in obj) {
        var reg = new RegExp('\\$\\{' + key + '}');
        str = str.replace(reg, obj[key]);
    }
    return str;
}
var greeting = 'my name is ${name},age ${age}';
var result = greeting.render({
    name: 'XiaoMing',
    age: 11
});
console.log(result);

/*
阿里的一道笔试题
 */