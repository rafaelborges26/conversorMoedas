import User from '../models/User'
import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface Request {
    email: string
    password: string
}

class CreateUserService {
    public async execute({ email, password }:Request): Promise<User> { //return no formato do model definido

        const usersRepository = getRepository(User) //obter funções do repository, delete, insert..
        const checkUserExists = await usersRepository.findOne({
            where: { email: email }//campo igual ao valor q to recebendo
        })

        if(checkUserExists) {
            throw new Error('Email already used.')
        }

        const hashedPassword = await hash(password, 8)

        const user = usersRepository.create({
            email,
            password: hashedPassword
        })

        await usersRepository.save(user)

        return user

    }
}

export default CreateUserService
