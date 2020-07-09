import React from "react";
import styled from "styled-components";
import { colors, fonts, respond } from "../../styles";

export default function Head({ intl }) {
    return (
        <Header>
            <Text>
                <h1>{intl.formatMessage({ id: "webshopsHeaderMain" })}</h1>
                <p>{intl.formatMessage({ id: "webshopsHeaderText" })}</p>
            </Text>
            <Video>
                <video id="background-video" loop autoPlay>
                    <source
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/webshopHeader.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/webshopHeader.mp4"
                        type="video/ogg"
                    />
                    Your browser does not support the video tag.
                </video>
            </Video>
        </Header>
    );
}
const Header = styled.article`
    height: 50rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-image: linear-gradient(
        to right,
        rgba(11, 79, 108, 0.3),
        rgba(11, 79, 108, 0.3)
    );
    overflow: hidden;
`;

const Text = styled.div`
    padding: 2rem;
    h1 {
        font-size: 4rem;
        font-weight: 400;
        color: ${colors.secondary};
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        text-shadow: 0.2rem 0.2rem 0.3rem ${colors.secondary};
    }
    p {
        font-size: 2.2rem;
        font-family: ${fonts.rokkitt};
        color: ${colors.bg};
        ${() => respond("m", `width: 50%; margin: 5rem 0; font-size: 3rem;`)}
    }
`;

const Video = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;

    ${() => respond("m", `top: 0;`)}
    video {
        object-fit: cover;
        // object-position: 50% 50%;
        width: 100%;
        height: 100%;

        ${() => respond("m", `min-height: 100%; width: 100%;`)}
    }
`;
