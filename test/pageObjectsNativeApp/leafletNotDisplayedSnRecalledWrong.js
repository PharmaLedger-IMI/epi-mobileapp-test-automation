const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


class leafletWrong{

    get leafletWrongIconText(){
        return $("//android.widget.TextView[@text='Failed to validate serial Number']")
    }

    get leafletNotDisplayedText(){
        return $("//android.widget.TextView[@text='Leaflet Not Displayed']")
    }

    get leafLetNotDisplayedProdData(){
        return $("(//android.widget.TextView[@text=\"The leaflet for this product can't be displayed due to validation settings.\"])");
    }

    async waitTimeout(){
        await timeoutWait.setTimeoutwait(30);
    }

    async leafletWrongDetailsFetch(){

        // get wrong text message
        await this.leafletWrongIconText.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet not display message
        await this.leafletNotDisplayedText.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet not dispalyed message
        await this.leafLetNotDisplayedProdData.getText();
        await timeoutWait.setTimeoutTime(2);
        const batchInfoDetails=await this.leafLetNotDisplayedProdData.getText();
        console.log("Prod Info Details of Leaflet is: "+ batchInfoDetails);


    }


}
module.exports=new leafletWrong();