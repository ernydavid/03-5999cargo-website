import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid'

const DOCUMENT = document.documentElement
const DEFAULT_THEME = window.matchMedia('(prefers-color-scheme: dark)')

const ICONS = [
  {
    id: 'sun-icon',
    style: <SunIcon className='h-5' />,
    text: 'light'
  },
  {
    id: 'dark-icon',
    style: <MoonIcon className='h-5' />,
    text: 'dark'
  },
  {
    id: 'system-icon',
    style: <ComputerDesktopIcon className='h-5' />,
    text: 'system'
  }

]


export const ThemeToggle = ({ className }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');

  useEffect(() => {

    function onWindowMatch() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && DEFAULT_THEME.matches)) {
        DOCUMENT.classList.add('dark')
      }
      else {
        DOCUMENT.classList.remove('dark');
      }
    }
    switch (theme) {
      case 'dark':
        DOCUMENT.classList.add('dark');
        localStorage.setItem('theme', 'dark')
        break;
      case 'light':
        DOCUMENT.classList.remove('dark')
        localStorage.theme = 'light'
        break;
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break;
    }

    DEFAULT_THEME.addEventListener('change', (ev) => {
      if (!(localStorage.getItem('theme'))) {
        ev.matches ? DOCUMENT.classList.add('dark') : DOCUMENT.classList.remove('dark');
      }
      else {
        return
      }

    })

  }, [theme])



  return (
    <div
      className={`flex gap-1 items-center ${className}`}
    >
      {
        ICONS.map(({ id, style, text }) => (
          <button
            className={`hover:text-primary-200 ${theme === text ? 'text-secondary' : 'text-secondary-200'} last-of-type:md:flex last-of-type:hidden`}
            key={id}
            title={text}
            onClick={() => setTheme(text)}
          >
            {style}
          </button>
        ))
      }
    </div>
  )
}
