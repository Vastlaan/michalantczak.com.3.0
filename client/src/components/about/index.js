import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { Nav } from "../../styles";
import Intersection from "../Intersection";
import Slogan from "./Slogan";
import Board from "./Board";
import Reviews from "./Reviews";

export default function About() {
    const intl = useIntl();

    return (
        <Container>
            <Nav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({ id: "aboutNavHome" })}
                    </Link>
                    {" > "}
                    <Link to="/about">
                        {intl.formatMessage({ id: "aboutNavCurrent" })}
                    </Link>
                </p>
            </Nav>
            <Board />
            <Intersection
                sub={intl.formatMessage({ id: "aboutIntersectionSub" })}
                main={intl.formatMessage({ id: "aboutIntersectionMain" })}
                text={intl.formatMessage({ id: "aboutIntersectionText" })}
            ></Intersection>

            <Reviews />
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem 0rem;
`;
