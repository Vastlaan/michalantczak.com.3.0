import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles";
import Logo from "./Logo";
import Search from "./Search";
import LangSwitcher from "./LangSwitcher";
import ButtonMenu from "./ButtonMenu";
import Navigation from "./Navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <MasterContainer>
            <HeaderContainer>
                <Logo />
                <Search />
                <Buttons>
                    <LangSwitcher />
                    <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                </Buttons>
            </HeaderContainer>
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        </MasterContainer>
    );
}
const MasterContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    display: block;
    width: 100%;
`;
const HeaderContainer = styled.div`
    margin: 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.bg};
    border-bottom: 1px solid ${colors.grey};
    width: 100%;
`;
const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`;
