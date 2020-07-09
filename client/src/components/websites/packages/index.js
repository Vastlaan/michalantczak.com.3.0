import React from "react";
import { respond, colors } from "../../../styles";
import styled from "styled-components";
import { useIntl } from "react-intl";
import Starter from "./Starter";
import Pro from "./Pro";
import Advanced from "./Advanced";

function Packages() {
    const intl = useIntl();

    return (
        <Container>
            <Header>
                {intl.formatMessage({ id: "websitesPackagesHeader" })}
            </Header>
            <Offert>
                <Starter color={colors.secondaryDark} intl={intl} />

                <Pro color={colors.primary} intl={intl} />
                <Advanced color={colors.tertiary} intl={intl} />
            </Offert>
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem auto;
    background-color: ${colors.bg};
    padding: 2rem 0.5rem;
    ${() => respond("l", "padding: 2rem;")}
`;
const Header = styled.h1`
    margin-left: 2rem;
    margin-bottom: 5rem;
    font-size: 4rem;
    font-weight: 600;
    color: ${colors.primary};
`;
const Offert = styled.div`
    display: flex;

    flex-direction: column;

    align-items: center;

    ${() =>
        respond(
            "l",
            "justify-content: space-around; flex-direction:row; align-items:stretch;"
        )}
`;

export default Packages;
