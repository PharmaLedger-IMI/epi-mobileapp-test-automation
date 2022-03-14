const commonFunctions = require('../utils/commonutilitiesFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


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
        await timeoutWait.setTimeoutwait(30)
    }

    async addProductBatchLeafletDetailsFetch(){
        //get text of product Info 
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        //get text of product information description
        await this.productDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        //click on leaflet Shieled Button
        await this.leafletVerifiedShiledBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get batch info text
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet product details information
        await this.productLeafletInfoDetails.getText();
        await timeoutWait.setTimeoutTime(3);
        
        await timeoutWait.setTimeoutTime(3);
        
        await commonFunctions.leafletDetailsFetchAndValidateData(this.productLeafletInfoDetails);
      
    }
}

module.exports=new AddproductBatchLeafletPage();