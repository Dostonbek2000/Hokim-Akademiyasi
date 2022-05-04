import React from "react";
import {
  BatafsilButton,
  BigText,
  Br,
  Container,
  LeftWrapper,
  MainBgButton,
  MiddleText,
  OnlinePlatform,
  RightWrapper,
  SmallText,
  Wrapper,
} from "./style";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <BigText>
            <MainBgButton>Hokim</MainBgButton> Akademiyasi <Br /> bilimlar
            makoni!
          </BigText>
          <MiddleText>
            O'qituvchilar va talabalar <Br /> uchun{" "}
            <OnlinePlatform>onlayn platforma</OnlinePlatform>
          </MiddleText>
          <SmallText>
            Onlayn kurslarda siz ingliz tilini o'rganishingiz, programmist,
            dizayner, sotuvch menejeri bo’lishiz mumkin. Bularning barchasi
            uydan chiqmagan holda va hatto bepul. 2022-da eng ko'p talabgor
            kasblar bo'yicha eng yaxshi kurslarni o’rganishiz mumkin.
          </SmallText>
          <BatafsilButton>Batafsil</BatafsilButton>
        </LeftWrapper>
        <RightWrapper>Right</RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default Home;
