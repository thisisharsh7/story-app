
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generate-story" element={<Home />} />

    </Routes>
  )
}

export default App