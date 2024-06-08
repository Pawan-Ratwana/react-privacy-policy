import {BrowserRouter,Routes,Route} from 'react-router-dom'

import SignUpPrivacyPolicy from "./pages/SignUpPrivacyPolicy"
import PrivacyPolicy from './pages/PrivacyPolicy'


function App() {
 
  return (
   <>
   <BrowserRouter>
   
    <Routes>
      <Route path='/privacy/signup' element={<SignUpPrivacyPolicy />} />
      <Route path='/privacy/policy' element={<PrivacyPolicy />} />
    </Routes>

   </BrowserRouter>

  
   </>
  )
}

export default App
