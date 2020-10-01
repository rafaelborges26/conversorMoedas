import Converter from '../models/Converters'
import { getRepository } from 'typeorm'

console.log("ok")

interface RequestDTO {
    typeConvert: string
    typeConverted: string
    valueInside: number
    valueOutside: number
    date: Date
}

console.log("ok2")

class CreateConverterService {
    public async execute({ typeConvert, typeConverted, valueInside, valueOutside, date }:RequestDTO): Promise<Converter> {

        const convertersRepository = getRepository(Converter) //obter funções do repository, delete, insert..
        

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
