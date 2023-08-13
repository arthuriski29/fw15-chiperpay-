import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowDown, HiOutlineArrowUp, HiPlus } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import { setTransactions } from "@/redux/reducers/transactions";

import defaultProfile from "../assets/image/defaultProfile.jpg";
import graphImage from "../assets/image/graph.png";
import http from "@/helper/http";
import TopupUser from "./TopupUser";

function Dashboard({ token }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const transaction = useSelector((state) => state.transactions.data);
  const [modalOpen, setModalOpen] = React.useState(false);

  const transactionList = React.useCallback(async () => {
    const { data } = await http(token).get("/transactions", {
      params: { limit: 10 },
    });
    dispatch(setTransactions(data.results));
  }, [token, dispatch]);

  React.useEffect(() => {
    transactionList();
  }, [transactionList]);
  const openModal = () => {
    if (modalOpen === true) {
      setModalOpen(false);
      setTimeout(() => {
        setModalOpen(true);
      }, 200);
    } else {
      setModalOpen(true);
    }
  };
  return (
    <div className="flex flex-col w-[80%] justify-between mr-20 gap-6">
      <div className="flex justify-between h-[30%] px-10 py-8 text-white bg-accent rounded-lg shadow-2xl">
        <div className="flex flex-col gap-4 justify-between">
          <div className="text-[20px]">Balance</div>
          <div className="font-black text-[50px]">
            Rp {!profile?.balance ? "0" : profile?.balance}
          </div>
          <div>08123812931</div>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <Link
            href="/transfer"
            className="btn btn-neutral h-[60px] flex gap-4 shadow-lg text-[15px]"
          >
            <HiOutlineArrowUp />
            <div className="">Transfer</div>
          </Link>
          <button
            htmlFor="modal-topup"
            onClick={() => {
              openModal();
            }}
            className="btn btn-neutral h-[60px] flex gap-4 shadow-lg text-[15px]"
          >
            <HiPlus />
            <div className="">Top Up</div>
          </button>
        </div>
      </div>
      <div className="flex gap-6 h-[70%] justify-between">
        <div className="flex-1 flex flex-col justify-between rounded-lg shadow-xl bg-[#E4C5AA] text-black px-10 py-10">
          <div className="flex justify-between h-[30%]">
            <div className="flex flex-col gap-2">
              <HiOutlineArrowUp className="text-[#1EC05F]" />
              <div className="text-md">Income</div>
              <div className="font-black text-[15px]">Rp2.120.000</div>
            </div>
            <div className="flex flex-col gap-2">
              <HiOutlineArrowDown className="text-[#ED5533]" />
              <div className="text-md">Expense</div>
              <div className="font-black text-[15px]">Rp1.560.000</div>
            </div>
          </div>
          <div className="flex-1 flex items-center w-full justify-center h-full">
            <Image
              src={graphImage}
              className="max-h-[100%] max-w-[80%]"
              width="500"
              height="500"
              alt="graph-image"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 rounded-lg shadow-xl bg-[#E4C5AA] px-10 py-10 justify-between h-full text-black">
          <div className="flex justify-between items-center">
            <div className="font-bold text-[22px]">Transaction History</div>
            <Link href="/history" className="font-bold hover:text-[#F0592C]">
              See All
            </Link>
          </div>
          <div className="flex h-full flex-col gap-6 justify-center overflow-hidden scrollbar-hide">
            {transaction.map((item) => {
              return (
                <div
                  key={`transactions-list-${item?.id}`}
                  className="flex flex-shrink justify-between items-center"
                >
                  {item.type === "TOP-UP" && (
                    <div className="flex-1 flex gap-8">
                      {item.recipient.picture ? (
                        <Image
                          src={item.recipient.picture}
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
                          className={`text-primary text-base font-bold ${
                            item?.recipient?.fullName ? "capitalize" : ""
                          }`}
                        >
                          {item?.recipient?.fullName || item?.recipient?.email}
                        </div>
                        <div className="text-[#7A7886] font-light">Topup</div>
                      </div>
                      <div className="flex-1 font-black text-[15px] text-[#1EC05F] text-end">
                        {" "}
                        +
                        {item.amount &&
                          `Rp${Number(item.amount).toLocaleString("id")}`}
                      </div>
                    </div>
                  )}
                  {item.type === "TRANSFER" && (
                    <>
                      {item.recipient.id !== profile.id && (
                        <div className="flex-1 flex gap-8">
                          {item.recipient.picture ? (
                            <Image
                              src={item.recipient.picture}
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
                              className={`text-primary text-base font-bold ${
                                item?.recipient?.fullName ? "capitalize" : ""
                              }`}
                            >
                              {item?.recipient?.fullName ||
                                item?.recipient?.email}
                            </div>
                            <div className="text-[#7A7886] font-light">
                              Transfer
                            </div>
                          </div>
                          {item.sender.id !== profile.id ? (
                            <div className="flex-1 font-black text-[15px] text-[#1EC05F] text-end">
                              {" "}
                              +
                              {item.amount &&
                                `Rp${Number(item.amount).toLocaleString("id")}`}
                            </div>
                          ) : (
                            <div className="flex-1 font-black text-[15px] text-[#F0592C] text-end">
                              {" "}
                              -
                              {item.amount &&
                                `Rp${Number(item.amount).toLocaleString("id")}`}
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {modalOpen && <TopupUser visibleModal={modalOpen} token={token} />}
    </div>
  );
}

export default Dashboard;
