const FIREBASE = process.env.REACT_APP_FIRE

export const getAllQuotes = async () => {
  const response = await fetch(`${FIREBASE}/ms1320quotes.json`)
  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Could not fetch quotes.')
  // transform data from Firebase-specific format
  const transformedQuotes = []
  for (const key in data) {
    const quoteObj = {id: key, ...data[key]}
    transformedQuotes.push(quoteObj)
  }
  return transformedQuotes
}

export const getSingleQuote = async quoteId => {
  const response = await fetch(`${FIREBASE}/ms1320quotes/${quoteId}.json`)
  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Could not fetch quote.')

  const loadedQuote = {id: quoteId, ...data}
  return loadedQuote
}

export const addQuote = async quote =>  {
  const response = await fetch(`${FIREBASE}/ms1320quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quote),
    headers: {'content-type': 'application/json'}
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Could not create quote.')
  return null
}

export const addComment = async requestData => {
  const response = await fetch(`${FIREBASE}/ms1320comments/${requestData.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {'content-type': 'application/json'}
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Could not add comment.')
  return {commentId: data.name}
}

export const getAllComments = async quoteId => {
  const response = await fetch(`${FIREBASE}/ms1320comments/${quoteId}.json`)
  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Could not get comments.')
  // transform data from Firebase-specific format
  const transformedComments = []
  for (const key in data) {
    const commentObj = {id: key, ...data[key]}
    transformedComments.push(commentObj)
  }
  return transformedComments
}
