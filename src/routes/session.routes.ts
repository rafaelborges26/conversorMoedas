import { Router } from 'express'

import AuthenticateUsers from '../services/AuthenticateUsers'


const sessionsRouter = Router() 

sessionsRouter.post('/', async (request, response) => {
    try {
        const {email, password} = request.body

        const authenticateUser = new AuthenticateUsers()

        const {user, token} = await authenticateUser.execute({
            email,
            password
        })

        delete user.password
        return response.json({ user, token })
    }catch(err) {
        response.status(400).json({error: err.message})
    }
})

export default sessionsRouter
