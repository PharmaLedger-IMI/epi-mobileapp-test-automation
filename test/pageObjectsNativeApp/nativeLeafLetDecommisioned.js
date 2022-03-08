const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class LeafletDecomissioned{

    get decomissionedInfo(){
        return $("//android.widget.TextView[@text='Decommissioned']")
    }

    get productInfo(){
        return $("//android.widget.TextView[@text='Cosentyx']")
    }

    get shieldInfo(){
        return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get batchInfo(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get batchInfoDetailsData(){
        return $("//android.view.View[@text='Expiry:26 - Sep - 2023Serial number:66554433Product code:09088884204609Batch number:WL6190']")
    }

    async waitTimeoutTime(){
        await browser.pause(10000);
    }

    async leafletDecommisonedDetailsFetch(){

        // get decommisoned text
        await this.decomissionedInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        // get product info text
        await this.productInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        // click on leaflet shiled icon
        await this.shieldInfo.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        // get batch info text
        await this.batchInfo.getText();
        const batchInfoDetails=await this.batchInfoDetailsData.getText();
        const bacthInfo = batchInfoDetails.split(':');
        console.log("Batch Info Details of Leaflet is: "+ bacthInfo);

        // logs output for expiry date, serial number, gtin number, batch number pattern
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]);

        //chai assertions on expiry date, serial number, gtin number, batch number pattern
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]).to.equal(browser.testData.prodCode);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]).to.equal(browser.testData.batchNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]).to.equal(browser.testData.serialNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]).to.equal(browser.testData.leafletExpiry);

    }
}
module.exports=new LeafletDecomissioned();