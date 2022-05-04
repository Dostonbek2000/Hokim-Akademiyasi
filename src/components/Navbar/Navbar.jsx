import React from 'react'
import { Container, EntryButton, LogoImg, NavbarContainer, NavbarLink, RegisterButton, Wrapper } from './style';
import LogoPicture from '../../images/logo.svg';
import { IconButton } from '@mui/material';

const Navbar = () => {



  return (
    <Container>
      <Wrapper>
        <LogoImg src={LogoPicture} />
        <NavbarContainer>
          <NavbarLink>Uy</NavbarLink>
          <NavbarLink>Kurslar</NavbarLink>
          <NavbarLink>Biz haqimizda</NavbarLink>
          <NavbarLink>Kontakt</NavbarLink>
          <EntryButton>Kirish</EntryButton>
          <RegisterButton>Ro'yhatdan o'tish</RegisterButton>
          <IconButton>
              
          </IconButton>
        </NavbarContainer>
      </Wrapper>
    </Container>
  )
}

export default Navbar