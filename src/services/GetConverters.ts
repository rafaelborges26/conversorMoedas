import Converter from '../models/Converters'
import { getRepository } from 'typeorm'


class GetConverterService {
    public async execute(): Promise<Converter[]> {

        const convertersRepository = getRepository(Converter)

         const converter = await convertersRepository.find()
        
         return converter
        
    }
}

export default GetConverterService