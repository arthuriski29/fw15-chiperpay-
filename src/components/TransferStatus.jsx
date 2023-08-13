import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";
import http from "@/helper/http";
import moment from "moment";

import Image from "next/image";
import defaultProfile from "../assets/image/defaultProfile.jpg";

function TransferStatus({ token, id }) {
  const profile = useSelector((state) => state.profile.data);
  const [transaction, setTransaction] = React.useState({});
  const [recipient, setRecipient] = React.useState({});
  const router = useRouter();
  const balanceLeft = profile.balance - transaction.amount;

  const getDataStatus = React.useCallback(async () => {
    const { data } = await http(token).get("/transactions/" + id);
    console.log(data);
    if (data.results) {
      setTransaction(data.results);
      setRecipient(data.results.recipient);
    }
  }, [id, token]);

  React.useEffect(() => {
    getDataStatus();
  }, [getDataStatus]);
  return (
    <div className="flex flex-col w-[80%] rounded-2xl shadow-2xl mr-20 px-10 py-10 bg-[#f5f5f5] gap-5">
      <div className="flex flex-col gap-5 h-[30%] text-black items-center justify-center">
        <div className="w-16 h-16 bg-[#1EC15F] flex items-center justify-center rounded-full">
          <i>
            <AiOutlineCheck size={50} className="text-white" />
          </i>
        </div>
        <div className="font-bold text-[18px]">Transfer Success</div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <div className="flex justify-between h-[310px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-11 overflow-auto scrollbar-hide">
              <div className="flex flex-col gap-1 h-[80%] text-black justify-between">
                <div className="font-semibold text-[18px]">Details</div>
                <div className="overflow-auto [&::-webkit-scrollbar]:hidden">
                  <div className="flex flex-col shadow-lg rounded-2xl border-solid gap-4 h-full">
                    <div className="flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4 gap-4">
                      <div className="text-[#7A7886] text-[16px] font-semibold">
                        Amount
                      </div>
                      <div className="text-[18px] leading-7 font-semibold">
                        {transaction.amount &&
                          `Rp${Number(transaction.amount).toLocaleString(
                            "id"
                          )}`}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4 gap-4">
                      <div className="text-[#7A7886] text-[16px] font-semibold">
                        Balance Left
                      </div>
                      <div className="text-[18px] leading-7 font-semibold">
                        {profile?.balance &&
                          `Rp${Number(profile?.balance).toLocaleString("id")}`}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4 gap-4">
                      <div className="text-[#7A7886] text-[16px] font-semibold">
                        Date & Time
                      </div>
                      <div className="text-[18px] leading-7 font-semibold">
                        {moment(transaction.createdAt).format(
                          "MMMM Do, YYYY - HH.mm"
                        )}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4 gap-4">
                      <div className="text-[#7A7886] text-[16px] font-semibold">
                        Notes
                      </div>
                      <div className="text-[18px] leading-7 font-semibold">
                        {transaction.notes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-12 justify-between h-full">
              <div className="flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4">
                <div className="flex flex-col gap-4 text-black">
                  <div className="font-bold text-[18px]">Transfer To</div>
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
                            className={`font-bold ${
                              recipient?.fullName ? "capitalize" : ""
                            }`}
                          >
                            {recipient?.fullName || recipient?.username}
                          </div>
                          <div className="text-[#7A7886] font-light">
                            {recipient?.phones
                              ? recipient.phones
                              : recipient?.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full text-end mt-5 flex flex-col md:flex-row items-center justify-end gap-5">
            <div className="w-full lg:w-[170px]">
              <button className="btn btn-accent capitalize text-white w-full ">
                Download PDF
              </button>
            </div>
            <div className="w-full lg:w-[170px]">
              <Link
                href="/home"
                className="btn btn-primary capitalize text-white w-full"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferStatus;
