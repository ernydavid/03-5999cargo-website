import { GlobeAmericasIcon, BoltIcon, TruckIcon, ChatBubbleLeftRightIcon, TrophyIcon, ShoppingCartIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

export const NAV_LINKS = [
  {
    id: 'quotation-page',
    title: 'Quotation',
    href: '/quotation'
  },
  {
    id: 'contact-page',
    title: 'Contact',
    href: '/contact'
  },
  {
    id: 'hubs-page',
    title: 'Hubs',
    href: '/hubs'
  }
]

export const SERVICES_LINKS = {

  id: 'services-page',
  title: 'Services',
  href: '/services',
  servicesDescription: [
    {
      id: 'transport-service',
      title: 'Transport Service by Air or Sea',
      href: '/services/transportation',
      icon: <TrophyIcon className='h-5 text-primary-600' />
    },
    {
      id: 'road-service',
      title: 'Road Service of Small and Large Packages',
      href: '/services/road',
      icon: <TruckIcon className='h-5 text-primary-600' />

    },
    {
      id: 'shop-drop-ship',
      title: 'Shop, Drop & Ship',
      href: '/services/shop&drop&ship',
      icon: <ShoppingCartIcon className='h-5 text-primary-600' />

    },
    {
      id: 'warehouse-service',
      title: 'Warehouse Service',
      href: '/services/warehouses',
      icon: <HomeIcon className='h-5 text-primary-600' />

    },
    {
      id: 'shopper-service',
      title: 'Personal Shopper Service',
      href: '/services/personal&shopper',
      icon: <ShoppingBagIcon className='h-5 text-primary-600' />

    }
  ]
}

export const INFO_USER_LP = [
  {
    id: 'member-level',
    title: 'Loyalty Membership:',
    value: 'Basic Level®'
  },
  {
    id: 'user-points',
    title: 'Total Acumulated Points:',
    value: 0 + ' pts'
  },
  {
    id: 'next-level',
    title: 'Next Loyalty Level:',
    value: 1200 + ' pts'
  }
]

export const ACCOUNT_MENU_LINKS = [
  {
    id: 'loyalty-menu-01',
    title: 'How to Earn Loyalty Points',
    href: '/loyaltypoints/how&to&earn'
  },
  {
    id: 'loyalty-menu-02',
    title: 'Buy Loyalty points',
    href: '/loyaltypoints/buy&points'
  },
  {
    id: 'loyalty-menu-03',
    title: 'Coupons & Promotions',
    href: '/loyaltypoints/coupons&promotions'
  }
]

export const CARD_CONTENT = [
  {
    id: 'item-01',
    text: 'Get loyalty points by send your packages on our web plataform.'
  },
  {
    id: 'item-02',
    text: 'Acumulate points to upgrade your level.'
  },
  {
    id: 'item-03',
    text: 'Redeem your acumulated loyalty points for discounts shipments, discounts coupons and fabulous surprises.'
  },
  {
    id: 'item-04',
    text: 'Acumulate and redeem your loyalty points for flight tickets, hotels, resorts, cruises and many items on our web plataform.'
  }
]

export const HERO_CARD_SERVICES = [
  {
    id: 'hero-card-services-1',
    title: 'Worldwide Services',
    content: 'Ship to everywhere around the world. We have many locations to send or receive your shipments.',
    href: '/services',
    icon: <GlobeAmericasIcon className='h-[36px] text-white p-2 rounded-full bg-[#042244]' />
  },
  {
    id: 'hero-card-services-2',
    title: 'Smart transport',
    content: 'Secure and professional transports of small and large shipments by road. We offer the best solution for moving your package.',
    href: '/services/transport',
    icon: <TruckIcon className='h-[36px] text-white p-2 rounded-full bg-[#042244]' />
  },
  {
    id: 'hero-card-services-3',
    title: 'Customer Service',
    content: '24/7  Full customer service.  For track your shipments and resolve your questions.',
    href: '/contact',
    icon: <ChatBubbleLeftRightIcon className='h-[36px] text-white p-2 rounded-full bg-[#042244]' />
  },
  {
    id: 'hero-card-services-4',
    title: 'Fast Service',
    content: 'Express shipments. Fast, secure and easy. Your shipments on your door on record time.',
    href: '/services',
    icon: <BoltIcon className='h-[36px] text-white p-2 rounded-full bg-[#042244]' />
  }
]
