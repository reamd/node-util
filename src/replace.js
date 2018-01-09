/**
 * Created by reamd on 2018/1/9.
 */
let fs = require('fs');

let someFile = './page.css'

fs.readFile(someFile, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var num = 0;

    var result = data.replace(/:([^:;]*)rem/g, function (m,v) {
        num++;
        var tRes = ':' + (v * 16) + 'px';
        console.log(tRes);
        return tRes;
    });

    console.log('总计替换了'+ num +'个');
    fs.writeFile(someFile.replace(/.css/i, '.new.css'), result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});