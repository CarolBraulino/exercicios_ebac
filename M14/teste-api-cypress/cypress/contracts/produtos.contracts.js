const Joi = require ('joi')

const produtpsSchema = Joi.object({
    quantidade: Joi.number(),
    produtos: Joi.array().items({
        nome: Joi.string(),
        preco: Joi.number(),
        descricao: Joi.string(),
        quantidade: Joi.number(),
        _id: Joi.string()
    })
})

export default produtpsSchema;