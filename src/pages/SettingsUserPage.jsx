import { CreditCardIcon, DocumentCheckIcon, DocumentTextIcon, LifebuoyIcon, MapIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Accordion, AccordionItem, Avatar, Button, Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'

export default function SettingsUserPage () {
  const { userData } = useContext(UserContext)
  const { isSession, isDataComplete, validateUserData, getDataFromUser, profileUser } = useUser()
  const navigate = useNavigate()

  const firstName = userData?.firstName || 'Guest'
  const lastName = userData?.lastName || 'User'
  const userEmail = userData?.userEmail || 'example@example.com'

  useEffect(() => {
    if (!isSession) {
      navigate('/login')
    }
    validateUserData()
  }, [])

  return (
    <div className='px-6 max-w-[1000px] m-auto flex flex-col gap-4 last:mb-10'>

      <div className='flex flex-col justify-center items-center'>
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 pt-10 gap-3 place-items-center'>
          <div className='w-full flex sm:justify-end justify-center items-center'>
            <Avatar
              className='w-20 h-20 sm:w-28 sm:h-28'
              classNames={{
                base: 'bg-gradient-to-br from-[#103A6A] to-[#09354d]',
                icon: 'text-white',
                name: 'text-lg text-white font-semibold uppercase'
              }}
              name={firstName}
            />
          </div>
          <div className='w-full flex flex-col justify-center items-center sm:items-start'>
            <h1 className='text-2xl'>{`${firstName} ${lastName}`}</h1>
            <p className='text-sm text-foreground/70'>{userEmail}</p>
            <p className='uppercase text-lg text-primary'>#CUW00001</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start gap-2 pt-10'>
        <h1 className='uppercase text-sm font-medium text-foreground/50'>Account</h1>
        <Accordion
          showDivider={false}
          className='p-2 w-full grid grid-cols-1 md:grid-cols-2 gap-1 bg-primary/10'
          variant='shadow'
          itemClasses={
            {
              base: 'py-0',
              title: 'font-normal text-medium text-primary',
              trigger: 'px-2 py-0 data-[hover=true]:bg-background rounded-lg h-14 flex items-center',
              indicator: 'text-medium',
              content: 'text-small px-2'
            }
          }
        >
          <AccordionItem
            key='1'
            aria-label='Account Details'
            startContent={<UserCircleIcon className='text-primary h-7' />}
            title='Account Details'
            subtitle={
              <p className={`${isDataComplete === false ? 'text-danger' : 'text-foreground'}`}>
                {
                  isDataComplete === false
                    ? 'Complete your account'
                    : 'Show account details'
                }
              </p>
            }
          >
            <div className='w-full p-2 flex flex-col items-center justify-start gap-2'>
              <Button
                onPress={getDataFromUser}
                className='w-full'
                color={isDataComplete === false ? 'danger' : 'primary'}
                variant='flat'
              >
                {
                  isDataComplete === false
                    ? 'Complete your account data'
                    : 'View your account data'
                }
              </Button>

              {profileUser !== null &&
                <div className='w-full grid grid-cols-2 gap-2'>
                  <Input
                    size='sm'
                    label='First Name'
                    color='primary'
                    variant='flat'
                    value={profileUser.first_name || ''}
                  />
                  <Input
                    size='sm'
                    label='Last Name'
                    color='primary'
                    variant='flat'
                    value={profileUser.last_name || ''}
                  />
                  <Input
                    size='sm'
                    label='Document ID'
                    color='primary'
                    variant='flat'
                    value={profileUser.document_id || ''}
                  />
                  <Input
                    size='sm'
                    label='City / Province'
                    color='primary'
                    variant='flat'
                    value={profileUser.city || ''}
                  />
                  <Input
                    className='col-span-2'
                    size='sm'
                    label='Address'
                    color='primary'
                    variant='flat'
                    value={profileUser.address || ''}
                  />
                  <Input
                    size='sm'
                    label='Country'
                    color='primary'
                    variant='flat'
                    value={profileUser.country || ''}
                  />
                  <Input
                    size='sm'
                    label='Zip Code'
                    color='primary'
                    variant='flat'
                    value={profileUser.zip_code || ''}
                  />
                  <Input
                    size='sm'
                    label='Mobile Phone'
                    color='primary'
                    variant='flat'
                    value={profileUser.mobile_phone || ''}
                  />
                  <Input
                    size='sm'
                    label='Second Phone'
                    color='primary'
                    variant='flat'
                    value={profileUser.second_phone || ''}
                  />
                  <div className='w-full flex items-center justify-end col-span-2 gap-3'>
                    <Button
                      color='primary'
                    >
                      Save Data
                    </Button>
                    <Button
                      color='danger'
                      variant='flat'
                    >
                      Cancel
                    </Button>
                  </div>
                </div>}

            </div>
          </AccordionItem>
          <AccordionItem
            key='2'
            aria-label='Address Information'
            startContent={<MapIcon className='text-primary h-7' />}
            subtitle='Where you will receive your packages'
            title='Address Information'
          >
            Content
          </AccordionItem>
          <AccordionItem
            key='3'
            aria-label='Billing Information'
            classNames={{
              title: 'text-warning text-medium'
            }}
            startContent={<CreditCardIcon className='text-warning h-7' />}
            title='Billing Information'
            subtitle={
              <div className='flex gap-1 items-center'>
                <p>
                  Add your payment method
                </p>
              </div>
            }
          >
            content
          </AccordionItem>
          <AccordionItem
            key='4'
            aria-label='Invoices'
            startContent={<DocumentTextIcon className='text-primary h-7' />}
            title={
              <div className='flex gap-1 items-center'>
                <p>
                  Invoices
                </p>
                <p className='text-primary-100 text-small font-bold px-2 rounded-full bg-success'>0</p>
              </div>
            }
            subtitle='All invoices of your account'
          >
            Content
          </AccordionItem>
        </Accordion>
      </div>

      <div className='flex flex-col justify-center items-start gap-2 pt-5'>
        <h1 className='uppercase text-sm font-medium text-foreground/50'>Other</h1>
        <Accordion
          showDivider={false}
          className='p-2 w-full grid grid-cols-1 md:grid-cols-2 gap-1 bg-primary/10'
          variant='shadow'
          itemClasses={
            {
              base: 'py-0',
              title: 'font-normal text-medium text-primary',
              trigger: 'px-2 py-0 data-[hover=true]:bg-background rounded-lg h-14 flex items-center',
              indicator: 'text-medium',
              content: 'text-small px-2'
            }
          }
        >
          <AccordionItem
            key='1'
            aria-label='Privacy Policy'
            startContent={<ShieldExclamationIcon className='text-primary h-7' />}
            title='Privacy Policy'
            subtitle={
              <p className='flex'>
                Privacy Policy of the company
              </p>
            }

          >
            Content 1
          </AccordionItem>
          <AccordionItem
            key='2'
            aria-label='Terms Conditions'
            startContent={<DocumentCheckIcon className='text-primary h-7' />}
            title='Terms & Conditions'
            subtitle='Terms and Conditions of 5999Cargo©'
          >
            Content
          </AccordionItem>
          <AccordionItem
            key='3'
            aria-label='Help and Feedback'
            startContent={<LifebuoyIcon className='text-primary h-7' />}
            title='Help & Feedback'
            subtitle={
              <div className='flex gap-1 items-center'>
                <p>
                  Send your requests and feedbacks
                </p>
              </div>
            }
          >
            content
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
