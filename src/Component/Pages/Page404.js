import React from 'react'
import './Page404Style.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops, The Page you are looking for can't be found!</h2>
			<Link to={'/'}><span className="arrow"></span>Return To Homepage</Link>
		</div>
	</div>
  )
}

export default PageNotFound