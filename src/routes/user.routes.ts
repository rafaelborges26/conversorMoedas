import { Router, request, response } from 'express'

import CreateUsers from '../services/CreateUsers'

//import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const usersRouter = Router()


usersRouter.post('/', async (request, response ) => {

        const { email,password } = request.body

        const createUser = new CreateUsers

        const user = await createUser.execute({
            email,
            password
        })

        //delete user.password

        return response.json(user)


})

export default usersRouter
