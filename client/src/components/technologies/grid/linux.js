import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiLinux } from "react-icons/di";
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
            0.6
        );
    });
    return (
        <Linux>
            <Content ref={content}>
                <h3>Linux OS</h3>
                <DiLinux />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, quia aliquam, ad atque nam eius porro similique
                    praesentium, beatae accusamus dolores illum.
                </p>
            </Content>
        </Linux>
    );
}
const Linux = styled.div`
    grid-area: linux;
`;
