const { soma, dobro } = require('./codigo')

describe('funções matemáticas', () => {
    beforeAll(() => {
        console.log('antes de tudo')
    })

    beforeEach(() => {
        console.log('antes de cada teste')
    })

    afterEach(() => {
        console.log('depois de cada teste')
    })

    afterAll(() => {
        console.log('depois de tudo')
    })

    it('soma de dois valores', () => {
        expect(soma(2, 5)).toBe(7)
        expect(soma(2, 4)).toBe(6)
        expect(soma(21, 44)).toBe(65)
    })
    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8)
    });
})
