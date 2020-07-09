import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { colors, fonts, respond } from "../../styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Office from "../../img/office.png";

export default function Boa() {
    const board = useRef();
    const intl = useIntl();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: board.current,
                toggleActions: "restart none restart none",
            },
        });

        tl.from(board.current, 0.6, { opacity: 0 });

        const moveBackgroundImage = () => {
            const moveBy = window.pageYOffset - board.current.offsetTop;
            return tl.to(board.current, 0, {
                backgroundPositionY:
                    window.pageYOffset > board.current.offsetTop
                        ? `${moveBy}px`
                        : "20%",
            });
        };

        window.addEventListener("scroll", moveBackgroundImage);

        return () => window.removeEventListener("scroll", moveBackgroundImage);
    }, []);
    return (
        <Board ref={board}>
            <p>{intl.formatMessage({ id: "aboutBoardText" })}</p>
        </Board>
    );
}
const Board = styled.section`
    height: 55rem;
    width: 100%;
    background-image: linear-gradient(
            to right,
            rgba(2, 16, 9, 0.55) 50%,
            rgba(0, 66, 61, 0.55)
        ),
        url(${Office});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px 20%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    p{
        font-size: 3rem;
        font-family: ${fonts.rokkitt};
        color: ${colors.bg};
        text-align: center;
        width: 90%;

        ${() => respond("m", "width: 70%")}
    }

    // &::after {
    //     content: "Webdesigners";
    //     width: 20rem;
    //     height: 20rem;
    //     background-color: rgba(89, 0, 4, 0.95);
    //     position: absolute;
    //     top: 2rem;
    //     left: 2rem;
    //     border-radius: 50%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     color: ${colors.bg};
    //     font-size: 3rem;
    // }
    // &::before {
    //     content: "Beste Marketeers";
    //     width: 30rem;
    //     height: 30rem;
    //     background-color: rgba(89, 0, 4, 0.95);
    //     position: absolute;
    //     bottom: 2rem;
    //     right: 2rem;
    //     border-radius: 50%;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     color: ${colors.bg};
    //     font-size: 3rem;
    // }
`;
