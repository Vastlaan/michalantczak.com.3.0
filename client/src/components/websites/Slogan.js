import React from "react";
import styled from "styled-components";
import { ReactComponent as Rocket } from "../../img/rocket.svg";
import { colors, respond } from "../../styles";

export default function Slog({ text1, text2 }) {
    return (
        <Slogan>
            <h1>
                {text1} <br /> {text2}
            </h1>
            <RocketContainer>
                <Rocket className="offert__introduction--rocket" />
            </RocketContainer>
        </Slogan>
    );
}

const Slogan = styled.div`
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(
        to right,
        ${colors.secondaryDark} 33%,
        ${colors.tertiary} 33%
    );

    ${() => respond("l", "flex-direction: row; justify-content: space-around;")}

    h1 {
        flex: 0 0 70%;
        margin: 0 auto;
        font-size: 3.5rem;
        font-weight: 400;
        text-transform: uppercase;
        color: ${colors.bg};
        mix-blend-mode: lighten;
    }
`;

const RocketContainer = styled.div`
    svg {
        width: 12rem;
        height: 12rem;
        fill: lightsteelblue;
        margin: 0 auto;

        #upper {
            stroke-dasharray: 50;
            stroke-dashoffset: 10;
            animation: dash 1s linear alternate infinite;
        }

        #middle {
            stroke-dasharray: 80;
            stroke-dashoffset: 80;
            animation: dashLong 1s linear alternate infinite;
            animation-delay: 0.6s;
            transition: all 0.3s;
        }
        #down {
            stroke-dasharray: 50;
            stroke-dashoffset: 10;
            animation: dash 1s linear alternate infinite;
            animation-delay: 0.3s;
            transition: all 0.3s;
        }
    }
`;
