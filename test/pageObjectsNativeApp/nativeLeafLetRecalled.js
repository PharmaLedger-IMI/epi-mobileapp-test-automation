class LeafletRecalled{

    get recalledText(){
        return $("//android.widget.TextView[@text='Recalled']")
    }

    get leafletMessage(){
        return $("//android.widget.TextView[@text='Leaflet Not Displayed']")
    }

    get leafletProdInfoDetails(){
        return $("(//android.widget.TextView[@text=\"The leaflet for this product can't be displayed due to validation settings.\"])")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletRecalledDetailsFetch(){
        await this.recalledText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.leafletMessage.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.leafletProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const batchInfoDetails=await this.leafletProdInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ batchInfoDetails);

    }


}
module.exports=new LeafletRecalled();