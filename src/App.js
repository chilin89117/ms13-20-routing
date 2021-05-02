import {lazy, Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuotes from './pages/AllQuotes'
// import NewQuote from './pages/NewQuote'
// import QuoteDetail from './pages/QuoteDetail'
// import NotFound from './pages/NotFound'
import LoadingSpinner from './components/UI/LoadingSpinner'

const NewQuote = lazy(() => import('./pages/NewQuote'))
const QuoteDetail = lazy(() => import('./pages/QuoteDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))
const fallbackContent = <div className='centered'><LoadingSpinner /></div>

const App = () => (
  <Layout>
    <Suspense fallback={fallbackContent}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:id'>
          <QuoteDetail />
        </Route>
        <Route path='/new'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </Layout>
)

export default App
