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
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'system')

  useEffect(() => {
    function onWindowMatch () {
      if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && DEFAULT_THEME.matches)) {
        DOCUMENT.classList.add('dark')
      } else {
        DOCUMENT.classList.remove('dark')
      }
    }
    switch (theme) {
      case 'dark':
        DOCUMENT.classList.add('dark')
        window.localStorage.setItem('theme', 'dark')
        break
      case 'light':
        DOCUMENT.classList.remove('dark')
        window.localStorage.theme = 'light'
        break
      default:
        window.localStorage.removeItem('theme')
        onWindowMatch()
        break
    }

    DEFAULT_THEME.addEventListener('change', (ev) => {
      if (!(window.localStorage.getItem('theme'))) {
        ev.matches ? DOCUMENT.classList.add('dark') : DOCUMENT.classList.remove('dark')
      }
    })
  }, [theme])

  return (
    <div
      className={`flex gap-1 items-center justify-end ${className}`}
    >
      {
        ICONS.map(({ id, style, text }) => (
          <button
            className={`hover:text-primary-900 ${theme === text ? 'text-primary-700' : 'text-primary-400'} last-of-type:md:flex last-of-type:hidden`}
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
