const LeafletFetchData = require('../utils/commonutilitiesFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


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
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletDetailsFetch(){
        //get leaflet text info data
       
        await this.leafletTextName.getText();
        await timeoutWait.setTimeoutTime(2);
        // click on leaflet shiled button icon
        await this.leafletshieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get text on batch info 
        await this.bacthInfoVal.getText();
        await timeoutWait.setTimeoutTime(2);
        // get text of leaflet details 
        await this.leafLetBatchInfoVal.getText();
        await timeoutWait.setTimeoutTime(2);

        await commonFunctions.leafletDetailsFetchAndValidateData(this.leafLetBatchInfoVal);

    }

}

module.exports=new LeafLetPage();