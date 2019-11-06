import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div className="container">
    <Link to="/about/">About</Link>
    <Header headerText="Eureka!" />
    <p>This is a website.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
