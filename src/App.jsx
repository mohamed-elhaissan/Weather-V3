import { useContext } from 'react'
import Header from './Components/header'
import Home from './Components/Home'
import { loading } from './Context/loadingContext'
import { div } from 'framer-motion/client'
function App() {
  const {isLoading} = useContext(loading)
  return (
    <div>
      {isLoading && (
        div
      )}
      <Header/>
      <Home/>
    </div>
  )
}

export default App
