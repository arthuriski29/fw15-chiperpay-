import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import defaultProfile from '../assets/image/defaultProfile.jpg'
import { HiOutlineBell } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setProfile } from '@/redux/reducers/profile'
import http from '@/helper/http'

function Header({token}) {
  const profile = useSelector((state) => state.profile.data)
  const dispatch = useDispatch()
  const router = useRouter()

  const getProfile = React.useCallback(async () => {
    if (token) {
      console.log(token)
      try {
        const { data } = await http(token).get('/profile')
        console.log(data.results)
        dispatch(setProfile(data.results))
      } catch (error) {
        const message = error?.response?.data?.message
        console.log(error)
        return console.log(message)
      }
    }
  }, [token, dispatch])

  React.useEffect(() => {
    // console.log(token)
    getProfile()
  }, [getProfile])


  return (
    <div className='w-full border-solid h-[100px] bg-[#F59376] shadow-xl'>
        <div className='h-full flex items-center justify-between mx-[7%]'>
          <Link href='/' className='font-extrabold text-3xl text-[#f5f5f5]'>chiper<span className='text-[#804242] font-black'>Pay</span></Link>
          {token ? (
          <div className='flex text-black gap-4 justify-center items-center'>
            <Link href="/profile" className ='flex gap-4'>
              <div href='/' className='rounded-lg overflow-hidden'>
                {profile?.picture ? (
                  <Image src={profile?.picture} 
                    alt="user-image" 
                    width="50" 
                    height="50" />
                  ) : (
                  <Image src={defaultProfile} 
                    alt="user" 
                    width="50" 
                    height="50" />
                )}
              </div>
              <div className='flex flex-col'>
                <div className='font-bold justify-self-center'>{!profile.fullName ? `${profile?.email}` : `${profile?.fullName}`}</div>
                <div>{!profile.phones ? `add phone number` : `${profile?.phones}`}</div>
              </div>
            </Link>
            <div className='text-[25px]'>
              <HiOutlineBell/>
            </div>
          </div>
          ):(
            <div className="hidden md:flex items-center gap-8">
            <Link
              href="/auth/login"
              className="btn btn-ghost w-28 text-base font-semibold capitalize text-primary border-primary rounded-xl"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="btn btn-primary w-28 text-base font-semibold capitalize text-white rounded-xl"
            >
              Sign Up
            </Link>
          </div>
          )}
        </div>
      </div>
  )
}

export default Header