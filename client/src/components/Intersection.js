import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors, fonts } from "../styles";

export default function Intersection({
    sub,
    main,
    text,
    forceMarginTop,
    children,
}) {
    const section = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(section.current, 2, { opacity: 0 }, { opacity: 1 });
    });
    return (
        <Section ref={section} forceMarginTop={forceMarginTop}>
            <Line />
            <HeaderUp>{sub}</HeaderUp>
            <HeaderMain>{main}</HeaderMain>
            <Text>{text}</Text>
            {children}
            <Line />
        </Section>
    );
}

const Section = styled.article`
    margin: ${(props) => (props.forceMarginTop ? "0 5% 10rem 5%" : "10rem 5%")};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const HeaderUp = styled.h3`
    font-size: 3rem;
    color: ${colors.tertiary};
    font-family: ${fonts.cormorant};
    font-weight: 500;
    text-align: center;
`;
const HeaderMain = styled.h1`
    font-size: 5rem;
    color: ${colors.font};

    text-align: center;
`;
const Text = styled.p`
    font-size: 2.2rem;
    font-family: ${fonts.rokkitt};
    text-align: center;
    margin: 2.5rem auto;
`;

const Line = styled.div`
    width: 50%;
    height: 2px;
    background-color: ${colors.tertiary};
    opacity: 0.3;
    margin: 2rem auto;
`;
