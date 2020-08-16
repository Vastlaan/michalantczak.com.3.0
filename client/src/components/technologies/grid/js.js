import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiJavascript1 } from "react-icons/di";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Jss({ intl }) {
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
            0.6
        );
    });
    return (
        <JavaScript>
            <Content ref={content}>
                <h3>JavaScript</h3>
                <DiJavascript1 />
                <p>{intl.formatMessage({ id: "technologiesJs" })}</p>
            </Content>
        </JavaScript>
    );
}

const JavaScript = styled.div`
    grid-area: javascript;
    color: #ffd300;
`;
