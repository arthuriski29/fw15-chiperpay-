import React from 'react'
import http from '@/helper/http'
import * as Yup from 'yup'

import { HiLockClosed } from 'react-icons/hi'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { MdError, MdCheck } from 'react-icons/md'
import { Formik } from 'formik'

const validationSchema = Yup.object({
  oldPassword: Yup.string().required('Password is invalid'),
  newPassword: Yup.string()
    .min(4, 'must have input 4 characters')
    .required('Password is invalid'),
  confirmPassword: Yup.string()
    .required('Confirm password is empty !')
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
})

function ProfileChangePass({token}) {
  const [iconEye, setIconEye] = React.useState(false)
  const [iconEye1, setIconEye1] = React.useState(false)
  const [iconEye2, setIconEye2] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [typeOldPassword, setTypeOldPassword] = React.useState(false)
  const [typeNewPassword, setTypeNewPassword] = React.useState(false)
  const [typeConfirmPassword, setTypeConfirmPassword] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [successMessage, setSuccessMessage] = React.useState('')

  const doChangePassword = async (values, { resetForm }) => {
    setErrorMessage('')
    setSuccessMessage('')
    setLoading(true)

    try {
      const form = new URLSearchParams({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      }).toString()

      const { data } = await http(token).patch('/profile/change-password', form)
      if (data.success === true) {
        setSuccessMessage('Change password success!')
        setTimeout(() => {
          setSuccessMessage('')
        }, 2000)
        setLoading(false)
        resetForm()
      }
    } catch (error) {
      const message = 'failed, wrong old password!'
      setErrorMessage(message)
      setLoading(false)
    }
  }

  const handleOldPassword = () => {
    setIconEye(!typeOldPassword)
    setTypeOldPassword(!iconEye)
  }
  const handleNewPassword = () => {
    setIconEye1(!typeNewPassword)
    setTypeNewPassword(!iconEye1)
  }
  const handleConfirmPassword = () => {
    setIconEye2(!typeConfirmPassword)
    setTypeConfirmPassword(!iconEye2)
  }
  return (
    <div className='flex flex-col w-[80%] justify-between rounded-2xl shadow-2xl mr-20 px-10 py-10 gap-6 bg-[#f5f5f5] text-black'>
      <div className='flex flex-col h-[30%] gap-6'>
        <div className='font-bold text-[18px]'>Change Password</div>
        <div className='flex flex-col gap-8'>
          <div className='w-[342px]'>You must enter your current password and then type your new password twice.</div>
          {errorMessage && (
            <div className="flex flex-row justify-center text-primary text-lg gap-3">
              <MdError size={30} />
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="flex flex-row justify-center text-green-500 text-lg gap-3">
              <MdCheck size={30} />
              {successMessage}
            </div>
          )}
        </div>
      </div>
      <Formik
        initialValues={{
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={doChangePassword}
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
          className='flex flex-col h-[70%] items-center gap-1 text-black'
          autoComplete='off'
        >
          <div className='flex flex-col w-[450px] relative'>
            <div className='flex items-center'>
              <HiLockClosed className="absolute ml-4 text-[#9CA3AF]" alt="current-password" />
              <input 
                className='input border-0 border-b-2 border-[#9CA3AF] rounded-none flex-1 w-full pl-[50px] bg-[#f5f5f5] focus:ring focus:ring-secondary' 
                type={typeOldPassword ? 'text' : 'password'} 
                name='oldPassword' 
                placeholder='Current Password' 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.oldPassword}
              />
              <button
                type="button"
                onClick={handleOldPassword}
                className="absolute top-3 right-2"
              >
                {iconEye ? (
                  <i>
                    <FiEye size={20} />
                  </i>
                ) : (
                  <i>
                    <FiEyeOff size={20} />
                  </i>
                )}
              </button>
            </div>
            <div>
              {errors.oldPassword && touched.oldPassword ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.oldPassword}
                  </span>
                </label>
              ) : (
                <label className="label">
                  <span className="label-text-alt text-error mix-blend-screen">
                    no error
                  </span>
                </label>
              )}
            </div>
          </div>
          <div className='flex flex-col w-[450px] relative'>
            <div className='flex items-center'>
              <HiLockClosed className="absolute ml-4 text-[#9CA3AF]" alt="new-password" />
              <input 
                className='input border-0 border-b-2 border-[#9CA3AF] rounded-none flex-1 w-full pl-[50px] bg-[#f5f5f5] focus:ring focus:ring-secondary' 
                type={typeNewPassword ? 'text' : 'password'} 
                name='newPassword' 
                placeholder='New Password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword} 
              />
              <button
                type="button"
                onClick={handleNewPassword}
                className="absolute top-3 right-2"
              >
                {iconEye1 ? (
                  <i>
                    <FiEye size={20} />
                  </i>
                ) : (
                  <i>
                    <FiEyeOff size={20} />
                  </i>
                )}
              </button>
            </div>
            <div>
              {errors.newPassword && touched.newPassword ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.newPassword}
                  </span>
                </label>
              ) : (
                <label className="label">
                  <span className="label-text-alt text-error mix-blend-screen">
                    no error
                  </span>
                </label>
              )}
            </div>
          </div>
          <div className='flex flex-col w-[450px] relative'>
            <div className='flex items-center'>
              <HiLockClosed className="absolute ml-4 text-[#9CA3AF]" alt="repeat-new-password" />
              <input 
                className='input border-0 border-b-2 border-[#9CA3AF] rounded-none flex-1 w-full pl-[50px] bg-[#f5f5f5] focus:ring focus:ring-secondary' 
                type={typeConfirmPassword ? 'text' : 'password'} 
                name='confirmPassword' 
                placeholder='Repeat New Password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}  
              />
              <button
                type="button"
                onClick={handleConfirmPassword}
                className="absolute top-3 right-2"
              >
                {iconEye2 ? (
                  <i>
                    <FiEye size={20} />
                  </i>
                ) : (
                  <i>
                    <FiEyeOff size={20} />
                  </i>
                )}
              </button>
            </div>
            <div>
              {errors.confirmPassword && touched.confirmPassword ? (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.confirmPassword}
                  </span>
                </label>
              ) : (
                <label className="label">
                  <span className="label-text-alt text-error mix-blend-screen">
                    no error
                  </span>
                </label>
              )}
            </div>
          </div>
          {loading ? (
            <button 
              className='btn btn-secondary w-[450px] mt-4' 
              type="submit"
            > 
              <span className="loading loading-spinner loading-sm"></span>
            </button>
          ) : (
            <button 
              className='btn btn-secondary w-[450px] mt-4' 
              type="submit"
            > 
              Change Password
            </button>

          )}
        </form>
        )}
      </Formik>
    </div>
  )
}

export default ProfileChangePass