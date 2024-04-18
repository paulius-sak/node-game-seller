import Joi from "joi"

const gameSchema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().required(),
    price: Joi.number().required(),
    releaseYear: Joi.number().required(),
    gameCoverUrl: Joi.string().required()
})

export default gameSchema