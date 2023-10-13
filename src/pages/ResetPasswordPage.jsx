import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useUser } from '../hooks/useUser'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const schemaValidation = yup.object({
  password: yup.string()
    .required('This field is required')
    .min(7, 'Password is too short')
    .max(50, 'Password is too large'),
  confirmPassword: yup.string()
    .required('This field is required')
    .oneOf([yup.ref('password'), null], 'Password must match')
})

export default function ResetPasswordPage () {
  const { sessionUser } = useContext(UserContext)
  const { loading, requestNewPassword, passwordChanged, error } = useUser()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaValidation)
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionUser) {
      navigate('/')
    }
  }, [])

  const onSubmit = (data) => {
    const { password } = data
    requestNewPassword(password)
    setIsSubmitting(true)
  }

  if (passwordChanged) {
    return (
      <div className='w-full px-10 h-[90vh] flex flex-col justify-center items-center gap-5'>
        <h2 className='text-xl text-center'>
          Your Password have been changed correctly!
        </h2>
        <p className='text-center text-foreground/80'>Please go to Login Page</p>
        <Link
          className='text-primary hover:underline'
          to='/login'
        >
          Go to Login
        </Link>
      </div>
    )
  }

  return (
    <main
      className='px-6 lg:px-2 max-w-[1000px] m-auto relative'
    >
      <div className='w-full flex flex-col gap-3 justify-center items-center mt-20'>
        <h1 className='text-3xl'>Reset your password</h1>
        <form
          className='w-full flex flex-col gap-6 max-w-[400px]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type='password'
            label='New password'
            color={errors?.password ? 'danger' : 'primary'}
            variant={errors?.password ? 'bordered' : 'flat'}
            errorMessage={errors?.password?.message}
            {...register('password')}
          />
          <Input
            type='password'
            label='Repeat your password'
            color={errors?.confirmPassword ? 'danger' : 'primary'}
            variant={errors?.confirmPassword ? 'bordered' : 'flat'}
            errorMessage={errors?.confirmPassword?.message}
            {...register('confirmPassword')}
          />
          <Button
            color='primary'
            type='submit'
            disabled={isSubmitting}
            isLoading={loading}
          >
            Change Password
          </Button>
        </form>
        {error && <p className='text-danger'>{error}</p>}
      </div>

    </main>
  )
}
