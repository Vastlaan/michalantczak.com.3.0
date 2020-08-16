import styled from "styled-components";

export const colors = {
    primary: "#0b4f6c", //11, 79, 108
    primaryLight: "#01baef",

    secondary: "#00a69c",
    secondaryDark: "#00423D", //	0, 66, 61

    tertiary: "#590004", //89, 0, 4
    quartiary: "#fe5f00",

    bg: "#fbfbff",
    font: "#040f16", //2,6,9

    grey: "#E5F2F2",
};

export const fonts = {
    rajdhani: `'Rajdhani', sans-serif;`,
    rokkitt: `'Rokkitt', serif;`,
    orbitron: `'Orbitron', sans-serif;`,
    cormorant: `Cormorant Garamond, serif;`,
};

export const btnBorderNone = `
  border:none;
  &:focus, :active{outline:none}
`;
export const respond = (type, content) => {
    if (type === "s") {
        return `@media only screen and (min-width: 576px){
    ${content}
  }`;
    } else if (type === "m") {
        return `@media only screen and (min-width: 780px){
    ${content}
  }`;
    } else if (type === "l") {
        return `@media only screen and (min-width: 1050px){
    ${content}
  }`;
    } else if (type === "xxl") {
        return `@media only screen and (min-width: 1662px){
    ${content}
  }`;
    }
};

//=====================================Components=======================================

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-family: ${fonts.orbitron};
        font-size: 2.8rem;
        letter-spacing: 0.2rem;
        color: ${colors.primary};
    }

    svg {
        font-size: 6rem;
        margin: 2rem auto;
        color: inherit;
    }

    p {
        font-family: ${fonts.cormorant};
        font-size: 2.2rem;
        text-align: center;
        color: ${colors.font};

        a {
            text-decoration: none;
        }
    }
`;

export const ButtonPrimary = styled.button`
    border: 1px solid transparent;
    border-radius: 3px;
    background-color: ${(props) =>
        props.color ? props.color : colors.primary};
    color: ${colors.bg};
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    display: inline-block;
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-familly: "Courier New", sans-serif;
    font-size: 2rem;
    font-weight: 300;
    transition: all 0.3s;

    &:focus,
    :active {
        outline: none;
    }

    &:hover {
        background-color: ${colors.bg};
        color: ${(props) => (props.color ? props.color : colors.primary)};
        border: ${(props) =>
            props.color
                ? `1px solid ${props.color}`
                : `1px solid ${colors.primary}`};
    }
`;
export const ButtonPrimaryReverse = styled.button`
    border: 1px solid ${colors.primary};
    border-radius: 3px;
    background-color: ${colors.bg};
    color: ${colors.primary};
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    display: inline-block;
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-familly: "Courier New", sans-serif;
    font-size: 2rem;
    font-weight: 300;
    transition: all 0.3s;

    &:focus,
    :active {
        outline: none;
    }

    &:hover {
        background-color: ${colors.primary};
        color: ${colors.bg};
        border: 1px solid transparent;
    }
`;
export const ButtonSide = styled.button`
    border: none;
    border-radius: 3px;
    background-color: ${colors.quartiary};
    color: ${colors.bg};
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    display: inline-block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-familly: "Courier New", sans-serif;
    font-size: 1.4rem;

    &:focus,
    :active {
        outline: none;
    }
`;

export const CardComponent = styled.div`
    flex: 1;
    width: 40rem;
    margin: 5rem 0;
    background-color: ${colors.bg};
    border-radius: 3px;
    display: flex;
    flex-direction: column;

    ${() => respond("m", " margin: 2rem; width: 40rem;")}

    h3 {
        background-color: ${(props) => props.color};
        padding: 2rem;
        text-align: center;
        font-family: ${fonts.orbiton};
        font-size: 3rem;
        color: ${colors.bg};
        text-transform: uppercase;
        letter-spacing: 0.3rem;
    }

    div {
        h6 {
            text-align: center;
            font-family: $font-rajdhani;
            font-size: 14rem;
            font-weight: 500;
            color: ${(props) => props.color};
            opacity: 0.8;

            sup {
                font-size: 5rem;
                color: ${colors.font};
            }
            sub {
                font-size: 1rem;
            }
        }
    }

    ul {
        flex: 1;
        list-style: none;
        padding: 2rem;
        li {
            font-family: ${fonts.rajdhani};
            font-size: 2rem;
            font-weight: 400;
            letter-spacing: 0.2rem;
            display: flex;
            align-items: center;
            color: ${colors.font};
            padding: 1rem 0;
            border-bottom: ${(props) => `2px solid ${props.color}`};
        }
    }

    a {
        padding: 1rem 3rem;
        margin: 0 auto;
        text-decoration: none;
        line-height: 1;
        font-weight: 700;
        font-size: 2.5rem;
        border-radius: 5px;
        color: ${(props) => props.color};
        border: 2px solid ${(props) => props.color};
        transition: all 0.3s;
        &:hover {
            color: white;
            background-color: ${(props) => props.color};
            border: 2px solid transparent;
        }
    }

    p {
        font-size: 1.2rem;
        text-align: center;
        padding: 1rem 0;
    }
`;

export const Nav = styled.div`
    padding: 2rem;
    p,
    a {
        text-decoration: none;
        font-weight: 400;
        color: ${colors.primary};
        font-size: 2rem;
    }
`;
