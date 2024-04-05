import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/user"><button>Information</button></Link>
      Home
    </div>
  )
}

export default Home
