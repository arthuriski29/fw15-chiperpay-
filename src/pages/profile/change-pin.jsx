import React from "react";
import { withIronSessionSsr } from "iron-session/next";
import checkCredentials from "@/helper/checkCredentials";
import cookieConfig from "@/helper/cookieConfig";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProfileChangePin from "@/components/ProfileChangePin";
import Footer from "@/components/Footer";
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

function ChangePin({ token }) {
  return (
    <>
      <Head>
        <title>Profile || chiperPay</title>
      </Head>
      <div className="h-[100vh] bg-[#ffff]">
        <Header token={token} />
        <div className="flex h-[80%] mt-10 mb-10 gap-8">
          <Sidebar token={token} />
          <ProfileChangePin token={token} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ChangePin;
