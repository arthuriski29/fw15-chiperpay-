import React from 'react'

import { RxDashboard } from 'react-icons/rx';
import { IoIosLogOut } from 'react-icons/io';
import { HiOutlineArrowDown, HiOutlineArrowUp, HiPlus, HiUser } from 'react-icons/hi';
import { BsPencilSquare } from 'react-icons/bs';


import Image from 'next/image'
import Header from '@/components/Header';

import transaction1 from '../../assets/image/transaction1.png'
import transaction2 from '../../assets/image/transaction2.png'
import transaction3 from '../../assets/image/transaction3.png'
import transaction4 from '../../assets/image/transaction4.png'
import Link from 'next/link';
import PinInput from '@/components/PinInput';


function Confirmation() {
  const [showAlert, setShowAlert] = React.useState(false)
  const changedPin = (value)=> {
    if(value.length === 6){
      setShowAlert(true)
    }else{
      setShowAlert(false)
    }
  }

  return (
    <div className='h-screen bg-[#ffff]'>
      <Header/>
      <div className='flex h-[70%] mt-10 mb-10 gap-8'>
        <div className='flex flex-col justify-between text-black w-[18%] min-w-[250px] bg-[#f5f5f5] ml-20 py-8 px-[5%] rounded-lg shadow-xl'>
          <div className='flex flex-col items-left gap-14 w-full'>
            <Link href='/home' className='flex gap-6'>
              <div className='text-[25px]'>
                <RxDashboard/>
              </div>
              <div>Dashboard</div>
            </Link>
            <Link href='/transfer' className='flex gap-6 text-accent'>
              <div className='text-[25px]'>
                <HiOutlineArrowUp/>
              </div>
              <div>Transfer</div>
            </Link>
            <label htmlFor="modal-topup">
              <div className='flex gap-6 cursor-pointer'>
                <div className='text-[25px]'>
                  <HiPlus/>
                </div>
                <div>Top Up</div>
              </div>
            </label>
            <Link href='/profile' className='flex gap-6'>
              <div className='text-[25px]'>
                <HiUser/>
              </div>
              <div>Profile</div>
            </Link>
            
          </div>
          <div className='flex gap-6'>
              <div className='text-[25px]'>
                <IoIosLogOut/>
              </div>
              <div>Logout</div>
          </div>
        </div>
        <div className='flex flex-col w-[80%] justify-between rounded-2xl shadow-2xl mr-20 px-10 py-10 bg-[#f5f5f5]'>
          <div className='flex flex-col gap-10 h-[30%] text-black'>
            <div className='font-bold text-[22px]'>Transfer To</div>
            <div className='flex flex-col gap-12 justify-between h-full'>
              <div className='flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4'>
                <div className='flex-1 flex gap-10'>
                  <Image
                    src={transaction1}
                    width='50'
                    height='50'
                    alt='transaction1'
                  />
                  <div className='flex flex-col flex-1 justify-between'>
                    <div className='font-bold'>Samuel Suhi</div>
                    <div className='text-[#7A7886] font-light'>+62 813-8492-9994</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1 h-[70%] text-black justify-between'>
            <div className='font-bold text-[22px]'>
              Details
            </div>
            <div className='overflow-auto [&::-webkit-scrollbar]:hidden'>
              <div className='flex flex-col shadow-lg rounded-2xl border-solid gap-4'>
                <div className='flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4'>
                  <div className='text-[#7A7886]text-[16px] font-light'>Amount</div>
                  <div className='text-[22px] font-bold'>Rp100.000</div>
                </div>
                <div className='flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4'>
                  <div className='text-[#7A7886]text-[16px] font-light'>Balance Left</div>
                  <div className='text-[22px] font-bold'>Rp20.000</div>
                </div>
                <div className='flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4'>
                  <div className='text-[#7A7886]text-[16px] font-light'>Date & Time</div>
                  <div className='text-[22px] font-bold'>May 11, 2020 - 12.20</div>
                </div>
                <div className='flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4'>
                  <div className='text-[#7A7886]text-[16px] font-light'>Notes</div>
                  <div className='text-[22px] font-bold'>For buying some socks</div>
                </div>
              </div>
            </div>
            <label htmlFor="modal-transfer" className="btn tn-secondary self-end">Continue</label>
          </div>
        </div>
      </div>
      <footer className='h-[100px] mb-0 bg-[#F59376] text-black'>
        <div className=' h-full flex justify-between items-center mx-[7%]'>
          <div>2020 chiperPay. All right reserved.</div>
          <div className='flex gap-4'>
            <div>+62 5637 8882 9901</div>
            <div>contact@chiperpay.com</div>
          </div>
        </div>
      </footer>
      <input type="checkbox" id="modal-transfer" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-[#f5f5f5] text-black">
            <form className='w-full h-[500px] '>
              <div className='flex flex-col justify-between h-full px-4 py-4'>
                <div className='text-[18px] font-bold leading-[25px]'>Enter Pin to Transfer</div>
                <div className='w-[302px] text-[#3A3D4299] text-[16px]'>Enter your 6 digits PIN for confirmation to continue transferring money. </div>
                <PinInput onChangePin={changedPin}/>
                {showAlert && <div className='border-b-[2px] border-[#2CAD7D] shadow-lg shadow-[#93C961] max-w-md'></div>}
                <button type='submit' className='btn bg-secondary self-end mt-6'>
                  Confirm
                </button>
              </div>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="modal-transfer">Close</label>
        </div>
      <input type="checkbox" id="modal-topup" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-[#f5f5f5] text-black">
            <form className='w-full h-[500px] '>
              <div className='flex flex-col justify-between h-full px-4 py-4'>
                <div className='text-[18px] font-bold leading-[25px]'>Top Up</div>
                <div className='w-[302px] text-[#3A3D4299] text-[16px]'>Enter the amount of money, and click submit</div>
                <div className=''>
                  <input type='number' className='w-full input input-bordered text-center'/>
                </div>
                <button type='submit' className='btn bg-secondary self-end mt-6'>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="modal-topup">Close</label>
        </div>
    </div>
  )
}

export default Confirmation