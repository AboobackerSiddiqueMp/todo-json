import React, { useEffect, useState } from 'react'
import { deleteTodo, getAlltodo, gettododetailsbyid, updatetodobyid } from '../sevices/AllAPI'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';

function ListTodo() {
    const [show, setShow] = useState(false);
    const [updateData,setupdateData]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const updateTodo=async(id)=>{
    const response = await gettododetailsbyid(id)
    const {data}=response
    console.log('========njan======',data)
    setupdateData(data)

    handleShow()
  }
    const[alltodo,setalltodo]=useState([])
    const getAlltodoItem=async()=>{
        const response=await getAlltodo()
        const {data}=response
        setalltodo(data)


    }
    const deletetodo=async(id)=>{
        const response=await deleteTodo(id)
    }
    const updateDatas=async()=>{
        console.log('=======updata======',updateData)
        const response=await updatetodobyid(updateData.id,updateData)
        handleClose()

    }
    useEffect(()=>{
        getAlltodoItem()


    },[deletetodo])


  return (

    <div>
        <div style={{marginTop:'308px', marginLeft:'-256px'}}>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>description</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltodo?.length>0?
                        alltodo.map((data)=>(
                            <tr className='mb-3'>
                        <td className='me-3'>{data.id}</td>
                        <td>{data.todoName}</td>
                        <td>{data.tododicription}</td>
                        <td>
                            <Button className='ms-3' onClick={()=>updateTodo(data.id)}>
                            <i class="fa-solid fa-pen-to-square"></i>
                            </Button>
                            <Button className='ms-3'>
                            <i class="fa-solid fa-trash" onClick={()=>deletetodo(data.id)}></i>
                            </Button>
                        </td>
                    </tr>

                        ))
                        :
                <h1>no data</h1>

                    }
                </tbody>
            </table>
        </div>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <input type="text" value={updateData.todoName} onChange={(e)=>setupdateData({...updateData,todoName:e.target.value})} className='form-control border border-primary' />
        <textarea id="w3review" value={updateData.tododicription} onChange={(e)=>setupdateData({...updateData,tododicription:e.target.value})}  name="w3review" rows="3" cols="30" className='form-control  border border-primary '></textarea>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateDatas}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ListTodo