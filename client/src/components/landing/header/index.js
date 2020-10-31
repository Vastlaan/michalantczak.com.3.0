import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useIntl } from "react-intl";
import { respond, colors } from "../../../styles";
import InfoPanel from "./InfoPanel";
import Ad from "./Ad";

export default function Header() {
    const slogan = useRef();
    const intl = useIntl();

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            slogan.current,
            1,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1 }
        );
    }, []);
    return (
        <Banner>
            <Space>&nbsp;</Space>
            <Slogan ref={slogan}>
                {intl.formatMessage({ id: "landingHeaderSlogan" })}
            </Slogan>
            <InfoPanel />
            <Social>&nbsp;</Social>
            <Ad />
        </Banner>
    );
}

const Banner = styled.section`
    min-height: calc(100vh);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
        "nothing nothing nothing"
        "header header header"
        "container container container"
        "container container container"
        "container container container"
        "ad ad ad"
        "ad ad ad"
        "ad ad ad";

    grid-gap: 1rem;
    overflow: hidden;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 100rem;
        height: 100rem;
        border-radius: 50%;
        z-index: -1;
        border: 2px solid ${colors.grey};
        background-color: ${colors.grey};
        transform: rotate(60deg);
    }

    ${() =>
        respond(
            "l",
            `grid-template-areas:
        "nothing nothing ad"
        "header header ad"
        "container container ad"
        "container container ad"
        "container container ad"
        "icons icons ad";
    grid-gap: 2rem;`
        )}

    ${() =>
        respond(
            "xl",
            `width: 100vw; 
            transform: translateX(calc( (100vw + 18px - 1366px) / 2 * -1));
            min-height: 75vh;
            `
        )}
`;
const Space = styled.div`
    grid-area: nothing;
    height: 14rem;
`;
const Slogan = styled.h1`
    grid-area: header;
    margin-left: 5%;
    font-size: 4rem;
    font-weight: 600;
    color: ${colors.primary};
    padding: 2rem;
    ${() => respond("s", "padding: 0;")}
`;

const Social = styled.div`
    grid-area: icons;
    height: 5rem;
    display: none;
    ${(props) => respond("l", "display:block")};
`;
