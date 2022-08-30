import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/PostHeader.css'
export const PostHeader = (props) => {
  return (
    <div className='HeaderBody'>
    <div className='container'>
 <div className='Post_Title'>
    <h4>{props.Title}</h4>
    { props.Category?
    <p><Link to= "/">Home</Link> / <Link to ="/news">News</Link>/ Category / {props.Title}</p>    
    :
    props.Tag?
    <p><Link to= "/">Home</Link> / <Link to ="/news">News</Link> / Tag / {props.Title}</p>
    :
    props.Query?
    <p><Link to= "/">Home</Link> / <Link to ="/news">News</Link> / Search Results / {props.Title}</p>
    :
    
    props.Page?
    <p><Link to= "/">Home</Link> / {props.Title}</p>
    :
    <p><Link to= "/">Home</Link> / <Link to ="/news">News</Link>  / {props.Title}</p>
    
} </div>
 </div>
    </div>
  )
}
