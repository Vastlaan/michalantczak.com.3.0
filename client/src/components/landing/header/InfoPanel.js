import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntl } from "react-intl";
import {
    respond,
    fonts,
    colors,
    ButtonPrimary,
    ButtonPrimaryReverse,
} from "../../../styles";

export default function InfoPanel() {
    const info = useRef();
    const intl = useIntl();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: info.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(
            info.current,
            1,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 }
        );
    }, []);
    return (
        <Container ref={info}>
            <Info>
                <div>
                    <p>
                        {intl.formatMessage({
                            id: "landingInfoWebsitesText",
                        })}
                    </p>
                    <Link to="/websites">
                        <ButtonPrimary>
                            {intl.formatMessage({
                                id: "landingInfoWebsitesButton",
                            })}
                        </ButtonPrimary>
                    </Link>
                </div>
            </Info>
        </Container>
    );
}

const Container = styled.div`
    grid-area: container;
    display: flex;
    flex-direction: column;
    margin-left: 5%;

    ${() =>
        respond("l", `flex-direction: row; justify-content: space-between; `)};
`;

const Info = styled.div`
    display: flex;

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        p {
            font-family: ${fonts.rokkitt};
            font-size: 2rem;
            color: ${colors.font};
        }

        button {
            margin: 5rem 0;
        }
    }
`;
