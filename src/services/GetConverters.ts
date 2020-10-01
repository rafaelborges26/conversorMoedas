import Converter from '../models/Converters'
import { getRepository } from 'typeorm'


interface RequestDTO {
    typeConvert: string
    typeConverted: string
    valueInside: number
    valueOutside: number
    date: Date
}

class GetConverterService {
    public async execute(): Promise<Converter[]> {

        const convertersRepository = getRepository(Converter)

         const converter = await convertersRepository.find()
        
         return converter
        
    }
}

export default GetConverterService