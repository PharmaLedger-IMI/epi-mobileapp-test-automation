

class LoginPageTest {
    
    get allowCameraPerm(){
        return $("id=com.android.packageinstaller:id/permission_allow_button")
    }

    async openWallet(){
       
        browser.pause(24000);
    }


   get refreshBtn(){
      return $("//android.widget.Button[@text='Refresh']")
      
    }

}

module.exports = new LoginPageTest();