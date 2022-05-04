import styled from 'styled-components';
import IconButton from '@mui/material/IconButton'
import { Menu } from '@mui/icons-material';

export const Container = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:500px){
        height: 120px;
    }
`
export const Wrapper = styled.div`
    width: 97%;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const LogoImg = styled.img`
    @media (max-width:1250px){
        width: 120px;
    }
    @media (max-width:500px){
        width: 90px;
    }
`
export const NavbarContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:1600px){
        width: 70%;
    }
    @media (max-width:1250px){
        width: 77%;
    }
    @media (max-width:1000px){
        justify-content: flex-end;
    }
`
export const NavbarLink = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(51, 51, 51, 1);  
    background-image: linear-gradient(
    to right,
    #7eddff,
    #02B8EB 50%,
    #000 50%);
    background-size: 200% 100%;
    background-position: -100%;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    &:before{
    content: '';
    background: #02B8EB;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
    }

    &:hover {
    background-position: 0;
    cursor: pointer;
    }

    &:hover::before{
    width: 100%;
    } 
    @media (max-width:1000px){
        display: none !important;
    }
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
    @media (max-width:1000px){
        display: none !important;
    }
    &:hover{
        cursor: pointer;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    }

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
    @media (max-width:1000px){
        display: none !important;
    }
    &:hover{
        cursor: pointer;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    background: linear-gradient(180deg, #03F5FF 0%, #1ecaff 100%);

    }

`
export const IconBtn = styled(IconButton)`
    display: none !important;
    width: 70px !important;
    height: 70px !important;

    justify-content: center !important;
    align-items: center !important;
    @media (max-width:1000px){
        display: flex !important;
    }
`
export const MenuIconFor = styled(Menu)`
    font-size: 34px !important;
`