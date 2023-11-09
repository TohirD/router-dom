import { Link } from "react-router-dom"

const NotFoundpage = () => {
  return (
    <div>
      This page doesn't exist. Go <Link to='/'>Home</Link>
    </div>
  )
}

export default NotFoundpage