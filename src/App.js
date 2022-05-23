
import { Header } from './components/Header'
import { CommentList } from './components/CommentList'

export const App = () => {
  return (
    <div className="container">
      <Header />
      <CommentList />
    </div>
  )
}