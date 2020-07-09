import React from "react";
import styled from "styled-components";
import { colors, fonts, respond } from "../styles";

export default function Error() {
    return (
        <Err>
            <h1>Error: 404</h1>
            <h1>Page not Fond</h1>
            <h1>:-/</h1>
        </Err>
    );
}

const Err = styled.section`
    margin: 10rem auto;
    padding: 2rem;

    h1 {
        font-size: 5rem;
        font-family: ${fonts.orbitron};
        color: ${colors.primary};
    }
`;
