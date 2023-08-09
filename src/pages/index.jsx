import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { IoCallOutline } from 'react-icons/io5'
import { RxLockClosed } from 'react-icons/rx'
import { HiOutlineDownload } from 'react-icons/hi'

import loginVector from '../assets/image/login-vector.png'
import phone1 from '../assets/image/png-phone.png'
import phone2 from '../assets/image/png-phone2.png'
import partners1 from '../assets/image/partners1.svg'
import partners2 from '../assets/image/partners2.svg'
import partners3 from '../assets/image/partners3.svg'
import partners4 from '../assets/image/partners4.svg'
import profile2 from '../assets/image/profile-2.png'


function LandingPage() {
  return (
    <div className='w-full'>
      <section className='relative overflow-hidden h-[100vh] bg-accent'>
        <div className='absolute mt-[25px] self-start w-[5000px] left-[-75px]'>
          <Image src={loginVector} 
              alt="login-vector" 
              width="1600" 
              height="700" />
        </div>
        <div className='relative flex justify-between items-center h-[10vh] mx-[7%]'>
          <Link href='/' className='font-extrabold text-[45px] text-base-100 text-xl'>chiper<span className='text-[#804242] font-black'>Pay</span></Link>
          <div className='flex gap-4'>
            <Link href='/auth/login'><button className='btn btn-secondary'>Login</button></Link>
            <Link href='/auth/register'><button className='btn btn-secondary'>Sign Up</button></Link>
          </div>
        </div>
        <div className='flex mx-[10%] h-[80%] items-center'>
          <div className='flex-1 flex flex-col gap-7'>
            <div className='font-black text-[70px]'>
              Awesome App
              For Saving Time.
            </div>
            <div className='font-normal text-[18px] leading-10'>
              We bring you a mobile app for banking problems that
              oftenly wasting much of your times.
            </div>
            <div>
              <Link href='/home'>
                <button className='btn btn-secondary'>
                  Try It Free
                </button>
              </Link>
            </div>
          </div>
          <div className='flex-1'>
            <div className='mt-[520px]'>
              <Image src={phone1} 
                alt="phone-1" 
                width="600" 
                height="1155" />
            </div>
          </div>
        </div>
      </section>
      <section className='h-[27vh] w-full bg-[#E2D3C5]'>
       <div className='flex h-full justify-between mx-[10%]' >
        <Image src={partners1} 
          alt="partners-1" 
          width="173" 
          height="120" 
        />
        <Image src={partners2} 
          alt="partners-1" 
          width="173" 
          height="120" 
        />
        <Image src={partners3} 
          alt="partners-1" 
          width="173" 
          height="120" 
        />
        <Image src={partners4} 
          alt="partners-1" 
          width="173" 
          height="120" 
        />
       </div>
      </section>
      <section className='h-[100vh] flex flex-col gap-20 text-black py-[100px] px-[200px]'>
        <div className='flex flex-col justify-center items-center mt-[40px] gap-8 text-center'>
          <div className='font-bold text-[75px]'><span className='text-[#F59376]'>About</span> the Application.</div>
          <div className='font-normal text-[22px] px-[100px] leading-10'>We have some great features from the application and it&rsquo;s totally free to use by all users around the world.</div>
        </div>
        <div className='flex justify-between items-center gap-6'>
          <div className='rounded-lg bg-[#F5F5F5] border-solid drop-shadow-2xl flex flex-col items-center justify-center py-12 px-8 gap-8 text-center'>
            <div className='rounded-full border-2 p-2 bg-[#E2D3C5]'>
              <IoCallOutline className='w-8 h-8 text-accent'/>
            </div>
            <div className='text-[24px] font-extrabold leading-[31px]'>24/7 Support</div>
            <div className='font-normal size-[18px] leading-[31px]'>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</div>
          </div>
          <div className='rounded-lg bg-[#F5F5F5] border-solid drop-shadow-2xl flex flex-col items-center justify-center py-12 px-8 gap-8 text-center'>
            <div className='rounded-full border-2 p-2 bg-[#E2D3C5]'>
              <RxLockClosed className='w-8 h-8 text-accent'/>
            </div>
            <div className='text-[24px] font-extrabold leading-[31px]'>Data Privacy</div>
            <div className='font-normal size-[18px] leading-[31px]'>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</div>
          </div>
          <div className='rounded-lg bg-[#F5F5F5] border-solid drop-shadow-2xl flex flex-col items-center justify-center py-12 px-8 gap-8 text-center'>
            <div className='rounded-full border-2 p-2 bg-[#E2D3C5]'>
              <HiOutlineDownload className='w-8 h-8 text-accent'/>
            </div>
            <div className='text-[24px] font-extrabold leading-[31px]'>Easy Wallet</div>
            <div className='font-normal size-[18px] leading-[31px]'>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</div>
          </div>
        </div>
      </section>
      <section className='h-[120vh] bg-[#E2D3C5] flex overflow-hidden'>
        <div className='w-[40%] flex flex-col justify-between my-[-350px] items-end'>
          <Image src={phone2} 
            alt="phone-2" 
            width="469" 
            height="892" 
          />
          <Image src={phone2} 
            alt="phone-2" 
            width="469" 
            height="892" 
          />
        </div>
        <div className='w-[60%] h-full flex flex-col justify-center mx-[50px] pr-[10%] gap-10'>
          <div className='font-bold text-[75px] leading-[93px]'>
            All The <span className='text-[#F59376]'>Great </span>
            chiperPay Features.
          </div>
          <div className='flex flex-col gap-8 mr-[25%]'>
            <div className='flex flex-col border-solid rounded-xl bg-[#f5f5f5] text-black shadow-lg py-6 px-4 gap-4'>
              <div className='font-extrabold'><span className='text-[#F59376]'>1.</span> Small Fee</div>
              <div className='font-normal size-[18px] leading-[31px]'>We only charge 5% of every success transaction done in chiperPay app.</div>
            </div>
            <div className='flex flex-col border-solid rounded-xl bg-[#f5f5f5] text-black shadow-lg py-6 px-4 gap-4'>
              <div className='font-extrabold'><span className='text-[#F59376]'>2.</span> Data Secured</div>
              <div className='font-normal size-[18px] leading-[31px]'>All your data is secured properly in our system and it’s encrypted.</div>
            </div>
            <div className='flex flex-col border-solid rounded-xl bg-[#f5f5f5] text-black shadow-lg py-6 px-4 gap-4'>
              <div className='font-extrabold'><span className='text-[#F59376]'>3.</span> User Friendly</div>
              <div className='font-normal size-[18px] leading-[31px]'>chiperPay come up with modern and sleek design and not complicated.</div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-[100vh] flex flex-col justify-center items-center bg-[#f5f5f5] text-black gap-10'>
        <div className='flex flex-col gap-8 items-center'>
          <div className='font-bold text-[75px] leading-[93px] text-center'>What Users are <span className='text-[#F59376]'>Saying.</span></div>
          <div className='font-semibold size-[18px] leading-[31px] w-[65%] text-center'>We have some great features from the application and it&rsquo;s totally free to use by all users around the world.</div>
        </div>
        <div className='w-[60%] py-[60px] px-[40px] flex flex-col items-center border-solid shadow-xl rounded-2xl gap-4 text-center bg-white'>
          <div className='rounded-full overflow-hidden'>
            <Image src={profile2} 
              alt="profile-2" 
              width="120" 
              height="120" 
            />
          </div>
          <div className='font-bold size-[25px] leading-[40px]'>Alex Hansinburg</div>
          <div className='font-normal size-[20px] leading-[33px]'>Designer</div>
          <div className='font-normal size-[18px] leading-[33px]'>“This is the most outstanding app that I&rsquo;ve ever try in my live, this app is such an amazing masterpiece and it&rsquo;s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</div>
        </div>
      </section>
      <section className='h-[50vh] bg-accent'>
        <div className='flex flex-col mx-[7%] h-full justify-center gap-7'>
          <Link href='/' className='font-extrabold text-[45px] text-base-100 text-xl'>chiper<span className='text-[#804242] font-black'>Pay</span></Link>
          <div className='w-[280px]'>Simplify financial needs and saving much time in banking needs with one single app.</div>
          <hr className='w-full my-8 bg-[#A87B51]'/>
          <div className='flex justify-between'>
            <div>2020 chiperPay. All right reserved.</div>
            <div className='flex gap-4'>
              <div>+62 5637 8882 9901</div>
              <div>contact@chiperpay.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
