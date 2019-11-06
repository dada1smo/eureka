import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
  <Container>
    <Link to="/">Home</Link>
    <Header headerText="About us" />
    <p>They call us Eureka! for we are sassy.</p>
  </Container>
)
