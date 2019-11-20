import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import Button from "react-bootstrap/Button"

export default () => (
  <Container>
    <Link to="/">Home</Link>
    <Header headerText="About us" />
    <p>They call us Eureka! for we are sassy.</p>
    <Button variant="secondary" size="lg" active>
      Primary button
    </Button>
  </Container>
)
