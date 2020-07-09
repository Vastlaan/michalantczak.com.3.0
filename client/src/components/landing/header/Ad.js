import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntl } from "react-intl";
import { respond, colors } from "../../../styles";
import B from "../../../img/businessman.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

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
            <Quote>
                <FaQuoteLeft
                    style={{
                        position: "absolute",
                        left: "0rem",
                        top: "-5rem",
                        fontSize: "5rem",
                    }}
                />
                <p>
                    {intl.formatMessage({ id: "landingQuote1" })}
                    <br />
                    {intl.formatMessage({ id: "landingQuote2" })}
                </p>
                <FaQuoteRight
                    style={{
                        position: "absolute",
                        right: "0rem",
                        bottom: "-5rem",
                        fontSize: "5rem",
                    }}
                />
            </Quote>
        </Ad>
    );
}

const Ad = styled.div`
    ${() => respond("l", "width: 30vw;")};
    grid-area: ad;
    background-image: linear-gradient(
            to right,
            rgba(11,79,108,.6),
            rgba(11,79,108,.6)
        ),
        url("${B}");
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:10rem 2rem;
    
`;

const Quote = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: ${colors.grey};
    line-height: 2;

    p {
        font-size: 3rem;
        font-weight: 500;
    }
`;
