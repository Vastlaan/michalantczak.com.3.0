import React, { useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { colors, fonts, respond } from "../../styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Certs() {
    const [fullSize, setFullSize] = useState(false);
    const [url, setUrl] = useState("");

    const displayCert = (src) => {
        setUrl(src);
        return setFullSize(true);
    };

    return (
        <Container>
            <Paper
                onClick={() =>
                    displayCert(
                        "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/certificate-1.png"
                    )
                }
            >
                <h3>The Fundamentals of Digital Marketing</h3>
                <div>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/certificate-1.png"
                        alt="certificate of completion CSS and Sass course"
                    />
                </div>
            </Paper>
            <Paper
                onClick={() =>
                    displayCert(
                        "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/Advanced+Css+Course-1.png"
                    )
                }
            >
                <h3>Advanced CSS and Sass</h3>
                <div>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/Advanced+Css+Course-1.png"
                        alt="certificate of completion CSS and Sass course"
                    />
                </div>
            </Paper>
            <Paper
                onClick={() =>
                    displayCert(
                        "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/UC-RWT74OGK.jpg"
                    )
                }
            >
                <h3>Node with React - Fullstack Web Development</h3>
                <div>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/UC-RWT74OGK.jpg"
                        alt="certificate of completion"
                    />
                </div>
            </Paper>
            <Paper
                onClick={() =>
                    displayCert(
                        "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/MITx+6.00.1x+Certificate+_+edX-1.png"
                    )
                }
            >
                <h3>Introduction to Computer Science and Programming</h3>
                <div>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/MITx+6.00.1x+Certificate+_+edX-1.png"
                        alt="certificate of completion"
                    />
                </div>
            </Paper>
            <Paper
                onClick={() =>
                    displayCert(
                        "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/Certificate+Java+OOP+part+I-1.png"
                    )
                }
            >
                <h3>Object-Oriented Programming with JAVA I</h3>
                <div>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/Certificate+Java+OOP+part+I-1.png"
                        alt="certificate of completion"
                    />
                </div>
            </Paper>
            <Paper
                onClick={() =>
                    displayCert(
                        "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/Certificate+Java+OOP+part+II-1.png"
                    )
                }
            >
                <h3>Object-Oriented Programming with JAVA II</h3>
                <div>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/Certificate+Java+OOP+part+II-1.png"
                        alt="certificate of completion"
                    />
                </div>
            </Paper>
            {fullSize ? (
                <FullSize>
                    <AiOutlineCloseCircle onClick={() => setFullSize(false)} />
                    <div>
                        <img src={url} alt="certificate of completion" />
                    </div>
                </FullSize>
            ) : null}
        </Container>
    );
}

const Container = styled.div`
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${() =>
        respond(
            "s",
            "flex-direction: row; justify-content: center; flex-wrap: wrap;"
        )}
`;
const Paper = styled.div`
    width: 30rem;
    margin: 2rem;
    padding: 2rem;

    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    h3 {
        font-family: ${fonts.rajdhani};
        color: ${colors.primary};
        font-size: 2rem;
        text-align: center;
    }

    div {
        width: 20rem;

        img {
            width: 100%;
        }
    }
`;
const FullSize = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    overflow-y: scroll;

    div {
        width: 90%;

        ${() => respond("s", "width: 60%;")}

        img {
            width: 100%;
        }
    }

    svg {
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 5rem;
        color: snow;
        cursor: pointer;
    }
`;
