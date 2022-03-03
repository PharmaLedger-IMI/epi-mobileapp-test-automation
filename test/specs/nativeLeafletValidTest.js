const leafletVaildBatch=require('../pageObjectsNativeApp/nativeLeafLetPage')
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')
const allureReporter = require('@wdio/allure-reporter').default

describe('ePI Automation Testing', () => {

    it('should open Patient Setting Scan Page', async () => {
        allureReporter.addFeature('Patient Setting Scan Page');
        await nativePatientPage.waitLaunchURL();
        await browser.pause(3500);
        await nativePatientPage.patientsettingsScan(patientSettingPage.blockchainval());
        await browser.pause(4000);
        await nativePatientPage.scan2DImageProcess();
        await browser.pause(5000);

    });

    xit('should open Valid LeafLet Batch Info Page', async () => {
        allureReporter.addFeature('LeafLet Batch Info Data');
        await leafletVaildBatch.waitTimeout();
        await browser.pause(4000);
        await leafletVaildBatch.leafletDetailsFetch();
        await browser.pause(4500);

    });

})