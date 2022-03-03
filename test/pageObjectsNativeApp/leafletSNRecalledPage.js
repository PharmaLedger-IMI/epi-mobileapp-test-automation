class LeafletSNRecalled{

    get recalledText(){
        return $("//android.widget.TextView[@text='Recalled']")
    }

    get productInfo(){
        return $("//android.widget.TextView[@text='Cosentyx']")
    }
    get ProductInfoDetails(){
        return $("//android.widget.TextView[@text='Cosentyx 150mg/ml 2x1 PFS AT']")
    }

    get leafletShieldBtn(){
        return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get batchInfo(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get leafletProdInfoDetails(){
        return $("//android.view.View[@text='Expiry:26 - Sep - 2023Serial number:654321Product code:09088884204609Batch number:WL6190']")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletRecalledDetailsFetch(){
        await this.recalledText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.productInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.ProductInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.ProductInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.leafletShieldBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.batchInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.leafletProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const leafletInfoDetails=await this.leafletProdInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ leafletInfoDetails);
        const leafletInfo = leafletInfoDetails.split(':',"="," ");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfo);

    }


}
module.exports=new LeafletSNRecalled();