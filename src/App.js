import {Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className='main'>
      <Header />
      
      <HomeScreen />

      <Footer />
    </div>
  );
}

export default App
