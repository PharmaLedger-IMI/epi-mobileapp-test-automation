const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


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
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletDecommisonedDetailsFetch(){

        // get decommisoned text
        await this.decomissionedInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get product info text
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled icon
        await this.shieldInfo.click();
        await timeoutWait.setTimeoutTime(2);
        // get batch info text
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        await this.batchInfoDetailsData.getText();
        await timeoutWait.setTimeoutTime(2);

        await commonFunctions.leafletDetailsFetchAndValidateData(this.batchInfoDetailsData);


    }
}
module.exports=new LeafletDecomissioned();