import React from 'react'

import { HiOutlineBell } from 'react-icons/hi2';
import { RxDashboard } from 'react-icons/rx';
import { IoIosLogOut } from 'react-icons/io';
import { HiOutlineArrowDown, HiOutlineArrowUp, HiPlus, HiUser } from 'react-icons/hi';


import Image from 'next/image'
import Header from '@/components/Header';

import profile from '../../assets/image/profile-1.jpg'
import transaction1 from '../../assets/image/transaction1.png'
import transaction2 from '../../assets/image/transaction2.png'
import transaction3 from '../../assets/image/transaction3.png'
import transaction4 from '../../assets/image/transaction4.png'
import graphImage from '../../assets/image/graph.png'


import Link from 'next/link';


function Home() {
  // const router = useRouter()
  // const doLogout = async () => {
  //   await axios.get('/api/logout')
  //   router.replace('/auth/login')
  // }
  return (
    <div className='h-[100vh] bg-[#ffff]'>
      <Header/>
      <div className='flex h-[80%] mt-10 mb-10 gap-8'>
        <div className='flex flex-col justify-between text-black w-[18%] min-w-[250px] bg-[#f5f5f5] ml-20 py-8 px-[5%] rounded-lg shadow-xl'>
          <div className='flex flex-col items-left gap-14 w-full'>
            <div className='flex gap-6 text-accent'>
              <div className='text-[25px]'>
                <RxDashboard/>
              </div>
              <div>Dashboard</div>
            </div>
            <Link href='/transfer' className='flex gap-6'>
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
          <button onClick={() => window.my_modal_5.showModal()} className='flex gap-6'>
              <div className='text-[25px]'>
                <IoIosLogOut/>
              </div>
              <div>Logout</div>
          </button>
        </div>
        <div className='flex flex-col w-[80%] justify-between mr-20 gap-6'>
          <div className='flex justify-between h-[30%] px-10 py-8 text-white bg-accent rounded-lg shadow-2xl'>
            <div className='flex flex-col gap-4 justify-between'>
              <div className='text-[20px]'>Balance</div>
              <div className='font-black text-[50px]'>Rp 120.000</div>
              <div>+62 813-9387-7946</div>
            </div>
            <div className='flex flex-col gap-4 justify-between'>
              <Link href='/transfer' className='btn btn-neutral h-[60px] flex gap-4 shadow-lg text-[15px]'>
                <HiOutlineArrowUp/>  
                <div className=''>Transfer</div>  
              </Link>
              <label htmlFor="modal-topup" className='btn btn-neutral h-[60px] flex gap-4 shadow-lg text-[15px]'>
                <HiPlus/>  
                <div className=''>Top Up</div>  
              </label>
            </div>
          </div>
          <div className='flex gap-6 h-[70%] justify-between'>
            <div className='flex-1 flex flex-col justify-between rounded-lg shadow-xl bg-[#E4C5AA] text-black px-10 py-10'>
              <div className='flex justify-between h-[30%]'>
                <div className='flex flex-col gap-2'>
                  <HiOutlineArrowUp className='text-[#1EC05F]'/>
                  <div className='text-md'>Income</div>
                  <div className='font-black text-[15px]'>Rp2.120.000</div>
                </div>
                <div className='flex flex-col gap-2'>
                  <HiOutlineArrowDown className='text-[#ED5533]'/>
                  <div className='text-md'>Expense</div>
                  <div className='font-black text-[15px]'>Rp1.560.000</div>
                </div>
              </div>
              <div className='flex-1 flex items-center w-full justify-center h-full'>
                <Image
                  src={graphImage}
                  className='max-h-[100%] max-w-[80%]'
                  width='500'
                  height='500'
                  alt='graph-image'
                />
              </div>
            </div>
            <div className='flex flex-col flex-1 rounded-lg shadow-xl bg-[#E4C5AA] px-10 py-10 justify-between h-full text-black'>
              <div className='flex justify-between items-center'>
                <div className='font-bold text-[22px]'>Transaction History</div>
                <Link href='/history' className='font-bold hover:text-[#F0592C]'>See All</Link>
              </div>
              <div className='flex h-full flex-col gap-6 justify-center'>
                <div className='flex flex-shrink justify-between items-center'>
                  <div className='flex-1'>
                    <Image
                      src={transaction1}
                      width='50'
                      height='50'
                      alt='transaction1'
                    />
                  </div>
                  <div className='flex flex-col flex-1 justify-between'>
                    <div>Samuel Suhi</div>
                    <div>Accept</div>
                  </div>
                  <div className='flex-1 font-black text-[15px] text-[#1EC05F] text-end'>+Rp 50.000</div>
                </div>
                <div className='flex flex-shrink justify-between items-center'>
                  <div className='flex-1'>
                    <Image
                      src={transaction2}
                      width='50'
                      height='50'
                      alt='transaction2'
                    />
                  </div>
                  <div className='flex flex-col flex-1 justify-between'>
                    <div>Netflix</div>
                    <div>Transfer</div>
                  </div>
                  <div className='flex-1 font-black text-[15px] text-[#F0592C] text-end'>-Rp 149.000</div>
                </div>
                <div className='flex flex-shrink justify-between items-center'>
                  <div className='flex-1'>
                    <Image
                      src={transaction3}
                      width='50'
                      height='50'
                      alt='transaction3'
                    />
                  </div>
                  <div className='flex flex-col flex-1 justify-between'>
                    <div>Christine Mar...</div>
                    <div>Accept</div>
                  </div>
                  <div className='flex-1 font-black text-[15px] text-[#1EC05F] text-end'>+Rp 150.000</div>
                </div>
                <div className='flex flex-shrink justify-between items-center'>
                  <div className='flex-1'>
                    <Image
                      src={transaction4}
                      width='50'
                      height='50'
                      alt='transaction4'
                    />
                  </div>
                  <div className='flex flex-col flex-1 justify-between'>
                    <div>Robert Chandler</div>
                    <div>Top Up</div>
                  </div>
                  <div className='flex-1 font-black text-[15px] text-[#F0592C] text-end'>-Rp249.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[10%] mb-0 bg-[#F59376] text-black'>
        <div className=' h-full flex justify-between items-center mx-[7%]'>
          <div>2020 chiperPay. All right reserved.</div>
          <div className='flex gap-4'>
            <div>+62 5637 8882 9901</div>
            <div>contact@chiperpay.com</div>
          </div>
        </div>

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
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
          <form method="dialog" className="modal-box bg-white ">
            <h3 className="font-bold text-lg">Log Out</h3>
            <p className="py-4">Are you sure you want to logout?</p>
            <div className="modal-action">
              <Link href='auth/logout'>
              <button
                type="button"
                className="btn btn-error"
              >
                Ok
              </button></Link>
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
        </div>
    </div>
  )
}

export default Home