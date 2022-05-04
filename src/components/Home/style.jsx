import styled from 'styled-components';

export const Container  =styled.div`
    width: 100%;
    height: auto;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 97%;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const LeftWrapper = styled.div`
    width: 49%;
    border: 1px solid yellow;
`
export const RightWrapper = styled.div`
    width: 49%;
    border: 1px solid blue;
`
export const BigText = styled.h1`
    font-size: 56px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    color: #333333;

`
export const Br = styled.br``

export const MainBgButton= styled.button`
    background: linear-gradient(180deg, #03F5FF 0%, #02B6EB 100%);
    font-size: 56px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    color: white;
    border: none;
    border-radius: 5px;
    padding-left: 13px;
    padding-right: 13px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);

`
export const MiddleText= styled.h3`
    font-family: Lexend;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    margin-top: 15px;

`
export const OnlinePlatform = styled.span`
    font-family: Lexend;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
    color: #02C4EF;
    &:hover{
        cursor: pointer;
    }
`
export const SmallText = styled.div`
    font-family: Lexend;
    font-size: 22px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    color: rgba(51, 51, 51, 1);
    margin-top: 20px;

`
export const BatafsilButton= styled.button`
    background: linear-gradient(180deg, #03F5FF 0%, #02B6EB 100%);
    font-size: 24px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0em;
    color: white;
    border: none;
    border-radius: 5px;
    padding-left: 13px;
    padding-right: 13px;
    height: 62px;
    width: 214px;
    border-radius: 7.6715240478515625px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    margin-top: 29px;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.20);
    }
`