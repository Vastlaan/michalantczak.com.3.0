import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts, respond } from "../../styles";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Restaurant1 from "../../img/restaurant_1.png";
import Restaurant2 from "../../img/restaurant_2.png";
import Restaurant3 from "../../img/restaurant_3.png";

export default function Restaurant({ intl }) {
    const lacasaPhotosNamesArray = [Restaurant1, Restaurant2, Restaurant3];

    const [laCasaPhoto, setLaCasaPhoto] = useState(0);

    const shufflePhoto = (direction, state, setState, length) => {
        if (direction === "up") {
            if (state >= length - 1) {
                return setState(0);
            } else {
                return setState(state + 1);
            }
        } else if (direction === "down") {
            if (state === 0) {
                return setState(length - 1);
            } else {
                return setState(state - 1);
            }
        }
        return;
    };

    return (
        <Main>
            <h3>{intl.formatMessage({ id: "projectsCasaHeader" })}</h3>
            <Galery>
                <ButtonLeft
                    onClick={() =>
                        shufflePhoto(
                            "down",
                            laCasaPhoto,
                            setLaCasaPhoto,
                            lacasaPhotosNamesArray.length
                        )
                    }
                >
                    <FaChevronCircleLeft />
                </ButtonLeft>
                <div>
                    <Image
                        src={lacasaPhotosNamesArray[laCasaPhoto]}
                        alt="restaurant"
                    />
                </div>
                <ButtonRight
                    onClick={() =>
                        shufflePhoto(
                            "up",
                            laCasaPhoto,
                            setLaCasaPhoto,
                            lacasaPhotosNamesArray.length
                        )
                    }
                >
                    <FaChevronCircleRight />
                </ButtonRight>
            </Galery>
            <Description>
                <div>
                    <p>
                        <strong>
                            {intl.formatMessage({ id: "projectsCasaStrong" })}
                        </strong>
                        {intl.formatMessage({ id: "projectsCasaDescription" })}
                    </p>
                </div>
                <div>
                    <a href="https://condescending-euclid-455bb0.netlify.app/">
                        Visit website
                    </a>
                    <a href="https://github.com/Vastlaan/restaurant.git">
                        View code
                    </a>
                </div>
            </Description>
        </Main>
    );
}

const Main = styled.div`
    margin: 2rem;
    padding: 1rem;
    border: 1px solid ${colors.grey};
    display: grid;
    grid-template-columns: 1fr; 
    grid-gap: 2rem;
    ${() => respond("m", "grid-template-columns: 3fr 2fr;padding: 2rem;")}
    
    h3 {
      text-align: center;
      text-transform: uppercase;
      color: ${colors.primary};
      font-size: 3rem;
      font-weight: 400;
      letter-spacing: 0.2rem;
      grid-column: 1/2;
      grid-row: 1/2;
      ${() => respond("m", "grid-column: 1/3;")}
     
    }
    ul {
      grid-column: 1/3;
      width: 100%;
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      ${() => respond("m", " grid-template-columns: 1fr 1fr;")}

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-column: 1/2;
        ${() => respond("m", "grid-column: auto;")}

        h6 {
          
          font-size: 2.5rem;
          color: ${colors.font};
          text-align: center;
        }
        p {
          margin: 2rem auto;
          text-align: center;
          font-family: ${fonts.cormorant};
          font-size: 1.8rem;
          color: ${colors.font};
        }
        a {

          font-size: 2rem;
          background-color: ${colors.secondary};
          padding: 1rem 3rem;
          color: white;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            color: ${colors.font};
          }
        }
      }
    }
  }
`;

const Image = styled.img`
    max-width: 100%;
`;

const Galery = styled.div`
    align-self: center;
    position: relative;
    grid-column: 1/2;
    grid-row: 2/3;
    padding: 1rem 0rem;
    ${() =>
        respond(
            "m",
            `grid-column: 1/2;
        grid-row: auto;
        padding: 1rem;`
        )}

    button {
        padding: 1rem 2rem;
        border: 1px solid ${colors.secondary};
        z-index: 9;
        color: ${colors.secondary};
        font-size: 3rem;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
    }
`;

const ButtonLeft = styled.button`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
        & > * {
            animation: slideButtonReverse 0.6s ease-out;
        }
    }
    &:focus {
        outline: none;
    }
`;
const ButtonRight = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
        & > * {
            animation: slideButton 0.6s ease-out;
        }
    }
    &:focus {
        outline: none;
    }
`;
const Description = styled.div`
    p {
        font-family: ${fonts.cormorant};
        color: ${colors.font};
        font-size: 2rem;
        text-align: center;
        ${() => respond("m", `text-align: left;`)}
    }

    div {
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;
        a {
            font-size: 2rem;
            background-color: ${colors.secondaryDark};
            padding: 1rem 2rem;
            color: white;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s;
            ${() => respond("m", `padding: 1rem 3rem;`)}
            &:hover {
                background-color: ${colors.secondary};
            }
        }
    }
`;
