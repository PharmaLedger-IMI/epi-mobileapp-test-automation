const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


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
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletSNInvalidDetailsFetch(){

        // invalid leaflet text
        await this.inValidText.getText();
        await timeoutWait.setTimeoutTime(2);
        // get product info text
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get product info description
        await this.ProductInfoDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled button icon
        await this.leafletShieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get text of batch info
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet prod info data 
        await this.leafletProdInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);

        await commonFunctions.leafletDetailsFetchAndValidateData(this.leafletProdInfoDetails);


    }
}

module.exports=new LeafletSNInvalid();