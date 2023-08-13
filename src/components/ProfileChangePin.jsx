import React from "react";
import PinInput from "./PinInput";
import { useRouter } from "next/router";
import { BsCheckCircleFill } from "react-icons/bs";
import http from "@/helper/http";

function ProfileChangePin({ token }) {
  const [oldPin, setOldPin] = React.useState("");
  const [newPin, setNewPin] = React.useState("");
  const [confirmPin, setConfirmPin] = React.useState("");
  const [showFormOld, setShowFormOld] = React.useState(true);
  const [showFormNew, setShowFormNew] = React.useState(false);
  const [showFormCnfr, setShowFormCnfr] = React.useState(false);

  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const router = useRouter();

  const doOldPin = () => {
    setErrorMessage("");
    if (oldPin.length === 6) {
      setShowFormOld(false);
      setShowFormNew(true);
      console.log("oldPin :" + oldPin);
    } else {
      setErrorMessage("Pin must be 6 digits");
    }
  };

  const doNewPin = () => {
    setErrorMessage("");
    if (newPin.length === 6) {
      setShowFormNew(false);
      setShowFormCnfr(true);
      console.log("newPin :" + newPin);
    } else {
      setErrorMessage("Pin must be 6 digits");
    }
  };

  const doChangePin = async () => {
    setErrorMessage("");
    if (newPin === oldPin) {
      setErrorMessage("Pin must be different from the old pin");
      setShowFormOld(true);
      setShowFormNew(false);
      setShowFormCnfr(false);
      setOldPin("");
      setNewPin("");
      setConfirmPin("");
    }
    if (newPin !== confirmPin) {
      setErrorMessage("Confirm Pin does not match");
    } else if (newPin.length === 6 && newPin !== oldPin) {
      console.log("confirm :" + confirmPin);
      const form = new URLSearchParams({
        oldPin: oldPin,
        newPin: newPin,
        confirmPin: confirmPin,
      }).toString();

      try {
        const { data } = await http(token).patch("/profile/change-pin", form);
        console.log(data);
        if (data) {
          setSuccessMessage(true);
          setShowFormNew(false);
          setShowFormCnfr(false);
          setShowFormOld(true);
          setOldPin("");
          setNewPin("");
          setConfirmPin("");
        }
      } catch (error) {
        console.log(error);
        setErrorMessage("An error occurred. Please try again.");
      }
    } else if (confirmPin.length < 6) {
      setErrorMessage("Pin must be 6 digits");
    }
  };

  const handleSubmitOldPin = (e) => {
    e.preventDefault();
    doOldPin();
  };

  const handleSubmitNewPin = (e) => {
    e.preventDefault();
    doNewPin();
  };

  const handleSubmitChangePin = (e) => {
    e.preventDefault();
    doChangePin();
  };
  return (
    <div className="flex flex-col w-[80%] justify-between rounded-2xl shadow-2xl mr-20 px-10 py-10 gap-6 bg-[#f5f5f5] text-black">
      <div className="flex flex-col h-[20%] gap-6">
        <div className="font-bold text-[18px]">Change Pin</div>
        <div className="w-[342px]">
          Enter your current 6 digits Fazzpay PIN below to continue to the next
          steps.
        </div>
      </div>
      <div className="flex flex-col h-[70%] items-center gap-8 text-black">
        {showFormOld && (
          <form
            onSubmit={handleSubmitOldPin}
            className="flex flex-col justify-center gap-10 w-[450px] h-full px-4 py-4"
          >
            {successMessage && (
              <div className="w-full flex flex-row justify-center text-white text-lg">
                <BsCheckCircleFill className="text-green-400" size={60} />
              </div>
            )}
            <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
              Input Your Old PIN
            </div>
            {errorMessage && (
              <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                *{errorMessage}
              </div>
            )}
            <PinInput onChangePin={setOldPin} />
            <button type="submit" className="btn bg-secondary">
              Continue
            </button>
            {/* {showAlert && <div className='border-b-[2px] border-[#2CAD7D] shadow-lg shadow-[#93C961] max-w-md'></div>} */}
          </form>
        )}
        {showFormNew && (
          <form
            onSubmit={handleSubmitNewPin}
            className="flex flex-col justify-center gap-10 w-[450px] h-full px-4 py-4"
          >
            {successMessage && (
              <div className="w-full flex flex-row justify-center text-white text-lg">
                <BsCheckCircleFill className="text-green-400" size={60} />
              </div>
            )}
            <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
              Input New PIN
            </div>
            {errorMessage && (
              <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                *{errorMessage}
              </div>
            )}
            <PinInput onChangePin={setNewPin} />
            <button type="submit" className="btn bg-secondary">
              Continue
            </button>
            {/* {showAlert && <div className='border-b-[2px] border-[#2CAD7D] shadow-lg shadow-[#93C961] max-w-md'></div>} */}
          </form>
        )}
        {showFormCnfr && (
          <form
            onSubmit={handleSubmitChangePin}
            className="flex flex-col justify-center gap-10 w-[450px] h-full px-4 py-4"
          >
            {successMessage && (
              <div className="w-full flex flex-row justify-center text-white text-lg">
                <BsCheckCircleFill className="text-green-400" size={60} />
              </div>
            )}
            <div className="w-full flex flex-row justify-center text-black font-semibold text-base">
              Input PIN Confirmation
            </div>
            {errorMessage && (
              <div className="w-full flex flex-row justify-center text-red-500 font-semibold text-base">
                *{errorMessage}
              </div>
            )}
            <PinInput onChangePin={setConfirmPin} />
            <button type="submit" className="btn bg-secondary">
              Continue
            </button>
            {/* {showAlert && <div className='border-b-[2px] border-[#2CAD7D] shadow-lg shadow-[#93C961] max-w-md'></div>} */}
          </form>
        )}
      </div>
    </div>
  );
}

export default ProfileChangePin;
