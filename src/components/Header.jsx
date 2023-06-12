import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../assets/image/profile-1.jpg'
import { HiOutlineBell } from 'react-icons/hi'

function Header() {
  return (
    <div className='w-full border-solid h-[100px] bg-[#F59376] shadow-xl'>
        <div className='h-full flex items-center justify-between mx-[7%]'>
          <Link href='/' className='font-extrabold text-3xl text-[#f5f5f5]'>chiper<span className='text-[#804242] font-black'>Pay</span></Link>
          <div className='flex text-black gap-4 justify-center items-center'>
            <div href='/' className='rounded-lg overflow-hidden'>
              <Image src={profile} 
                alt="login-vector" 
                width="50" 
                height="50" />
            </div>
            <div className='flex flex-col'>
              <div className='font-bold'>Robert Chandler</div>
              <div>0812121212</div>
            </div>
            <div className='text-[25px]'>
              <HiOutlineBell/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header