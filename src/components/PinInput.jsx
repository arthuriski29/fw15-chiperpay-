// import Link from 'next/link';
import React from 'react';

// import Image from 'next/image'
// import loginImage from '../../assets/image/login-image.png'
// import loginVector from '../../assets/image/login-vector.png'
// import { HiOutlineMail, HiLockClosed, HiUser } from 'react-icons/hi';

function PinInput({onChangePin}) {
  // const pinInput = React.useRef()
  const pinInput = {
    input1: React.useRef(),
    input2 : React.useRef(),
    input3 : React.useRef(),
    input4 : React.useRef(),
    input5 : React.useRef(),
    input6 : React.useRef()
  }
  // console.log(pinInput.input1.current.value)
  // console.log(typeof pinInput.input1.current.value)
  // console.log(parseInt(pinInput.input1.current.value))
  // console.log(typeof parseInt(pinInput.input1.current.value))
  // console.log(pinInput.input2.current.value)
  // console.log(typeof pinInput.input2.current.value)
  // console.log(parseInt(pinInput.input2.current.value))
  // console.log(typeof parseInt(pinInput.input2.current.value))
  // const changeValue = (e)=>{
  //   if(e.target.value.length > 0){
  //     e.target.value = e.target.value.slice(e.target.value.length - 1)
  //     if(parseInt(e.target.name) < 6){
  //       pinInput[`input${parseInt(e.target.name) + 1}`].current.focus()
  //     }
  //   }
  // }
  const changeValue = (e) => {
    if(e.target.value.length > 0){
      e.target.value = e.target.value.slice(e.target.value.length - 1)
      if(parseInt(e.target.name) < 6){
        pinInput[`input${parseInt(e.target.name)+ 1}`].current.focus()
      }
    }else{
      if(parseInt(e.target.name) > 1){
        pinInput[`input${parseInt(e.target.name)- 1}`].current.focus()
      }
    }

    const pin =[]
    for(const key in pinInput){
      pin.push(pinInput[key].current.value)
    }
    onChangePin(pin.join(''))
  }
  // const pin = []
  // for(const key in pinInput){
  //   pin.push(pinInput[key].current.value)
  // }
  // console.log(pin)

  return (
    
    <div className='flex gap-3 w-full justify-between'>
      <div>
        <input onChange={changeValue} name='1' ref={pinInput.input1} className='input input-bordered max-w-[40px] px-1 text-center' type='number' />
      </div>      
      <div>
        <input onChange={changeValue} name='2' ref={pinInput.input2} className='input input-bordered max-w-[40px] px-1 text-center' type='number' />
      </div>      
      <div>
        <input onChange={changeValue} name='3' ref={pinInput.input3} className='input input-bordered max-w-[40px] px-1 text-center' type='number' />
      </div>      
      <div>
        <input onChange={changeValue} name='4' ref={pinInput.input4} className='input input-bordered max-w-[40px] px-1 text-center' type='number' />
      </div>      
      <div>
        <input onChange={changeValue} name='5' ref={pinInput.input5} className='input input-bordered max-w-[40px] px-1 text-center' type='number' />
      </div>      
      <div>
        <input onChange={changeValue} name='6' ref={pinInput.input6} className='input input-bordered max-w-[40px] px-1 text-center' type='number' />
      </div>      
    </div>
  )
}

export default PinInput