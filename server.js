// NPM packages
import express from 'express'
import cors from 'cors'; 

// Custom middleware
import pathMiddleware from './utils/pathMiddleware.js'

// Routers
import rootRouter from './routes/index.js'
import todosRouter from './routes/todo.js'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(pathMiddleware)
app.use(cors())
// Routes
app.use('/api', rootRouter)
app.use('/api/todos', todosRouter)

app.listen(PORT, function() {
    console.log(`App running on ${PORT} port`)
})