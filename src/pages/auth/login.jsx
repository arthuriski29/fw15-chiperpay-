import { withIronSessionSsr } from "iron-session/next";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import loginImage from "../../assets/image/login-image.png";
import loginVector from "../../assets/image/login-vector.png";
import { HiOutlineMail, HiLockClosed } from "react-icons/hi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import cookieConfig from "@/helper/cookieConfig";
// import http from "@/helper/http";
import axios from "axios";
import Head from "next/head";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;

    if (token) {
      res.setHeader("location", "/home");
      res.statusCode = 302;
      res.end();
      return {
        prop: [token],
      };
    }

    return {
      props: {
        token: null,
      },
    };
  },
  cookieConfig
);

function Login() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [iconEye, setIconEye] = React.useState(false);
  const [typePassword, setTypePassword] = React.useState(false);
  const doLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { value: email } = e.target.email;
    const { value: password } = e.target.password;
    const form = new URLSearchParams({
      email,
      password,
    });
    const { data } = await axios.post("/api/login", form.toString());
    setLoading(false);
    if (data?.results?.token) {
      router.push("/home");
    }
  };

  const handleInputPassword = () => {
    setIconEye(!typePassword);
    setTypePassword(!iconEye);
  };

  return (
    <>
      <Head>
        <title>Login || chiperPay</title>
      </Head>
      <section className="flex h-screen">
        <div className="overflow-hidden relative md:w-[60%] min-h-screen hidden md:flex bg-[#F0592C] justify-center items-center">
          <div className="absolute mt-[110px] self-start w-[5000px] left-[-540px]">
            <Image
              src={loginVector}
              alt="login-vector"
              width="1650"
              height="535"
            />
          </div>
          <div className="h-[80%] min-[1311px]:w-[50%] max-[1310px]:w-[392px] flex flex-col justify-center items-start gap-4">
            <div className="font-extrabold text-[40px] text-base-100 text-xl">
              chiper<span className="text-[#804242] font-black">Pay</span>
            </div>
            <div className="self-center">
              <div className="relative">
                <Image
                  src={loginImage}
                  alt="login-image"
                  width="400"
                  height="600"
                />
              </div>
            </div>
            <div className="font-bold text-[24px]">
              App that Covering Banking Needs.
            </div>
            <div className="font-light text-[16px]">
              ChiperPay is an application that focussing in banking needs for
              all users in the world. Always updated and always following world
              trends. 5000+ users registered in ChiperPay everyday with
              worldwide users coverage.
            </div>
          </div>
        </div>
        <div className="w-[40%] bg-[#FBE0D8] flex max-[768px]:flex-1 h-screen justify-center items-center">
          <div className="h-[80%] max-[1022px]:w-[276px] min-[1023px]:w-[60%] max-[768px]:w-[80%] flex flex-col justify-center items-start gap-8 text-black">
            <div className="font-bold text-[24px] text-left">
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </div>
            <div>
              Transfering money is easier than ever, you can access ChiperPay
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </div>
            <div className="w-full mt-8">
              <form onSubmit={doLogin} className="flex flex-col gap-4">
                <div className="flex flex-col justify-center gap-12">
                  <div className="flex items-center">
                    <HiOutlineMail
                      className="absolute ml-4 text-[#9CA3AF]"
                      alt="Email Icon"
                    />
                    <input
                      className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="relative flex items-center">
                      <HiLockClosed
                        className="absolute ml-4 text-[#9CA3AF]"
                        alt="Password Icon"
                      />
                      <input
                        className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
                        type={typePassword ? "text" : "password"}
                        name="password"
                        placeholder="Create your password"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.password}
                      />
                      <button
                        type="button"
                        onClick={handleInputPassword}
                        className="absolute bottom-4 right-4 text-[#9CA3AF]"
                      >
                        {iconEye ? (
                          <i className="">
                            <FiEye size={15} />
                          </i>
                        ) : (
                          <i className="">
                            <FiEyeOff size={15} />
                          </i>
                        )}
                      </button>
                    </div>
                    {/* {errors.password && touched.password && (
                        <label className="label">
                            <span className="label-text-left text-error text-xs ">{errors.password}</span>
                        </label>
                    )} */}
                  </div>
                </div>
                <Link
                  href="/auth/forgot-password"
                  className="text-end font-bold hover:text-primary"
                >
                  Forgot Password?
                </Link>
                <button
                  disabled={loading}
                  type="submit"
                  className="btn bg-[#F0592C] text-white w-full mt-6"
                >
                  Login
                  {loading && (
                    <span className="loading loading-spinner loading-sm "></span>
                  )}
                </button>
              </form>
              <div className="text-center mt-8">
                Don&rsquo;t have an account? Let&rsquo;s{" "}
                <Link
                  href="/auth/register"
                  className="hover:text-primary font-bold text-[#F0592C]"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
