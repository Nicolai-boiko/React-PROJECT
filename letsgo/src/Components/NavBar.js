import React from 'react';
import styled from 'styled-components';
import logoImg from '../Image/logo.svg';
import signImg from '../Image/sign.svg';


const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Sign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SignLogo = styled.img`
    width: 32px;
    height: 32px;
`;

const SignButton = styled.button`
    font-size: 16px;
    line-height: 19px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>Let's GO Fast Eat</H1>
        </Logo>
        <Sign>
            <SignLogo src={signImg} alt="sign"/>
            <SignButton>войти</SignButton>
        </Sign>
        
    </NavBarStyled>
)