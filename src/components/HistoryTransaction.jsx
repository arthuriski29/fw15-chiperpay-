import Image from "next/image";
import React from "react";
import Link from "next/link";
import http from "@/helper/http";
import { useDispatch, useSelector } from "react-redux";
import { setTransactions } from "@/redux/reducers/transactions";

import defaultProfile from "../assets/image/defaultProfile.jpg";

function HistoryTransaction({ token }) {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.transactions.data);

  const historyList = React.useCallback(async () => {
    const { data } = await http(token).get("/transactions", {
      params: { limit: 20 },
    });
    console.log(data);
    dispatch(setTransactions(data.results));
  }, [token, dispatch]);

  React.useEffect(() => {
    historyList();
  }, [historyList]);

  return (
    <div className="flex flex-col w-[80%] mr-20 gap-6 bg-[#f5f5f5]">
      <div className="flex flex-col flex-1 rounded-lg shadow-xl px-10 py-10 gap-10 h-full text-black">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[22px]">Transaction History</div>
          <Link href="/history">
            <button className="btn btn-[#EBECEC]">-- Select Filter --</button>
          </Link>
        </div>
        <div className="flex flex-col gap-6 overflow-auto scrollbar-hide">
          {history.map((item) => {
            return (
              <div key={`history-id-${item.id}`} className="flex flex-col">
                {item.type === "TOP-UP" && (
                  <Link
                    href="/transfer/input-amount"
                    className="flex flex-shrink justify-between items-center"
                  >
                    <div className="flex-1 flex gap-10">
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
                        <div className="text-[#7A7886] font-light">Top Up</div>
                      </div>
                    </div>
                    <div className="flex-1 font-black text-[15px] text-[#1EC05F] text-end">
                      {" "}
                      +
                      {item.amount &&
                        `Rp${Number(item.amount).toLocaleString("id")}`}
                    </div>
                  </Link>
                )}
                {item.type === "TRANSFER" && (
                  <Link
                    href="/transfer/input-amount"
                    className="flex flex-shrink justify-between items-center"
                  >
                    <div className="flex-1 flex gap-10">
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
                        <div className="text-[#7A7886] font-light">Accept</div>
                      </div>
                    </div>
                    <div className="flex-1 font-black text-[15px] text-[#1EC05F] text-end">
                      {" "}
                      +
                      {item.amount &&
                        `Rp${Number(item.amount).toLocaleString("id")}`}
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HistoryTransaction;
