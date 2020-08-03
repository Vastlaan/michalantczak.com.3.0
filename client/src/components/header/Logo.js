import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap, { Back } from "gsap";
import { colors, fonts, respond } from "../../styles";
import { ReactComponent as LogoSvg } from "../../logo.svg";

export default function Logo() {
    const image = useRef();
    const name = useRef();

    const tl = gsap.timeline();
    useEffect(() => {
        tl.from(image.current, 0.6, {
            x: -100,
            rotate: 360,
        });
        tl.fromTo(
            image.current,
            0.3,
            { scale: 1.2, ease: Back.easeIn },
            { scale: 1 }
        );
        const arrayOfName = name.current.childNodes;
        for (let i = 0; i < arrayOfName.length; i++) {
            tl.from(
                arrayOfName[i],
                1.5,
                {
                    rotationY: 90,
                    z: -500,
                    ease: Back.easeOut,
                },
                0.6
            );
        }
    }, []);

    const scaleUp = () => {
        tl.to("#iuy", 0.1, { x: 5, y: 10 });
        tl.to("#iut", 0.1, { x: -7.5, y: -7.5 });
        tl.to("#iur", 0.1, { x: 7.5, y: -7.5 });
    };
    const scaleDown = () => {
        tl.to("#iuy", 0.1, { x: 0, y: 0 });
        tl.to("#iut", 0.1, { x: 0, y: 0 });
        tl.to("#iur", 0.1, { x: 0, y: 0 });
    };

    return (
        <LogoContainer>
            <Link to="/">
                <Image
                    ref={image}
                    onMouseEnter={scaleUp}
                    onMouseLeave={scaleDown}
                >
                    <LogoSvg />
                </Image>
            </Link>

            <Name ref={name}>
                <span>M</span>
                <span>i</span>
                <span>c</span>
                <span>h</span>
                <span>a</span>
                <span>l</span>
                &nbsp;
                <span>A</span>
                <span>n</span>
                <span>t</span>
                <span>c</span>
                <span>z</span>
                <span>a</span>
                <span>k</span>
            </Name>
        </LogoContainer>
    );
}

const Name = styled.h1`
    font-size: 3.5rem;
    font-weight: 500;
    color: ${colors.secondary};
    margin-left: 1rem;
    font-family: ${fonts.rokkitt};
    ${() => respond("s", "font-size: 4rem; margin-left: 2rem;")}
    span {
        display: inline-block;
    }
`;
const LogoContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Image = styled.div`
    width: 5rem;
    height: 5rem;
    cursor: pointer;
`;
