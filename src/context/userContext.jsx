import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export function UserContextProvider ({ children }) {
  const [sessionUser, setSessionUser] = useState(
    () => JSON.parse(window.sessionStorage.getItem('sb-pxbddlwjbyfnwqokieti-auth-token'))
  )
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (!sessionUser) return
    const { user } = sessionUser
    setUserData({
      userID: user.id,
      userEmail: user.email,
      statusUser: user.aud,
      firstName: user.user_metadata.first_name,
      lastName: user.user_metadata.last_name
    })
  }, [sessionUser])

  return (
    <UserContext.Provider value={{ sessionUser, setSessionUser, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}
