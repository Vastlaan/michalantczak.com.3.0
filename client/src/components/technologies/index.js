import React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import styled from "styled-components";
import Slogan from "./Slogan";
import Packages from "./packages";
import { Nav, ButtonPrimary } from "../../styles";
import Intersection from "../Intersection";

export default function Main() {
    const intl = useIntl();

    return (
        <Container>
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
            <Intersection
                sub={intl.formatMessage({ id: "websitesIntersection1Sub" })}
                main={intl.formatMessage({ id: "websitesIntersection1Main" })}
                text={intl.formatMessage({ id: "websitesIntersection1Text" })}
                forceMarginTop={true}
            />
            {/* <Packages /> */}
            <Slogan
                text1={intl.formatMessage({ id: "websitesSlogan1" })}
                text2={intl.formatMessage({ id: "websitesSlogan2" })}
            />
            <Intersection
                sub={intl.formatMessage({ id: "websitesIntersection2Sub" })}
                main={intl.formatMessage({ id: "websitesIntersection2Main" })}
                text={intl.formatMessage({ id: "websitesIntersection2Text" })}
            >
                <Link to="/contact">
                    <ButtonPrimary>
                        {intl.formatMessage({
                            id: "websitesIntersection2Button",
                        })}
                    </ButtonPrimary>
                </Link>
            </Intersection>
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem 0rem;
`;
