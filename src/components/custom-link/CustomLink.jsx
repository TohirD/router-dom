import { Link, useMatch } from "react-router-dom"

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch({
      path: to,
      end: to.length === 1,
    })

  return (
    <div>
        <Link to={to} style={{color: match ? 'var(--color-active)' : 'black'}} {...props}>
            {children}
        </Link>

    </div>
  )
}

export {CustomLink};