import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
`
export const Wrapper = styled.div`
    width: 97%;
    max-width: 1600px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const LogoImg = styled.img`
    @media (max-width:1250px){
        width: 120px;
    }
`
export const NavbarContainer = styled.div`
    width: 60%;
    border: 1px solid red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:1600px){
        width: 70%;
    }
    @media (max-width:1250px){
        width: 77%;
    }
`
export const NavbarLink = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(51, 51, 51, 1);   
`
export const EntryButton = styled.button`
    color: #02B6EB ;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    background: none;
    border: 1px solid #02B6EB;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);

`
export const RegisterButton = styled.button`
    background: linear-gradient(180deg, #03F5FF 0%, #02B6EB 100%);
    font-family: Lexend;
    font-size: 16px;
    font-weight: 400;
    color: white;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    width: 188px;
    height: 40px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);

`