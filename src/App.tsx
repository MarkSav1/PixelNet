import AuthLayout from './_auth/AuthLayout';
import SigninForms from './_auth/forms/SigninForms';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root';
import RootLayout from './_root/RootLayout';
import '/src/globals.css';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <main className='flex h-screem'>
      <Routes>
        {/* Public Routes */}  
        <Route element={<AuthLayout />}>
        <Route path='/sign-in' element={<SigninForms />} />
        <Route path='/sign-up' element={<SignupForm />} />
        </Route>
        
        {/* Private Routes */}
        <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App