export async function getCat() {
  const res = await fetch(
    new URL(`
      ${import.meta.env.PUBLIC_CAT_API_URL}/images/search?api_key=
      ${import.meta.env.CAT_API_KEY}
    `)
  )
  const cat = await res.json()

  return cat[0].url
}
