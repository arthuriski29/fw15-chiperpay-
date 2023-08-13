import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearTransferState } from "@/redux/reducers/transfer";
import moment from "moment/moment";
import "react-toastify/dist/ReactToastify.css";

import http from "@/helper/http";
import PinInput from "@/components/PinInput";

import Image from "next/image";
import defaultProfile from "../assets/image/defaultProfile.jpg";

function TransferConfirmation({ token }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const recipient = useSelector((state) => state.transfer.user);
  const amount = useSelector((state) => state.transfer.amount);
  const note = useSelector((state) => state.transfer.note);
  const profile = useSelector((state) => state.profile.data);
  const [pin, setPin] = React.useState("");
  const balanceLeft = profile.balance - amount;

  const notifyWarnReq = (data) => toast.warn(data);

  React.useEffect(() => {
    if (!recipient) {
      router.replace("/transfer");
    }
  }, [recipient]);

  const doTransfer = async () => {
    try {
      const form = new URLSearchParams({
        recipientId: recipient.id,
        notes: note,
        amount,
        pin,
      });
      const { data } = await http(token).post("/transactions/transfer", form);
      dispatch(clearTransferState());
      if (data.results) {
        router.replace("/transfer/status/" + data.results.id);
      }
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message === "transfer_wrong_pin") {
        notifyWarnReq("Opss! Wrong PIN");
      } else {
        notifyWarnReq(message);
      }
    }
  };
  return (
    <div className="flex flex-col w-[80%] gap-8 rounded-2xl shadow-2xl mr-20 px-10 py-10 bg-[#f5f5f5]">
      <div className="flex flex-col gap-4 h-[30%] text-black">
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
                  {recipient?.phones ? recipient.phones : recipient?.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 h-[70%] text-black justify-between">
        <div className="font-semibold text-[18px]">Details</div>
        <div className="overflow-auto [&::-webkit-scrollbar]:hidden">
          <div className="flex flex-col shadow-lg rounded-2xl border-solid gap-4">
            <div className="flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4 gap-4">
              <div className="text-[#7A7886] text-[16px] font-semibold">
                Amount
              </div>
              <div className="text-[18px] leading-7 font-semibold">
                {amount && `Rp${Number(amount).toLocaleString("id")}`}
              </div>
            </div>
            <div className="flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4 gap-4">
              <div className="text-[#7A7886] text-[16px] font-semibold">
                Balance Left
              </div>
              <div className="text-[18px] leading-7 font-semibold">
                {balanceLeft && `Rp${Number(balanceLeft).toLocaleString("id")}`}
              </div>
            </div>
            <div className="flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4 gap-4">
              <div className="text-[#7A7886] text-[16px] font-semibold">
                Date & Time
              </div>
              <div className="text-[18px] leading-7 font-semibold">
                {moment(new Date()).format("MMMM Do, YYYY - HH.mm")}
              </div>
            </div>
            <div className="flex-1 flex flex-col rounded-lg shadow-lg py-4 px-4 gap-4">
              <div className="text-[#7A7886] text-[16px] font-semibold">
                Notes
              </div>
              <div className="text-[18px] leading-7 font-semibold">{note}</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => window.my_modal_1.showModal()}
          className="btn tn-secondary self-end"
        >
          Continue
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <form
          method="dialog"
          className="modal-box flex flex-col gap-6 bg-white"
        >
          <h3 className="font-bold text-primary text-lg">
            Enter PIN to Transfer
          </h3>
          <p className="py-4 pr-28 text-left">
            Enter your 6 digits PIN for confirmation to continue transferring
            money.{" "}
          </p>
          <PinInput onChangePin={setPin} />
          <div className="modal-action">
            <button
              onClick={doTransfer}
              disabled={!(pin.length >= 6)}
              type="submit"
              className="btn btn-secondary w-full h-full lg:w-36 normal-case rounded-xl text-md"
            >
              Continue
            </button>
          </div>
        </form>
      </dialog>
      <div className="pt-24">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}

export default TransferConfirmation;
