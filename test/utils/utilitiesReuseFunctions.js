class UtilitiesReusableFunctions{

    async LeafletInfo(){

        const expiryDatePattern = /(?<=Expiry:)(.*)(?=Serial)/g
        const serialNumberPattern = /(?<=Serial number:)(.*)(?=Product)/g
        const gtinPattern = /(?<=Product code:)(.*)(?=Batch)/g
        const batchNumberPattern = /(?<=Batch number:).*/g

    }

     
}
module.exports=new UtilitiesReusableFunctions();