const expect = require('chai').expect
const configData= require('../testdata/config.json')

const prodInfo="epi-auto-12-12-2022";
console.log(expect(prodInfo).includes(configData.prodName))

