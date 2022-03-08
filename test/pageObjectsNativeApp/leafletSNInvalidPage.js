const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class LeafletSNInvalid{

    get inValidText(){
        return $("(//android.widget.TextView[@text='Failed to validate serial Number'])")
    }

    get productInfo(){
        return $("//android.widget.TextView[@text='Cosentyx']")
    }
    get ProductInfoDescription(){
        return $("//android.widget.TextView[@text='Cosentyx 150mg/ml 2x1 PFS AT']")
    }

    get leafletShieldBtn(){
        return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get batchInfo(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get leafletProdInfoDetails(){
        return $("(//android.view.View[@text='Expiry:26 - Sep - 2023Serial number:WRONGProduct code:09088884204609Batch number:WL6190'])")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletSNInvalidDetailsFetch(){

        // invalid leaflet text
        await this.inValidText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get product info text
        await this.productInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get product info description
        await this.ProductInfoDescription.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // click on leaflet shiled button icon
        await this.leafletShieldBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get text of batch info
        await this.batchInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get leaflet prod info data 
        await this.leafletProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const leafletInfoDetails=await this.leafletProdInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ leafletInfoDetails);
        const leafletInfo = leafletInfoDetails.split(':',"="," ");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfo);

        // logs output for expiry date, serial number, gtin number and batch number pattern
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]);

        // chai assertions on expiry date, serial number, gtin number and batch number pattern
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]).to.equal(browser.testData.prodCode);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]).to.equal(browser.testData.batchNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]).to.equal(browser.testData.serialNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]).to.equal(browser.testData.leafletExpiry);

    }
}

module.exports=new LeafletSNInvalid();