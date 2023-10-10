import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useUser } from '../hooks/useUser'

export default function ConfirmedEmailPage () {
  const { isLogged } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div className='w-full h-[90vh] flex flex-col gap-3 justify-center items-center'>
      <h1 className='text-3xl text-center'>Your Account has been Confirmed</h1>
      <Link
        className='hover:underline'
        to='/login'
      >
        Go to login page
      </Link>
    </div>

  )
}
