import { supabase } from '../client/supabase'

export async function registerNewUser ({ email, password, firstName, lastName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName
      }
    }
  })

  return { data, error }
}

export async function loginSession ({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}
