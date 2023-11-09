import { Link, Outlet } from 'react-router-dom'
import '../assets/global.css'

const Aboutpage = () => {
  return (
    <div className='info'>
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eius quas dolor laboriosam ipsum praesentium esse modi mollitia blanditiis debitis.</p>
        <ul>
          <li><Link to="/about/contacts">Create contacts</Link></li>
          <li><Link to="/about/team">Create team</Link></li>
        </ul>

        {/* <Routes> */}
          {/* <Route path="contacts" element={<p>Our contacts</p>}></Route>   */}
          {/* <Route path="team" element={<p>Our team</p>}></Route>   */}
        {/* </Routes> */}
        <Outlet/>
    </div>
  )
}

export default Aboutpage