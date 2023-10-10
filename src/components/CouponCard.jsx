import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

export function CouponCard ({ discountNumber, content, image, id }) {
  const { isLogged } = useUser()
  const navigate = useNavigate()

  return (
    <Card
      id={id}
      className='h-[200px]'
      as='button'
      isPressable
      onPress={() => isLogged ? navigate(`/coupons&promotions/${id}`) : navigate('/login')}
    >
      <CardHeader className='w-full absolute z-10 top-1 flex-col items-start rounded-xl bg-primary/30'>
        <p className='text-tiny text-white/60 uppercase font-bold'>
          {`${discountNumber} Discount Coupon`}
        </p>
        <h4 className='text-white font-medium text-large text-left'>
          {content}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt='Card background'
        className='z-0 w-full h-full object-cover'
        src={image}
      />
      <CardFooter className='absolute z-10 bottom-2 left-2 w-[80px] h-[80px] rounded-full flex items-center justify-center bg-primary/80'>
        <span className='text-3xl text-white'>
          {discountNumber}
        </span>
      </CardFooter>
    </Card>

  )
}
