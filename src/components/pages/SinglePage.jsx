import { useParams, Link, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"

const SinglePage = () => {
    const {id} = useParams() // useParams используется для передачи id в шапке по ссылке /posts/:id например
    const navigate = useNavigate()
    const [post, setPost] = useState(null)

    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', {replace: true})

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
          .then(res => res.json())
          .then(data => setPost(data))
    }, [id])

    return (
    <div>
       {post && (
        <>
          <h1>{post.author}</h1>
          <p>{post.title}</p>
            <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
       )}
       <button onClick={goBack}>Back</button>
       <button onClick={goHome}>Home</button>
    </div>
  )
}

export default SinglePage