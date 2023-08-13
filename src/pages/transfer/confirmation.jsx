import React from "react";

import Header from "@/components/Header";

import { withIronSessionSsr } from "iron-session/next";
import checkCredentials from "@/helper/checkCredentials";
import cookieConfig from "@/helper/cookieConfig";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import TransferConfirmation from "@/components/TransferConfirmation";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;
    checkCredentials(token, res, "/auth/login");
    return {
      props: {
        token,
      },
    };
  },
  cookieConfig
);

function Confirmation({ token }) {
  return (
    <div className="h-screen bg-[#ffff]">
      <Header token={token} />
      <div className="flex h-[70%] mt-10 mb-10 gap-8">
        <Sidebar token={token} transfer="text-accent" />
        <TransferConfirmation token={token} />
      </div>
      <Footer />
      {/* <input type="checkbox" id="modal-transfer" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-[#f5f5f5] text-black">
          <form className="w-full h-[500px] ">
            <div className="flex flex-col justify-between h-full px-4 py-4">
              <div className="text-[18px] font-bold leading-[25px]">
                Enter Pin to Transfer
              </div>
              <div className="w-[302px] text-[#3A3D4299] text-[16px]">
                Enter your 6 digits PIN for confirmation to continue
                transferring money.{" "}
              </div>
              <PinInput onChangePin={changedPin} />
              {showAlert && (
                <div className="border-b-[2px] border-[#2CAD7D] shadow-lg shadow-[#93C961] max-w-md"></div>
              )}
              <button type="submit" className="btn bg-secondary self-end mt-6">
                Confirm
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="modal-transfer">
          Close
        </label>
      </div> */}
    </div>
  );
}

export default Confirmation;
