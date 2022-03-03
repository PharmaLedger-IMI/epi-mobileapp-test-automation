const chaiAssert = require('chai').expect

class leafletWrong{

    get leafletWrongIconText(){
        return $("//android.widget.TextView[@text='Failed to validate serial Number']")
    }

    get leafletDisplayDetail(){
        return $("//android.widget.TextView[@text='Leaflet Not Displayed']")
    }

    get leafLetProdDetail(){
        return $("(//android.widget.TextView[@text=\"The leaflet for this product can't be displayed due to validation settings.\"])");
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletWrongDetailsFetch(){
        await this.leafletWrongIconText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        await this.leafletDisplayDetail.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        await this.leafLetProdDetail.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        const batchInfoDetails=await this.leafLetProdDetail.getText();
        console.log("Prod Info Details of Leaflet is: "+ batchInfoDetails);

    }


}
module.exports=new leafletWrong();