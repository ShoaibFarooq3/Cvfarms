import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/Auth_Styles/NotFound.css'
export const NotFound = () => {
  return (
    <div className='PageNotFound text-light'>
    <div className="block-title text-left text-light container ">
                <p>Stay in the know</p>
                <h3>404</h3>
                <h3>Page Not Found</h3>
                <h5>This page does not exist or has been moved</h5>
                <Link to ="/">
                <button className="btn btn-default ProjectBtn pl-0 pr-0 float-left text-light">Go Back</button>
                </Link>
              </div>
    </div>
  )
}
export const Unauthorised = () => {
  return (
    <div className='PageNotFound text-light'>
    <div className="block-title text-left text-light container ">
                <p>Stay in the know</p>
                <h3>401</h3>
                <h3>Unauthorised Access</h3>
                <h5>This page is only accessable to member, if you are a member please login here.</h5>
                <Link to ="/">
                <button className="btn btn-default ProjectBtn pl-0 pr-0 float-left text-light">Login</button>
                </Link>
              </div>
    </div>
  )
}
export const Comingsoon = () => {
  return (
    <div className='PageNotFound text-light'>
    <div className="block-title text-left text-light container ">
                <p>Stay in the know</p>
                <h3>Coming Soon</h3>
                <h5>We are currently working on this section, meanwhile you can have a look at rest of our website</h5>
                <Link to ="/">
                <button className="btn btn-default ProjectBtn pl-0 pr-0 float-left text-light">Go Back</button>
                </Link>
              </div>
    </div>
  )
}
export const Expired = () => {
  return (
    <div className='PageNotFound text-light'>
    <div className="block-title text-left text-light container ">
                <p>Stay in the know</p>
                <h3>410</h3>
                <h3>Link Expired</h3>
                <h5>Your password reset link has expired, please generate a new link</h5>
                <Link to ="/">
                <button className="btn btn-default ProjectBtn pl-0 pr-0 float-left text-light">Login</button>
                </Link>
              </div>
    </div>
  )
}
export const Link_Expired = () => {
  return (
    <div className='PageNotFound text-light'>
    <div className="block-title text-left text-light container ">
                <p>Stay in the know</p>
                <h3>410</h3>
                <h3>Link Expired</h3>
                <h5>Your registraion link has expired, you are already registered.</h5>
                <Link to ="/">
                <button className="btn btn-default ProjectBtn pl-0 pr-0 float-left text-light">Login</button>
                </Link>
              </div>
    </div>
  )
}
