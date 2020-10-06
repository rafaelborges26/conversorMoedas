import { Router } from 'express'

import converterRoutes from './converter.routes'
import sessionsRoutes from './session.routes'
import usersRouter from './user.routes'

const routes = Router()

routes.use('/converter',converterRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/users',usersRouter)

export default routes