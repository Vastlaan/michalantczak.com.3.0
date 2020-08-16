import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiHtml5 } from "react-icons/di";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Htmll({ intl }) {
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
            { opacity: 1, y: 0 }
        );
    });
    return (
        <Html>
            <Content ref={content}>
                <h3>HTML5</h3>
                <DiHtml5 />
                <p>{intl.formatMessage({ id: "technologiesHtml" })}</p>
            </Content>
        </Html>
    );
}

const Html = styled.div`
    grid-area: html;
    color: #d11a2a;
`;
