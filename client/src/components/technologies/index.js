import React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import styled from "styled-components";
import Slogan from "./Slogan";
import { Nav, respond, colors, fonts } from "../../styles";
import Intersection from "../Intersection";
import Grid from "./grid/index.js";

export default function Main() {
    const intl = useIntl();

    return (
        <Container>
            <Slogan
                text1={intl.formatMessage({ id: "websitesSlogan1" })}
                text2={intl.formatMessage({ id: "websitesSlogan2" })}
            />
            <Nav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({ id: "websitesNavHome" })}
                    </Link>
                    {" > "}
                    <Link to="/websites">
                        {intl.formatMessage({ id: "websitesNavCurrent" })}
                    </Link>
                </p>
            </Nav>

            <Grid />

            <Intersection
                sub={intl.formatMessage({ id: "technologiesIntersectionSub" })}
                main={intl.formatMessage({
                    id: "technologiesIntersectionMain",
                })}
                text={intl.formatMessage({
                    id: "technologiesIntersectionText",
                })}
            ></Intersection>
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem 0rem;
`;
