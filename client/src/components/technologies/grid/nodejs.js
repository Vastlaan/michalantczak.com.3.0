import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiNodejs } from "react-icons/di";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Reeacttt({ intl }) {
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
            0.2
        );
    });
    return (
        <NodeJs>
            <Content ref={content}>
                <h3>NodeJs</h3>
                <DiNodejs />
                <p>
                    I make use of NodeJs with Express to build functional
                    RESTful APIs. I can design and create almost every desired
                    backend functionality.
                </p>
            </Content>
        </NodeJs>
    );
}
const NodeJs = styled.div`
    grid-area: nodejs;
    color: darkgreen;
`;
