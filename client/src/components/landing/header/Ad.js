import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntl } from "react-intl";
import { respond, colors } from "../../../styles";
import B from "../../../img/businessman.jpg";
import { RiGithubLine, RiAwardLine } from "react-icons/ri";

export default function Add() {
    const ad = useRef();

    const intl = useIntl();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: ad.current,
                toggleActions: "restart none restart none",
            },
        });

        tl.fromTo(ad.current, 1, { x: 0, opacity: 0 }, { x: 0, opacity: 1 });
    }, []);

    return (
        <Ad ref={ad}>
            <Title>{intl.formatMessage({ id: "landingSideTitle" })}</Title>
            <Field>
                <p>{intl.formatMessage({ id: "landingSideField1" })}</p>
                <a href="https://github.com/Vastlaan">
                    <ButtonPrimaryReverse>
                        <RiGithubLine />
                        Github
                    </ButtonPrimaryReverse>
                </a>
            </Field>
            <Field>
                <p>{intl.formatMessage({ id: "landingSideField2" })}</p>
                <Link to="/certificates">
                    <ButtonPrimaryReverse>
                        <RiAwardLine />
                        {intl.formatMessage({ id: "landingSideField2Button" })}
                    </ButtonPrimaryReverse>
                </Link>
            </Field>
        </Ad>
    );
}

const Ad = styled.div`
    ${() => respond("l", "min-width: 30vw; padding:10rem 2rem;")};
    grid-area: ad;
    background-image: linear-gradient(
            to right,
            rgba(11, 79, 108, 0.6),
            rgba(11, 79, 108, 0.6)
        ),
        url("${B}");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;
const Title = styled.h2`
    color: ${colors.bg};
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-align: center;
    margin: 2rem auto;

    ${() => respond("l", "margin-top: 10rem;")}
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;

    a {
        margin: 2rem auto;
        text-decoration: none;
        color: inherit;
    }

    p {
        color: ${colors.bg};
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
    }
`;

const ButtonPrimaryReverse = styled.button`
    border: 1px solid transparent;
    border-radius: 3px;
    background-color: ${colors.bg};
    color: ${colors.primary};
    letter-spacing: 0.3rem;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-familly: "Courier New", sans-serif;
    font-size: 2rem;
    font-weight: 300;
    transition: all 0.3s;

    &:focus,
    :active {
        outline: none;
    }

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.bg};
        border: 1px solid transparent;
    }

    svg {
        margin-right: 1rem;
        font-size: 2.5rem;
        color: inherit;
    }
`;
