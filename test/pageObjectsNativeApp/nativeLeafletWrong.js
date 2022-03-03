const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class leafletWrong{

    get leafletWrongIconText(){
        return $("//android.widget.TextView[@text='Failed to validate serial Number']")
    }

    get leafletDisplayDetail(){
        return $("//android.widget.TextView[@text='Leaflet Not Displayed']")
    }

    get leafLetProdDetail(){
        return $("(//android.widget.TextView[@text=\"The leaflet for this product can't be displayed due to validation settings.\"])");
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletWrongDetailsFetch(){
        await this.leafletWrongIconText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        await this.leafletDisplayDetail.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        await this.leafLetProdDetail.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        const batchInfoDetails=await this.leafLetProdDetail.getText();
        console.log("Prod Info Details of Leaflet is: "+ batchInfoDetails);

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
module.exports=new leafletWrong();