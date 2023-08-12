import React from 'react'
import { withIronSessionSsr } from 'iron-session/next'
import cookieConfig from '@/helper/cookieConfig'
import checkCredentials from '@/helper/checkCredentials'

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProfilePersonalInfo from '@/components/ProfilePersonalInfo';
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

function PersonalInfo({token}) {
  return (
    <div className='h-[100vh] bg-[#ffff]'>
      <Header token={token}/>
      <div className='flex h-[80%] mt-10 mb-10 gap-8'>
        <Sidebar token={token} profile='text-accent'/>
        <ProfilePersonalInfo token={token}/>
      </div>
      <Footer/>
    </div>
  )
}

export default PersonalInfo