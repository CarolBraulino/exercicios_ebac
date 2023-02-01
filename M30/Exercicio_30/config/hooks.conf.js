let hooksConf = process.env.PLATFORM == 'android' ? {
    afterStep: function (test, scenario, { error, duration, passed }) {
        driver.takeScreenshot();
    },
    beforeSuite: async function(){
        //verificar se o app ja esta instalado e executando
        let state = await driver.queryAppState("br.art.ebaconline")
        if(state !== 4){
            await driver.launchApp()
        }
    },
    afterSuite: async function(){
        //fechar o app
        await driver.closeApp()
    }
} : {
    afterStep: function (test, scenario, { error, duration, passed }) {
        driver.takeScreenshot();
    },
    beforeSuite: async function(){
        //verificar se o app ja esta instalado e executando
        let state = await driver.queryAppState("br.art.ebaconline")
        if(state !== 4){
            await driver.launchApp()
            await driver.context('FLUTTER')
        }
    },
    afterSuite: async function(){
        //fechar o app
        await driver.closeApp()
    }
}

module.exports = { hooksConf }