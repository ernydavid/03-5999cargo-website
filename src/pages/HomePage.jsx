/* eslint-disable react/jsx-closing-tag-location */
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { HERO_CARD_SERVICES, SERVICES_LINKS } from '../constants/constants'
import { cargoEmployee, coupon2, promotion1, worldMap } from '../assets'
import { useUser } from '../hooks/useUser'
import { Footer } from '../components'
import { TitleH1 } from '../components/TitleH1'
import { useEffect } from 'react'

export default function HomePage () {
  const { isLogged } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className='px-6 max-w-[1000px] m-auto'>
      <section className='flex h-[85vh] flex-col md:flex-row justify-center items-center'>
        <div
          className='flex flex-col justify-center md:items-start items-center relative'
        >
          {
            (isLogged)
              ? <TitleH1 starContent='Earn points for every' focusContent='shipment.' endContent='Send now and start earn points' className='text-4xl' />
              : <TitleH1 starContent='Send packages around the world with a' focusContent='Smile.' endContent='Earn points for your shipments.' className='text-4xl' />
          }
          {
            isLogged
              ? <p
                  className='text-foreground-600 md:text-start text-center py-4 px-6 md:px-0 text-base'
                >
                The new loyalty system allows you to get more benefits when using our shipping system. Learn how
              </p>
              : <p
                  className='text-foreground-600 md:text-start text-center py-4 px-6 md:px-0 text-base'
                >
                We offer Express Delivery services around the world, Shop, Drop & Ship, Personal Shopper Service and more!. And i'ts not at all! You can earn many gifts by using our service!
              </p>
          }

          {
          isLogged
            ? <Button
                className='w-full max-w-[400px] md:w-[400px] mt-2 bg-gradient-to-br from-[#103A6A] to-[#032348] dark:from-[#4888d1] dark:to-[#084386] h-[48px] py-4 font-md text-base text-white'
                color='primary'
                radius='full'
                variant='shadow'
                endContent={
                  <ArrowRightIcon
                    className='h-[16px]'
                  />
            }
                onClick={() => { navigate('/coupons&promotions') }}
              >
              Explore all availables promotions
            </Button>
            : <Button
                className='w-full max-w-[400px] md:w-[400px] mt-2 bg-gradient-to-br from-[#103A6A] to-[#032348] dark:from-[#4888d1] dark:to-[#084386] h-[48px] py-4 font-md text-base text-white'
                color='primary'
                radius='full'
                variant='shadow'
                endContent={
                  <ArrowRightIcon
                    className='h-[16px]'
                  />
                }
                onClick={() => { navigate('/register') }}
              >
              Join us and get started now!
            </Button>
        }
        </div>

        <div
          className='absolute w-full top-[150px] left-[50%] px-2 translate-x-[-50%] -z-10 md:relative md:top-0 md:left-0  md:translate-x-0'
        >
          <img
            className='absolute md:relative top-0 left-[50%] translate-x-[-50%] opacity-20 object-cover md:h-[500px] md:object-left md:flex md:justify-center md:items-start'
            src={worldMap}
            alt='world Map'
          />
        </div>

      </section>

      <section
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto relative'
      >
        {
          HERO_CARD_SERVICES.map(({ id, title, content, href, icon }) => (
            <Link
              to={href}
              key={id}
            >
              <Card
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
            </Link>
          ))
        }
      </section>

      <section
        className='relative z-10 flex flex-col md:grid md:grid-cols-2 gap-2 w-full justify-center items-center mt-24 lg:mt-56'
      >
        <div
          className='flex flex-col gap-4'
        >
          <div className='inline-block text-left'>
            <h1 className='tracking-tight text-4xl inline font-bold antialiased text-center'>
              We offer the&nbsp;
            </h1>
            <h1 className='tracking-tight bg-gradient-to-bl from-sky-400 to-sky-800 text-4xl inline font-bold antialiased text-center bg-clip-text text-transparent'>
              best service,&nbsp;
            </h1>
            <h1 className='tracking-tight text-4xl inline font-bold antialiased text-center'>
              for you shipments.
            </h1>
          </div>
          <div className='grid gap-3'>
            {
            SERVICES_LINKS.servicesDescription.map(({ id, title, href, icon }) => (
              <Button
                className='hover:bg-[#103A6A]'
                radius='lg'
                startContent={
                   icon
                }
                color='primary'
                variant='flat'
                key={`link-to-${id}`}
                as={Link}
                to={href}
              >
                {title}
              </Button>
            ))
          }
          </div>
        </div>
        <div className='flex w-full h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] m-auto md:rounded-full overflow-hidden justify-center md:items-center object-contain bg-background-700'>
          <Image
            src={cargoEmployee}
          />
        </div>
      </section>

      <section className='relative z-10 flex flex-col md:grid md:grid-cols-2 gap-6 w-full justify-center items-center mt-24 lg:mt-56'>

        <div className='flex flex-col gap-3'>
          <div className='inline-block text-left'>
            <h1 className='tracking-tight text-4xl inline font-bold antialiased text-center'>
              Explore all&nbsp;
            </h1>
            <h1 className='tracking-tight bg-gradient-to-bl from-sky-400 to-sky-800 text-4xl inline font-bold antialiased text-center bg-clip-text text-transparent'>
              gifts & coupons,&nbsp;
            </h1>
            <h1 className='tracking-tight text-4xl inline font-bold antialiased text-center'>
              for using our service.
            </h1>
          </div>
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
          <Card className='h-[200px]'>
            <CardHeader className='w-full absolute z-10 top-1 flex-col !items-start rounded-xl bg-primary/30'>
              <p className='text-tiny text-white/60 uppercase font-bold'>15% Discount Coupon</p>
              <h4 className='text-white font-medium text-large'>On every shipment</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt='Card background'
              className='z-0 w-full h-full object-cover'
              src={coupon2}
            />
            <CardFooter className='absolute z-10 bottom-5 left-5 w-[80px] h-[80px] rounded-full flex items-center justify-center bg-primary/60'>
              <span className='text-3xl text-white'>15%</span>
            </CardFooter>
          </Card>
          <Card className='h-[200px]'>
            <CardHeader className='w-full absolute z-10 top-1 flex-col !items-start rounded-xl bg-secondary/30'>
              <p className='text-tiny text-white/60 uppercase font-bold'>Loyalty Promotion</p>
              <h4 className='text-white font-medium text-large'>7 Days Travel Cruise</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt='Card background'
              className='z-0 w-full h-full object-cover'
              src={promotion1}
            />
            <CardFooter className='absolute z-10 bottom-5 left-5 w-[80px] h-[80px] rounded-full flex items-center justify-center bg-secondary/60'>
              <span className='text-xs text-center text-white uppercase'>ONLY GOLD & DIAMOND</span>
            </CardFooter>
          </Card>
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
