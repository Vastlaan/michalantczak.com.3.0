import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { TimelineLite } from "gsap";
import { colors, fonts, respond, btnBorderNone } from "../../styles";
import { RiSearchEyeLine, RiCloseLine } from "react-icons/ri";

export default function Search() {
    const searchInput = useRef();
    const found = useRef();
    const input = useRef();

    const intl = useIntl();

    const [displayResults, setDisplayResults] = useState(false);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const tl = new TimelineLite();
        tl.fromTo(
            searchInput.current,
            1,
            { scaleY: 0, opacity: 0 },
            { scaleY: 1, opacity: 1 }
        );
    }, []);

    const search = async (e) => {
        e.preventDefault();
        console.log(inputValue);
        const keywordsArray = [
            {
                key: "technologies websites technologieen tech stack",
                title: "What can I do for you?",
                link: "/technologies",
            },
            {
                key: "examples projects gallery projekten",
                title: "Examples of websites",
                link: "/projects",
            },
            {
                key: "contact phone mail address adres",
                title: "Contact Me!",
                link: "/contact",
            },
        ];
        let inner = "<ul>";
        keywordsArray.forEach((keyword) => {
            if (keyword.key.includes(inputValue.toLowerCase())) {
                inner =
                    inner + `<a href='${keyword.link}'>${keyword.title}</a>`;
            }
        });
        inner = inner + `</ul>`;
        if (inner === "<ul></ul>") {
            inner = "<ul><li>NOTHING FOUND</li></ul>";
        }

        await setDisplayResults(true);
        //get div where list of articles will be append
        found.current.innerHTML = inner;
        return (input.current.value = "");
    };
    return (
        <SearchInput ref={searchInput}>
            <Input
                ref={input}
                onKeyDown={(e) => (e.keyCode === 13 ? search(e) : null)}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Text onClick={(e) => search(e)}>
                <p>{intl.formatMessage({ id: "headerSearch" })}</p>
                <RiSearchEyeLine />
            </Text>
            {displayResults ? (
                <Results>
                    <RiCloseLine onClick={() => setDisplayResults(false)} />
                    <div ref={found}></div>
                </Results>
            ) : null}
        </SearchInput>
    );
}

const SearchInput = styled.div`
    width: 40rem;
    display: none;
    position: relative;
    ${() => respond("l", "display:flex")};
`;

const Input = styled.input`
    width: 70%;
    background-color: ${colors.grey};
    border: none;
    padding: 1rem;
    font-size: 1.6rem;
    font-familly: ${fonts.rokkitt};

    &:focus,
    :active {
        outline: none;
    }
`;
const Text = styled.button`
    ${btnBorderNone};

    width: 30%;
    background-color: ${colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: ${colors.secondaryDark};
    }

    p {
        margin-right: 1rem;
        font-size: 2rem;
        font-weight: 200;
        letter-spacing: 0.2rem;
        color: ${colors.bg};
    }
    svg {
        font-size: 2rem;
        fill: ${colors.bg};
    }
`;

const Results = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    padding: 2rem 1rem;
    background-color: ${colors.grey};
    transform: translateY(110%);
    border: 1px solid ${colors.font};

    svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 3rem;
        color: darkred;
        cursor: pointer;
    }

    div {
        padding: 1rem;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;

            a,
            li {
                margin: 1rem auto;
                text-align: center;

                color: ${colors.font};
                font-size: 1.6rem;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    color: ${colors.bg};
                }
            }
            li {
                color: ${colors.tertiary};
            }
        }
    }
`;
