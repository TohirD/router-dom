import { Route, Routes, Navigate} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Aboutpage from '../pages/Aboutpage'
import Blogpage from '../pages/Blogpage'
import NotFoundpage from '../pages/NotFoundpage'
import SinglePage from '../pages/SinglePage'
import '../assets/global.css'
import Layout from '../Layout/Layout'
import EditPost from '../pages/EditPost'
import LoginPage from '../pages/LoginPage'
import RequireAuth from '../../hoc/RequireAuth'
import {AuthProvider}  from '../../hoc/AuthProvider'

const Home = () => {
  return (
    <div>
        <AuthProvider>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='about/*' element={<Aboutpage/>}>
                <Route path="contacts" element={<p>Our contacts</p>}></Route>  
                <Route path="team" element={<p>Our team</p>}></Route>  
            </Route>
            <Route path='about-us' element={<Navigate to='/about' replace/>}/>   {/* когда в шапке ты пишешь about-us, но в конечном итоге всё равно остаётся главная ссылка 3000/about    */}
            <Route path='posts' element={
                <RequireAuth>
                    <Blogpage/>
                </RequireAuth>
            }/>
            <Route path='posts/:id' element={<SinglePage />}/>
            <Route path='posts/:id/edit' element={<EditPost/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='*' element={<NotFoundpage/>}/>
            </Route>
        </Routes>
        </AuthProvider>
    </div>
)
}

export default Home