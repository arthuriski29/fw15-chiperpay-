import React from "react";

import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import {
  HiArrowRight,
  HiLockClosed,
  HiOutlineArrowUp,
  HiPlus,
  HiUser,
} from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

import Image from "next/image";
import Header from "@/components/Header";

import profile from "../../assets/image/profile-1.jpg";

import transaction1 from "../../assets/image/transaction1.png";
import transaction2 from "../../assets/image/transaction2.png";
import transaction3 from "../../assets/image/transaction3.png";
import transaction4 from "../../assets/image/transaction4.png";
import Link from "next/link";
import PinInput from "@/components/PinInput";
import Head from "next/head";

function ManagePhone() {
  return (
    <>
      <Head>
        <title>Profile || chiperPay</title>
      </Head>
      <div className="h-[100vh] bg-[#ffff]">
        <Header />
        <div className="flex h-[80%] mt-10 mb-10 gap-8">
          <div className="flex flex-col justify-between text-black w-[18%] min-w-[250px] bg-[#f5f5f5] ml-20 py-8 px-[5%] rounded-lg shadow-xl">
            <div className="flex flex-col items-left gap-14 w-full">
              <Link href="/home" className="flex gap-6">
                <div className="text-[25px]">
                  <RxDashboard />
                </div>
                <div>Dashboard</div>
              </Link>
              <Link href="/transfer" className="flex gap-6">
                <div className="text-[25px]">
                  <HiOutlineArrowUp />
                </div>
                <div>Transfer</div>
              </Link>
              <label htmlFor="modal-topup">
                <div className="flex gap-6 cursor-pointer">
                  <div className="text-[25px]">
                    <HiPlus />
                  </div>
                  <div>Top Up</div>
                </div>
              </label>
              <Link href="/profile" className="flex gap-6 text-accent">
                <div className="text-[25px]">
                  <HiUser />
                </div>
                <div>Profile</div>
              </Link>
            </div>
            <div className="flex gap-6">
              <div className="text-[25px]">
                <IoIosLogOut />
              </div>
              <div>Logout</div>
            </div>
          </div>
          <div className="flex flex-col w-[80%] justify-between rounded-2xl shadow-2xl mr-20 px-10 py-10 gap-6 bg-[#f5f5f5] text-black">
            <div className="flex flex-col h-[30%] gap-6">
              <div className="font-bold text-[18px]">Personal Information</div>
              <div className="w-[342px]">
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </div>
            </div>
            <form className="flex flex-col h-[70%] items-center gap-8 text-black">
              <div className="flex items-center w-[450px]">
                <IoCallOutline
                  className="absolute ml-2 text-[#9CA3AF]"
                  alt="Email Icon"
                />
                <div className="absolute ml-8 text-black font-bold">+62</div>
                <input
                  className="input border-0 border-b-2 border-[#9CA3AF] rounded-none flex-1 w-full pl-20 bg-[#f5f5f5]"
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <button className="btn btn-secondary w-[450px]" type="submit">
                {" "}
                Edit Phone Number
              </button>
            </form>
          </div>
        </div>
        <footer className="h-[100px] mb-0 bg-[#F59376] text-black">
          <div className=" h-full flex justify-between items-center mx-[7%]">
            <div>2020 chiperPay. All right reserved.</div>
            <div className="flex gap-4">
              <div>+62 5637 8882 9901</div>
              <div>contact@chiperpay.com</div>
            </div>
          </div>
        </footer>

        <input type="checkbox" id="modal-topup" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box bg-[#f5f5f5] text-black">
            <form className="w-full h-[500px] ">
              <div className="flex flex-col justify-between h-full px-4 py-4">
                <div className="text-[18px] font-bold leading-[25px]">
                  Top Up
                </div>
                <div className="w-[302px] text-[#3A3D4299] text-[16px]">
                  Enter the amount of money, and click submit
                </div>
                <div className="">
                  <input
                    type="number"
                    className="w-full input input-bordered text-center"
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-secondary self-end mt-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="modal-topup">
            Close
          </label>
        </div>
      </div>
    </>
  );
}

export default ManagePhone;
