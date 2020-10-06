import { Router, request, response } from 'express'
import CreateConverterService from '../services/CreateConverters'
import GetConverterService from '../services/GetConverters'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const converterRoutes = Router()

//converterRoutes.use(ensureAuthenticated)

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

    return response.json(converter)
})

converterRoutes.get('/', async (request, response) => {


    const GetConverter = new GetConverterService

    const converter = await GetConverter.execute()


    return response.json({converter})

})

export default converterRoutes