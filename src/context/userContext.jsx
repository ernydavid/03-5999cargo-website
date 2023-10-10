import { createContext, useState } from 'react'

export const UserContext = createContext()

export function UserContextProvider ({ children }) {
  const [logged, setLogged] = useState(
    () => JSON.parse(window.localStorage.getItem('session'))
  )

  return (
    <UserContext.Provider value={{ logged, setLogged }}>
      {children}
    </UserContext.Provider>
  )
}
