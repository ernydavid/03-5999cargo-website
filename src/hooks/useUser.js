import { useCallback, useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client/supabase'
import { loginSession } from '../services/userSession'

export function useUser () {
  const { logged, setLogged } = useContext(UserContext)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const login = useCallback(({ email, password }) => {
    setLoading(true)
    loginSession({ email, password })
      .then((response) => {
        const { data, error } = response
        if (error) {
          setLoading(false)
          setError(`${error.name}: ${error.message}`)
        } else if (data) {
          const metadata = data.session.user
          setLogged(metadata)
          window.localStorage.setItem('session', JSON.stringify(metadata))
          setLoading(false)
          navigate('/')
        }
      })
  }, [setLogged])

  const logout = useCallback(() => {
    supabase.auth.signOut()
    window.localStorage.removeItem('session')
    setLogged(false)
    navigate('/')
  }, [setLogged])

  return {
    isLogged: Boolean(logged),
    login,
    logout,
    loading,
    error
  }
}
