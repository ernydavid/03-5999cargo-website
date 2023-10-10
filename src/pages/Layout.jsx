import { Suspense } from 'react'
import { NavigationBar } from '../components'
import { Spinner } from '@nextui-org/react'
import { Outlet } from 'react-router-dom'

export default function Layout () {
  return (
    <div>
      <NavigationBar />
      <div>
        <Suspense fallback={
          <div className='w-full p-4 h-[90vh] flex justify-center items-center'>
            <Spinner size='lg' />
          </div>
        }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
