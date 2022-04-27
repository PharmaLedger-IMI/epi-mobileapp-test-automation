const fs = require('fs')

const bwipjs = require('bwip-js')

const barcode = '(01)44373623596132(17)280115(10)OI1970(21)298275'



bwipjs.toBuffer({

    bcid: 'gs1datamatrix',

    text: barcode, // Text to encode

    backgroundcolor: 'ffffff',

    padding: 65

}, function (err, png) {

    if (err) {

        console.log("error");

    } else {

        fs.writeFileSync('/Users/naveeng/AppData/Local/Android/Sdk/emulator/resources/custom.png', png);

        console.log("image generated now");

    }

});