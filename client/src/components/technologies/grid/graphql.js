import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GrGraphQl } from "react-icons/gr";

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
        <GraphQL>
            <Content ref={content}>
                <h3>GraphQL</h3>
                <GrGraphQl />
                <p>
                    I've recently started my journey with this query language
                    and I felt in love with it! I have no problem with using
                    that tool, which I usually have contact with via GatsbyJs.
                </p>
            </Content>
        </GraphQL>
    );
}
const GraphQL = styled.div`
    grid-area: graphql;
    color: #e75480;
`;
