import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors, fonts, respond } from "../../styles";
import {
    RiLinkedinBoxLine,
    RiGithubLine,
    RiMailLine,
    RiPhoneLine,
} from "react-icons/ri";
import { useIntl } from "react-intl";
import { ReactComponent as Logo } from "../../logo.svg";

export default function Footer() {
    const footer = useRef();
    const intl = useIntl();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: footer.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(
            footer.current,
            0.6,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1 }
        );
    }, []);

    return (
        <Container ref={footer}>
            <Main>
                <Header>
                    <Logo /> Michal Antczak
                </Header>
                <Company>
                    <div>Oostervenne 397</div>
                    <div>1444XN Purmerend</div>
                    <a href="tel:0031682307051">
                        <RiPhoneLine style={{ color: "lime" }} /> 06 82 30 70 51
                    </a>
                    <a href="mailto:info@michalantczak.com">
                        <RiMailLine style={{ color: "tomato" }} />
                        info@michalantczak.com
                    </a>
                </Company>
                <Links>
                    <Link to="/projects">
                        {intl.formatMessage({ id: "footerLinksProjects" })}
                    </Link>
                    <Link to="/websites">
                        {intl.formatMessage({ id: "footerLinksWebsites" })}
                    </Link>
                    <Link to="/webshops">
                        {intl.formatMessage({ id: "footerLinksMarketing" })}
                    </Link>
                </Links>
                <Links>
                    <Link to="/contact">
                        {intl.formatMessage({ id: "footerLinksContact" })}
                    </Link>
                    <Link to="/legal">
                        {intl.formatMessage({ id: "footerLinksPrivacy" })}
                    </Link>
                    <Link to="/legal">
                        {intl.formatMessage({ id: "footerLinksCookies" })}
                    </Link>
                </Links>
            </Main>
            <Social>
                <a href="https://www.linkedin.com/in/michal-antczak/">
                    <RiLinkedinBoxLine />
                </a>
                <a href="https://github.com/Vastlaan">
                    <RiGithubLine />
                </a>
                <a href="mailto:info@michalantczak.com">
                    <RiMailLine />
                </a>
            </Social>
            <Copy>
                <p>
                    &copy; {new Date().getFullYear()}{" "}
                    {intl.formatMessage({ id: "footerDisclaimer" })}
                </p>
            </Copy>
        </Container>
    );
}

const Container = styled.footer`
    width: 100%;
    background-color: ${colors.primary};
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 0 2rem;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${() =>
        respond(
            "m",
            `flex-direction: row; justify-content: space-between; align-items: flex-start; flex-wrap: wrap;`
        )}
`;

const Header = styled.h1`
    padding: 1rem;
    ${() => respond("m", `padding:1rem 5rem; flex: 0 0 100%;`)}

    font-size: 5rem;
    color: ${colors.grey};
    letter-spacing: 0.3rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    svg {
        width: 6rem;
        height: 6rem;
    }
`;

const Company = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${() => respond("m", `padding:1rem 5rem; display:block;`)}
    div, a {
        text-decoration: none;
        display: flex;
        align-items: center;
        margin: 1rem auto;
        font-size: 2.5rem;
        color: ${colors.grey};

        svg {
            margin-right: 1rem;
        }
    }
`;

const Links = styled.ul`
    width: 100%;
    flex: 1;
    padding: 1rem;
    list-style: none;

    letter-spacing: 0.3rem;
    font-weight: 400;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${() => respond("m", `align-items: strech;`)}

    a {
        text-decoration: none;
        text-align: center;
        width: 25rem;
        ${() => respond("m", `min-width: 40%;`)}
        padding: 0.5rem 1.5rem;
        margin: 1rem auto;
        color: ${colors.grey};
        border: 1px solid ${colors.grey};
        transition: all 0.3s;
        cursor: pointer;
        text-transform: capitalize;
        &:hover {
            transform: scale(1.1) rotate(-5deg);
            color: ${colors.bg};
            border: 1px solid ${colors.bg};
        }
    }
`;

const Social = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;

    svg {
        cursor: pointer;
        margin-right: 2rem;
        color: ${colors.grey};
        font-size: 4rem;
        transition: all 0.3s;

        &:hover {
            transform: scale(1.5);
            color: skyblue;
        }
    }
`;
const Copy = styled.div`
    padding: 1rem 0;
    border-top: 1px solid ${colors.bg};
    display: flex;
    justify-content: center;

    p {
        font-size: 2rem;
        color: ${colors.grey};
    }
`;
