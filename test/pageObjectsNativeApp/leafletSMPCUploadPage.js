const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class LeafletSMPCUploadPage{

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

    get leafletTypeDetail(){
        return $("(//android.view.View[@text='SMPC'])[3]")
    }

    get leafletSMPCUploadText(){
        return $("(//android.widget.TextView[@text='ENTRESTO (sacubitril and valsartan) is a combination of a neprilysin inhibitor and an angiotensin II receptor blocker.'])")
    }

    get leafletSMPCProdInfoDetails(){
        return $("(//android.view.View[@text='Expiry:09 - Jan - 2002Serial number:654321Product code:09088884204609Batch number:WL6190'])")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletSMPCUploadDetailsFetch(){
    
        // get text for product info
        await this.productInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get product information description
        await this.ProductInfoDescription.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // click on leaflet sheild button icon
        await this.leafletShieldBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get text of batch info 
        await this.batchInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get text of leaflet type
        await this.leafletTypeDetail.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get text of epi leaflet information
        await this.leafletSMPCUploadText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        // get text of SMPC leaflet prod information 
        await this.leafletSMPCProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const leafletInfoDetails=await this.leafletSMPCProdInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ leafletInfoDetails);
        const leafletInfo = leafletInfoDetails.split(':',"="," ");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfo);

        // log output for expiry date, serial number, gtin number and batch number pattern
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
module.exports=new LeafletSMPCUploadPage();