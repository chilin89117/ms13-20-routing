import {useEffect} from 'react'
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom'
import useHttp from '../hooks/use-http'
import {getSingleQuote} from '../lib/api'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import Comments from '../components/comments/Comments'
import LoadingSpinner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const match = useRouteMatch()   // e.g. match.path = '/quotes/:id', match.url = '/quotes/q1'
  const params = useParams()
  const {id} = params
  const {sendRequest, data, error, status} = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(id)
  }, [sendRequest, id])

  if (status === 'pending') return <div className='centered'><LoadingSpinner /></div>
  if (error) return <p className='centered focused'>{error}</p>
  // data object is always returned but may not contain author and text
  if (status === 'completed' && !data.text) return <NoQuotesFound />

  // show link to comment button when exactly on /quotes/:id path but hide on /quotes/:id/comments
  return (
    <div>
      <HighlightedQuote quote={data} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link to={`${match.url}/comments`} className='btn--flat'>Show Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}

export default QuoteDetail
