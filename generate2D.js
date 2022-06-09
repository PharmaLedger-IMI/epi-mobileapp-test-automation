
const path = require('path');

const fs = require('fs')

const bwipjs = require('bwip-js')

const barcode = '(01)20475673138727(17)191213(10)EY5648(21)123456'
//const barcode = '(01)20475673138727'

bwipjs.toBuffer({

bcid: 'gs1datamatrix',

text: barcode, // Text to encode

backgroundcolor: 'ffffff',

padding: 65

}, function (err, png) {

if (err) {

console.log("error");

} else {

//fs.writeFileSync('/Users/PRATIKS1/Library/Android/sdk/emulator/resources/custom.png', png);

fs.writeFileSync('/Users/naveeng/AppData/Local/Android/Sdk/emulator/resources/custom.png', png);

console.log("image generated now");

}

});