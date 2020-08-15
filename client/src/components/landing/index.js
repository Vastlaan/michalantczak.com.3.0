import React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import styled from "styled-components";
import Welcome from "./welcome";
import Header from "./header";
import Intersection from "../Intersection";
import Introduce from "./Introduce";
import { ButtonPrimary, ButtonPrimaryReverse, colors } from "../../styles";

export default function Landing() {
    const intl = useIntl();

    return (
        <div>
            <Header />
            <Circle />

            <Intersection
                sub={intl.formatMessage({ id: "landingIntersection1Sub" })}
                main={intl.formatMessage({ id: "landingIntersection1Main" })}
                text={intl.formatMessage({ id: "landingIntersection1Text" })}
            >
                <Link to="/technologies">
                    <ButtonPrimary>
                        {intl.formatMessage({
                            id: "landingIntersection1Button",
                        })}
                    </ButtonPrimary>
                </Link>
            </Intersection>
            <Introduce />
            <Welcome />
        </div>
    );
}
const Circle = styled.div`
    position: absolute;
    top: 50%;
    right: 0%;
    width: 100rem;
    height: 100rem;
    border-radius: 50%;
    z-index: -1;
    border: 3px solid ${colors.grey};
`;
