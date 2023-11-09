import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to='/posts'>Add new Post</Link>
    </div>
  )
}

export default Homepage