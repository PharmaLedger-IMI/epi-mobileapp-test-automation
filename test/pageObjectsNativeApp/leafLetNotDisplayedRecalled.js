const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

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
        await browser.pause(10000);
    }

    async leafletRecalledDetailsFetch(){
        //recalled text message
        await this.recalledText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // leaflet not displayed message
        await this.leafletNotDisplayedMessage.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // leaflet not displayed for product created 
        await this.leafletNotdisplayedProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const batchInfoDetails=await this.leafletNotdisplayedProdInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ batchInfoDetails);

    }


}
module.exports=new LeafletRecalled();