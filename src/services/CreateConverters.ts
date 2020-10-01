import Converter from '../models/Converters'
import { getRepository } from 'typeorm'


interface RequestDTO {
    typeConvert: string
    typeConverted: string
    valueInside: number
    valueOutside: number
    date: Date
}

class CreateConverterService {
    public async execute({ typeConvert, typeConverted, valueInside, valueOutside, date }:RequestDTO): Promise<Converter> {

        const convertersRepository = getRepository(Converter)
        

        const convert = convertersRepository.create({
            typeConvert,
            typeConverted,
            valueInside,
            valueOutside,
            date
        })

        await convertersRepository.save(convert)

        return convert

    }
}

export default CreateConverterService
