import { Route, Routes } from 'react-router-dom'
import './globals.css'
import SignInForm from './_auth/forms/SignInForm'
import { Home } from './_root/pages'
import SignupForm from './_auth/forms/SignupForm'

function App() {

  return (
    <main className='flex h-screen'>
      <Routes>
        {/**public routes */}
        <Route path='/sign-in' element={<SignInForm/>}/>
        <Route path='/sign-up' element={<SignupForm/>}/>
        {/**private routes */}
        <Route index element={<Home/>}/>
      </Routes>
    </main>
  )
}

export default App
