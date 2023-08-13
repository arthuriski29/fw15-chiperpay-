import React from "react";
import Link from "next/link";

import Image from "next/image";
import { LuSearch } from "react-icons/lu";
import defaultProfile from "../assets/image/defaultProfile.jpg";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setRecipient as setRecipientAction } from "@/redux/reducers/transfer";
import http from "@/helper/http";

function TransferSelectReceiver({ token }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [recipient, setRecipient] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState({});
  const recipientRedux = useSelector((state) => state.transfer.user);

  const getUsers = React.useCallback(
    async (page = 1, search = "", limit = 4) => {
      const { data } = await http(token).get("/users", {
        params: {
          page,
          search,
          limit,
        },
      });
      setRecipient(data);
      setPage(data.pageInfo);
    },
    [token]
  );

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  React.useEffect(() => {
    getUsers(1, search);
  }, [search, getUsers]);

  React.useEffect(() => {
    if (recipientRedux) {
      router.push("/transfer/input-amount");
    }
  }, [recipientRedux]);
  return (
    <div className="flex flex-col w-[80%] rounded-2xl shadow-2xl mr-20 gap-6 bg-[#f5f5f5]">
      <div className="flex flex-col flex-1 px-10 py-10 gap-10 h-full text-black">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[22px]">Select Receiver</div>
          <button className="btn btn-[#EBECEC]">-- Select Filter --</button>
        </div>
        <div className="flex relative items-center">
          <LuSearch
            className="absolute ml-4 text-[#9CA3AF]"
            alt="Search Icon"
          />
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered border-none flex-1 w-full pl-[50px] bg-[#fff]"
            type="text"
            placeholder="Search receiver here"
          />
        </div>
        <div className="flex flex-col gap-6 overflow-auto scrollbar-hide">
          {recipient.results &&
            recipient.results.map((item) => (
              <div
                onClick={() => dispatch(setRecipientAction(item))}
                key={`recipient-list${item.id}`}
                className="flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4"
              >
                <div className="flex-1 flex gap-10">
                  {item.picture ? (
                    <Image
                      src={item.picture}
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
                    <Link
                      href="/transfer/input-amount"
                      className="text-primary text-base font-bold capitalize"
                    >
                      {!item.fullName || item.fullName === undefined
                        ? "user"
                        : item.fullName}
                    </Link>
                    <div className="text-[#7A7886] font-light">
                      {item.email}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="flex gap-6 justify-center w-full">
            <button
              onClick={() => getUsers(page.page - 1)}
              disabled={page.page <= 1}
              className="btn btn-secondary shadow-md normal-case"
            >
              Prev
            </button>
            <label className="flex justify-center items-center font-[500] text-md text-secondary">
              {page.page} of {page.totalPage}
            </label>
            <button
              onClick={() => getUsers(page.page + 1)}
              disabled={page.page === page.totalPage}
              className="btn btn-secondary shadow-md normal-case"
            >
              Next
            </button>
          </div>
          {/* <Link
            href="/transfer/input-amount"
            className="flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4"
          >
            <div className="flex-1 flex gap-10">
              <Image
                src={transaction2}
                width="50"
                height="50"
                alt="transaction2"
              />
              <div className="flex flex-col flex-1 justify-between">
                <div className="font-bold">Netflix</div>
                <div className="text-[#7A7886] font-light">
                  +62 812-4343-6731
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/transfer/input-amount"
            className="flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4"
          >
            <div className="flex-1 flex gap-10">
              <Image
                src={transaction3}
                width="50"
                height="50"
                alt="transaction3"
              />
              <div className="flex flex-col flex-1 justify-between">
                <div className="font-bold">Christine Mar...</div>
                <div className="text-[#7A7886] font-light">
                  +62 811-3452-5252
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/transfer/input-amount"
            className="flex flex-shrink justify-between items-center shadow-lg rounded-2xl border-solid py-4 px-4"
          >
            <div className="flex-1 flex gap-10">
              <Image
                src={transaction4}
                width="50"
                height="50"
                alt="transaction4"
              />
              <div className="flex flex-col flex-1 justify-between">
                <div className="font-bold">Robert Chandler</div>
                <div className="text-[#7A7886] font-light">
                  +62 810-4224-4613
                </div>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default TransferSelectReceiver;
