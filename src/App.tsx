import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './Components/Layout/SiteLayout'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import LoginPage from './Pages/Account/LoginPage'
import RegisterPage from './Pages/Account/RegisterPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SiteLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
