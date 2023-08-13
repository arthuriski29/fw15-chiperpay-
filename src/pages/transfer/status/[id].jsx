import React from "react";
import { withIronSessionSsr } from "iron-session/next";
import checkCredentials from "@/helper/checkCredentials";
import cookieConfig from "@/helper/cookieConfig";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import TransferStatus from "@/components/TransferStatus";
import { useRouter } from "next/router";

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

function Status({ token }) {
  const {
    query: { id },
  } = useRouter();
  return (
    <div className="h-screen bg-[#ffff]">
      <Header token={token} />
      <div className="flex h-[70%] mt-10 mb-10 gap-8">
        <Sidebar token={token} transfer="text-accent" />
        <TransferStatus token={token} id={id} />
      </div>
      <Footer />
    </div>
  );
}

export default Status;
