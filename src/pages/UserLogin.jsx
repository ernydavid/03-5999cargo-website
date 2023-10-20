import { Button, Input } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUser } from '../hooks/useUser'
import { useEffect } from 'react'

const schemaValidationLogin = yup.object({
  email: yup.string().email()
    .required('This field is required'),
  password: yup.string()
    .required('This field is required')
    .min(7, 'Password length is 7 characters')
}).required()

export default function UserLogin () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaValidationLogin)
  })
  const navigate = useNavigate()
  const { login, isSession, loading, error } = useUser()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (isSession) navigate('/')
  }, [navigate])

  const onSubmit = (data) => {
    login({ ...data })
  }

  return (
    <div
      className='max-w-[1000px] m-auto flex flex-col justify-center items-center px-2 py-6 gap-3'
    >
      <div className='flex flex-col justify-center items-center gap-3'>
        <Logo height='36px' />
        <h1
          className='w-full text-2xl text-center font-medium mt-5'
        >Welcome back!
        </h1>
        {error && <p className='text-danger text-sm'>{error}</p>}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full sm:w-[700px] px-6 py-6 flex flex-col gap-4'
      >
        <div
          className='w-full flex flex-col justify-center items-center gap-4'
        >
          <Input
            color={errors?.email ? 'danger' : 'primary'}
            variant={errors?.email ? 'bordered' : 'flat'}
            label='Your email'
            errorMessage={errors.email?.message}
            {...register('email')}
          />
          <Input
            color={errors?.password ? 'danger' : 'primary'}
            variant={errors?.password ? 'bordered' : 'flat'}
            label='Your password'
            type='password'
            errorMessage={errors.password?.message}
            {...register('password')}
          />

          <div className='w-full flex py-4 justify-between items-center gap-4'>
            <Link
              to='/recoverAccount'
              className='text-small hover:underline'
            >
              Forgot your password?
            </Link>
            <Button
              className='px-12'
              isLoading={loading}
              type='submit'
              color='primary'
            >
              Login
            </Button>
          </div>
          <Link
            to='/register'
            className='text-small hover:underline'
          >
            Or Create an Account
          </Link>
          <div className='p-6 bg-primary-50 rounded-xl mt-5'>
            <p className='text-xs text-foreground/60 text-center'>To guarantee access to the website it is necessary that you have created and verified your account by email, otherwise access will not be granted. If you already have an account and can't access it, you can go to forget my password to restore it. If you know your credentials but can't log in or have any other problems, you can contact support <Link className='hover:underline text-foreground/80' to='/support'>here</Link> to help you.</p>
          </div>
        </div>
      </form>

    </div>

  )
}
