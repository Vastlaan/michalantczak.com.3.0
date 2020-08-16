import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiCss3 } from "react-icons/di";
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
            { opacity: 1, y: 0 },
            0.2
        );
    });
    return (
        <Css>
            <Content ref={content}>
                <h3>CSS3</h3>
                <DiCss3 />
                <p>
                    I'm very flexible in CSS making layouts with use of flexbox,
                    grid wrapped in fancy animations and transitions. I write
                    the code with BEM notiation or styled-components as well as
                    CSS modules and CSS in JavaScript.
                </p>
            </Content>
        </Css>
    );
}

const Css = styled.div`
    grid-area: css;
    color: #2965f1;
`;
