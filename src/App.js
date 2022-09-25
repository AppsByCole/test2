import {Route, Routes} from 'react-router-dom'

import ContactScreen from './screens/ContactScreen'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import PageNotFoundScreen from './screens/PageNotFoundScreen'
import ResumeScreen from './screens/ResumeScreen'

function App() {
  return (
    <div className='main'>
      <Header />
      
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/resume' element={<ResumeScreen />} />
        <Route path='*' element={<PageNotFoundScreen />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App
