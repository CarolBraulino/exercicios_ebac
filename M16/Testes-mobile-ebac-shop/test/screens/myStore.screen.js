class MyStoreScreen { 

    get #myStoreLogo(){
        return $(~'My store')
    }

    get #myStoreName(){
        return $('id:toolbar_subtitle')
    }

    async getStoreName (){        
        return await this.#myStoreName.getText()
    }

    async myStoreLogoIsDisplayed (){
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.IsDisplayed()
    }
}

module.exports = new MyStoreScreen()