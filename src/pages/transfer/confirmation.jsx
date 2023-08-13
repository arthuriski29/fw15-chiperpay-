import React from "react";

import Header from "@/components/Header";

import { withIronSessionSsr } from "iron-session/next";
import checkCredentials from "@/helper/checkCredentials";
import cookieConfig from "@/helper/cookieConfig";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import TransferConfirmation from "@/components/TransferConfirmation";
import Head from "next/head";

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
    <>
      <Head>
        <title>Transfer - Confirmation || chiperPay</title>
      </Head>
      <div className="h-screen bg-[#ffff]">
        <Header token={token} />
        <div className="flex h-[70%] mt-10 mb-10 gap-8">
          <Sidebar token={token} transfer="text-accent" />
          <TransferConfirmation token={token} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Confirmation;
