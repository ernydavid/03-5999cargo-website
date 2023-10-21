import { useCallback, useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client/supabase'
import { loginSession } from '../services/userSession'

export function useUser () {
  const { sessionUser, setSessionUser, setUserData } = useContext(UserContext)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [passwordChanged, setPasswordChanged] = useState(false)
  const [requestSucess, setRequestSuccess] = useState(false)
  const [isDataComplete, setIsDataComplete] = useState(null)
  const [profileUser, setProfileUser] = useState(null)

  const login = useCallback(({ email, password }) => {
    setLoading(true)
    loginSession({ email, password })
      .then((response) => {
        const { data, error } = response
        if (error) {
          setLoading(false)
          setError(`${error.name}: ${error.message}`)
        } else if (data) {
          const { session } = data
          window.sessionStorage.setItem('sb-pxbddlwjbyfnwqokieti-auth-token', JSON.stringify(session))
          setSessionUser(session)
          setLoading(false)
          navigate('/')
        }
      })
  }, [setSessionUser])

  const logout = useCallback(() => {
    supabase.auth.signOut()
    window.localStorage.removeItem('sb-pxbddlwjbyfnwqokieti-auth-token')
    window.sessionStorage.removeItem('sb-pxbddlwjbyfnwqokieti-auth-token')
    setSessionUser(null)
    setUserData(null)
    navigate('/')
  }, [setSessionUser])

  const resetPassword = useCallback((email) => {
    setLoading(true)
    const requestRecoveryPassword = async () => {
      const { data, error } = await supabase.auth
        .resetPasswordForEmail(email, {
          redirectTo: 'http://localhost:5173/reset-password'
        })
      if (error) {
        setError(`There's an error: ${error.name}, ${error.message}`)
      } else if (data) {
        setRequestSuccess(true)
      }
    }
    requestRecoveryPassword()
    setLoading(false)
  }, [setSessionUser])

  const requestNewPassword = useCallback((password) => {
    setLoading(true)
    const setNewPassword = async () => {
      const { data, error } = await supabase.auth
        .updateUser({ password })

      if (error) {
        setError(`There's an error: ${error.name}, ${error.message}`)
      } else if (data) {
        setPasswordChanged(true)
      }
    }
    setNewPassword()
    setLoading(false)
  }, [setSessionUser])

  const validateUserData = useCallback(() => {
    const isUserDataComplete = async () => {
      const { user } = sessionUser

      const { data, error } = await supabase
        .from('profiles')
        .select('is_data_complete')
        .eq('id', user.id)
        .single()

      if (error) {
        console.log(`An Error has encounter: ${error.message}`)
      }
      if (data) {
        setIsDataComplete(data.is_data_complete)
      }
    }
    isUserDataComplete()
  }, [setSessionUser])

  const getDataFromUser = useCallback(() => {
    const { user } = sessionUser

    const getUserData = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name, last_name, document_id, city, country, address, zip_code, mobile_phone, second_phone')
        .eq('id', user.id)
        .single()

      if (error) {
        console.log(error)
      }
      if (data) {
        setProfileUser({ ...data })
      }
    }
    getUserData()
  }, [setSessionUser])

  return {
    isSession: Boolean(sessionUser),
    login,
    logout,
    resetPassword,
    getDataFromUser,
    requestNewPassword,
    validateUserData,
    isDataComplete,
    requestSucess,
    passwordChanged,
    profileUser,
    loading,
    error
  }
}
