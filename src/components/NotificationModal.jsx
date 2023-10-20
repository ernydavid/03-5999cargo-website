import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'
import { useState } from 'react'

export function NotificationModal ({ title, message }) {
  const [isClose, setIsClose] = useState(false)
  return (

    <div className={`absolute ml-4 p-4 z-50 top-5 right-4 bg-background-900 rounded-2xl flex justify-start gap-6 items-center bg-warning/30 animate-appearance-in ${isClose ? 'hidden' : null}`}>
      <div className='w-full flex justify-between items-center gap-8'>
        <div className='w-full flex flex-col justify-start items-start gap-1'>
          <h3 className='text-sm font-medium text-warning'>{title}</h3>
          <p className='text-xs'>
            {message}
          </p>
        </div>
        <div className='flex'>
          <Button
            onPress={() => setIsClose(true)}
            isIconOnly
            size='sm'
            radius='full'
            variant='ghost'
            color='warning'
            startContent={
              <XMarkIcon className='h-6' />
            }
          />
        </div>
      </div>
    </div>

  )
}
