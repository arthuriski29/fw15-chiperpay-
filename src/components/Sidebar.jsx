import React from 'react'
import Link from 'next/link'
import axios from 'axios'

import TopupUser from './TopupUser'

import { HiOutlineArrowUp, HiPlus, HiUser } from 'react-icons/hi'
import { IoIosLogOut } from 'react-icons/io'
import { RxDashboard } from 'react-icons/rx'
import { useRouter } from 'next/router'

function Sidebar({dashboard, transfer, topup, profile, token}) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const openModal = () => {
    if (modalOpen === true) {
      setModalOpen(false)
      setTimeout(() => {
        setModalOpen(true)
      }, 100)
    } else {
      setModalOpen(true)
    }
  }

  const router = useRouter()
  const doLogout = async () => {
    await axios.get('/api/logout')
    router.replace('/auth/login')
  }
  return (
    <div className='flex flex-col justify-between text-black w-[18%] min-w-[250px] bg-[#f5f5f5] ml-20 py-8 px-[5%] rounded-lg shadow-xl'>
      <div className='flex flex-col items-left gap-14 w-full'>
        <Link href='/home' className={`flex gap-6 cursor-pointer hover:text-secondary ${dashboard}`}>
          <div className='text-[25px]'>
            <RxDashboard/>
          </div>
          <div>Dashboard</div>
        </Link>
        <Link href='/transfer' className={`flex gap-6 cursor-pointer hover:text-secondary ${transfer}`}>
          <div className='text-[25px]'>
            <HiOutlineArrowUp/>
          </div>
          <div>Transfer</div>
        </Link>
        <label htmlFor="modal-topup">
          <div className={`flex gap-6 cursor-pointer hover:text-secondary ${topup}`}>
            <div className='text-[25px]'>
              <HiPlus/>
            </div>
            <button
             onClick={() => {
              openModal()
            }}
            >Top Up
            </button>
          </div>
        </label>
        <Link href='/profile' className={`flex gap-6 cursor-pointer hover:text-secondary ${profile}`}>
          <div className='text-[25px]'>
            <HiUser/>
          </div>
          <div>Profile</div>
        </Link>
        
      </div>
      <button onClick={() => window.my_modal_5.showModal()} className='flex gap-6 cursor-pointer text-red-600 hover:text-secondary'>
          <div className='text-[25px]'>
            <IoIosLogOut/>
          </div>
          <div>Logout</div>
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <form method="dialog" className="modal-box bg-white ">
          <h3 className="font-bold text-lg">Log Out</h3>
          <p className="py-4">Are you sure you want to logout?</p>
          <div className="modal-action">
            <button
              type="button"
              onClick={doLogout}
              className="btn btn-error"
            >
              Ok
            </button>
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      {modalOpen && (
        <TopupUser visibleModal={modalOpen} token={token} />
      )}
    </div>
)
}

export default Sidebar