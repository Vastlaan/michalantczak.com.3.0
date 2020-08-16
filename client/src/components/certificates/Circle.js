import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fonts, respond, colors } from "../../styles";
import { FaAward } from "react-icons/fa";

export default function Circl({ intl }) {
    const circle = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: circle.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(
            circle.current,
            1,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
            }
        );
    }, []);
    return (
        <Circle ref={circle}>
            <Header>{intl.formatMessage({ id: "certificatesHeader" })}</Header>
            <Icon>
                <FaAward />
            </Icon>
            <Text>{intl.formatMessage({ id: "webshopCircleText" })}</Text>
        </Circle>
    );
}
const Circle = styled.div`
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    ${() => respond("l", "align-items: center;")};
`;

const Header = styled.h1`
    width: 100%;
    font-size: 4rem;
    text-transform: uppercase;
    font-family: ${fonts.orbitron};
    color: ${colors.tertiary};
    text-align: center;
`;

const Icon = styled.div`
    margin: 1rem auto;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 3px solid ${colors.secondary};
    // box-shadow: 0 0 2rem ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 8rem;
        height: 8rem;
        fill: ${colors.secondary};
    }
`;
const Text = styled.p`
    text-align: center;
    width: 90vw;
    margin: 0 5vw;
    font-family: ${fonts.cormorant};
    font-size: 2.5rem;
    ${() => respond("l", "width: 60vw; margin: 0 20vw;")}
`;
