import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { respond, colors, fonts } from "../../../styles";

import Html from "./html";
import Css from "./css";
import Sass from "./sass";
import JavaScript from "./js";
import NodeJs from "./nodejs";
import Reactt from "./react";
import Nginx from "./nginx";
import Linux from "./linux";
import Mongo from "./mongo";
import Psql from "./psql";
import GraphQL from "./graphql";
import GitHub from "./github";

export default function Gridd() {
    const intl = useIntl();
    return (
        <Grid>
            <Html intl={intl} />
            <Css intl={intl} />
            <Sass intl={intl} />
            <JavaScript intl={intl} />
            <Reactt intl={intl} />
            <NodeJs intl={intl} />
            <Nginx intl={intl} />
            <Linux intl={intl} />
            <Mongo intl={intl} />
            <Psql intl={intl} />
            <GraphQL intl={intl} />
            <GitHub intl={intl} />
        </Grid>
    );
}
const Grid = styled.div`
    display: grid;
    grid-template-areas:
        "html"
        " css "
        "sass "
        "javascript"
        "react "
        "nodejs"
        " nginx "
        "linux"
        "mongodb  "
        "psql"
        "graphql"
        " github";
    width: 100%;
    margin: 10rem auto;
    padding: 2rem;
    grid-gap: 2rem;

    ${() =>
        respond(
            "m",
            `grid-template-areas:
        "html css "
        "sass javascript"
        "react nodejs"
        " nginx linux"
        "mongodb psql "
        "graphql github";`
        )}
    ${() =>
        respond(
            "l",
            `grid-template-areas:
        "html css sass javascript"
        "react nodejs nginx linux"
        "mongodb psql graphql github";`
        )}
`;
