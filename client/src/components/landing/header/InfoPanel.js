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
import { RiMailLine, RiWhatsappLine, RiPhoneLine } from "react-icons/ri";

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
                <Main>
                    <p>
                        {intl.formatMessage({
                            id: "landingInfoWebsitesText",
                        })}
                    </p>
                    <Link to="/projects">
                        <ButtonPrimary>
                            {intl.formatMessage({
                                id: "landingInfoWebsitesButton",
                            })}
                        </ButtonPrimary>
                    </Link>
                    <Icons>
                        <a
                            href="tel:0031682307051"
                            style={{ color: "#0b4f6c" }}
                        >
                            <RiPhoneLine />
                            <span>
                                {intl.formatMessage({
                                    id: "landingInfoCall",
                                })}
                            </span>
                        </a>
                        <a
                            href="mailto:info@michalantczak.com"
                            style={{ color: "#590004" }}
                        >
                            <RiMailLine />
                            <span>Mail me</span>
                        </a>{" "}
                        <a href="https://wa.me/31682307051?text=Hoi%21%20Ik%20ben%20ge%C3%AFnteresseerd%20in%20samenwerking%20met%20jou%21%0ANeem%20alsjeblieft%20een%20contact%20met%20mij%20op.%20Groeten%21">
                            <RiWhatsappLine />
                            <span>WhatsApp</span>
                        </a>{" "}
                    </Icons>
                </Main>
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
`;

const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    ${() => respond("s", "padding: 0;")}

    p {
        font-family: ${fonts.rokkitt};
        font-size: 2rem;
        color: ${colors.font};
        max-width: 60rem;
    }

    a {
        margin: 5rem auto;
        ${() => respond("s", "margin: 5rem 0;")}
    }
`;
const Icons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 2rem;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 4rem;
        text-decoration: none;
        color: ${colors.secondary};

        span {
            font-size: 2rem;
            color: inherit;
        }
        font-size: 5rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            transform: scale(1.1);
        }

        ${() => respond("m", "margin-right: 5rem;")}
    }
`;
