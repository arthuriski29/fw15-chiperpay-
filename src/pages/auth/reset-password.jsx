import Image from "next/image";
import React from "react";

import { withIronSessionSsr } from "iron-session/next";
import coockieConfig from "@/helper/cookieConfig";

import { HiLockClosed } from "react-icons/hi";
import loginImage from "../../assets/image/login-image.png";
import loginVector from "../../assets/image/login-vector.png";
import Link from "next/link";
import * as Yup from "yup";
import { AiOutlineExclamation } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
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
  coockieConfig
);

const validationSchema = Yup.object({
  password: Yup.string()
    .min(4, "Password min 4 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function ResetPassword() {
  const userEmail = useSelector((state) => state.auth.email);
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [iconEye, setIconEye] = React.useState(false);
  const [typePassword, setTypePassword] = React.useState(false);
  const [iconEyeConf, setIconEyeConf] = React.useState(false);
  const [typePasswordConf, setTypePasswordConf] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const doReset = async (values) => {
    setErrorMessage("");
    setLoading(true);
    const form = new URLSearchParams({
      email: userEmail,
      newPassword: values.password,
      confirmPassword: values.confirmPassword,
    }).toString();

    const { data } = await axios.post(
      "http://localhost:3000/api/reset-password",
      form
    );
    console.log(data);

    if (data.message === "auth_reset_password_not_match") {
      setErrorMessage("Please Create a reset request");
      setLoading(false);
    }
    if (data.success === true) {
      setLoading(false);
      setSuccessMessage(true);
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    }
  };

  const handleInputPassword = () => {
    setIconEye(!typePassword);
    setTypePassword(!iconEye);
  };
  const handleConfirmPassword = () => {
    setIconEyeConf(!typePasswordConf);
    setTypePasswordConf(!iconEyeConf);
  };
  return (
    <>
      <Head>
        <title>Reset Password || chiperPay</title>
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
              Now you can create a new password for your FazzPay account. Type
              your password twice so we can confirm your new passsword.
            </div>
            <div className="w-full mt-8">
              <Formik
                initialValues={{
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={doReset}
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
                    {successMessage && (
                      <div className="flex flex-row justify-center alert bg-green-500 border-none shadow-lg text-white text-lg">
                        Success, you will redirect to login page !
                      </div>
                    )}
                    {errorMessage && (
                      <div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg">
                        <AiOutlineExclamation size={30} />
                        {errorMessage}
                      </div>
                    )}
                    <div className="flex flex-col justify-center gap-6">
                      <div className="relative flex items-center">
                        <HiLockClosed
                          className="absolute ml-4 text-[#9CA3AF]"
                          alt="Password Icon"
                        />
                        <input
                          className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
                          type={typePassword ? "text" : "password"}
                          name="password"
                          placeholder="Create new password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
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
                      <div className="relative flex items-center">
                        <HiLockClosed
                          className="absolute ml-4 text-[#9CA3AF]"
                          alt="Password Icon"
                        />
                        <input
                          className="input input-bordered border-primary flex-1 w-full pl-[50px] bg-[#FBE0D8]"
                          type={typePasswordConf ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Confirm new password"
                        />
                        <button
                          type="button"
                          onClick={handleConfirmPassword}
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
                    </div>
                    <button
                      type="submit"
                      className="btn bg-[#F0592C] text-white w-full mt-6"
                    >
                      Reset Password
                      {loading && (
                        <span className="loading loading-spinner loading-sm "></span>
                      )}
                    </button>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.confirmPassword}
                        </span>
                      </label>
                    )}
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

export default ResetPassword;
