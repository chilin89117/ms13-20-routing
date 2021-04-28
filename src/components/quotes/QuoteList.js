import {useHistory, useLocation} from 'react-router-dom'
import QuoteItem from './QuoteItem'
import styles from './QuoteList.module.css'

// helper function to sort quotes by id
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) return quoteA.id > quoteB.id ? 1 : -1
    else return quoteA.id < quoteB.id ? 1 : -1
  })
}

const QuoteList = ({quotes}) => {
  const history = useHistory()
  const location = useLocation()    // e.g. location.search = '?sort=asc'
  const queryParams = new URLSearchParams(location.search)    // URLSearchParams is web api function
  const isSortAsc = queryParams.get('sort') === 'asc'

  const sortedQuotes = sortQuotes(quotes, isSortAsc) 

  // toggle query param when sort button is clicked; location change causes component to reevaluate
  const sortParamHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortAsc ? 'desc' : 'asc'}`
    })
  }

  return (
    <>
      <div className={styles.sorting}>
        <button onClick={sortParamHandler}>Sort {isSortAsc ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map(q => <QuoteItem key={q.id} quote={q} />)}
      </ul>
    </>
  )
}

export default QuoteList
