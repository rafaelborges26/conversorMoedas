import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import User from '../models/User'
import { sign } from 'jsonwebtoken'
import authConfig from '../config/auth'
import { request } from 'express'


interface Request {
    email: string
    password: string
}

interface Response {
    user : User
    token: string
}

class AuthenticateUserService {

    public async execute( { email, password}: Request ): Promise<Response>  {
        const usersRepository = getRepository(User)
        const user = await usersRepository.findOne({
            where: {email: email}
        })

    if(!user) {
        throw new Error('Incorrect email/Password combination.')

    }
        const passwordMached = await compare(password, user.password)

        if(!passwordMached) {
            throw new Error('Incorrect email/Password combination.')
        }

        const { secret, expiresIn } = authConfig.jwt

        const token = sign( {}, secret, {
            subject: user.id,
            expiresIn
        }) 
        
        return {user,token}

    }
}

export default AuthenticateUserService
