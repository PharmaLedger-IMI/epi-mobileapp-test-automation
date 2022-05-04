const { remote } = require('webdriverio');

const path = require('path');

const sharp = require('sharp')

const fs = require('fs')

const bwipjs = require('bwip-js')

const barcode = '(01)53622270879197(17)240210(10)BU2356(21)259765'



// <iframe width="420" height="315" src="https://www.youtube.com/embed/giR-Sy7L8c0"></iframe>



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