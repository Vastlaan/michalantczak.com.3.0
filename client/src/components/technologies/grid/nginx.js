import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiNginx } from "react-icons/di";
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
            0.4
        );
    });
    return (
        <Nginx>
            <Content ref={content}>
                <h3>NginX</h3>
                <DiNginx />
                <p>
                    Most of the time I use NginX as a reverse proxy server, but
                    can also use it as a backend server to handle incoming
                    requests.
                </p>
            </Content>
        </Nginx>
    );
}

const Nginx = styled.div`
    grid-area: nginx;
    color: green;
`;
