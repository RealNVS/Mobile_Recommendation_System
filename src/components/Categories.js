import React from 'react'

import { Link } from 'react-router-dom';


export default function Categories() {
  return (
    <div className="home-container">
        <Link to="/budget" className="card-link">
          <h1>Budget</h1>
        </Link>
        <Link to="/performance" className="card-link">
          <h1>Performance</h1>
        </Link>
        <Link to="/camera" className="card-link">
          <h1>Camera</h1>
        </Link>
        <Link to="/brands" className="card-link">
          <h1>Brands</h1>
        </Link>
    </div>
  )
}
