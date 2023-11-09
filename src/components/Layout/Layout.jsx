import { Outlet } from "react-router-dom"
import { CustomLink } from "../custom-link/CustomLink"
import '../Layout/layout.css'

// const setActive = ({isActive}) => isActive ? 'active-link' : '';  // Активная ссылка у которого меняется цвет
// className={setActive} передаём мы setActive через className внутри Navlink
// style = {({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}  или можно через style
const Layout = () => {
  return (
    <>
    <div className="back">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/posts">Blog</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>

    <div className="container">
    <Outlet/>
    </div>

    <footer className="container1">&copy; ReactRouter Tutorials2023</footer>
    </>
  )
}
export default Layout