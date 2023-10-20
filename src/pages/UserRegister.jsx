import { Button, Checkbox, Input } from '@nextui-org/react'
import { NewUserTerms } from '../components'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { registerNewUser } from '../services/userSession'
import confetti from 'canvas-confetti'

const schemaFormValidation = yup.object({
  firstName: yup.string()
    .required('This field is required')
    .matches((/^[a-zA-Z ]+$/), 'Not containt symbols or numbers')
    .max(50, 'First name is long')
    .min(3, 'First name is too short'),
  lastName: yup.string()
    .required('This field is required')
    .matches((/^[a-zA-Z ]+$/), 'Not containt symbols or numbers')
    .max(50, 'Last Name is long')
    .min(3, 'Last Name is too short'),
  email: yup.string().email()
    .required('This field is required')
    .matches((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i), 'Invalid Email'),
  confirmEmail: yup.string()
    .oneOf([yup.ref('email'), null], 'Email must match')
    .required(),
  password: yup.string().required('This field is required')
    .max(40, 'the password is too long')
    .min(7, 'The password is too short')
})

export default function UserRegister () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaFormValidation)
  })
  const [isChecked, setIsChecked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [registerError, setRegisterError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onSubmit = (data) => {
    setIsSubmitting(!isSubmitting)
    setLoading(true)
    if (isChecked) {
      registerNewUser({ ...data }).then((response) => {
        const { data, error } = response
        if (error) {
          setLoading(false)
          setRegisterError(error.message)
        } else if (data) {
          setLoading(false)
          setIsRegistered(!isRegistered)
        }
      })
    }
  }

  if (isRegistered) {
    return (
      confetti() &&
        <div className='w-full px-10 h-[90vh] flex flex-col justify-center items-center gap-5'>
          <h2 className='text-xl text-center'>
            Congratulations!🎉 You are registered corectly. Please check your email to verify your new account
          </h2>
          <Link
            className='text-primary hover:underline'
            to='/'
          >
            Go to Main Page
          </Link>
        </div>
    )
  }

  return (
    <div
      className='max-w-[1000px] m-auto flex flex-col justify-center items-center px-2 py-6 gap-3'
    >
      <div className='flex flex-col justify-center items-center gap-3'>
        <h1
          className='text-xl mt-5'
        >Create New Account
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full px-6 py-6 flex flex-col gap-4'
      >
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
        >
          <Input
            color={errors?.firstName ? 'danger' : 'primary'}
            variant={errors?.firstName ? 'bordered' : 'flat'}
            label='First Name'
            errorMessage={errors.firstName?.message}
            {...register('firstName')}
          />
          <Input
            color={errors?.lastName ? 'danger' : 'primary'}
            variant={errors?.lastName ? 'bordered' : 'flat'}
            label='Last Name'
            errorMessage={errors.lastName?.message}
            {...register('lastName')}
          />
          <Input
            color={errors?.email ? 'danger' : 'primary'}
            variant={errors?.email ? 'bordered' : 'flat'}
            label='Your email'
            type='email'
            errorMessage={errors.email?.message}
            {...register('email')}
          />
          <Input
            color={errors?.confirmEmail ? 'danger' : 'primary'}
            variant={errors?.confirmEmail ? 'bordered' : 'flat'}
            label='Confirm your email'
            type='text'
            errorMessage={errors.confirmEmail?.message}
            {...register('confirmEmail')}
          />
          <Input
            color={errors?.password ? 'danger' : 'primary'}
            variant={errors?.password ? 'bordered' : 'flat'}
            label='Your password'
            type='password'
            errorMessage={errors.password?.message}
            {...register('password')}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <small className='font-md px-3 text-primary'>If you agree scroll down to accept the terms and conditions</small>
          <NewUserTerms />
          {!isChecked && <p className='px-3 text-danger text-xs'>Please read and accept the terms</p>}
          <Checkbox
            color='primary'
            isSelected={isChecked}
            onValueChange={setIsChecked}
          >
            <p className='text-sm'>I agree, and Accept the Terms & Conditions</p>
          </Checkbox>
        </div>

        <div className='flex py-4 justify-between items-center gap-4'>
          <Button
            type='submit'
            color='primary'
            isDisabled={!isChecked}
            disabled={isSubmitting}
            isLoading={loading}
          >
            {loading ? 'Creating new user' : 'Create New User'}
          </Button>
          <Link
            className='text-small text-primary/50 hover:text-primary'
            to='/login'
          >
            I have an account
          </Link>
        </div>
      </form>
      {registerError && <p className='text-danger'>{registerError}</p>}

    </div>
  )
}
