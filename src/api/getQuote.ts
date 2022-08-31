export async function getQuote() {
  const res = await fetch(import.meta.env.PUBLIC_QUOTE_API_URL)
  const data = await res.json().catch(err => console.log(err))
  const quote = data[0].q
  const author = data[0].a

  return [quote, author]
}
