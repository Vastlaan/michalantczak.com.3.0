import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiReact } from "react-icons/di";
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
            { opacity: 1, y: 0 }
        );
    });
    return (
        <Reactt>
            <Content ref={content}>
                <h3>React</h3>
                <DiReact />
                <p>
                    This modern framework is my favorite tool. I feel
                    comfortable with both functional and class based components,
                    React Redux, React Router, build on React GatsbyJs and
                    Hooks.
                </p>
            </Content>
        </Reactt>
    );
}

const Reactt = styled.div`
    grid-area: react;
    color: skyblue;
`;
