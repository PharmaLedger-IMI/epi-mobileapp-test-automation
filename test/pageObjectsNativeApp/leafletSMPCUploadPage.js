const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


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
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletSMPCUploadDetailsFetch(){
    
        // get text for product info
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get product information description
        await this.ProductInfoDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet sheild button icon
        await this.leafletShieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get text of batch info 
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get text of leaflet type
        await this.leafletTypeDetail.getText();
        await timeoutWait.setTimeoutTime(2);
        // get text of epi leaflet information
        await this.leafletSMPCUploadText.getText();
        await timeoutWait.setTimeoutTime(2);
        // get text of SMPC leaflet prod information 
        await this.leafletSMPCProdInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);

        await commonFunctions.leafletDetailsFetchAndValidateData(this.leafletSMPCProdInfoDetails);

    }
}
module.exports=new LeafletSMPCUploadPage();