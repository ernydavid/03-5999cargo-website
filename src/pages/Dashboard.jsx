import { Accordion, AccordionItem, Avatar, Button, Card, CardBody, CardHeader, Divider, Image, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { ACCOUNT_MENU_LINKS, CARD_CONTENT, INFO_USER_LP } from '../constants/constants'
import { StarIcon, ChevronRightIcon, ArchiveBoxIcon } from '@heroicons/react/24/solid'
import { PatternCardBackground, coupon1, coupon2, loyaltyImage, promotion1, promotion2 } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { Footer } from '../components'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import { useUser } from '../hooks/useUser'

export default function Dashboard () {
  const { userData } = useContext(UserContext)
  const { isSession } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSession) navigate('/login')
    window.scrollTo(0, 0)
  }, [navigate])

  const firstName = userData?.firstName || 'Guest'
  const lastName = userData?.lastName || 'User'

  return (
    <div className='w-full lg:max-w-[1000px] px-2 flex flex-col justify-center m-auto gap-6'>
      <header
        className='flex flex-col gap-2 justify-center px-2'
      >
        <div
          className='w-full flex gap-1 justify-between items-center'
        >
          {
            INFO_USER_LP.map(({ id, title, value }) => (
              <div
                key={id}
                className='w-full md:hidden flex flex-col justify-center rounded-md p-2 bg-background-800 hover:bg-background-900 cursor-default'
              >
                <small className='pointer-events-none'>{title}</small>
                <small className='pointer-events-none'><b>{value}</b></small>
              </div>
            ))
          }
        </div>

        <Accordion
          aria-label='account-menu'
          itemClasses={{
            base: 'py-0 w-full',
            title: 'leading-3 text-base',
            subtitle: 'leading-3 text-tiny font-semibold',
            content: 'py-0',
            startContent: 'py-0'
          }}
        >
          <AccordionItem
            classNames={{ subtitle: 'text-xs font-semibold uppercase' }}
            key='user-account-menu'
            aria-label={`${firstName} ${lastName}`}
            title='Account Manager Menu'
            subtitle={`${firstName} ${lastName}`}
            startContent={
              <Avatar
                className='md:h-[36px] md:w-[36px]'
                isBordered
                color='primary'
                size='sm'
                radius='full'
              />
            }
          >
            <ul>
              {
                ACCOUNT_MENU_LINKS.map(({ id, title, href }) => (
                  <li
                    key={id}
                    className='py-2'
                  >
                    <Link
                      className='text-foreground'
                      aria-label={`link-${id}`}
                      to={href}
                    >
                      {title}
                    </Link>
                  </li>
                ))
              }
            </ul>

          </AccordionItem>
        </Accordion>
      </header>

      <section>
        <Card
          className='bg-background-400'
        >
          <CardHeader className='w-full h-[140px] px-6 py-3 flex-col justify-center items-start gap-4 bg-top bg-[#06153F] bg-auto bg-repeat-x relative overflow-hidden'>
            <PatternCardBackground />
            <h2 className='text-2xl leading-4 font-semibold text-white capitalize z-10'>
              {`${firstName} ${lastName}`}
            </h2>
            <div className='text-white z-10'>
              <p className='font-medium'>Membership Basic®</p>
              <p>Card Nº XXXX XXXX XXXX 9788</p>
            </div>
          </CardHeader>
          <CardBody className='py-4 flex flex-col justify-between items-center gap-2'>
            <div className='w-full flex flex-col'>
              <div className='w-full flex gap-2 justify-between items-center'>
                <div className='flex flex-col items-start'>
                  <small className='font-semibold'>Acumulated</small>
                  <h2 className='text-2xl font-semibold'>Loyalty Points</h2>
                </div>
                <div className='flex flex-col items-end'>
                  <h2 className='text-3xl font-semibold'>0</h2>
                  <small className='font-semibold'>points</small>
                </div>
              </div>
              <Divider className='my-4' />
              <div className='w-full flex gap-2 justify-between items-center'>
                <div className='flex flex-col items-start'>
                  <h2 className='text-2xl font-semibold'>Membership Category</h2>
                  <small className='font-semibold'>Your category status & points</small>
                </div>
                <div className='flex flex-col items-end'>
                  <h2 className='text-3xl font-semibold'>0</h2>
                  <small className='font-semibold'>points</small>
                </div>
              </div>
            </div>
            <Divider className='my-4' />
            <div className='flex py-4'>
              <div className='flex flex-col items-end gap-5 text-tiny'>
                <p>4.500 pts</p>
                <p>3.000 pts</p>
                <p>2.000 pts</p>
                <p>1.200 pts</p>
                <p>0 pts</p>
              </div>
              <div className='flex relative'>
                <div className=' flex w-[70px] h-full justify-center items-center'>
                  <div className='w-[3px] h-full bg-foreground rounded-full relative'>
                    <StarIcon
                      className='absolute h-[28px] -top-2 left-[50%] -translate-x-[50%] z-10 text-foreground'
                    />
                    <div className='w-[9px] h-[9px] bg-foreground rounded-full absolute bottom-[24%] left-[50%] -translate-x-[50%] z-10' />
                    <div className='w-[9px] h-[9px] bg-foreground rounded-full absolute bottom-[45%] left-[50%] -translate-x-[50%] z-10' />
                    <div className='w-[9px] h-[9px] bg-foreground rounded-full absolute bottom-[68%] left-[50%] -translate-x-[50%] z-10' />
                    <Popover
                      showArrow placement='left'
                      color='primary'
                    >
                      <PopoverTrigger>
                        <Avatar
                          className='w-[20px] h-[20px] absolute bottom-[0] left-[50%] z-30 -translate-x-[50%]'
                          as='button'
                          isBordered
                          color='primary'
                          radius='full'
                        />
                      </PopoverTrigger>
                      <PopoverContent className='p-1'>
                        {(titleProps) => (
                          <div className='px-1 py-2'>
                            <h3 className='text-small font-bold capitalize' {...titleProps}>
                              {`${firstName} ${lastName}`}
                            </h3>
                            <div className='text-tiny'>This is your progress level</div>
                          </div>
                        )}
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

              </div>
              <div className='flex flex-col items-start gap-5 text-tiny'>
                <p>Diamond Membership®</p>
                <p>Gold Membership®</p>
                <p>Silver Membership®</p>
                <p>Basic Membership®</p>
                <p />
              </div>
            </div>
            <Link
              className='w-full flex gap-2 items-center justify-end text-tiny text-right'
              to={ACCOUNT_MENU_LINKS[2].href}
            >Get more points <ChevronRightIcon className='h-[15px]' />
            </Link>
          </CardBody>
        </Card>
      </section>

      <section>
        <Card
          className='bg-background-400 flex flex-col md:flex-row'
        >
          <div>
            <CardHeader className='w-full p-0'>
              <div
                className='w-full h-[300px] overflow-hidden'
              >
                <Image
                  isZoomed
                  alt='Card background'
                  src={loyaltyImage}
                  className='h-[300px] w-[700px] object-top'
                />
              </div>
            </CardHeader>
          </div>
          <div>
            <CardBody className='w-full py-4 flex items-center md:flex-col md:items-start'>
              <p className='text-md md:text-lg font-bold'>How’s works the Loyalty points system?</p>
              <ul className='px-4 py-2'>
                {
                CARD_CONTENT.map(({ id, text }) => (
                  <li
                    key={id}
                    className='text-default-500 text-small md:text-medium list-disc'
                  >
                    {text}
                  </li>
                ))
              }
              </ul>

            </CardBody>
          </div>
        </Card>
      </section>

      <section
        className='flex flex-col gap-6'
      >
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl'>Recent Activity</h1>
          <Link
            className='flex items-center gap-2 text-small'
          >See all activitys <ChevronRightIcon className='h-[15px]' />
          </Link>
        </div>

        <main className='flex flex-col md:flex-row gap-3'>

          <Card
            className='bg-background-400 w-full flex justify-between items-center'
          >
            <CardBody
              className='p-0 overflow-hidden flex flex-row justify-start items-center gap-6'
            >
              <div className='w-[80px] h-[80px] md:h-[100px] flex justify-center items-center bg-primary'>
                <ArchiveBoxIcon className='h-[28px] text-white' />
              </div>
              <div className='flex flex-grow justify-between items-center gap-5'>
                <div className='flex flex-col justify-center items-start'>
                  <p className='text-small text-default-500'>18 Sept 2023</p>
                  <h3 className='text-lg'>Package sent to Curacao</h3>
                  <p className='text-small text-primary-400'>Earned points: <b>3</b> </p>
                </div>
                <div className='w-[30px]'>
                  <ChevronRightIcon className='h-[18px]' />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card
            className='bg-background-400 w-full flex justify-between items-center'
          >
            <CardBody
              className='p-0 overflow-hidden flex flex-row justify-start items-center gap-6'
            >
              <div className='w-[80px] h-[80px] md:h-[100px] flex justify-center items-center bg-primary'>
                <ArchiveBoxIcon className='h-[28px] text-white' />
              </div>
              <div className='flex flex-grow justify-between items-center gap-5'>
                <div className='flex flex-col justify-center items-start'>
                  <p className='text-small text-default-500'>10 Sept 2023</p>
                  <h3 className='text-lg'>Package sent to Bonaire</h3>
                  <p className='text-small text-primary-400'>Earned points: <b>5</b> </p>
                </div>
                <div className='w-[30px]'>
                  <ChevronRightIcon className='h-[18px]' />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card
            className='bg-background-400 w-full flex justify-between items-center'
          >
            <CardBody
              className='p-0 overflow-hidden flex flex-row justify-start items-center gap-6'
            >
              <div className='w-[80px] h-[80px] md:h-[100px] flex justify-center items-center bg-primary'>
                <ArchiveBoxIcon className='h-[28px] text-white' />
              </div>
              <div className='flex flex-grow justify-between items-center gap-5'>
                <div className='flex flex-col justify-center items-start'>
                  <p className='text-small text-default-500'>05 Sept 2023</p>
                  <h3 className='text-lg'>Package sent to Curacao</h3>
                  <p className='text-small text-primary-400'>Earned points: <b>2</b> </p>
                </div>
                <div className='w-[30px]'>
                  <ChevronRightIcon className='h-[18px]' />
                </div>
              </div>
            </CardBody>
          </Card>
        </main>
      </section>

      <section
        className='w-full flex flex-col gap-6'
      >
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl'>Available Coupons</h1>
          <Link
            className='text-small'
          >See all
          </Link>
        </div>

        <div className='flex flex-col md:flex-row gap-3'>
          <Card
            className='bg-background-400 flex flex-row justify-start items-start relative'
          >
            <Image
              isZoomed
              className='overflow-hidden w-[300px] h-[200px] object-cover'
              alt='Card background'
              src={coupon1}
            />

            <div
              className='w-[80px] h-[80px] rounded-full bg-primary-400/80 absolute bottom-3 left-3 z-10 flex justify-center items-center pointer-events-none'
            >
              <span className='text-3xl font-semibold text-white'>15%</span>
            </div>

            <div className='flex flex-col h-[200px] p-2 gap-3 justify-between items-start'>

              <div>
                <span className='text-tiny text-default-400'>Expire on October 2023</span>
              </div>

              <div className='flex flex-col gap-1'>
                <h2
                  className='text-sm font-medium'
                >
                  15% Discount on shipment
                </h2>
                <p className='text-xs text-default-500'>Coupon for get 15% discount on sea or air freight. This coupon is for 1 use.</p>
              </div>

              <div className='w-full flex justify-between items-center gap-2'>
                <div>
                  <small>Loyalty points:</small>
                  <h2 className='font-semibold'>1 LP</h2>
                </div>
                <Button
                  variant='shadow'
                  color='danger'
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Card>

          <Card
            className='bg-background-400 flex flex-row justify-start items-center relative'
          >
            <Image
              isZoomed
              className='overflow-hidden w-[300px] h-[200px] object-cover'
              alt='Card background'
              src={coupon2}
            />

            <div
              className='w-[80px] h-[80px] rounded-full bg-primary-400/80 absolute bottom-3 left-3 z-10 flex justify-center items-center pointer-events-none'
            >
              <span className='text-3xl font-semibold text-white'>20%</span>
            </div>

            <div className='h-[200px] flex flex-col p-2 gap-3 justify-between items-start'>

              <div>
                <span className='text-tiny text-default-400'>Expire on October 2023</span>
              </div>

              <div className='flex flex-col gap-1'>
                <h2
                  className='text-sm font-medium'
                >
                  20% Discount on shipment
                </h2>
                <p className='text-xs text-default-500'>Coupon for get 20% discount on sea or air freight. This coupon is for 1 use.</p>
              </div>

              <div className='w-full flex justify-between items-center gap-2'>
                <div>
                  <small>Loyalty points:</small>
                  <h2 className='font-semibold'>2 LP</h2>
                </div>
                <Button
                  variant='shadow'
                  color='danger'
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

      </section>

      <section
        className='w-full flex flex-col gap-6'
      >
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl'>Loyalty Promotions</h1>
          <Link
            className='text-small'
          >See all
          </Link>
        </div>

        <div className='flex flex-col md:flex-row gap-3'>
          <Card
            className='bg-background-400 flex flex-col justify-start items-start relative'
          >
            <CardHeader className='p-0'>
              <div
                className='w-full overflow-hidden flex items-center justify-center rounded-2xl'
              >
                <Image
                  isZoomed
                  className='object-cover rounded-2xl'
                  radius='none'
                  alt='Card background'
                  src={promotion1}
                />
              </div>
              <div
                className='w-[110px] h-[110px] rounded-full bg-purple-900/80 absolute top-3 right-3 z-10 flex justify-center items-center pointer-events-none'
              >
                <span className='text-sm uppercase font-semibold text-white text-center'>Only Silver, gold & Diamond</span>
              </div>
            </CardHeader>

            <CardBody className='p-2 flex flex-col gap-2'>
              <header>
                <h1>7 Days Carnival Cruise Tour</h1>
                <p className='text-xs text-default-400'>7 days on carnival cruise, sailing from port of Miami to St Juan, Amber Cove. Include hotel, tax and gratuite</p>
              </header>
              <div className='flex justify-between items-center'>
                <div>
                  <small>Loyalty points</small>
                  <h2 className='text-md font-medium'>150 loyalty points</h2>
                </div>
                <Button
                  variant='shadow'
                  color='danger'
                >
                  Buy Now
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card
            className='bg-background-400 flex flex-col justify-start items-start relative'
          >
            <CardHeader className='p-0'>
              <div
                className='w-full overflow-hidden flex items-center justify-center rounded-2xl'
              >
                <Image
                  isZoomed
                  className='w-full rounded-2xl'
                  radius='none'
                  alt='Card background'
                  src={promotion2}
                />
              </div>

              <div
                className='w-[110px] h-[110px] rounded-full bg-purple-900/80 absolute top-3 right-3 z-10 flex justify-center items-center pointer-events-none'
              >
                <span className='text-sm uppercase font-semibold text-white text-center'>Only gold & Diamond</span>
              </div>
            </CardHeader>

            <CardBody className='p-2 flex flex-col gap-2'>
              <header>
                <h1>3 days Punta Cana Resort</h1>
                <p className='text-xs text-default-400'>3 days on punta Cana Resort, include flight tickets, hotel, tax and gratuite</p>
              </header>
              <div className='flex justify-between items-center'>
                <div>
                  <small>Loyalty points</small>
                  <h2 className='text-md font-medium'>400 loyalty points</h2>
                </div>
                <Button
                  variant='shadow'
                  color='danger'
                >
                  Buy Now
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className='w-full flex flex-col gap-6'>
        <Card className='bg-background-400 px-2 py-6 flex flex-col gap-3'>
          <CardHeader className='px-6 py-0 flex flex-col justify-start items-start'>
            <h1 className='text-lg font-semibold'>Do you need more points?</h1>
            <p className='text-sm text-foreground'>We can buy loyalty points</p>
          </CardHeader>
          <CardBody className=' overflow-visible px-6 flex flex-col justify-start gap-4 items-center'>
            <p className='text-xs text-default-400'>Note: The purchased points is only for redeem coupons or promotions. These will not be taken into account to improve the level.</p>
            <Button
              variant='shadow'
              color='danger'
            >
              Get more points
            </Button>
          </CardBody>
        </Card>
      </section>

      <Footer />

    </div>
  )
}
