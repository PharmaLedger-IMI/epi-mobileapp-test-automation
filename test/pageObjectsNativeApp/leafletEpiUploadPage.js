const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


class LeafletEPIUpload{
    

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

    get leafletEPIUploadText(){
        return $("(//android.widget.TextView[@text='ENTRESTO (sacubitril and valsartan) is a combination of a neprilysin inhibitor and an angiotensin II receptor blocker.'])")
    }

    get leafletProdInfoDetails(){
        return $("(//android.view.View[@text='Expiry:09 - Jan - 2002Serial number:654321Product code:09088884204609Batch number:WL6190'])")
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletEPIUploadDetailsFetch(){
    
        // get text of product info
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get text of product info description
        await this.ProductInfoDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled button icon
        await this.leafletShieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get text of batch info
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        //get text information of EPI Leaflet  
        await this.leafletEPIUploadText.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.leafletProdInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);

        await commonFunctions.leafletDetailsFetchAndValidateData(this.leafletProdInfoDetails);



    }
}
module.exports=new LeafletEPIUpload();