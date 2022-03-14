const LeafletFetchData = require('../utils/utilitiesReuseFunctions')
const testData = require('../testdata/testExpectations.json')
const expect = require('chai').expect
const timeoutWait=require('../utils/setTimeout')


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
        await timeoutWait.setTimeoutwait(30);

    }

    async leafletEPIAndSMPCUploadDetailsFetch(){
    
        //get text on product information
        await this.productInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get product information description
        await this.ProductInfoDescription.getText();
        await timeoutWait.setTimeoutTime(2);
        //click on leaflet shield button
        await this.leafletShieldBtn.click();
        await timeoutWait.setTimeoutTime(2);
        // get batch info text
        await this.batchInfo.getText();
        await timeoutWait.setTimeoutTime(2);
        // get leaflet Type detail
        await this.leafletTypeDetail.getText();
        await timeoutWait.setTimeoutTime(2);
        //get text information of EPI leaflet 
        await this.leafletEPIUploadText.getText();
        await timeoutWait.setTimeoutTime(2);
        // select leaflet Type
        await this.SelectleafletType.click();
        await timeoutWait.setTimeoutTime(2);
        //get leaflet type text
        await this.SelectleafletTypeText.getText();
        await timeoutWait.setTimeoutTime(2);
        //get leaflet Product information details text
        await this.leafletProdInfoDetails.getText();
        await timeoutWait.setTimeoutTime(2);

        await commonFunctions.leafletDetailsFetchAndValidateData(this.leafletProdInfoDetails);


    }
}
module.exports=new LeafLetEPISMPCUploadPage();