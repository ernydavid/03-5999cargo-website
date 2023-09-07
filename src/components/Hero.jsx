
import { Accordion, AccordionItem, Avatar, Card, CardBody, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import { ACCOUNT_MENU_OPT, CARD_CONTENT, INFO_USER_LP } from "../constants/constants";
import { StarIcon } from '@heroicons/react/24/solid'


export function Hero() {
  return (
    <div className='w-full flex flex-col gap-3'>
      <header
        className="flex flex-col gap-2 justify-center px-2"
      >
        <div
          className="w-full flex md:flex-col gap-1 justify-between items-center"
        >
          {
            INFO_USER_LP.map(({ id, title, value }) => (
              <div
                key={id}
                className="w-full flex flex-col rounded-md p-3 bg-background-800 hover:bg-background-900 cursor-default"
              >
                <small className="pointer-events-none">{title}</small>
                <small className="pointer-events-none"><b>{value}</b></small>
              </div>
            ))
          }
        </div>

        <Accordion
          aria-label="account-menu"
        >
          <AccordionItem
            classNames={{ title: 'text-base', subtitle: 'text-tiny font-semibold' }}
            key='user-account-menu'
            aria-label='Germaine Martina'
            title='Menu de la cuenta'
            subtitle='GERMAINE MARTINA'
            startContent={
              <Avatar
                isBordered
                color="primary"
                size="sm"
                radius="full"
              />
            }
          >
            <ul>
              {
                ACCOUNT_MENU_OPT.map(({ id, title, href }) => (
                  <li
                    key={id}
                    className="py-2"
                  >
                    <Link
                      className="text-foreground"
                      aria-label={`link-${id}`}
                      href={href}
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

      <div className="px-2">
        <Card
          isBlurred
          className="bg-background-400"
        >
          <CardHeader className="w-full h-[150px] px-6 py-6 flex-col items-start gap-4 bg-secondary">
            <h2 className="text-2xl font-semibold text-white">Germaine Martina</h2>
            <div className="text-white">
              <p className="font-medium">Membership Basic®</p>
              <p>Card Nº XXXX XXXX XXXX 9788</p>
            </div>
          </CardHeader>
          <CardBody className="py-4 flex flex-col justify-between items-center gap-2">
            <div className="w-full flex gap-2 justify-between items-center">
              <div className="flex flex-col items-start">
                <small className="font-semibold">Acumulated</small>
                <h2 className="text-2xl font-semibold">Loyalty Points</h2>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="text-3xl font-semibold">650</h2>
                <small className="font-semibold">points</small>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="w-full flex gap-2 justify-between items-center">
              <div className="flex flex-col items-start">
                <h2 className="text-2xl font-semibold">Membership Category</h2>
                <small className="font-semibold">Your category status & points</small>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="text-3xl font-semibold">650</h2>
                <small className="font-semibold">points</small>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex py-4">
              <div className="flex flex-col items-end gap-3 text-tiny">
                <p>4.500 pts</p>
                <p>3.000 pts</p>
                <p>2.000 pts</p>
                <p>1.200 pts</p>
                <p>0 pts</p>
              </div>
              <div className="flex relative">
                <div className=" flex w-[70px] h-full justify-center items-center">
                  <div className="w-[3px] h-full bg-foreground rounded-full relative">
                    <StarIcon
                      className="absolute h-[28px] -top-2 left-[50%] -translate-x-[50%] z-10 text-foreground"
                    />
                    <div
                      className="w-[12px] h-[12px] rounded-full  bg-success absolute z-20 top-[80%] left-[50%] -translate-x-[50%]"
                    >
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-col items-start gap-3 text-tiny">
                <p>Diamond Membership</p>
                <p>Gold Membership</p>
                <p>Silver Membership</p>
                <p>Basic Membership</p>
                <p></p>
              </div>

            </div>
          </CardBody>
        </Card>
      </div>

      <div className="px-2">
        <Card
          isBlurred
        >
          <CardHeader className="p-0 flex-col items-start">
            <Image
              isZoomed
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              width="100%"
            />
          </CardHeader>
          <CardBody className="py-4">
            <p className="text-small font-bold">How’s works the Loyalty points system?</p>
            <ul className="px-4 py-2">
              {
                CARD_CONTENT.map(({ id, text }) => (
                  <li
                    key={id}
                    className="text-default-500 text-tiny list-disc"
                  >
                    {text}
                  </li>
                ))
              }
            </ul>

          </CardBody>
        </Card>
      </div>




    </div>
  )
}
