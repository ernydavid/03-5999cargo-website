/* eslint-disable react/jsx-closing-tag-location */
import { Button, Card, CardBody, CardHeader, Image, Tab, Tabs } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { HERO_CARD_SERVICES } from '../constants/constants'
import { coupon2, promotion1, worldMap } from '../assets'
import { useUser } from '../hooks/useUser'
import { CouponCard, PromotionCard, Footer, NotificationModal } from '../components'
import { TitleH1 } from '../components/TitleH1'
import { useEffect, useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { services } from '../json/homePageData.json'

export default function HomePage () {
  const { isSession, isDataComplete, validateUserData } = useUser()
  const navigate = useNavigate()
  const [selected, setSelected] = useState('express-delivery')

  useEffect(() => {
    window.scrollTo(0, 0)
    if (isSession) {
      validateUserData()
    }
  }, [])

  return (
    <main className='px-6 lg:px-2 max-w-[1000px] m-auto relative'>
      {isDataComplete === false &&
        <NotificationModal
          message='Your profile data is not complete. Please go to settings.'
          title='Complete your account'
        />}
      <section className='flex h-[85vh] flex-col md:flex-row justify-center items-center'>
        <div
          className='flex flex-col justify-center md:items-start items-center relative'
        >
          <TitleH1
            starContent={isSession ? 'Earn points for every' : 'Send packages around the world with a'}
            focusContent={isSession ? 'shipment.' : 'Smile.'}
            endContent={isSession ? 'Send now and start earn points' : 'Earn points for your shipments.'}
            className='text-4xl md:text-start text-center'
          />
          <p
            className='text-foreground-600 md:text-start text-center py-4 px-6 md:px-0 text-base'
          >
            {
              isSession
                ? 'The new loyalty system allows you to get more benefits when using our shipping system. Learn how'
                : 'We offer Express Delivery services around the world, Shop, Drop & Ship, Personal Shopper Service and more! And it\'s not at all! You can earn many gifts by using our service!'
            }
          </p>
          <Button
            className='mt-2 bg-gradient-to-br from-[#103A6A] to-[#032348] dark:from-[#4888d1] dark:to-[#084386] h-[48px] p-4 font-md text-base text-white'
            color='primary'
            radius='full'
            variant='shadow'
            endContent={
              <ArrowRightIcon
                className='h-[16px]'
              />
            }
            onClick={() => { isSession ? navigate('/coupons&promotions') : navigate('/register') }}
          >
            {isSession ? 'Explore all availables promotions' : 'Join us and get started now!'}
          </Button>

        </div>

        <div
          className='absolute w-full top-[150px] left-[50%] px-2 translate-x-[-50%] -z-10 md:relative md:top-0 md:left-0  md:translate-x-0 md:overflow-hidden'
        >
          <img
            className='absolute md:relative top-0 left-[50%] translate-x-[-50%] opacity-20 object-cover md:h-[500px] md:object-left md:flex md:justify-center md:items-start'
            src={worldMap}
            alt='hero Image of 5999Cargo'
          />
        </div>
      </section>

      <section
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto relative'
      >
        {
          HERO_CARD_SERVICES.map(({ id, title, content, href, icon }) => (
            <Card
              key={id}
              className='bg-[#103A6A] p-2 h-full'
            >
              <CardHeader
                className='flex gap-3 px-3 py-2'
              >
                {icon}
                <h3
                  className='text-white text-base font-semibold'
                >
                  {title}
                </h3>
              </CardHeader>
              <CardBody
                className='px-4 py-2'
              >
                <p
                  className='text-white text-base font-normal'
                >
                  {content}
                </p>
              </CardBody>
            </Card>
          ))
        }
      </section>

      <section
        className='relative flex flex-col gap-2 w-full justify-center items-center md:items-start mt-24 lg:mt-40'
      >
        <div
          className='flex flex-col gap-4'
        >
          <TitleH1
            starContent='We offer the'
            focusContent='best service'
            endContent='for your shipments.'
            className='text-4xl'
          />

          <div className='w-full flex flex-col'>
            <Tabs
              aria-label='Options'
              selectedKey={selected}
              variant='underlined'
              className='p-0'
              onSelectionChange={setSelected}
              classNames={{
                base: 'p-0',
                tab: 'w-20 md:w-32 h-24',
                cursor: 'bg-transparent',
                tabContent: 'group-data-[selected=true]:text-primary'
              }}
            >
              {services.map(({ id, title, content, imageURL, icon }) => (
                <Tab
                  key={id}
                  id={id}
                  title={
                    <div className='flex flex-col gap-2 justify-between items-center'>
                      <svg
                        fill={icon.fill}
                        className={`${icon.className}`}
                        stroke={icon.stroke}
                        strokeWidth={icon.strokeWidth}
                        viewBox={icon.viewBox}
                      >
                        <path
                          d={icon.d}
                          strokeLinecap={icon.strokeLinecap}
                          strokeLinejoin={icon.strokeLinejoin}
                        />
                      </svg>
                      <h2>{icon.label}</h2>
                    </div>
                  }
                >
                  <Card className='w-full bg-background-800 md:h-[350px] sm:h-[470px] h-[550px] flex flex-col items-center justify-center md:flex-row p-0'>
                    <CardHeader className='w-full md:w-auto md:h-full'>
                      <div className='w-full h-full overflow-hidden rounded-2xl'>
                        <Image
                          isZoomed
                          removeWrapper
                          className='w-full md:w-[300px] h-[200px] md:h-full object-cover'
                          src={imageURL}
                          alt={`image for ${id}`}
                        />
                      </div>
                    </CardHeader>
                    <CardBody className='w-full flex flex-col gap-2 md:px-4'>
                      <h2 className='text-lg text-primary'>{title}</h2>
                      <div className='flex flex-col gap-3'>
                        <p className='text-foreground/70 text-sm sm:text-base'>
                          {content}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              ))}

            </Tabs>
          </div>
        </div>
      </section>

      <section className='relative z-10 flex flex-col md:grid md:grid-cols-2 gap-6 w-full justify-center items-center mt-24 lg:mt-56'>

        <div className='flex flex-col gap-3'>
          <TitleH1
            starContent='Explore all'
            focusContent='gifts & coupons'
            endContent='for using our service.'
            className='text-4xl'
          />
          <Button
            variant='shadow'
            color='primary'
            className='px-12 max-w-[300px] hidden md:flex'
            radius='full'
            onClick={() => navigate('/coupons&promotions')}
          >
            Explore all coupons
          </Button>
        </div>

        <div className='w-full grid grid-cols-2 gap-2'>
          <CouponCard
            content='On every shipment'
            discountNumber='15%'
            image={coupon2}
          />
          <PromotionCard
            levelPromotion='Gold & Diamond'
            title='7 Days on Travel Cruise'
            image={promotion1}
          />
        </div>

        <div className='md:col-span-2 md:place-self-center'>
          <Button
            variant='shadow'
            color='primary'
            className='px-12 md:hidden'
            radius='full'
            onClick={() => navigate('/coupons&promotions')}
          >
            Explore all coupons
          </Button>
        </div>

      </section>

      <Footer />
    </main>
  )
}
