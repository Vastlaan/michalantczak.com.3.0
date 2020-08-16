import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { Nav, ButtonPrimaryReverse } from "../../styles";
import Intersection from "../Intersection";
import Circle from "./Circle";
import Certs from "./certs";

export default function Marketing() {
    const intl = useIntl();

    return (
        <Container>
            <Nav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({ id: "webshopsNavHome" })}
                    </Link>
                    {" > "}
                    <Link to="/webshops">
                        {intl.formatMessage({ id: "webshopsNavCurrent" })}
                    </Link>
                </p>
            </Nav>

            <Circle intl={intl} />

            <Certs />
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem 0rem;
    overflow: hidden;
`;
