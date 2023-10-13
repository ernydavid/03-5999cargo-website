import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

export function NotificationModal () {
  const [isClose, setIsClose] = useState(false)
  return (

    <div className={`max-w-[400px] m-auto p-4 z-50 absolute top-10 right-0 bg-background-900 rounded-xl flex justify-between items-center bg-warning/30 delay-1000 animate-appearance-in ${isClose ? 'animate-appearance-out' : null} mx-5`}>
      <div className='w-full flex justify-between items-center'>
        <p className='text-xs px-4'>Your are not complete your data. Go to settings</p>
        <Button
          onPress={() => setIsClose(true)}
          isIconOnly
          size='sm'
          color='warning'
          startContent={
            <XMarkIcon className='h-5' />
      }
        />
      </div>
    </div>

  )
}
