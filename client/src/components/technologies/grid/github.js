import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Content } from "../../../styles";
import { DiGithubBadge } from "react-icons/di";
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
        <GitHub>
            <Content ref={content}>
                <h3>Github</h3>
                <DiGithubBadge />
                <p>
                    Not forgeting about most popular version control GitHub. I
                    practiced a lot of adding, commiting, pushing, forking
                    cloning, branching, merging, rebasing, making pull requests,
                    reseting head (soft or hard), stashing and its other
                    functionality.
                </p>
            </Content>
        </GitHub>
    );
}

const GitHub = styled.div`
    grid-area: github;
    color: purple;
`;
