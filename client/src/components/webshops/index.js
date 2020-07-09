import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { Nav, ButtonPrimaryReverse } from "../../styles";
import Header from "./Header";
import Intersection from "../Intersection";
import Circle from "./Circle";

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
            <Header intl={intl} />
            <Intersection
                sub={intl.formatMessage({ id: "webshopIntersection1Sub" })}
                main={intl.formatMessage({ id: "webshopIntersection1Main" })}
                text={intl.formatMessage({ id: "webshopIntersection1Text" })}
            >
                <ButtonPrimaryReverse
                    onClick={() => (window.location.href = "/contact")}
                >
                    {intl.formatMessage({ id: "webshopIntersection1Button" })}
                </ButtonPrimaryReverse>
            </Intersection>
            <Circle intl={intl} />
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem 0rem;
    overflow: hidden;
`;
