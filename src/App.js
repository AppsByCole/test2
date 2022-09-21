import {Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ResumeScreen from './screens/ResumeScreen'
import PageNotFoundScreen from './screens/PageNotFoundScreen'

function App() {
  return (
    <div className='main'>
      <Header />
      
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/resume' element={<ResumeScreen />} />
        <Route path='*' element={<PageNotFoundScreen />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App
