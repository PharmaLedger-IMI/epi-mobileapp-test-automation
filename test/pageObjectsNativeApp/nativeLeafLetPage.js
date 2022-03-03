const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class LeafLetPage{

    get leafletShieldName(){
        return $("//android.widget.TextView[@text='JanRel']")
    }

    get leafletDetailBtn(){
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
        await this.leafletShieldName.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.leafletDetailBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.bacthInfoVal.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const batchInfoDetails=await this.leafLetBatchInfoVal.getText();
        const bacthInfo = batchInfoDetails.split(':');
        console.log("Batch Info Details of Leaflet is: "+ bacthInfo);

        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]);

        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]).to.equal(browser.testData.prodCode);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]).to.equal(browser.testData.batchNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]).to.equal(browser.testData.serialNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]).to.equal(browser.testData.leafletExpiry);

    }

}

module.exports=new LeafLetPage();