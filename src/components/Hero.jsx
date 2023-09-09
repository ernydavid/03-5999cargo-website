
import { Accordion, AccordionItem, Avatar, Button, Card, CardBody, CardHeader, Divider, Image, Link, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { ACCOUNT_MENU_OPT, CARD_CONTENT, INFO_USER_LP } from "../constants/constants";
import { StarIcon, ChevronRightIcon, ArchiveBoxIcon } from '@heroicons/react/24/solid'


export function Hero() {
  return (
    <div className='w-full lg:max-w-[1000px] px-2 flex flex-col justify-center m-auto gap-6'>
      <header
        className="flex flex-col gap-2 justify-center px-2"
      >
        <div
          className="w-full flex gap-1 justify-between items-center"
        >
          {
            INFO_USER_LP.map(({ id, title, value }) => (
              <div
                key={id}
                className="w-full md:hidden flex flex-col justify-center rounded-md p-2 bg-background-800 hover:bg-background-900 cursor-default"
              >
                <small className="pointer-events-none">{title}</small>
                <small className="pointer-events-none"><b>{value}</b></small>
              </div>
            ))
          }
        </div>

        <Accordion
          aria-label="account-menu"
          itemClasses={{
            base: 'py-0 w-full',
            title: 'leading-3 text-base',
            subtitle: 'leading-3 text-tiny font-semibold',
            content: 'py-0',
            startContent: 'py-0'
          }}
        >
          <AccordionItem
            key='user-account-menu'
            aria-label='Germaine Martina'
            title='Account Manager Menu'
            subtitle='GERMAINE MARTINA'
            startContent={
              <Avatar
                className="md:h-[36px] md:w-[36px]"
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

      <section>
        <Card
          className="bg-background-400"
        >
          <CardHeader className="w-full h-[140px] px-6 py-3 flex-col justify-center items-start gap-4 bg-card-pattern bg-top bg-auto bg-repeat-x">
            <h2 className="text-2xl leading-4 font-semibold text-white">Germaine Martina</h2>
            <div className="text-white">
              <p className="font-medium">Membership Basic®</p>
              <p>Card Nº XXXX XXXX XXXX 9788</p>
            </div>
          </CardHeader>
          <CardBody className="py-4 flex flex-col justify-between items-center gap-2">
            <div className="w-full flex flex-col">
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
            </div>
            <Divider className="my-4" />
            <div className="flex py-4">
              <div className="flex flex-col items-end gap-5 text-tiny">
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
                    <div className="w-[9px] h-[9px] bg-foreground rounded-full absolute bottom-[24%] left-[50%] -translate-x-[50%] z-10"></div>
                    <div className="w-[9px] h-[9px] bg-foreground rounded-full absolute bottom-[45%] left-[50%] -translate-x-[50%] z-10"></div>
                    <div className="w-[9px] h-[9px] bg-foreground rounded-full absolute bottom-[68%] left-[50%] -translate-x-[50%] z-10"></div>
                    <Popover
                      showArrow placement="left"
                      color="primary"
                    >
                      <PopoverTrigger>
                        <Avatar
                          className="w-[20px] h-[20px] absolute bottom-[10%] left-[50%] z-30 -translate-x-[50%]"
                          as='button'
                          isBordered
                          color="primary"
                          radius="full"
                        />
                      </PopoverTrigger>
                      <PopoverContent className="p-1">
                        {(titleProps) => (
                          <div className="px-1 py-2">
                            <h3 className="text-small font-bold" {...titleProps}>
                              Germaine Martina
                            </h3>
                            <div className="text-tiny">This is your progress level</div>
                          </div>
                        )}
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

              </div>
              <div className="flex flex-col items-start gap-5 text-tiny">
                <p>Diamond Membership®</p>
                <p>Gold Membership®</p>
                <p>Silver Membership®</p>
                <p>Basic Membership®</p>
                <p></p>
              </div>
            </div>
            <Link
              showAnchorIcon
              className="w-full flex justify-end text-tiny text-right"
              href={ACCOUNT_MENU_OPT[3].href}
            >Get more points</Link>
          </CardBody>
        </Card>
      </section>

      <section>
        <Card
          className="bg-background-400"
        >
          <CardHeader className="w-full p-0 md:py-8 md:px-[100px] flex-col items-start md:items-center">
            <Image
              isZoomed
              alt="Card background"
              className="object-cover object-top rounded-xl"
              src="https://s3-alpha-sig.figma.com/img/98f1/6bd9/7fc63670fe338a3d6b41185ea7ddb613?Expires=1694995200&Signature=mhBezb2n3OsmhwaMv6ysh5ppg-4c2H00h9W3o06rDq4mO-wrbqjKTmgcBAp5PIKoJgYxRMJ0y9yDNRgA9TZEQicefKUPrmnkO-WTdv7zDJrMQkpL596nE5ZfuB2eJQ-AVDl6q8LATmDVqoBf-LoqL2fI8O6w-JOpDu-0LB41RWWsWELg08G7htqkY-~-mswzipn3zoIk7QTDCUtDKOw5-YpHaqrBDff-XZAbHIZnTKweNUN0RhcXbyagKl5s26TdR5jLb0SyV7VsgSJcDCnfqJsRgBSMjLEVYJjVgD3xRYPBOk67VS0u7cYCV-pdWADbfP4Wmg7N5uWtRejrc93HBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={'100%'}

            />
          </CardHeader>
          <CardBody className="w-full py-4 md:flex md:flex-col md:items-center">
            <p className="text-md font-bold">How’s works the Loyalty points system?</p>
            <ul className="px-4 py-2 md:px-[100px]">
              {
                CARD_CONTENT.map(({ id, text }) => (
                  <li
                    key={id}
                    className="text-default-500 text-small list-disc"
                  >
                    {text}
                  </li>
                ))
              }
            </ul>

          </CardBody>
        </Card>
      </section>

      <section
        className="flex flex-col gap-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Recent Activity</h1>
          <Link
            className="text-small"
            showAnchorIcon
            anchorIcon={<ChevronRightIcon className="h-[16px]" />}
          >See all activitys</Link>
        </div>

        <main className="flex flex-col md:flex-row gap-3">

          <Card
            className="bg-background-400 w-full flex justify-between items-center"
          >
            <CardBody
              className="p-0 overflow-hidden flex flex-row justify-start items-center gap-6"
            >
              <div className="w-[80px] h-[80px] md:h-[100px] flex justify-center items-center bg-secondary">
                <ArchiveBoxIcon className="h-[28px] text-white" />
              </div>
              <div className="flex flex-grow justify-between items-center gap-5">
                <div className="flex flex-col justify-center items-start">
                  <p className="text-small text-default-500">18 Sept 2023</p>
                  <h3 className="text-lg">Package sent to Curacao</h3>
                  <p className="text-small text-secondary-400">Earned points: <b>3</b> </p>
                </div>
                <div className="w-[30px]">
                  <ChevronRightIcon className="h-[18px]" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card
            className="bg-background-400 w-full flex justify-between items-center"
          >
            <CardBody
              className="p-0 overflow-hidden flex flex-row justify-start items-center gap-6"
            >
              <div className="w-[80px] h-[80px] md:h-[100px] flex justify-center items-center bg-secondary">
                <ArchiveBoxIcon className="h-[28px] text-white" />
              </div>
              <div className="flex flex-grow justify-between items-center gap-5">
                <div className="flex flex-col justify-center items-start">
                  <p className="text-small text-default-500">10 Sept 2023</p>
                  <h3 className="text-lg">Package sent to Bonaire</h3>
                  <p className="text-small text-secondary-400">Earned points: <b>5</b> </p>
                </div>
                <div className="w-[30px]">
                  <ChevronRightIcon className="h-[18px]" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card
            className="bg-background-400 w-full flex justify-between items-center"
          >
            <CardBody
              className="p-0 overflow-hidden flex flex-row justify-start items-center gap-6"
            >
              <div className="w-[80px] h-[80px] md:h-[100px] flex justify-center items-center bg-secondary">
                <ArchiveBoxIcon className="h-[28px] text-white" />
              </div>
              <div className="flex flex-grow justify-between items-center gap-5">
                <div className="flex flex-col justify-center items-start">
                  <p className="text-small text-default-500">05 Sept 2023</p>
                  <h3 className="text-lg">Package sent to Curacao</h3>
                  <p className="text-small text-secondary-400">Earned points: <b>2</b> </p>
                </div>
                <div className="w-[30px]">
                  <ChevronRightIcon className="h-[18px]" />
                </div>
              </div>
            </CardBody>
          </Card>
        </main>
      </section>

      <section
        className="w-full flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Available Coupons</h1>
          <Link
            className="text-small"
            showAnchorIcon
            anchorIcon={<ChevronRightIcon className="h-[16px]" />}
          >See all</Link>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <Card
            className="bg-background-400 flex flex-row justify-start items-start relative">
            <Image
              isZoomed
              className="overflow-hidden w-[300px] h-[200px] object-cover"
              alt="Card background"
              src="https://s3-alpha-sig.figma.com/img/ce83/31aa/a6142b433e19344c1a0fe9fe5d6e9bf0?Expires=1694995200&Signature=jmFQFsyvuGmEj-v62MrP2SWyqiMy0HclhiRtiWMNTW9OUfhmGMjkhQGko6bve5WGx87JM4OMPL3Ku2jz9oL3CFMbglEt3neWJKxjCksjGeeyjOF0yvJS59Sj7I2iGO-GhHFJAgjRLTnSCMVCpvWwysce8eGJrzjC~u~zY7kupM00lx97vFqIf842UUzTI-F6b-xSuoTBRiOJ250pUso1bDoBE~0D~HLiyRltPIv2xg8XtBgq2-ucCB7~Ef~UuR2le5JCzz1ntaS8CiRfr~h0FQMaVjLvRQ5ChuypzIJxtqwaqdGgT8pvSyNBB4Ve8qUq8I083fXZ4j73-xdeXZT3zA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

            <div
              className="w-[80px] h-[80px] rounded-full bg-secondary-400/80 absolute bottom-3 left-3 z-10 flex justify-center items-center pointer-events-none">
              <span className="text-3xl font-semibold text-white">15%</span>
            </div>

            <div className="flex flex-col h-[200px] p-2 gap-3 justify-between items-start">

              <div>
                <span className="text-tiny text-default-400">Expire on October 2023</span>
              </div>

              <div className="flex flex-col gap-1">
                <h2
                  className="text-sm font-medium">
                  15% Discount on shipment
                </h2>
                <p className="text-xs text-default-500">Coupon for get 15% discount on sea or air freight. This coupon is for 1 use.</p>
              </div>

              <div className="w-full flex justify-between items-center gap-2">
                <div>
                  <small>Loyalty points:</small>
                  <h2 className="font-semibold">1 LP</h2>
                </div>
                <Button
                  variant="shadow"
                  color="danger">
                  Buy Now
                </Button>
              </div>
            </div>
          </Card>

          <Card
            className="bg-background-400 flex flex-row justify-start items-center relative">
            <Image
              isZoomed
              className="overflow-hidden w-[300px] h-[200px] object-cover"
              alt="Card background"
              src="https://s3-alpha-sig.figma.com/img/30d7/ab49/b0eb006a2ab98411d6c1afa902fc4ab3?Expires=1694995200&Signature=SalthojUb0Nto817kkRVAerI1X2vWj6hv8mTHGWAXbywe16vGudUy~a~F86EMeQojDudRELGwqELRd7QDgIOzeenwlLcONrf4~SE1uSgdslPK6JQPnYZ8c2dJfl7MoBm5AcnqbtgnXVn2hmHdQ~7FJ7C1fURvUozfIneiRd32T0E46~Lzs24jEhTJ5tjpaZfTM92MKngZqpEGyv9IejO65TtSbdyWt~-q9WmDjkoWvpXR3qNNOrFucWXffZvU8bmnEuSAWWIzzeyqrgWDx2UNJCkg4WLCSj92fX8HOAV403SuZqNT-UFiGROPyc7iA4ylu9fq3lpxCtXUP4ZeSEZ8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

            <div
              className="w-[80px] h-[80px] rounded-full bg-secondary-400/80 absolute bottom-3 left-3 z-10 flex justify-center items-center pointer-events-none">
              <span className="text-3xl font-semibold text-white">20%</span>
            </div>

            <div className="h-[200px] flex flex-col p-2 gap-3 justify-between items-start">

              <div>
                <span className="text-tiny text-default-400">Expire on October 2023</span>
              </div>

              <div className="flex flex-col gap-1">
                <h2
                  className="text-sm font-medium">
                  20% Discount on shipment
                </h2>
                <p className="text-xs text-default-500">Coupon for get 20% discount on sea or air freight. This coupon is for 1 use.</p>
              </div>

              <div className="w-full flex justify-between items-center gap-2">
                <div>
                  <small>Loyalty points:</small>
                  <h2 className="font-semibold">2 LP</h2>
                </div>
                <Button
                  variant="shadow"
                  color="danger">
                  Buy Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

      </section>

      <section
        className="w-full flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Loyalty Promotions</h1>
          <Link
            className="text-small"
            showAnchorIcon
            anchorIcon={<ChevronRightIcon className="h-[16px]" />}
          >See all</Link>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <Card
            className="bg-background-400 flex flex-col justify-start items-start relative">
            <CardHeader className="p-0" >
              <Image
                isZoomed
                className="w-full"
                radius="none"
                alt="Card background"
                src="https://s3-alpha-sig.figma.com/img/8085/fffc/50c66309f7a23da164188d66300acdb2?Expires=1694995200&Signature=SDD-ZZkC5ImjV99lEeQtbc6kKrY98MVk0HUgepzl4kz8P-adGNA6l-mFvPW1rqoRGZmg9Q1EIDzBW1EMSNCUeqPMILZJx55yBNaM5-EFkg2HqcO0oxtEcJq-pC-yse3QcXnOpZKukwyjXg~EFGUDxMkElgbp5oasEhqOBz4KNgy4yp5~3ImfdBfCZN4~6t2ZX25-6BoKh9uLu~f0vpSaEeMCOLF-u9ZLORsLhndur~Nq-cGO5jXNVnU24Nl1DwqCpXtw1RwLUGt8rgjeRA22ARiQjFz~xbqs05PW~0s7PSxmktSHll6mX0MA3LovN7lXJ5EX8QlYJriN8YtT1vrgQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
              <div
                className="w-[110px] h-[110px] rounded-full bg-purple-900/80 absolute top-3 right-3 z-10 flex justify-center items-center pointer-events-none">
                <span className="text-sm uppercase font-semibold text-white text-center">Only Silver, gold & Diamond</span>
              </div>
            </CardHeader>

            <CardBody className="p-2 flex flex-col gap-2">
              <header>
                <h1>7 Days Carnival Cruise Tour</h1>
                <p className="text-xs text-default-400">7 days on carnival cruise, sailing from port of Miami to St Juan, Amber Cove. Include hotel, tax and gratuite</p>
              </header>
              <div className="flex justify-between items-center">
                <div>
                  <small>Loyalty points</small>
                  <h2 className="text-md font-medium">150 loyalty points</h2>
                </div>
                <Button
                  variant="shadow"
                  color="danger">
                  Buy Now
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card
            className="bg-background-400 flex flex-col justify-start items-start relative">
            <CardHeader className="p-0" >
              <Image
                isZoomed
                className="w-full"
                radius="none"
                alt="Card background"
                src="https://s3-alpha-sig.figma.com/img/30b4/a2b4/022e9d0dc55bb6f0feb0dfed42a129a8?Expires=1694995200&Signature=oayHMM2i8sAahcCQ9HULAg22dYjBw-9FCVpLydePOiNs72u9G13WHuYpWgw~MLq2~0raW1gDJ7aE~EJKdXnhmNxk-NpyQf4SEZowXBC7SSvuDdJ9X3vhTmYBTYPz12PQGIN4ppurAQQOf37wUqqObyv5LPr-ObSZdLOhxvzG7P2BRJQwb9UJewNa0p2zZhYwn0ceQIK~A-aICXRaCYYfjbmdAcqXyPjdw~0KeZQXDOJCZM18jrXCA0RwG4pMQfbYlGNPUQEjkWtRESQeFCybK-hYGHu9yenFG0SsUrQVmy6HawPum8E3FdnUZW9BPirp7EJVSK8QYK~bntB5NmL98g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
              <div
                className="w-[110px] h-[110px] rounded-full bg-purple-900/80 absolute top-3 right-3 z-10 flex justify-center items-center pointer-events-none">
                <span className="text-sm uppercase font-semibold text-white text-center">Only gold & Diamond</span>
              </div>
            </CardHeader>

            <CardBody className="p-2 flex flex-col gap-2">
              <header>
                <h1>3 days Punta Cana Resort</h1>
                <p className="text-xs text-default-400">3 days on punta Cana Resort, include flight tickets, hotel, tax and gratuite</p>
              </header>
              <div className="flex justify-between items-center">
                <div>
                  <small>Loyalty points</small>
                  <h2 className="text-md font-medium">400 loyalty points</h2>
                </div>
                <Button
                  variant="shadow"
                  color="danger">
                  Buy Now
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="w-full flex flex-col gap-6">
        <Card className="bg-background-400 px-2 py-6 flex flex-col gap-3">
          <CardHeader className="px-6 py-0 flex flex-col justify-start items-start">
            <h1 className="text-lg font-semibold">Do you need more points?</h1>
            <p className="text-sm text-foreground">We can buy loyalty points</p>
          </CardHeader>
          <CardBody className=" overflow-visible px-6 flex flex-col justify-start gap-4 items-center">
            <p className="text-xs text-default-400">Note: The purchased points is only for redeem coupons or promotions. These will not be taken into account to improve the level.</p>
            <Button
              variant="shadow"
              color="danger">
              Get more points
            </Button>
          </CardBody>
        </Card>
      </section>

      <footer className="py-10">
        <div className="text-center text-neutral-400 text-xs font-medium leading-[19px]">©2023 5999Cargo Company<br />
          ®All rights reserved<br />
          www.5999cargo.com<br />
          Contact<br />
          Hubs<br />
          About Us</div>
      </footer>


    </div>
  )
}
