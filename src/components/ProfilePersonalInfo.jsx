import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import UserEditProfile from './UserEditProfile'

function ProfilePersonalInfo({token}) {
  const profile = useSelector((state) => state.profile.data)
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleOpenModal = () => {
    if (modalOpen === true) {
      setModalOpen(false)
      setTimeout(() => {
        setModalOpen(true)
      }, 100)
    } else {
      setModalOpen(true)
    }
  }
  return (
    <div className='flex flex-col w-[80%] h-full rounded-2xl shadow-2xl mr-20 px-10 py-10 gap-2 bg-[#f5f5f5] text-black'>
      <div className='flex flex-col h-[20%] gap-6'>
        <div className='font-bold text-[18px]'>Personal Information</div>
        <div className='w-[342px]'>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</div>
      </div>
      <div className='flex flex-col h-[70%] justify-center gap-4'>
        <div className='w-full hover:bg-[#F59376] border-solid shadow-xl rounded-xl bg-[#f5f5f5]'>
          <div className='flex justify-between h-full py-3 px-5'>
            <div className='flex-col gap-3'>
              <div className='text-[16px] text-[background: #7A7886]'>First Name</div>
              <div className='text-[22px] font-bold'>
              {profile?.fullName && profile?.fullName.split(" ").length > 1 ? profile?.fullName.split(" ")[0] : 'not set'}
              </div>
            </div>
            <div className="self-center selection:text-base text-primary font-bold">
              <button onClick={handleOpenModal}>Edit</button>
            </div>
          </div>
        </div>
        <div className='w-full hover:bg-[#F59376] border-solid shadow-xl rounded-xl bg-[#f5f5f5]'>
          <div className='flex justify-between h-full py-3 px-5'>
            <div className='flex flex-col gap-3'>
              <div className='text-[16px] text-[background: #7A7886]'>Last Name</div>
              <div className='text-[22px] font-bold'>
              {profile?.fullName && profile?.fullName.split(" ").length > 1 ? profile?.fullName.split(" ").slice(1).join(" ") : 'not set'}
              </div>
            </div>
            <div className="self-center text-base text-primary font-bold">
              <button onClick={handleOpenModal}>Edit</button>
            </div>
          </div>
        </div>
        <div className='w-full hover:bg-[#F59376] border-solid shadow-xl rounded-xl bg-[#f5f5f5]'>
          <div className='flex flex-col gap-3 h-full py-3 px-5'>
            <div className='text-[16px] text-[background: #7A7886]'>Verified Email</div>
            <div className='text-[22px] font-bold'>
            {profile?.email ? profile?.email : 'not set'}
            </div>
          </div>
        </div>
        <div className='w-full hover:bg-[#F59376] border-solid shadow-xl rounded-xl bg-[#f5f5f5]'>
          <div className='flex flex-col gap-3 h-full py-3 px-5'>
            <div className='text-[16px] text-[background: #7A7886]'>Phone Number</div>
            <div className='text-[22px] font-bold'>
            {profile?.phones?.length >= 1 ? profile?.phones : 'not set'}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <UserEditProfile visibleModal={modalOpen} token={token} />}
    </div>
  )
}

export default ProfilePersonalInfo