import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../store";
import { colors, btnBorderNone, respond } from "../../styles";
import EnFlag from "../../img/England.png";
import NlFlag from "../../img/Netherlands.png";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export default function LangSwitcher() {
    const { store, dispatch } = useContext(Context);
    // const [themeDark, setThemeDark] = useState(false);

    // const changeTheme = () => {

    // };
    return (
        <Container>
            <button
                onClick={() =>
                    dispatch({
                        type: "changeLang",
                        payload: "nl",
                    })
                }
            >
                <Flag src={NlFlag} alt="dutch flag" />
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: "changeLang",
                        payload: "en",
                    })
                }
            >
                <Flag src={EnFlag} alt="english flag" />
            </button>
            {/* <button onClick={changeTheme}>
                {themeDark ? <RiMoonLine /> : <RiSunLine />}
            </button> */}
        </Container>
    );
}
const Container = styled.div`
    margin-right: 2rem;
    ${() => respond("m", "margin-right:5rem;")}

    display: flex;

    button {
        ${() => btnBorderNone};
        background-color: transparent;

        margin-right: 1rem;
        color: ${colors.bg};
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            transform: scale(1.2);
        }

        svg {
            font-size: 3.5rem;
            color: ${colors.primary};
        }
    }
`;

const Flag = styled.img`
    width: 3rem;
    height: 3rem;
`;
