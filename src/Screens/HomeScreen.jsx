import React from 'react'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import { Container } from './style'

const HomeScreen = () => {
  return (
    <Container>
        <Navbar />
        <Home />
    </Container>
  )
}

export default HomeScreen