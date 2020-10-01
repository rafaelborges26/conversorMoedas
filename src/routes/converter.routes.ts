import { Router, request, response } from 'express'
import { uuid } from 'uuidv4'
import CreateConverterService from '../services/CreateConverters'

const converterRoutes = Router()


const converterAll = [{}]

converterRoutes.post('/', async (request, response) => {
    const { typeConvert, typeConverted, valueInside, valueOutside, date } = request.body

    const createConverter = new CreateConverterService

    const converter = await createConverter.execute({
        typeConvert,
        typeConverted,
        valueInside,
        valueOutside,
        date
    }) 
    //converterAll.push(Convert)

    return response.json(converter)
})

converterRoutes.get('/', (request, response) => {
    const allConverters = converterAll
    return response.json(allConverters)

})

export default converterRoutes