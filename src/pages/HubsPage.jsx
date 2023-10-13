import { Button, Image } from '@nextui-org/react'
import { TitleH1 } from '../components/TitleH1'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { hubHeroImage } from '../assets'

export default function HubsPage () {
  return (
    <main className='px-6 max-w-[1000px] m-auto'>
      <section className='flex w-full h-[90vh] flex-col md:flex-row md:justify-between justify-center items-center gap-6'>
        <div className='w-full flex flex-col items-center md:items-start justify-center gap-3'>
          <TitleH1
            className='text-4xl'
            starContent='Explore'
            focusContent='Hubs Offices'
            endContent='Nearby'
          />
          <p className='w-full text-center md:text-left'>Find the Hub Oficce closest to your location. We are in more of 10 countries around the world.</p>
          <Button
            radius='full'
            endContent={
              <ChevronRightIcon className='h-[16px]' />
            }
            variant='ghost'
            color='primary'
          >
            See all Hubs
          </Button>
        </div>
        <div className='w-full md:w-[70%] h-[250px] md:h-[400px] flex justify-center items-center'>
          <Image
            removeWrapper
            className='w-full h-full object-cover'
            src={hubHeroImage}
          />
        </div>
      </section>
    </main>
  )
}
