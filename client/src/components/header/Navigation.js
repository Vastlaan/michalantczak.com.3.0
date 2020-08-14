import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { colors, respond } from "../../styles";

export default function Navigation({ isOpen, setIsOpen }) {
    const intl = useIntl();

    return (
        <Nav isOpen={isOpen}>
            <ul>
                <Link
                    to="/"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationHome" })}
                </Link>
                <Link
                    to="/technologies"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationWebsites" })}
                </Link>
                <Link
                    to="/certificates"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationMarketing" })}
                </Link>
                <Link
                    to="/projects"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationProjects" })}
                </Link>
                <Link
                    to="/contact"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationContact" })}
                </Link>
            </ul>
        </Nav>
    );
}

const Nav = styled.nav`
    padding: 2rem;

    background-color: ${colors.secondaryDark};
    width: 100%;
    transition: all 0.3s;
    height: ${(props) => (props.isOpen ? "28rem" : "0rem")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    overflow: hidden;

    ${(props) => {
        if (props.isOpen) {
            return respond("m", ` height:3.5rem; padding:0rem;`);
        } else {
            return respond("m", `height:0rem; padding:0rem;`);
        }
    }}

    ul {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        height: 100%;
        list-style: none;
        ${(props) =>
            respond(
                "m",
                `flex-direction: row; align-items: center; justify-content: space-around;`
            )}

        a {
            text-decoration: none;
            font-size: 2rem;
            color: ${colors.bg};
            text-transform: uppercase;
            cursor: pointer;
            margin: 1rem;
            ${(props) => respond("m", `margin: 1rem`)};
            position: relative;

            &::after {
                content: "";
                display: inline-block;
                width: 0;
                height: 2px;
                background-color: ${colors.bg};
                transition: all 0.3s;
                position: absolute;
                bottom: 0;
                left: 0;
                opacity: 0;
            }

            &:hover {
                &::after {
                    width: 100%;
                    opacity: 1;
                }
            }
        }
    }
`;
