class productScreen {

    get #addProductButton() {
      return $('id:addProductButton')
    }

    get #addPhysicalProduct(){
        return $('android=new UiSelector().text("Simple physical product")')
    }

    get #addProductTitle(){
        return $('id:editText')
    }

    get #addDescription(){
        return $('android=new UiSelector().text("Describe your product")')
    }

    get #addDescriptionText(){
        return $('id:visualEditor')
    }

    get #addPrice(){
        return $('android=new UiSelector().text("Add price")')
    }

    get #addRegularPrice(){
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #addSalePrice(){
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }  

    get #clickPublish(){
        return $('id:menu_done')
    }

    get #clickGoBack(){
        return $('~Navigate up')
    }

    get #clickOptions(){
        return $('~More options')
    }

    get #clickViewProduct(){
        return $('android=new UiSelector().text("View product on store")')
    }
  
    async clickAddProductButton() {
      await this.#addProductButton.waitForExist({ timeout: 10000 })
      await this.#addProductButton.click()
    }

    async clickAddPhysicalProduct(){
        await this.#addPhysicalProduct.waitForExist({ timeout: 10000 })
        await this.#addPhysicalProduct.click()
    }

    async setTitle(title){
        await this.#addProductTitle.waitForExist({ timeout: 10000 })
        await this.#addProductTitle.setValue(title)
    }

    async AddDescription(description){
        await this.#addDescription.waitForExist({ timeout: 10000 })
        await this.#addDescription.click()
        await this.#addDescriptionText.waitForExist({ timeout: 10000 })
        await this.#addDescriptionText.setValue(description)
        await this.#clickGoBack.click()
    }

    async AddPrices(regular, sale){
        await this.#addPrice.waitForExist({ timeout: 10000 })
        await this.#addPrice.click()    
        await this.#addRegularPrice.waitForExist({ timeout: 10000 })
        await this.#addRegularPrice.click()       
        await this.#addRegularPrice.clearValue()
        await this.#addRegularPrice.setValue(regular)        
        await this.#addSalePrice.click()
        await this.#addSalePrice.clearValue()
        await this.#addSalePrice.setValue(sale)
        await this.#clickGoBack.click()
    }

    async publishChanges(){
        await this.#clickPublish.waitForExist({ timeout: 10000 })
        await this.#clickPublish.click()
        await this.#clickOptions.click()        
    }

    async validateProductText(){
        await this.#clickViewProduct.waitForExist({ timeout: 10000 })
        await this.#clickViewProduct.isDisplayed()
    }

    
  }
  
  module.exports = new productScreen();