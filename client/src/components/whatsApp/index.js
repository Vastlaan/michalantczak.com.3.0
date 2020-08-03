import React from "react";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";
import { respond } from "../../styles";

export default function WhatsApp() {
    return (
        <Container>
            <Link href="https://wa.me/31682307051?text=Hoi%21%20Ik%20ben%20ge%C3%AFnteresseerd%20in%20samenwerking%20met%20jou%21%0ANeem%20alsjeblieft%20een%20contact%20met%20mij%20op.%20Groeten%21">
                <IoLogoWhatsapp />
            </Link>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    bottom: 0rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;
const Link = styled.a`
    text-decoration: none;
    color: lime;
    font-size: 8rem;
    cursor: pointer;
    transform: rotateY(180deg);
    transition: all 0.3s;
    ${() => respond("s", "font-size: 10rem;")}
    &:hover {
        transform: scale(1.1) rotateY(180deg);
    }
`;
