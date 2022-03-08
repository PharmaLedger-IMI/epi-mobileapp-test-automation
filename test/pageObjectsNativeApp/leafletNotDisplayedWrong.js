const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class leafletWrong{

    get leafletWrongIconText(){
        return $("//android.widget.TextView[@text='Failed to validate serial Number']")
    }

    get leafletNotDisplayedText(){
        return $("//android.widget.TextView[@text='Leaflet Not Displayed']")
    }

    get leafLetNotDispalyedProdData(){
        return $("(//android.widget.TextView[@text=\"The leaflet for this product can't be displayed due to validation settings.\"])");
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletWrongDetailsFetch(){

        // get wrong text message
        await this.leafletWrongIconText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        // get leaflet not display message
        await this.leafletNotDisplayedText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        // get leaflet not dispalyed message
        await this.leafLetNotDispalyedProdData.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        const batchInfoDetails=await this.leafLetNotDispalyedProdData.getText();
        console.log("Prod Info Details of Leaflet is: "+ batchInfoDetails);

    }


}
module.exports=new leafletWrong();