import { Link } from 'react-router-dom'
import { TitleH1 } from '../components/TitleH1'
import { CircularProgress } from '@nextui-org/react'
import { PatternCardBackground } from '../assets'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { useUser } from '../hooks/useUser'
import { CouponCard, Footer } from '../components'
import { ArrowLink } from '../components/ArrowLink'
import { PromotionCard } from '../components/PromotionCard'

import couponsData from '../constants/coupons.json'
import promotionsData from '../constants/promotions.json'

export default function CouponsPage () {
  const { logged } = useContext(UserContext)
  const { isLogged } = useUser()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const firstName = isLogged ? logged?.user_metadata.first_name.toLowerCase() : 'Guest'
  const lastName = isLogged ? logged?.user_metadata.last_name.toLowerCase() : ''

  return (
    <div className='max-w-[1000px] p-4 m-auto flex flex-col justify-center items-center relative'>

      {
        isLogged &&
          <div className='relative w-full min-h-[250px] overflow-hidden bg-[#06153F] rounded-t-xl flex flex-col p-4 text-white'>
            <PatternCardBackground />
            <div className='z-10 mt-6 px-4 flex flex-col sm:flex-row justify-center items-center gap-3'>
              <div className='flex flex-col gap-3 items-center sm:items-start justify-start sm:w-full'>
                <div>
                  <h1 className='text-3xl capitalize text-inherit font-semibold text-center md:text-left'>{`Hi, ${firstName} ${lastName}`}</h1>
                </div>
                <div className='text-center md:text-left'>
                  <span
                    className='text-lg'
                  >Your level is <strong>Basic Level®</strong>
                  </span>
                </div>
                <div className='flex flex-col justify-center sm:items-start items-center text-center md:text-left'>
                  <p
                    className='text-sm'
                  >Your available points:&nbsp;<strong>0 pts.</strong>
                  </p>
                  <p className='text-sm'>With&nbsp;<strong>1200 pts</strong>&nbsp;you upgrade your level</p>
                </div>
              </div>
              <div className='flex sm:flex-col items-center justify-between sm:gap-1 sm:mt-0 mt-5'>
                <CircularProgress
                  aria-label='circular-progress'
                  className='sm:flex hidden'
                  classNames={{
                    svg: 'w-36 h-36 drop-shadow-md',
                    indicator: 'stroke-white',
                    track: 'stroke-white/10',
                    value: 'text-3xl font-semibold text-white'
                  }}
                  formatOptions={{
                    unitDisplay: 'short',
                    unit: 'percent'
                  }}
                  maxValue={5000}
                  value={0}
                  strokeWidth={4}
                  showValueLabel
                />
                <div className='flex flex-col items-center'>
                  <Link
                    className='text-xs text-center text-white/70 hover:underline'
                    to='/dashboard'
                  >
                    Upgrade your level by accumulating points for every shipment. Learn more here
                  </Link>
                </div>
              </div>
            </div>
          </div>
      }

      <section className='mt-6 w-full flex flex-col md:justify-start items-start md:items-start justify-center gap-6'>
        <div className='w-full flex items-center justify-between'>
          <TitleH1 starContent='Explore' focusContent='coupons' className='text-3xl' />
          <ArrowLink label='See all' to='/coupons/coupons-all' />
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {
            couponsData.map(({ id, title, discountNumber, image }) => (
              <CouponCard
                id={id}
                discountNumber={`${discountNumber}%`}
                key={id}
                content={title}
                image={image}
              />
            ))
          }

        </div>
      </section>

      <section className='mt-6 w-full flex flex-col md:justify-start items-start md:items-start justify-center gap-6'>
        <div className='w-full flex items-center justify-between'>
          <TitleH1 starContent='Explore' focusContent='promotions' className='text-3xl' />
          <ArrowLink label='See all' to='/promotions/promotions-all' />
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
          {
            promotionsData.map(({ id, title, levelPromotion, image }) => (
              <PromotionCard
                key={id}
                id={id}
                title={title}
                image={image}
                levelPromotion={levelPromotion}
              />
            ))
          }

        </div>
      </section>
      <Footer />
    </div>
  )
}
