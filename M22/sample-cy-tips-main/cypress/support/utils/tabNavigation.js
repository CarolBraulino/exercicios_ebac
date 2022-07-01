const puppeteer = require('puppeteer')

module.exports = {
    debuggingPort: 0,
    setDebuggingPort(port) {
        [, this.debuggingPort] = port;
        return null;
    },
    async tabNavigation({ user, pass }) {
        console.log(this.debuggingPort)
        return await puppeteer
            .connect({
                browserURL: "http://localhost:" + this.debuggingPort,
            })
            .then(async browser => {
                try {
                    let page = await browser.newPage()
                    await page.goto('http://lojaebac.ebaconline.art.br/wp-admin/')
                    await page.waitForSelector('#user_login')
                    await page.type('#user_login', user, { delay: 50 })
                    await page.type('#user_pass', pass, { delay: 50 })
                    await page.click('#wp-submit')
                    await page.waitForTimeout(2000)
                    await page.close()
                    browser.disconnect()
                    return true

                } catch (error) {
                    console.log(error)
                    page.close()
                    browser.disconnect()
                    throw (`Erro ao acessar usuario: ${error}`)
                }
            }, err => {
                console.log(err)
            })
    }
}

