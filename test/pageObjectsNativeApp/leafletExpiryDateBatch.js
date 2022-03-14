const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


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
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletExpiryDateBatchDetailsFetch(){
        //get text of Incorrect expiry date
        await this.incorrectExpiryText.getText();
        await timeoutWait.setTimeoutTime(2);
        //get text of product information
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        //get text on product information description
        await this.ProductInfoDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled button
        await this.leafletShieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get batch info text
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet product details information
        await this.leafletProdInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);

        await commonFunctions.leafletDetailsFetchAndValidateData(this.leafletProdInfoDetails);

    }
}
module.exports=new LeafletExpiryDate();