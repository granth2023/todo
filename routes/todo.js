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
    try {
        const { oldToDo, newToDo } = req.body;
        const data = await fs.readFile('todo.json' , 'utf8')
        let todos = JSON.parse(data);

        let found = false;

        todos = todos.map(todo => {
            )


    } catch (error) {
        console.log("Failed to create todo", error);
        res.status(404).json({ message: 'Failed to create todo'})

    }
}
    

    readFile 

    if()

    writeFile 
    
    )

router.delete


export default router

// we have a simple get 
// sends you all the to dos

//we send the to dos in the response --> req and res

//realm of express: front end to api endpoint
//node is file read and file write which is the  backend from api to backend 

//express is middle ware 

//RESTFUL standards: url is represented by resource in database 
//how do we split out a router to a  controller?
//what is MVC? model - controller - view  
//controller logic is living in router and router files are getting bloated --> a lot of it can be modularized which is what a controller

//path middleware -- app.use 

//path middleware -->" every time there is a req, res --> we make sure this a request basepath put on --> modify basePath for when we do something 
// readn and write -- > how do you identify what is middleware? "

// request and response middleware 

// middle ware 

// student confusing node with express --> check in with them 

// RESTFUL: storing, requesting and responding with data in a specific way --> wikipedia or restful design 

// what is and isn't middleware: are libraries to help with req and res helpful if you were to query another API or internally a library to handle internal logic to help --:>  middleware that would not be middleware that woudl be controlelr logic --> express happens between response and request --> you're moving 

//middleware needs to make sure our request bdoy is being parsed properly. --> runnign front end 

//delete todos by id 

router.delete('/:todoID', function(req,res) {
    ocnst todoPath = join(req.basePath, '../todos.json')
    try{
        const id = parseInt(req.params.todoId)
        //how do we filter out or find the index and we do a funciton and todo? 
        //for each  how do call that on the data we are using -- if we find the one with the id, then we want to delete it splice  and bring in the index when we star tthe function -- splice  the index at index and single item  and then we can console log the data variable 
        //then how do we write the file back the json version ? 
    })