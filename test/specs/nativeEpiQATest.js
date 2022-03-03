const nativeLoginPage = require('../pageObjectsNativeApp/nativeLoginPage')
const nativePatientPage= require('../pageObjectsNativeApp/patientSettingPage')
const nativeLeafLetPage= require('../pageObjectsNativeApp/nativeLeafLetPage')
const nativeLeafLetWrong= require('../pageObjectsNativeApp/nativeLeafletWrong')
const leafLetDecommissioned= require('../pageObjectsNativeApp/nativeLeafLetDecommisioned')
const leafLetRecalled=require('../pageObjectsNativeApp/nativeLeafLetRecalled')
const leafletRecalledBatch=require('../pageObjectsNativeApp/recalledBatchLeaflet')
const patientSettingPage = require('../pageObjectsNativeApp/patientSettingPage')
const allureReporter = require('@wdio/allure-reporter').default

describe('ePI Automation Testing', () => {
    
    
    xit('should open Patient Wallet', async() => {
        allureReporter.addFeature('Patient Wallet Login');
        await nativeLoginPage.openWallet();
        await browser.pause(5000);
    });

    it('should open Patient Setting Scan Page', async() => {
        allureReporter.addFeature('Patient Setting Scan Page');
        await nativePatientPage.waitLaunchURL();
        await browser.pause(3500);
        await nativePatientPage.patientsettingsScan(patientSettingPage.blockchainval());
        await browser.pause(4000);
        await nativePatientPage.scan2DImageProcess();
        await browser.pause(5000);

    });

    xit('should open Valid LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Batch Info Data');
        await nativeLeafLetPage.waitTimeout();
        await browser.pause(4000);
        await nativeLeafLetPage.leafletDetailsFetch();
        await browser.pause(4500); 

    });

    
    xit('should open Wrong LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Wrong Batch Info Data');
        await nativeLeafLetWrong.waitTimeout();
        await browser.pause(4000);
        await nativeLeafLetWrong.leafletWrongDetailsFetch();
        await browser.pause(5000);
    });

    
    xit('should open Decomissioned LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Decommisioned Batch Info Data');
        await leafLetDecommissioned.waitTimeoutTime;
        await browser.pause(4000);
        await leafLetDecommissioned.leafletDecommisonedDetailsFetch();
        await browser.pause(4500); 

    });

    
    xit('should open Recalled LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        await leafLetRecalled.waitTimeout;
        await browser.pause(4000);
        await leafLetRecalled.leafletRecalledDetailsFetch();
        await browser.pause(4500); 

    });

    it('should open Recalled LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Recalled Batch Info Data');
        await leafletRecalledBatch.waitTimeout;
        await browser.pause(4000);
        await leafletRecalledBatch.leafletRecalledBatchFetch();
        await browser.pause(4500); 

    });

})