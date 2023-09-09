import { Logo } from "./Logo"
import { Accordion, AccordionItem, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"
import { ThemeToggle } from "./ThemeToggle"
import { NAV_LINKS, SERVICES_LINKS } from "../constants/constants"
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { useState } from "react"


export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Logo
          className={`sm:h-[34px]`}
          height={'28'}

        />
      </NavbarBrand>

      <NavbarContent
        justify="center"
        className="hidden sm:flex text-foreground"
      >
        <Dropdown
          aria-label="nav-links"
          placement="bottom-start"
          backdrop="blur"
        >
          {
            SERVICES_LINKS.map(({ id, title }) => (

              <NavbarItem key={id}>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="text-md text-foreground p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ChevronDownIcon className="h-4" />}
                    radius="sm"
                    variant="light"
                  >
                    {title}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
            ))
          }
          <DropdownMenu
            aria-label="services-products"

          >
            {
              SERVICES_LINKS[0].servicesDescription.map(({ id, title, href }) => (
                <DropdownItem
                  aria-labelledby="service-products"
                  color="transparent"
                  key={id}
                  textValue={title}
                >
                  <Link
                    key={`link-to-${id}`}
                    className="text-foreground"
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
                className="text-foreground"
                href={href}
              >
                {title}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem>
          <Button
            className="text-foreground flex justify-center items-center px-2 rounded-full"
            color="secondary"
            variant="bordered"
            startContent={<UserCircleIcon className="h-5 text-foreground" />}
          >
            Germaine
          </Button>
        </NavbarItem>
      </NavbarContent>



      <NavbarMenu>
        <Accordion>
          <AccordionItem
            key='1'
            aria-label="services"
            title="Services"
            classNames={{ title: 'text-foreground' }}
          >
            <ul className="flex flex-col justify-start px-3">
              {
                SERVICES_LINKS[0].servicesDescription.map(({ id, title, href }) => (
                  <Link
                    className="py-2 text-foreground"
                    key={id}
                    href={href}
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
                href={href}
                className="px-2 text-foreground text-md"
              >
                {title}
              </Link>
            </NavbarMenuItem>
          ))
        }
      </NavbarMenu>
      <NavbarMenuToggle
        className="sm:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      />



    </Navbar >

  )
}
