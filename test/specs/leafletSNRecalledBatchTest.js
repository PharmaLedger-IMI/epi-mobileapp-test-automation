const leafletSNRecalledBatch=require('../pageObjectsNativeApp/leafletSNRecalledPage')
const allureReporter = require('@wdio/allure-reporter').default
const nativePatientPage = require('../pageObjectsNativeApp/patientSettingPage')

describe('ePI Native App Mobile Leaflet Automation Testing', () => {
    
    it('should open Patient Setting Scan Page', async() => {
        allureReporter.addFeature('Patient Setting Scan Page');
        await nativePatientPage.waitLaunchURL();
        await browser.pause(3500);
        await nativePatientPage.patientsettingsScan(patientSettingPage.blockchainval());
        await browser.pause(4000);
        await nativePatientPage.scan2DImageProcess();
        await browser.pause(5000);

    });

    it('should open Wrong LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Wrong Batch Info Data');
        await leafletSNRecalledBatch.waitTimeout();
        await browser.pause(4000);
        await leafletSNRecalledBatch.leafletSNRecalledDetailsFetch();
        await browser.pause(5000);

});

});