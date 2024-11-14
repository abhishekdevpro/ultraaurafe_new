import React from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate=useNavigate();
    // const {s}=useParams();
    const handleBack=()=>{
        navigate("/home")

    }
  return (
    
    <div className="border border-gray-200 rounded-lg shadow-lg max-w-md mx-auto mt-10">
    <div className="m-3 p-3">
      <button 
        onClick={handleBack} 
        className="bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
    <h1 className="text-center font-semibold text-green-600 py-4">
        Transaction Successful
      {/* {s==="success"?"Transaction Successful":"Transaction Failed"} */}
    </h1>
  </div>
  
  )
}

export default Success