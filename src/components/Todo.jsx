import React ,{useEffect,useState} from 'react'

function Todo() {
    const [allTodos,setAlltodos]=useState([])

useEffect(()=>{
    getTodos()
},[])
console.log(allTodos);

const getTodos=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(response);
    const serverResponse =await response.json()
    setAlltodos(serverResponse)
    
}



  return (
    <div className='container my-5'>
        <h1 className='text-center'>
            <ol>
                {
                    allTodos.map(todo=>(
                        <li key={todo.id}>{todo.title}</li>
                    )
                    )
                }
            </ol>

        </h1>

    </div>
   
  )
}

export default Todo
