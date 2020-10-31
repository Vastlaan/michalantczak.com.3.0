import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadDeveloper from "../../img/headDeveloper.png";
import { colors, fonts, respond } from "../../styles";

export default function Introduce() {
    const section = useRef();
    const image = useRef();
    const intl = useIntl();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(section.current, 2, { opacity: 0 }, { opacity: 1 });
        tl.fromTo(
            image.current,
            1,
            { x: -500, rotate: 0 },
            { x: 0, rotate: 360 },
            0
        );
    });

    return (
        <Section ref={section}>
            <HeaderUp>
                {intl.formatMessage({ id: "landingIntroduceHeader" })}
            </HeaderUp>
            <Image ref={image}>
                <img src={HeadDeveloper} alt="head developer" />
            </Image>
            <Text>{intl.formatMessage({ id: "landingIntroduceText" })}</Text>
        </Section>
    );
}

const Section = styled.article`
    margin: 10rem 0;
    padding: 45% 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 15%);
    background-image: linear-gradient(
        to right,
        ${colors.primary},
        ${colors.secondaryDark}
    );

    ${() =>
        respond(
            "l",
            "padding: 20% 5rem; clip-path: polygon(100% 0, 100% 80%, 0 100%, 0 20%);"
        )}
    ${() =>
        respond(
            "xl",
            `width: 100vw; 
            transform: translateX(calc( (100vw + 18px - 1366px) / 2 * -1));
            padding: 20rem calc((100vw - 1366px) / 2);
            `
        )}
`;
const HeaderUp = styled.h3`
    font-size: 3rem;
    color: ${colors.grey};
    font-weight: 500;
    text-align: center;
    max-width: 60rem;
`;
const Image = styled.div`
    margin: 2rem auto;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
    }
`;

const Text = styled.p`
    color: ${colors.bg};
    text-align: center;
    font-size: 2rem;
    font-family: ${fonts.rokkitt};
    max-width: 60rem;
`;
