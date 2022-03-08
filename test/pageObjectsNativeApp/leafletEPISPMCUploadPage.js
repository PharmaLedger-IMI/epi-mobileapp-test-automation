const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect

class LeafLetEPISMPCUploadPage{

    get productInfo(){
        return $("//android.widget.TextView[@text='Cosentyx']")
    }
    get ProductInfoDescription(){
        return $("//android.widget.TextView[@text='Cosentyx 150mg/ml 2x1 PFS AT']")
    }

    get leafletShieldBtn(){
        return $("//android.widget.Image[@text='leaflet-verified']")
    }

    get batchInfo(){
        return $("//android.widget.TextView[@text='Batch Info']")
    }

    get leafletTypeDetail(){
        return $("(//android.view.View[@text='SMPC'])[3]")
    }

    get leafletEPIUploadText(){
        return $("(//android.widget.TextView[@text='ENTRESTO (sacubitril and valsartan) is a combination of a neprilysin inhibitor and an angiotensin II receptor blocker.'])")
    }

    get SelectleafletType(){
        return $("(//android.view.View[@package='eu.pharmaledger.epi'])[38]")
    }

    get SelectleafletTypeText(){
        return $("(//android.view.View[@text='Leaflet'])[3]")
    }

    get leafletProdInfoDetails(){
        return $("(//android.view.View[@text='Expiry:26 - Sep - 2023Serial number:654321Product code:09088884204609Batch number:WL6190'])")
    }

    async waitTimeout(){
        await browser.pause(10000);
    }

    async leafletEPIAndSMPCUploadDetailsFetch(){
    
        //get text on product information
        await this.productInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get product information description
        await this.ProductInfoDescription.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        //click on leaflet shield button
        await this.leafletShieldBtn.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get batch info text
        await this.batchInfo.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        // get leaflet Type detail
        await this.leafletTypeDetail.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);
        //get text information of EPI leaflet 
        await this.leafletEPIUploadText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        // select leaflet Type
        await this.SelectleafletType.click();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        //get leaflet type text
        await this.SelectleafletTypeText.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },3100);
        //get leaflet Product information details text
        await this.leafletProdInfoDetails.getText();
        await setTimeout(()=>{
            console.log("inside timeout");
        },2100);

        const leafletInfoDetails=await this.leafletProdInfoDetails.getText();
        console.log("Prod Info Details of Leaflet is: "+ leafletInfoDetails);
        const leafletInfo = leafletInfoDetails.split(':',"="," ");
        console.log("Batch Info Details of Leaflet is: "+ leafletInfo);

        // log details on expiry date,serial Number, gtin number and Batch Number pattern
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]);
        console.log(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]);

        // chai assertions on expiry date,serial Number, gtin number and Batch Number pattern
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(gtinPattern)[0]).to.equal(browser.testData.prodCode);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(batchNumberPattern)[0]).to.equal(browser.testData.batchNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(serialNumberPattern)[0]).to.equal(browser.testData.serialNumber);
        expect(LeafletFetchData.LeafletInfo().leafletInfoDetails.match(expiryDatePattern)[0]).to.equal(browser.testData.leafletExpiry);

    }
}
module.exports=new LeafLetEPISMPCUploadPage();