import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { colors, fonts, respond, Nav } from "../../styles";
import Restaurant from "./restaurant";
import Barber from "./barber";
import Claire from "./claire";
import Resume from "./resume";
import Other from "./other";
import Header from "./Header";

export default function Projects() {
    const intl = useIntl();
    return (
        <Container>
            <Nav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({ id: "navigationHome" })}
                    </Link>
                    {" > "}
                    <Link to="/projects">
                        {intl.formatMessage({
                            id: "projectsNavigationCurrent",
                        })}
                    </Link>
                </p>
            </Nav>
            <Header intl={intl} />
            <Main>
                <Restaurant intl={intl} />
                <Barber intl={intl} />
                <Claire intl={intl} />
                <Resume intl={intl} />
                <Other intl={intl} />
            </Main>
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem 0;
`;
const Main = styled.div`
    padding: 2rem;
    ${() => {
        respond("m", "padding: 1rem;");
    }}
`;
const Header2 = styled.h1`
    font-size: 4rem;
    font-weight: 300;
    text-align: center;
    color: ${colors.font};
`;
