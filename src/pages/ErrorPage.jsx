import { Link } from 'react-router-dom'

export default function ErrorPage () {
  return (
    <div className='w-full h-[90vh] flex flex-col gap-3 justify-center items-center'>
      <h1 className='text-3xl text-center'>We are still working on this page</h1>
      <p>Please, go home or verify the url</p>
      <Link
        className='text-primary text-center'
        to='/'
      >Go home
      </Link>
    </div>

  )
}
