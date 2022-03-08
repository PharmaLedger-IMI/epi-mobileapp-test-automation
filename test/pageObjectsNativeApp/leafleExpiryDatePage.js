const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class LeafletExpiryDate{

    get incorrectExpiryText(){
        return $("(//android.widget.TextView[@text='Incorrect expiry date on pack'])")
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
        return $("(//android.view.View[@text='Expiry:09 - Jan - 2002Serial number:654321Product code:09088884204609Batch number:WL6190'])")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletExpiryDateBatchDetailsFetch(){
        //get text of Incorrect expiry date
        await this.incorrectExpiryText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        //get text of product information
        await this.productInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        //get text on product information description
        await this.ProductInfoDescription.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // click on leaflet shiled button
        await this.leafletShieldBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get batch info text
        await this.batchInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get leaflet product details information
        await this.leafletProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const leafletInfoDetails=await this.leafletProdInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ leafletInfoDetails);
        const leafletInfo = leafletInfoDetails.split(':',"="," ");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfo);

        // log output for expiry date, serial number, gtin number and batch Number pattern
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]);

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]).to.equal(browser.testData.prodCode);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]).to.equal(browser.testData.batchNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]).to.equal(browser.testData.serialNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]).to.equal(browser.testData.leafletExpiry);

    }
}
module.exports=new LeafletExpiryDate();