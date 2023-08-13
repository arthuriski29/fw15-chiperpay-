import Image from "next/image";
import React from "react";

import { withIronSessionSsr } from "iron-session/next";
import cookieConfig from "@/helper/cookieConfig";
import axios from "axios";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { saveEmail } from "@/redux/reducers/auth";

import { HiOutlineMail } from "react-icons/hi";
import loginImage from "../../assets/image/login-image.png";
import loginVector from "../../assets/image/login-vector.png";
import Link from "next/link";
import { AiOutlineExclamation } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Head from "next/head";

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const token = req.session?.token;

    if (token) {
      res.setHeader("location", "/home");
      res.statusCode = 302;
      res.end();
      return { prop: { token } };
    }

    return {
      props: {
        token: null,
      },
    };
  },
  cookieConfig
);

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

function ForgotPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const doForgot = async (values) => {
    setErrorMessage("");
    setLoading(true);
    const form = new URLSearchParams({
      email: values.email,
    }).toString();

    const { data } = await axios.post(
      "http://localhost:3000/api/forgot-password",
      form
    );
    console.log(data.message);
    if (data.message === "auth_forgot_already_requested") {
      dispatch(saveEmail(values.email));
      // setErrorMessage('Request OK, You will redirect to reset page')
      // setLoading(false)
      // setTimeout(() => {
      //   router.push('/auth/reset-password')
      // }, 1500)
      setTimeout(() => {
        setLoading(true);
      }, 2000);
      setLoading(false);
    }
    if (data.message === "auth_wrong_user") {
      setErrorMessage("Email not registered");
      setLoading(false);
    }
    if (data.message === "auth_forgot_already_requested") {
      setErrorMessage("Forgot has Requested before");
      router.push("/auth/reset-password");
      setLoading(false);
    }
    if (data.message === "internal_server_error") {
      setErrorMessage("Backend not connected");
      setLoading(false);
    }
    if (data.success === true) {
      dispatch(saveEmail(values.email));
      router.push("/auth/reset-password");
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Forgot Password || chiperPay</title>
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
              Did You Forgot Your Password? Don&rsquo;t Worry, You Can Reset
              Your Password In a Minutes.
            </div>
            <div>
              To reset your password, you must type your e-mail and we will send
              a link to your email and you will be directed to the reset
              password screens.
            </div>
            <div className="w-full mt-8">
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={validationSchema}
                onSubmit={doForgot}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    autoComplete="off"
                  >
                    {errorMessage && (
                      <div className="flex flex-row justify-center alert alert-warning shadow-lg text-white text-lg">
                        <AiOutlineExclamation size={30} />
                        {errorMessage}
                      </div>
                    )}
                    <div className="flex flex-col justify-center gap-6">
                      <div className="flex items-center">
                        <HiOutlineMail
                          className="absolute ml-4 text-[#9CA3AF]"
                          alt="Email Icon"
                        />
                        <input
                          className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
                          type="email"
                          name="email"
                          placeholder="Enter your e-mail"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email && (
                          <label className="label">
                            <span className="label-text-alt text-error">
                              {errors.email}
                            </span>
                          </label>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn bg-[#F0592C] text-white w-full mt-6"
                    >
                      Confirm
                      {loading && (
                        <span className="loading loading-spinner loading-sm "></span>
                      )}
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
