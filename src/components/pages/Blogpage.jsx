import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../hook/useAuth"
import { useNavigate } from "react-router-dom"

const Blogpage = () => {

  //Sign out
    const {signout} = useAuth()
    const navigate = useNavigate()
  //

  const [posts, setPost] = useState([])
  console.log(useLocation())

    useEffect(() => {
        fetch(`http://localhost:3000/posts`)
          .then(res => res.json())
          .then(data => setPost(data))
    }, [])

  return (
    <div>
      <h1>Our News</h1>
      {
        posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.link}</li>
          </Link>
        ))
      }

      <button onClick={() => signout(() => navigate('/', {replace: true}))}>Sign Out</button>
    </div>
  )
}

export default Blogpage