import { Router } from 'express'

import converterRoutes from './converter.routes'

const routes = Router()

routes.use('/converter',converterRoutes)

export default routes