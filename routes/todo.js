import { Router } from 'express'
import { readFile, writeFile } from 'fs'
import {fileURLToPath} from 'url'
import { join } from 'path'
import fs from 'fs/promises'

const router = Router()

// Todo data
import todoData from '../todos.json' assert {type:'json'}

// GET /api/todos/
// Returns all todos
router.get('/', function(req, res) {
    res.json({
        todos: todoData
    })
})

// GET /api/todo/:todoId
// Returns a todo by ID
router.get('/:todoId', function(req, res) {
    const id = parseInt(req.params.todoId)

    // Grab given to do by ID
    todoData.forEach(function(todo) {

        if (todo.id === id) {
            res.json({
                todo: todo
            })
        }
    })
})

// POST /api/todos
// Create new todo
router.post('/', function(req, res) {
    const todosPath = join(req.basePath, '../todos.json');
    const todoPayload = req.body
    todoPayload.id = todoData[todoData.length -1].id += 1

    console.log(todoPayload)
    readFile(todosPath, 'utf-8', function(error, data) {
        if(!error) {
            const dataJSON = JSON.parse(data)
            dataJSON.push(todoPayload)
            
            writeFile(todosPath, JSON.stringify(dataJSON), function(error, data) {
                res.status(200).json({
                    message: `Successfully written new todo`,
                    todos: dataJSON
                })
            })
        } else {
            res.status(403).json({
                message: `There was an error`,
                error: error
            })
        }
    })
})

router.put('/todos', function(req, res) {
    

    readFile 

    if()

    writeFile 
    
    )

router.delete


export default router