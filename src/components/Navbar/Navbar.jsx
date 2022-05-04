import React from "react";
import {
  Container,
  EntryButton,
  IconBtn,
  LogoImg,
  MenuIconFor,
  NavbarContainer,
  NavbarLink,
  RegisterButton,
  Wrapper,
} from "./style";
import LogoPicture from "../../images/logo.svg";

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
          <IconBtn>
            <MenuIconFor />
          </IconBtn>
        </NavbarContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
