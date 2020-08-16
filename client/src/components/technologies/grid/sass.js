import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiSass } from "react-icons/di";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Sasss({ intl }) {
    const content = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: content.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(
            content.current,
            0.6,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 },
            0.4
        );
    });
    return (
        <Sass>
            <Content ref={content}>
                <h3>Sass</h3>
                <DiSass />
                <p>{intl.formatMessage({ id: "technologiesSass" })}</p>
            </Content>
        </Sass>
    );
}

const Sass = styled.div`
    grid-area: sass;
    color: purple;
`;
