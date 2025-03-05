import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage, MarvelPage } from '../heroes/pages/'
import { LoginPage } from '../auth/Pages/LoginPage'

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path='marvel' element={<MarvelPage/>} />
        <Route path='dc' element={<DCPage/>} />

        <Route path='login' element={<LoginPage/>} />

        <Route path='/' element={ <Navigate to={'/marvel'} /> } />
      </Routes>
    </>
  )
}
