import routerx from 'express-promise-router'
import todoRouter from './todo-router'

const router = routerx()

router.use('/todo', todoRouter)

export default router
