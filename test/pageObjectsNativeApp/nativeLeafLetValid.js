const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class LeafLetPage{

    get leafletTextName(){
        return $("//android.widget.TextView[@text='JanRel']")
    }

    get leafletshieldBtn(){
        return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get bacthInfoVal(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get leafLetBatchInfoVal(){
        return $("//android.view.View[@text='Expiry:31 - Jan - 2023Serial number:123456Product code:04290931025517Batch number:FM7660']")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletDetailsFetch(){
        //get leaflet text info data
        await this.leafletTextName.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // click on leaflet shiled button icon
        await this.leafletshieldBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get text on batch info 
        await this.bacthInfoVal.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get text of leaflet details 
        await this.leafLetBatchInfoVal.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const batchInfoDetails=await this.leafLetBatchInfoVal.getText();
        const bacthInfo = batchInfoDetails.split(':');
        console.log("Batch Info Details of Leaflet is: "+ bacthInfo);

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

module.exports=new LeafLetPage();