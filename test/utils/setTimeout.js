class TimeoutWait {

     // waits until element is located with specified seconds
    async waitForElement(element, seconds) {
        try {
            for (let i = 0; i < seconds; i++) {
                await browser.waitUntil(
                    async () => (await element),
                    {
                        timeout: this.seconds,
                    }
                );
                await setTimeout(() => {
                    console.log("inside timeout");
                }, 1000);
            }
        } catch (err) {
            console.log("could not click on element" + err);
        }

    }
// waits until element is located with 60 seconds
    async waitForElement(element) {

        await browser.waitUntil(
            async () => (await element),
            {
                timeout: 60000,
            }
        );

    }

    // To wait for specified time to load the application
    async setTimeoutWait(seconds){

        try{
            for(let i = 0; i < seconds; i++){
                await browser.pause(1000);
            }
        }catch(err){
            console.log("couln't wait"+ err);
        }
    }
//To wait for specified time to load the application
    async setTimeoutTime(seconds){

        try{
            for(let i = 0; i < seconds; i++){
                await setTimeout(() => {
                    console.log("inside timeout");
                }, 1000);
            }
        }catch(err){
            console.log("couln't wait"+ err);
        }
    }
   
}

module.exports = new TimeoutWait();