const LoginPage = require('../pageObjectsAppium/loginPageTest')
const PatientSettingPage= require('../pageObjectsAppium/patientSettingScan')
const LeafLetPage= require('../pageObjectsAppium/leafLetPages')
const allureReporter = require('@wdio/allure-reporter').default

describe('ePI Automation Testing', () => {
    
    xit('should open ePI landing page', async () => {

        allureReporter.addFeature('Landing Page');
        allureReporter.addSeverity('Critical');
         await LoginPage.open();
         await browser.pause(4000);

    });

    it('should open Patient Wallet', async() => {
        allureReporter.addFeature('Patient Wallet Login');
        await LoginPage.openChromeSetUP(LoginPage.epiqaUrl());
        await browser.pause(4000);
        await LoginPage.patientWalletTest();
        await browser.pause(4000);

    });

    it('should open Patient Setting Scan Page', async() => {
        allureReporter.addFeature('Patient Setting Scan Page');
        await PatientSettingPage.patientsettingsScan(PatientSettingPage.epiVal());
        await browser.pause(4000);
        await PatientSettingPage.scan2DImageProcess();
        await browser.pause(5000);

    });

    it('should open LeafLet Batch Info Page', async() => {
        allureReporter.addFeature('LeafLet Batch Info Data');
        await LeafLetPage.leafletDetailsFetch();
        await browser.pause(4500); 

    });

   

})