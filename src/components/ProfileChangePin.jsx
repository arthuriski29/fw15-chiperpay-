import React from 'react'
import PinInput from './PinInput'

function ProfileChangePin({token}) {
  const [showAlert, setShowAlert] = React.useState(false)
  const changedPin = (value)=> {
    if(value.length === 6){
      setShowAlert(true)
    }else{
      setShowAlert(false)
    }
  }
  return (
    <div className='flex flex-col w-[80%] justify-between rounded-2xl shadow-2xl mr-20 px-10 py-10 gap-6 bg-[#f5f5f5] text-black'>
      <div className='flex flex-col h-[20%] gap-6'>
        <div className='font-bold text-[18px]'>Change Pin</div>
        <div className='w-[342px]'>Enter your current 6 digits Fazzpay PIN below to continue to the next steps.</div>
      </div>
      <form className='flex flex-col h-[70%] items-center gap-8 text-black'>
          <div className='flex flex-col justify-center gap-10 w-[450px] h-full px-4 py-4'>
            <PinInput onChangePin={changedPin}/>
            {showAlert && <div className='border-b-[2px] border-[#2CAD7D] shadow-lg shadow-[#93C961] max-w-md'></div>}
            <button type='submit' className='btn bg-secondary'>
              Change Pin
            </button>
          </div>
      </form>
    </div>
  )
}

export default ProfileChangePin