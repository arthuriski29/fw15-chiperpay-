import React from "react";
import Link from "next/link";

import Image from "next/image";

import defaultProfile from "../assets/image/defaultProfile.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setNote } from "@/redux/reducers/transfer";

function TransferAmount({ token }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const recipient = useSelector((state) => state.transfer.user);
  console.log(recipient);
  const amount = useSelector((state) => state.transfer.amount);
  const note = useSelector((state) => state.transfer.note);

  React.useEffect(() => {
    if (!recipient) {
      router.replace("/transfer");
    }
  }, [recipient]);

  const checkAmount = (amount) => {
    amount = parseInt(amount);
    if (amount > profile.balance) {
      return profile.balance;
    }
    return amount;
  };
  return (
    <div className="flex flex-col w-[80%] rounded-2xl shadow-2xl mr-20 gap-6 bg-[#f5f5f5]">
      <div className="flex flex-col flex-1 px-10 py-10 gap-10 h-full text-black">
        <div className="font-bold text-[22px]">Transfer Money</div>
        <div className="flex flex-col gap-12 justify-between h-full">
          <div className="flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4">
            <div className="flex-1 flex gap-10">
              {recipient.picture ? (
                <Image
                  src={recipient.picture}
                  width="50"
                  height="50"
                  className="object-cover w-16 h-16 rounded-xl overflow-hidden"
                  alt="userImage"
                />
              ) : (
                <Image
                  src={defaultProfile}
                  width="50"
                  height="50"
                  className="object-cover w-16 h-16 rounded-xl overflow-hidden"
                  alt="defaultProfile"
                />
              )}
              <div className="flex flex-col flex-1 justify-between">
                <div
                  className={`font-bold  ${
                    recipient?.fullName ? "capitalize" : ""
                  }`}
                >
                  {recipient?.fullName || recipient?.username}
                </div>
                <div className="text-[#7A7886] font-light">
                  {recipient?.phones ? recipient.phones : recipient?.email}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full justify-between">
            <div className="w-[336px] text-[#7A7886]">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </div>
            <form>
              <div className="flex flex-col justify-center items-center gap-4  ">
                <input
                  type="number"
                  className="text-[#B5BDCC] text-[42px] font-bold"
                  placeholder="0.00"
                  onChange={(e) => dispatch(setAmount(e.target.value))}
                  value={checkAmount(amount)}
                />
                0.00
                <div className="text-[18px] leading-8 font-bold">
                  Rp. {!profile?.balance ? "0" : profile?.balance} Available
                </div>
                <div className="flex relative items-center">
                  <BsPencilSquare
                    className="absolute ml-4 text-[#9CA3AF]"
                    alt="Notes Icon"
                  />
                  <input
                    type="text"
                    className="input input-bordered border-none flex-1 w-full pl-[50px] bg-[#fff]"
                    placeholder="Add some notes"
                    onChange={(e) => dispatch(setNote(e.target.value))}
                  />
                </div>
              </div>
              <div className="items-end">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => router.replace("/transfer/confirmation")}
                  disabled={amount < 10000}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferAmount;
