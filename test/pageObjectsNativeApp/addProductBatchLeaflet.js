const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class AddproductBatchLeafletPage{

    get productInfo(){
        return $("//android.widget.TextView[@text='Dolo-650']")
    }
    get productDescription(){
        return $("(//android.widget.TextView[@text=\"Dolo-650 Tablet 15's contains 'Paracetamol' which is a mild analgesic and fever reducer\"])");
    }

    get leafletVerifiedShiledBtn(){
        return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get batchInfo(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get productLeafletInfoDetails(){
        return $("(//android.app.Dialog/descendant::android.view.View)[6]")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async addProductBatchLeafletDetailsFetch(){
        //get text of product Info 
        await this.productInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        //get text of product information description
        await this.productDescription.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        //click on leaflet Shieled Button
        await this.leafletVerifiedShiledBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get batch info text
        await this.batchInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get leaflet product details information
        await this.productLeafletInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const leafletInfoDetails=await this.productLeafletInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ leafletInfoDetails);
        const leafletInfoFetch = leafletInfoDetails.replace(':',"=");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfoFetch);

        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);

        // log output for expiry date, serial number, gtin number and batch Number pattern
        console.log(leafletInfoDetails.match(expiryDatePattern)[0]);
        console.log(leafletInfoDetails.match(serialNumberPattern)[0]);
        console.log(leafletInfoDetails.match(gtinPattern)[0]);
        console.log(leafletInfoDetails.match(batchNumberPattern)[0]);
        // console.log(leafletInfoDetails.LeafletFetchData.LeafletInfo().match(expiryDatePattern)[0]);
        // console.log(leafletInfoDetails.LeafletFetchData.LeafletInfo().match(serialNumberPattern)[0]);
        // console.log(leafletInfoDetails.LeafletFetchData.LeafletInfo().match(gtinPattern)[0]);
        // console.log(leafletInfoDetails.LeafletFetchData.LeafletInfo().match(batchNumberPattern)[0]);

        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);

        // chai assertions on expiry date, serial number, gtin number and batch Number pattern
        expect(leafletInfoDetails.match(gtinPattern)[0]).to.equal(testData.prodCode);
        expect(leafletInfoDetails.match(batchNumberPattern)[0]).to.equal(testData.batchValue);
        expect(leafletInfoDetails.match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
       // expect(leafletInfoDetails.match(expiryDatePattern)[0]).to.equal(testData.expiryDate);
        // expect(leafletInfoDetails.LeafletFetchData.LeafletInfo().match(gtinPattern)[0]).to.equal(testData.prodCode);
        // expect(leafletInfoDetails.LeafletFetchData.LeafletInfo().match(batchNumberPattern)[0]).to.equal(testData.batchValue);
        // expect(leafletInfoDetails.LeafletFetchData.LeafletInfo().match(serialNumberPattern)[0]).to.equal(testData.batchSerialNumber);
        // expect(leafletInfoDetails.LeafletFetchData.LeafletInfo().match(expiryDatePattern)[0]).to.equal(testData.expiryDate);
    }
}

module.exports=new AddproductBatchLeafletPage();