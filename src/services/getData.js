import { supabase } from '../client/supabase'

export async function getCountries () {
  const { data, error } = await supabase
    .from('countries')
    .select('ISONUM, COUNTRY')

  return { data, error }
}
