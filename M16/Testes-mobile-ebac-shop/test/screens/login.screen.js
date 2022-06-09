class loginScreen { 
    get #StoreAddress() { return $('android.widget.EditText')}

    get #continue() { return $('android=new UiSelector().text("Continue")')}

    get #continueWithStoreCredentials(){ return $('android=new UiSelector().text("Continue with store credentials")')}

    get #username() { return $('android=new UiSelector().text("Username")')}

    get #password() { return $('android=new UiSelector().text("Password")')}

    get #twoFactorPasswordBtn(){return $('id:login_enter_password')}
    //android=new UiSelector().text("Or type your password")

    async setStoreAddress (url){
        await this.#StoreAddress.setValue(url)
    }

    async continue(){
        await this.#continue.click()
    }
    
    async continueStoreCred(){
        await this.#continueWithStoreCredentials.click()
    }

    async login(username, password){
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }

    async gotwoFactorAuth(){
        await this.#twoFactorPasswordBtn.click()       
    }

    async twoFactorLogin(password){
        await this.#password.setValue(password)
        await this.#continue.click()
    }
}

module.exports = new loginScreen()