async function getToDos() {
    console.log('hi')
    const response = await fetch('http://localhost:3000/api/todos')
    return response
}

console.log(getToDos())


// cors error, couldn't handle the request --> security feature, you dont want anyone randomly hitting servers 
//we need to install middleware to handle this 
//install cors
//go back to server

//what if you get a 200 but not the array --> do you need to ask for a promsie and then do a dot then? 

//what is being sent from the backend to the front end 

// fetch isnt give me the rouse  but instead a response object 

//how do we crunch this with mongoose? how do we write the delete route? 