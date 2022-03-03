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
        await browser.pause(10000);
    }

    async leafletDecommisonedDetailsFetch(){
        await this.decomissionedInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        await this.productInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        await this.shieldInfo.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        await this.batchInfo.getText();
        const batchInfoDetails=await this.batchInfoDetailsData.getText();
        const bacthInfo = batchInfoDetails.split(':');
        console.log("Batch Info Details of Leaflet is: "+ bacthInfo);

    }
}
module.exports=new LeafletDecomissioned();