import { supabase } from '../client/supabase'

export async function registerNewUser ({ email, password, firstName, lastName, documentID, country, city, address, zipCode, mobilePhone, secondPhone }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        document_id: documentID,
        country_user: country,
        city_user: city,
        address_user: address,
        zip_code: zipCode,
        mobile_phone: mobilePhone,
        second_phone: secondPhone
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
