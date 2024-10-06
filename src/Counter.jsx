import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase,Decrease,Reset,Add } from './assets/counterSlice';
import { useState } from 'react';

function Counter() {
 
  const count=useSelector((store)=>store.counterreducer.counter)
  console.log(count);

  const dispatch=useDispatch()

  const [num,setnum]=useState(0)
   
  return (
    <div className='d-flex justify-content-center align-items-center bg-dar'style={{height:"80vh"}}>

        <div  className='w-75 p-3 border shadow p-5'>
             <h3 className='text-center'>Counter</h3>
             <h4  className='text-center'>{count}</h4>
             <div className='justify-content-center d-flex m-3'>
             <button className='btn btn-success mb-3 me-2' onClick={()=>{dispatch(increase())}}>+increase</button>
             <button className='btn btn-danger mb-3'onClick={()=>{dispatch(Decrease())}}>-Decrease</button>
             <button className='btn btn-info mb-3 ms-2'onClick={()=>{dispatch(Reset())}}>Reset</button>
             </div>
             <div className='justify-content-around d-flex my-3'>
              <input onChange={(e)=>{setnum(e.target.value)}} placeholder='enter number' className='form-control' type="text" />
              <button onClick={()=>{dispatch(Add(num))}} className='btn btn-success'>Add</button>
              
             </div>
        </div>
    </div>
  )
}

export default Counter