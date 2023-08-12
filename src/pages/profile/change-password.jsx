import React from 'react'
import { withIronSessionSsr } from 'iron-session/next';
import checkCredentials from '@/helper/checkCredentials';
import cookieConfig from '@/helper/cookieConfig';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProfileChangePass from '@/components/ProfileChangePass';
import Footer from '@/components/Footer';

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token
    checkCredentials(token, res, '/auth/login')
    return {
      props: {
        token,
      },
    }
  },
  cookieConfig
)

function ChangePassword({token}) {
  return (
    <div className='h-[100vh] bg-[#ffff]'>
      <Header token={token}/>
      <div className='flex h-[80%] mt-10 mb-10 gap-8'>
        <Sidebar token={token} profile='text-accent'/>
        {/* <div className='flex flex-col w-[80%] justify-between rounded-2xl shadow-2xl mr-20 px-10 py-10 gap-6 bg-[#f5f5f5] text-black'>
          <div className='flex flex-col h-[30%] gap-6'>
            <div className='font-bold text-[18px]'>Personal Information</div>
            <div className='w-[342px]'>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</div>
          </div>
          <form className='flex flex-col h-[70%] items-center gap-8 text-black'>
            <div className='flex items-center w-[450px]'>
              <HiLockClosed className="absolute ml-4 text-[#9CA3AF]" alt="Email Icon" />
              <input className='input border-0 border-b-2 border-[#9CA3AF] rounded-none flex-1 w-full pl-[50px] bg-[#f5f5f5]' type='password' name='currentPassword' placeholder='Current Password' />
            </div>
            <div className='flex items-center w-[450px]'>
              <HiLockClosed className="absolute ml-4 text-[#9CA3AF]" alt="Email Icon" />
              <input className='input border-0 border-b-2 border-[#9CA3AF] rounded-none flex-1 w-full pl-[50px] bg-[#f5f5f5]' type='password' name='newPassword' placeholder='New Password' />
            </div>
            <div className='flex items-center w-[450px]'>
              <HiLockClosed className="absolute ml-4 text-[#9CA3AF]" alt="Email Icon" />
              <input className='input border-0 border-b-2 border-[#9CA3AF] rounded-none flex-1 w-full pl-[50px] bg-[#f5f5f5]' type='password' name='requestNewPassword' placeholder='Request New Password' />
            </div>
            <button className='btn btn-secondary w-[450px]' type="submit"> Change Password</button>
          </form>
        </div> */}
        <ProfileChangePass token={token}/>
      </div>
      <Footer/>
    </div>
  )
}

export default ChangePassword