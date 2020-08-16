import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiPostgresql } from "react-icons/di";
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
            0.2,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 },
            0.2
        );
    });
    return (
        <Psql>
            <Content ref={content}>
                <h3>PostgreSQL</h3>
                <DiPostgresql />
                <p>{intl.formatMessage({ id: "technologiesPsql" })}</p>
            </Content>
        </Psql>
    );
}
const Psql = styled.div`
    grid-area: psql;
    color: skyblue;
`;
