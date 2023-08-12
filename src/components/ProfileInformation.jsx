import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setProfile } from '@/redux/reducers/profile'

import defaultProfile from '../assets/image/defaultProfile.jpg'


import { BsPencilSquare } from 'react-icons/bs'
import { HiArrowRight } from 'react-icons/hi'

function ProfileInformation({token}) {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.data)
  const [pictureURI, setPictureURI] = React.useState('')
  const [selectedPicture, setSelectedPicture] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const fileToDataUrl = (file) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      setPictureURI(reader.result)
    })
    reader.readAsDataURL(file)
  }

  const changePicture = (e) => {
    const file = e.target.files[0]
    setSelectedPicture(file)
    fileToDataUrl(file)
  }

  const doChangePicture = async (values) => {
    setLoading(true)
    const form = new FormData()
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        form.append(key, values[key])
      }
    })
    if (selectedPicture) {
      form.append('picture', selectedPicture)
    }
    if (token) {
      const { data } = await http(token).patch('/profile', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      dispatch(setProfile(data.results))
      setLoading(false)
      setPictureURI('')
    }
  }

  const doLogout = async () => {
    await axios.get('/api/logout')
    router.replace('/auth/login')
  }
  return (
    <div className='flex flex-col w-[80%] justify-between items-center rounded-2xl shadow-2xl mr-20 px-10 py-10 gap-6 bg-[#f5f5f5] text-black'>
          <div className='flex flex-col gap-4 items-center'>
            {pictureURI && (
              <div className='rounded-lg overflow-hidden'>
                <Image 
                  src={pictureURI} 
                  alt="selected-picture" 
                  width="80" 
                  height="80"
                  className='object-cover w-full h-full'
                />
              </div>
            )}
            {!pictureURI && (
              <div className='rounded-lg overflow-hidden'>
                {profile?.picture ? (
                  <Image 
                    src={profile?.picture} 
                    alt="user-profile-img" 
                    width="80" 
                    height="80"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image 
                    src={defaultProfile} 
                    alt="defaultProfile" 
                    width="80" 
                    height="80"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            )}
              {/* {!pictureURI ? (
                <div className='flex relative items-center'>
                  <BsPencilSquare className="absolute ml-2 text-[#9CA3AF]" alt="Notes Icon" />
                  <input 
                  name="picture"
                  className='border-none flex-1 w-full pl-[30px]' 
                  type="file"
                  onChange={changePicture}
                  /> Edit
                </div>
              ) : null}
              {pictureURI && (
                <div className="flex items-start gap-2">
                  <button
                    onClick={doChangePicture}
                    className="font-[500] text-accent hover:text-primary"
                    type="button"
                  >
                    Save
                  </button>
                  {loading && (
                    <span className="loading loading-spinner loading-sm"></span>
                  )}
                </div>
              )} */}
              <label className="flex gap-2 items-center justify-center font-[500] text-primary hover:text-accent">
                {!pictureURI ? (
                  <>
                    <input
                      name="picture"
                      type="file"
                      className="hidden"
                      onChange={changePicture}
                    />
                    <BsPencilSquare size={17} />
                    Edit
                  </>
                ) : null}
              </label>
              {pictureURI && (
                <div className="flex items-start gap-2">
                  <button
                    onClick={doChangePicture}
                    className="font-[500] text-accent hover:text-primary"
                    type="button"
                  >
                    Save
                  </button>
                  {loading && (
                    <span className="loading loading-spinner loading-sm"></span>
                  )}
                </div>
              )}
            <div className={`text-[24px] font-bold ${
            profile?.fullName ? 'capitalize' : 'lowercase'
          }`}>{!profile?.fullName ? profile?.email : profile?.fullName}</div>
            <div className='text-[##7A7886]'>{!profile.phones ? 'add phone number' : `${profile?.phones}`}</div>
          </div>
          <div className='flex flex-col gap-4 h-[70%] justify-center'>
            <Link href='/profile/personal-information' className='w-[433px] h-[64px] hover:bg-[#F59376] border-solid rounded-xl bg-[#E2D3C5]'>
              <div className='flex justify-between h-full items-center px-5'>
                <div className='font-bold text-[16px]'>Personal Information</div>
                <HiArrowRight className='text-[25px]'/>
              </div>
            </Link>
            <Link href='/profile/change-password' className='w-[433px] h-[64px] hover:bg-[#F59376] justify-center items-center border-solid rounded-xl bg-[#E2D3C5]'>
              <div className='flex justify-between h-full items-center px-5'>
                <div className='font-bold text-[16px]'>Change Password</div>
                <HiArrowRight className='text-[25px]'/>
              </div>
            </Link>
            <Link href='/profile/change-pin' className='w-[433px] h-[64px] hover:bg-[#F59376] justify-center items-center border-solid rounded-xl bg-[#E2D3C5]'>
              <div className='flex justify-between h-full items-center px-5'>
                <div className='font-bold text-[16px]'>Change Pin</div>
                <HiArrowRight className='text-[25px]'/>
              </div>
            </Link>
            <button onClick={doLogout} className='w-[433px] h-[64px] hover:bg-[#F59376] justify-center items-center border-solid rounded-xl bg-[#E2D3C5]'>
              <div className='flex justify-between h-full items-center px-5'>
                <div className='font-bold text-[16px]'>Log Out</div>
                <HiArrowRight className='text-[25px]'/>
              </div>
            </button>
          </div>
        </div>
  )
}

export default ProfileInformation