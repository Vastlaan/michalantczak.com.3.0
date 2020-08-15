import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors, fonts, ButtonPrimary, respond } from "../styles";

export default function ServiceCard({
    color,
    header,
    text,
    btnText,
    children,
    delay,
    location,
}) {
    const card = useRef();
    const intl = useIntl();
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: card.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(
            card.current,
            1,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 },
            delay
        );
    }, []);

    return (
        <Container ref={card}>
            <Header color={color}>{header}.</Header>
            <Icon color={color}>{children}</Icon>
            <Text>{text}</Text>
            <Link to={location}>
                <ButtonPrimary color={color}>{btnText}</ButtonPrimary>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin: 5rem 2rem;
    width: 40rem;
    ${() => respond("m", " margin: 2rem; width: 40rem;")}
`;
const Icon = styled.div`
    margin: 2rem auto;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: ${(props) => `3px solid ${props.color}`};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 6rem;
        color: ${(props) => props.color};
    }
`;
const Header = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.color};
`;
const Text = styled.p`
    margin: 2rem auto;
    font-size: 2rem;
    text-align: center;
    color: ${colors.font};
    flex: 1;
`;
