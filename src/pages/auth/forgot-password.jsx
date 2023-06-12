import Image from 'next/image'
import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import loginImage from '.././assets/image/login-image.png'
import loginVector from '.././assets/image/login-vector.png'
import Link from 'next/link'

function ForgotPassword() {
  return (
    
    <>
      <section className='flex h-screen'>
        <div className='overflow-hidden relative md:w-[60%] min-h-screen hidden md:flex bg-[#F0592C] justify-center items-center'>
          <div className='absolute mt-[110px] self-start w-[5000px] left-[-540px]'>
            <Image src={loginVector} 
                alt="login-vector" 
                width="1650" 
                height="535" />
          </div>
          <div className='h-[80%] min-[1311px]:w-[50%] max-[1310px]:w-[392px] flex flex-col justify-center items-start gap-4'>
            <div className='font-extrabold text-[40px] text-base-100 text-xl'>chiper<span className='text-[#804242] font-black'>Pay</span></div>
            <div className='self-center'>
              <div className='relative'>
                <Image src={loginImage} 
                alt="login-image" 
                width="400" 
                height="600" />
              </div>
            </div>
            <div className='font-bold text-[24px]'>App that Covering Banking Needs.</div>
            <div className='font-light text-[16px]'>
                ChiperPay is an application that focussing in banking needs for all users
              in the world. Always updated and always following world trends.
              5000+ users registered in ChiperPay everyday with worldwide
              users coverage.
            </div>

          </div>
        </div>
        <div className='w-[40%] bg-[#FBE0D8] flex max-[768px]:flex-1 h-screen justify-center items-center'>
          <div className='h-[80%] max-[1022px]:w-[276px] min-[1023px]:w-[60%] max-[768px]:w-[80%] flex flex-col justify-center items-start gap-8 text-black'>
            <div className='font-bold text-[24px] text-left'>
              Did You Forgot Your Password?
              Don&rsquo;t Worry, You Can Reset Your
              Password In a Minutes.
            </div>
            <div>
              To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
            </div>
            <div className='w-full mt-8'>
              <form className='flex flex-col gap-4'>
                <div className='flex flex-col justify-center gap-6'>
                  <div className='flex items-center'>
                    <HiOutlineMail className='absolute ml-4 text-[#9CA3AF]' alt="Email Icon"/>
                    <input className='input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]' type='email' name='email' placeholder='Enter your e-mail'/>
                  </div>
                </div>
                <Link href='/auth/create-new-password'>
                  <button type='submit' className='btn bg-[#F0592C] text-white w-full mt-6'>
                    Confirm
                  </button>
                </Link>
              </form>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default ForgotPassword