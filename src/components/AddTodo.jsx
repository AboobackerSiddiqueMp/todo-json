import React, { useEffect, useState } from 'react'
import { uploadtodo } from '../sevices/AllAPI'
import { Button } from 'react-bootstrap'

function AddTodo() {
    const[addtodo,setaddtodo]=useState(false)
    const [todovalue, settodovalue] = useState({
        todoName: "",
        tododicription: ""
    })
    const handileAdd = () => {
        const { todoName, tododicription } = todovalue
        if (!todoName || !tododicription) {
            console.log("pls fill the form completey")
        }
        else {
            uploadtodo(todovalue)
            alert('succesfuly add todo')
            setaddtodo(true)
            settodovalue(
                {
                    todoName: "",
                    tododicription: ""
                }

            )
        }


    }
    useEffect(()=>{
        setaddtodo(false)

    },[addtodo])
    console.log('===================', todovalue)
    return (
        <>
            <div style={{marginLeft:'40px'}}> 
                <h3 className='text-primary mt-5 mb-3'>TODO APP</h3>
                <div className='mt-3'>
                    <input type="text" value={todovalue.todoName} className='form-control' onChange={(e) => settodovalue({ ...todovalue, todoName: e.target.value })} />
                </div>
                <div className='mt-3'>
                    <textarea id="w3review" value={todovalue.tododicription} name="w3review" rows="3" cols="30" className='form-control ' onChange={(e) => settodovalue({ ...todovalue, tododicription: e.target.value })}>

                    </textarea>

                </div>
                <Button className='btn w-100 mt-3' onClick={handileAdd}>Add to Todo</Button>
            </div>

        </>
    )
}

export default AddTodo