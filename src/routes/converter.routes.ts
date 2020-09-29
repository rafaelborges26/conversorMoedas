import { Router, request, response } from 'express'
import { uuid } from 'uuidv4'

const converterRoutes = Router()


const converterAll = [{}]

converterRoutes.post('/', (request, response) => {
    const { typeConvert, typeConverted, valueInside, valueOutside } = request.body

    const Convert = {
        id: uuid(),
        typeConvert,
        typeConverted,
        valueInside,
        valueOutside
    }

    converterAll.push(Convert)

    return response.json(Convert)
})

converterRoutes.get('/', (request, response) => {
    const allConverters = converterAll
    return response.json(allConverters)

})

export default converterRoutes