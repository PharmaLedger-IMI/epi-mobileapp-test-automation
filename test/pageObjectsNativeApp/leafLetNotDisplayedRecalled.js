const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


class LeafletRecalled{

    get recalledText(){
        return $("//android.widget.TextView[@text='Recalled']")
    }

    get leafletNotDisplayedMessage(){
        return $("//android.widget.TextView[@text='Leaflet Not Displayed']")
    }

    get leafletNotdisplayedProdInfoDetails(){
        return $("(//android.widget.TextView[@text=\"The leaflet for this product can't be displayed due to validation settings.\"])")
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletRecalledDetailsFetch(){
        //recalled text message
        await this.recalledText.getText();
        await timeoutWait.setTimeoutTime(2);
        // leaflet not displayed message
        await this.leafletNotDisplayedMessage.getText();
        await timeoutWait.setTimeoutTime(2);
        // leaflet not displayed for product created 
        await this.leafletNotdisplayedProdInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);
        const batchInfoDetails=await this.leafletNotdisplayedProdInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ batchInfoDetails);

        await commonFunctions.leafletDetailsFetchAndValidateData(this.leafletNotdisplayedProdInfoDetails);

    }


}
module.exports=new LeafletRecalled();