const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class RecalledBatchLeaflet{

    get recalledTextBatch(){
        return $("//android.widget.TextView[@text='Batch Recalled']")
    }

    get recalledTxtMsg(){
        return $("//android.widget.TextView[@text='Tim said its recall']")
    }

    get closeBtnMsg(){
        return $("//android.widget.Button[@text='Close']")
    }

    get prodInfoMsg(){
        return $("//android.widget.TextView[@text='Cosentyx']")
    }

    get leafletShieldInfoBtn(){
       return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get batchInfoTxtMsg(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get leafletProdInfoDetails(){
        return $("//android.view.View[@text='Expiry:26 - Sep - 2023Serial number:123456Product code:09088884204609Batch number:WL6190']")
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
        await this.leafletProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);

        expect(recalledMsg).to.equal(browser.testExpectations.batchRecallMessage);

        const LeafletInfoDetails=await this.leafletProdInfoDetails.getText();
        
        const LeafletInfo = LeafletInfoDetails.split(':');
       
        console.log("Prod Info Details of Leaflet is: "+ LeafletInfo);

        // logs output for leafelt info for expiry date, serial number, gtin number, batch number pattern
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]);

        // chai assertions on expiry date, serial number, gtin number, batch number pattern
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]).to.equal(browser.testData.prodCode);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]).to.equal(browser.testData.batchNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]).to.equal(browser.testData.serialNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]).to.equal(browser.testData.leafletExpiry);
    }

}
module.exports=new RecalledBatchLeaflet();