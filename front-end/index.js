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