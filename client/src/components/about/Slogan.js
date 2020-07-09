import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors } from "../../styles";

export default function Slog({ text }) {
    const slogan = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: slogan.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(
            slogan.current,
            0.6,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 }
        );
    });

    return (
        <Slogan ref={slogan}>
            <h1>{text}</h1>
        </Slogan>
    );
}

const Slogan = styled.div`
    margin: 0rem auto;
    background-image: linear-gradient(
        to right,
        ${colors.secondaryDark} 33%,
        ${colors.tertiary} 33%
    );
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        padding: 5rem 2rem;
        margin: 0 auto;
        font-size: 3.5rem;
        font-weight: 500;
        color: white;
        text-align: center;
        mix-blend-mode: lighten;
    }
`;
