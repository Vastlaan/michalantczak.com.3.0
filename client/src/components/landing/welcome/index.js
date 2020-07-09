import React from "react";
import { useIntl } from "react-intl";
import { respond, colors } from "../../../styles";
import styled from "styled-components";
import ServiceCard from "../../ServiceCard";
import { RiBankLine, RiHandHeartLine, RiHandbagLine } from "react-icons/ri";

function Packages() {
    const intl = useIntl();

    return (
        <Container>
            <Offert>
                <ServiceCard
                    color={colors.tertiary}
                    text={intl.formatMessage({ id: "landingWelcomeS1Text" })}
                    header={intl.formatMessage({
                        id: "landingWelcomeS1Header",
                    })}
                    delay={0.3}
                    location="/websites"
                >
                    <RiBankLine />
                </ServiceCard>
                <ServiceCard
                    color={colors.secondaryDark}
                    text={intl.formatMessage({ id: "landingWelcomeS2Text" })}
                    header={intl.formatMessage({
                        id: "landingWelcomeS2Header",
                    })}
                    delay={0.3}
                    location="/webshops"
                >
                    <RiHandbagLine />
                </ServiceCard>
                <ServiceCard
                    color={colors.secondary}
                    text={intl.formatMessage({ id: "landingWelcomeS3Text" })}
                    header={intl.formatMessage({
                        id: "landingWelcomeS3Header",
                    })}
                    delay={0.6}
                    location="/websites"
                >
                    <RiHandHeartLine />
                </ServiceCard>
            </Offert>
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem auto;
    background-color: ${colors.bg};
    padding: 2rem;
`;

const Offert = styled.div`
    display: flex;

    flex-direction: column;

    align-items: center;

    ${() =>
        respond(
            "l",
            "justify-content: space-around; flex-direction:row; align-items: stretch;"
        )}
`;

export default Packages;
