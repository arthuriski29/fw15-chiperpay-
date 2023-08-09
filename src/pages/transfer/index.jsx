import React from 'react'

import { RxDashboard } from 'react-icons/rx';
import { IoIosLogOut } from 'react-icons/io';
import { HiOutlineArrowDown, HiOutlineArrowUp, HiPlus, HiUser } from 'react-icons/hi';
import { LuSearch } from 'react-icons/lu';


import Image from 'next/image'
import Header from '@/components/Header';

import transaction1 from '../../assets/image/transaction1.png'
import transaction2 from '../../assets/image/transaction2.png'
import transaction3 from '../../assets/image/transaction3.png'
import transaction4 from '../../assets/image/transaction4.png'
import Link from 'next/link';


function Transfer() {
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
        <div className='flex flex-col w-[80%] rounded-2xl shadow-2xl mr-20 gap-6 bg-[#f5f5f5]'>
          <div className='flex flex-col flex-1 px-10 py-10 gap-10 h-full text-black'>
            <div className='flex justify-between items-center'>
              <div className='font-bold text-[22px]'>Transaction History</div>
              <button className='btn btn-[#EBECEC]'>-- Select Filter --</button>
            </div>
            <div className='flex relative items-center'>
              <LuSearch className="absolute ml-4 text-[#9CA3AF]" alt="Search Icon" />
              <input className='input input-bordered border-none flex-1 w-full pl-[50px] bg-[#fff]' type="text" placeholder='Search receiver here' />
            </div>
            <div className='flex flex-col gap-6 justify-between'>
              <Link href='/transfer/input-amount'className='flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4'>
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
              </Link>
              <Link href='/transfer/input-amount'className='flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4'>
                <div className='flex-1 flex gap-10'>
                  <Image
                    src={transaction2}
                    width='50'
                    height='50'
                    alt='transaction2'
                  />
                  <div className='flex flex-col flex-1 justify-between'>
                    <div className='font-bold'>Netflix</div>
                    <div className='text-[#7A7886] font-light'>+62 812-4343-6731</div>
                  </div>
                </div>
              </Link>
              <Link href='/transfer/input-amount'className='flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4'>
                <div className='flex-1 flex gap-10'>
                  <Image
                    src={transaction3}
                    width='50'
                    height='50'
                    alt='transaction3'
                  />
                  <div className='flex flex-col flex-1 justify-between'>
                    <div className='font-bold'>Christine Mar...</div>
                    <div className='text-[#7A7886] font-light'>+62 811-3452-5252</div>
                  </div>
                </div>
              </Link>
              <Link href='/transfer/input-amount'className='flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4'>
                <div className='flex-1 flex gap-10'>
                  <Image
                    src={transaction4}
                    width='50'
                    height='50'
                    alt='transaction4'
                  />
                  <div className='flex flex-col flex-1 justify-between'>
                    <div className='font-bold'>Robert Chandler</div>
                    <div className='text-[#7A7886] font-light'>+62 810-4224-4613</div>
                  </div>
                </div>
              </Link>
            </div>
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

export default Transfer