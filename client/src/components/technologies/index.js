import React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import styled from "styled-components";
import Slogan from "./Slogan";
import { Nav, respond, colors, fonts } from "../../styles";
import Intersection from "../Intersection";
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiNginx,
    DiLinux,
    DiMongodb,
    DiPostgresql,
    DiGithubBadge,
} from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";

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

            <Slogan
                text1={intl.formatMessage({ id: "websitesSlogan1" })}
                text2={intl.formatMessage({ id: "websitesSlogan2" })}
            />

            <Grid>
                <Html>
                    <Content>
                        <h3>HTML5</h3>
                        <DiHtml5 />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </Html>
                <Css>
                    <Content>
                        <h3>CSS3</h3>
                        <DiCss3 />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </Css>
                <Sass>
                    <Content>
                        <h3>Sass</h3>
                        <DiSass />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </Sass>
                <JavaScript>
                    <Content>
                        <h3>JavaScript</h3>
                        <DiJavascript1 />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </JavaScript>
                <Reactt>
                    <Content>
                        <h3>React</h3>
                        <DiReact />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </Reactt>
                <NodeJs>
                    <Content>
                        <h3>NodeJs</h3>
                        <DiNodejs />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </NodeJs>
                <Nginx>
                    <Content>
                        <h3>NginX</h3>
                        <DiNginx />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </Nginx>
                <Linux>
                    <Content>
                        <h3>Linux OS</h3>
                        <DiLinux />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </Linux>
                <MongoDb>
                    <Content>
                        <h3>MongoDB</h3>
                        <DiMongodb />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </MongoDb>
                <Psql>
                    <Content>
                        <h3>PostgreSQL</h3>
                        <DiPostgresql />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </Psql>
                <GraphQL>
                    <Content>
                        <h3>GraphQL</h3>
                        <GrGraphQl />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </GraphQL>
                <GitHub>
                    <Content>
                        <h3>Github</h3>
                        <DiGithubBadge />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, quia aliquam, ad atque nam eius
                            porro similique praesentium, beatae accusamus
                            dolores illum.
                        </p>
                    </Content>
                </GitHub>
            </Grid>
        </Container>
    );
}

const Container = styled.section`
    margin: 10rem 0rem;
`;

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
const Html = styled.div`
    grid-area: html;
`;
const Css = styled.div`
    grid-area: css;
`;
const Sass = styled.div`
    grid-area: sass;
`;
const JavaScript = styled.div`
    grid-area: javascript;
`;
const Reactt = styled.div`
    grid-area: react;
`;
const NodeJs = styled.div`
    grid-area: nodejs;
`;
const Nginx = styled.div`
    grid-area: nginx;
`;
const Linux = styled.div`
    grid-area: linux;
`;
const MongoDb = styled.div`
    grid-area: mongodb;
`;
const Psql = styled.div`
    grid-area: psql;
`;
const GraphQL = styled.div`
    grid-area: graphql;
`;
const GitHub = styled.div`
    grid-area: github;
`;
const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-family: ${fonts.orbitron};
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }

    svg {
        font-size: 4rem;
        margin: 2rem auto;
    }

    p {
        font-family: ${fonts.cormorant};
        font-size: 2.2rem;
        text-align: center;
    }
`;
