const productsViewScreen = require('../screens/productView.screen')

describe('Product Flow', () => {

    it('should buy a product', async () => {
        let name = 'Agasalho jhony quest'
        let searchName = 'Agasalho'
        await productsViewScreen.waitProduct(name)
        await productsViewScreen.search()
        await productsViewScreen.searchBy(`${searchName}\n`)
        await productsViewScreen.productSelect()
        await productsViewScreen.productAdd()
        await productsViewScreen.goToCart()
        expect (await productsViewScreen.waitTotal()).toExist()
    
    })
    
})