import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiMongodb } from "react-icons/di";
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
        <MongoDb>
            <Content ref={content}>
                <h3>MongoDB</h3>
                <DiMongodb />
                <p>
                    {intl.formatMessage({ id: "technologiesMongo" })}{" "}
                    <a href="https://chefsbook.org">Chefsbook.org</a>
                </p>
            </Content>
        </MongoDb>
    );
}

const MongoDb = styled.div`
    grid-area: mongodb;
    color: green;
`;
