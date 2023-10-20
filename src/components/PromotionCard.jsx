import { Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

export function PromotionCard ({ id, levelPromotion, title, image }) {
  const navigate = useNavigate()

  return (
    <Card
      id={id}
      className='h-[200px]'
      isPressable
      onPress={() => navigate(`/coupons&promotions/${id}`)}
    >
      <CardHeader className='w-full absolute z-10 bottom-0 flex-col !items-start rounded-xl bg-secondary/40'>
        <p className='text-tiny text-white/60 uppercase font-bold'>Loyalty Promotion</p>
        <h4 className='text-white font-medium text-large text-left'>
          {title}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt='Card background'
        className='z-0 w-full h-full object-cover'
        src={image}
        isZoomed
      />
      <CardFooter className='absolute z-10 top-2 left-2 w-[90px] h-[90px] rounded-full flex items-center justify-center bg-secondary/80'>
        <span className='text-xs text-center font-medium text-white uppercase'>
          {`Only ${levelPromotion}`}
        </span>
      </CardFooter>
    </Card>
  )
}
