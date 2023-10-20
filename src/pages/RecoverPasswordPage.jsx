import { useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Input } from '@nextui-org/react'

const schemaValidation = yup.object({
  email: yup.string().email()
    .required('This field is required')
    .matches((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i), 'Invalid Email')
})

export default function RecoverPasswordPage () {
  const { isSession, resetPassword, loading, requestSucess, error } = useUser()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaValidation)
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (isSession) {
      navigate('/')
    }
  }, [])

  const onSubmit = (data) => {
    const { email } = data
    resetPassword(email)
    setIsSubmitting(true)
  }

  if (requestSucess) {
    return (
      <div className='w-full px-10 h-[90vh] flex flex-col justify-center items-center gap-5'>
        <h2 className='text-xl text-center font-medium'>
          Email recovery sent!
        </h2>
        <p className='text-center text-foreground/80'>Please check your email to recovery your account password</p>
        <Link
          className='text-primary'
          to='/'
        >
          Home Page
        </Link>
      </div>
    )
  }

  return (
    <main className='px-6 lg:px-2 max-w-[1000px] m-auto relative'>
      <div className='w-full flex flex-col gap-3 justify-center items-center mt-20'>
        <h1 className='text-3xl'>Recovery Account</h1>
        <form
          className='w-full flex flex-col gap-6 max-w-[400px]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            color={errors?.email ? 'danger' : 'primary'}
            variant={errors?.email ? 'bordered' : 'flat'}
            label='Your email'
            type='email'
            errorMessage={errors.email?.message}
            {...register('email')}
          />
          <Button
            color='primary'
            type='submit'
            disabled={isSubmitting}
            isLoading={loading}
          >
            Send Email Recovery
          </Button>
        </form>
        {error && <p className='text-danger text-center'>{error}</p>}
      </div>
    </main>
  )
}
