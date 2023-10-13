/* eslint-disable react/jsx-indent */
import { Logo } from './Logo'
import { Accordion, AccordionItem, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, User } from '@nextui-org/react'
import { ThemeToggle } from './ThemeToggle'
import { ACCOUNT_MENU_LINKS, NAV_LINKS, SERVICES_LINKS } from '../constants/constants'
import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { UserContext } from '../context/userContext'

export const NavigationBar = () => {
  const { isSession, logout } = useUser()
  const { userData } = useContext(UserContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const firstName = userData?.firstName
  const lastName = userData?.lastName

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Navbar
      isBlurred
      isMenuOpen={isMenuOpen}
    >
        <NavbarBrand>
          <Link
            to='/'
            onClick={() => {
              if (isMenuOpen) {
                handleMenuOpen()
              }
            }}
          >
            <Logo
              className='sm:h-[34px]'
              height='28'
            />
          </Link>
        </NavbarBrand>

        <NavbarContent
          justify='center'
          className='hidden sm:flex text-foreground'
        >
          <Dropdown
            aria-label='nav-links'
            placement='bottom-start'
            backdrop='blur'
          >
            <NavbarItem key={SERVICES_LINKS.id}>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className='text-md text-foreground p-0 bg-transparent data-[hover=true]:bg-transparent'
                  endContent={<ChevronDownIcon className='h-4' />}
                  radius='sm'
                  variant='light'
                >
                  {SERVICES_LINKS.title}
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label='services-products'
            >
              {
              SERVICES_LINKS.servicesDescription.map(({ id, title, href }) => (
                <DropdownItem
                  aria-labelledby='service-products'
                  color='transparent'
                  key={id}
                  textValue={title}
                >
                  <Link
                    to={id}
                    className='text-foreground'
                    href={href}
                  >
                    {title}
                  </Link>
                </DropdownItem>
              ))
            }
            </DropdownMenu>
          </Dropdown>

          {
          NAV_LINKS.map(({ id, title, href }) => (
            <NavbarItem
              key={id}
            >
              <Link
                className='text-foreground'
                to={href}
              >
                {title}
              </Link>
            </NavbarItem>
          ))
        }
        </NavbarContent>
        <NavbarContent
          justify='end'
          className='flex justify-end gap-2 md:gap-4'
        >
          <ThemeToggle />
          <NavbarItem>
            <Link
              className={`${isSession ? 'hidden md:hidden' : 'hidden md:flex'} text-md text-warning`}
              to='/register'
            >
              Register
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              onClick={() => navigate('/login')}
              className={`${isSession ? 'hidden md:hidden' : 'hidden sm:flex'}`}
              color='primary'
              variant='ghost'
              radius='full'
              startContent={
                <UserCircleIcon className='h-[24px]' />
            }
            >
              Login
            </Button>
          </NavbarItem>
          {
            isSession &&
              <NavbarItem>
                <Dropdown
                  radius='md'
                >
                  <DropdownTrigger>
                    <Button
                      className='px-3 capitalize'
                      variant='ghost'
                      radius='full'
                      color='primary'
                      startContent={<UserCircleIcon className='h-[24px]' />}
                    >
                      {firstName}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label='Custom item styles'
                    disabledKeys={['profile']}
                    className='p-3'
                    variant='flat'
                  >
                    <DropdownSection aria-label='Profile & Actions' showDivider>
                      <DropdownItem
                        isReadOnly
                        key='profile'
                        className='h-14 gap-2 opacity-100'
                        textValue='profile'
                      >
                        <User
                          name={firstName}
                          description={lastName}
                          classNames={{
                            name: 'text-foreground text-md font-medium capitalize',
                            description: 'text-foreground text-sm capitalize'
                          }}
                          avatarProps={{
                            size: 'sm',
                            color: 'primary'
                          }}
                        />
                      </DropdownItem>
                      <DropdownItem
                        className='w-full'
                        key='dashboard'
                        textValue='dashboard'
                        onClick={() => navigate('/dashboard')}
                      >
                        Dashboard
                      </DropdownItem>
                      <DropdownItem
                        key='settings'
                        textValue='settings'
                        onClick={() => navigate('/accountSettings')}
                      >
                        Settings
                      </DropdownItem>
                    </DropdownSection>

                    <DropdownSection aria-label='Help & Feedback'>
                      <DropdownItem
                        key='help_and_feedback'
                        textValue='help_and_feedback'
                        onClick={() => navigate('/feedback')}
                      >
                        Help & Feedback
                      </DropdownItem>
                      <DropdownItem
                        color='danger'
                        className='text-danger font-semibold'
                        key='logout'
                        textValue='logout'
                        onClick={() => {
                          logout()
                        }}
                      >
                        Logout
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
          }
        </NavbarContent>

        <NavbarMenu className='flex flex-col gap-7 items-start'>
          <div className='w-full'>
            <Accordion className='py-0'>
              <AccordionItem
                key='1'
                aria-label='services'
                title='Services'
                classNames={{ title: 'text-foreground' }}
              >
                <ul className='flex flex-col justify-start px-3'>
                  {
                SERVICES_LINKS.servicesDescription.map(({ id, title, href }) => (
                  <Link
                    className='py-2 text-foreground'
                    key={id}
                    to={href}
                    onClick={handleMenuOpen}
                  >
                    {title}
                  </Link>
                ))
              }
                </ul>
              </AccordionItem>
            </Accordion>

            <Accordion className='py-0'>
              <AccordionItem
                key='1'
                aria-label='loyalty-membership'
                title='Loyalty Membership'
                classNames={{ title: 'text-foreground' }}
              >
                <ul className='flex flex-col justify-start px-3'>
                  {
                ACCOUNT_MENU_LINKS.map(({ id, title, href }) => (
                  <Link
                    className='py-2 text-foreground'
                    key={id}
                    to={href}
                    onClick={handleMenuOpen}
                  >
                    {title}
                  </Link>
                ))
              }
                </ul>
              </AccordionItem>
            </Accordion>
            {
          NAV_LINKS.map(({ id, title, href }) => (
            <NavbarMenuItem key={id}>
              <Link
                to={href}
                className='px-2 text-foreground text-md'
                onClick={handleMenuOpen}
              >
                {title}
              </Link>
            </NavbarMenuItem>
          ))
        }
          </div>

          {
            isSession
              ? <div className='w-full flex flex-col gap-4 mb-7'>
                <NavbarMenuItem>
                  <Button
                    variant='bordered'
                    color='danger'
                    className='w-full p-6 font-medium'
                    onClick={() => {
                      logout()
                      handleMenuOpen()
                    }}
                  >
                    Logout
                  </Button>
                </NavbarMenuItem>
                </div>
              : <div className='w-full flex flex-col gap-4 mb-7'>
                <NavbarMenuItem>
                  <Button
                    color='primary'
                    className='w-full p-6 font-medium bg-[#103A6A] dark:bg-[#225691]'
                    onClick={() => {
                      navigate('/login')
                      handleMenuOpen()
                    }}
                  >
                    Sign In
                  </Button>
                </NavbarMenuItem>
                <NavbarMenuItem>
                  <Button
                    variant='bordered'
                    color='primary'
                    className='w-full p-6 font-medium'
                    onClick={() => {
                      navigate('/register')
                      handleMenuOpen()
                    }}
                  >
                    Register
                  </Button>
                </NavbarMenuItem>
                </div>

          }
        </NavbarMenu>
        <NavbarMenuToggle
          className='sm:hidden'
          onClick={handleMenuOpen}
        />

    </Navbar>
  )
}
