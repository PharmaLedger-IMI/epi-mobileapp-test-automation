// const testData=require('../testdata/myjsonFile.json')
const expect=require('chai').expect
const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
const batchNumberPattern = /(?<=Batch number:).*/g

class RecalledBatchLeaflet{

    get recalledTextBatch(){
        return $("//android.widget.TextView[@text='Batch Recalled']")
    }

    get recalledTxtMsg(){
        return $("//android.widget.TextView[@text='Tim said its recall']")
    }

    get closeBtnMsg(){
        return $("//android.widget.Button[@text='Close']")
    }

    get prodInfoMsg(){
        return $("//android.widget.TextView[@text='Cosentyx']")
    }

    get leafletShieldInfoBtn(){
       return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get batchInfoTxtMsg(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get leafletProdInfoDetails(){
        return $("//android.view.View[@text='Expiry:26 - Sep - 2023Serial number:123456Product code:09088884204609Batch number:WL6190']")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    

    async leafletRecalledBatchFetch(){
        const recalledMsg=await this.recalledTxtMsg.getText();
        console.log(recalledMsg);
        expect(recalledMsg).to.equal(browser.testExpectations.batchRecallMessage);
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
       
        await this.closeBtnMsg.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.recalledTextBatch.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.prodInfoMsg.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.leafletShieldInfoBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.batchInfoTxtMsg.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        await this.leafletProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        const LeafletInfoDetails=await this.leafletProdInfoDetails.getText();
        
        const LeafletInfo = LeafletInfoDetails.split(':');
       
        console.log("Prod Info Details of Leaflet is: "+ LeafletInfo);

        console.log(LeafletInfoDetails.match(expiryDatePattern)[0]);
        console.log(LeafletInfoDetails.match(serialNumberPattern)[0]);
        console.log(LeafletInfoDetails.match(gtinPattern)[0]);
        console.log(LeafletInfoDetails.match(batchNumberPattern)[0]);

       expect(LeafletInfoDetails.match(gtinPattern)[0]).to.equal(browser.testExpectations.prodCode);
       expect(LeafletInfoDetails.match(batchNumberPattern)[0]).to.equal(browser.testExpectations.batchNumber);
       expect(LeafletInfoDetails.match(serialNumberPattern)[0]).to.equal(browser.testExpectations.serialNumber);
       expect(LeafletInfoDetails.match(expiryDatePattern)[0]).to.equal(browser.testExpectations.leafletExpiry);

    }

 


}
module.exports=new RecalledBatchLeaflet();