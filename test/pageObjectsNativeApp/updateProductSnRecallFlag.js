const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g


class UpdateProductSNRecallFlag{


get recalledTextBatch(){
    return $("//android.widget.TextView[@text='Batch Recalled']")
}

get recalledTxtMsg(){
    return $("(//android.app.Dialog/descendant::android.view.View)[5]")
}

get closeBtnMsg(){
    return $("//android.widget.Button[@text='Close']")
}

get prodInfoMsg(){
    return $("//android.widget.TextView[@text='Dolo-650']")
}

get leafletShieldInfoBtn(){
   return $("//android.widget.Image[@text='leaflet-verified']")
}

get productDescription(){
    return $("(//android.widget.TextView[@text=\"Dolo-650 Tablet 15's contains 'Paracetamol' which is a mild analgesic and fever reducer\"])");
}

get batchInfoTxtMsg(){
    return $("//android.widget.TextView[@text='Batch Info']")
}

get productLeafletInfoDetails(){
    return $("(//android.app.Dialog/descendant::android.view.View)[6]")
}

async waitTimeout(){
    await browser.pause(10000);
}

async leafletRecalledBatchFetch(){
    // recalled text message
    const recalledMsg=await this.recalledTxtMsg.getText();
    console.log(recalledMsg);
    await setTimeout(()=>{
        console.log("inside timeout");
    },2100);
   // close button click
    await this.closeBtnMsg.click();
    await setTimeout(()=>{
        console.log("inside timeout");
    },2100);
    // recalled text message 
    await this.recalledTextBatch.getText();
    await setTimeout(()=>{
        console.log("inside timeout");
    },2100);
    // product info message
    await this.prodInfoMsg.getText();
    await setTimeout(()=>{
        console.log("inside timeout");
    },2100);
    // get product description text
    await this.productDescription.getText();
    await setTimeout(()=>{
        console.log("inside timeout");
    },2100);
    // click on leaflet shield button
    await this.leafletShieldInfoBtn.click();
    await setTimeout(()=>{
        console.log("inside timeout");
    },2100);
    // btach info text message 
    await this.batchInfoTxtMsg.getText();
    await setTimeout(()=>{
        console.log("inside timeout");
    },2100);
    // leaflet product information details
    await this.productLeafletInfoDetails.getText();
    await setTimeout(()=>{
        console.log("inside timeout");
    },2100);

    expect(recalledMsg).to.equal(browser.testExpectations.batchRecallMessage);

    const LeafletInfoDetails=await this.productLeafletInfoDetails.getText();
    
    const LeafletInfo = LeafletInfoDetails.split(':',"=");
   
    console.log("Prod Info Details of Leaflet is: "+ LeafletInfo);

    // logs output for leafelt info for expiry date, serial number, gtin number, batch number pattern
    console.log(leafletInfoDetails.match(expiryDatePattern)[0]);
    console.log(leafletInfoDetails.match(serialNumberPattern)[0]);
    console.log(leafletInfoDetails.match(gtinPattern)[0]);
    console.log(leafletInfoDetails.match(batchNumberPattern)[0]);

    // chai assertions on expiry date, serial number, gtin number, batch number pattern
    expect(leafletInfoDetails.match(gtinPattern)[0]).to.equal(browser.testData.prodCode);
    expect(leafletInfoDetails.match(batchNumberPattern)[0]).to.equal(browser.testData.batchNumber);
    expect(leafletInfoDetails.match(serialNumberPattern)[0]).to.equal(browser.testData.serialNumber);
    //expect(leafletInfoDetails.match(expiryDatePattern)[0]).to.equal(browser.testData.leafletExpiry);
}

}
module.exports=new UpdateProductSNRecallFlag();