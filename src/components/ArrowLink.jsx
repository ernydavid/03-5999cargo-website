import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export function ArrowLink ({ label, to }) {
  return (
    <Link
      className='flex items-center justify-end gap-1 text-sm text-foreground/40 hover:gap-2 transition-all ease-in-out'
      to={to}
    >
      <span>{label}</span>
      <ChevronRightIcon className='h-[16px]' />
    </Link>
  )
}
