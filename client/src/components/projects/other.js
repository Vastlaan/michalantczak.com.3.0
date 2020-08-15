import React from "react";
import styled from "styled-components";
import { colors, fonts, respond } from "../../styles";

export default function Other({ intl }) {
    return (
        <Main>
            <h3>{intl.formatMessage({ id: "projectsOtherHeader" })}</h3>
            <ul>
                <li>
                    <h6>
                        {intl.formatMessage({ id: "projectsOtherHeader1" })}
                    </h6>
                    <p>
                        {intl.formatMessage({
                            id: "projectsOtherDescription1",
                        })}
                    </p>
                    <a href="https://noirfatale.com">Visit website</a>
                </li>
                <li>
                    <h6>
                        {intl.formatMessage({ id: "projectsOtherHeader2" })}
                    </h6>
                    <p>
                        {intl.formatMessage({
                            id: "projectsOtherDescription2",
                        })}
                    </p>
                    <a href="https://chefsbook.org">Visit website</a>
                </li>
            </ul>
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
          font-size: 2rem;
          color: ${colors.font};
        }
        a {

           font-size: 2rem;
            background-color: ${colors.secondaryDark};
            padding: 1rem 3rem;
            color: white;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                background-color: ${colors.secondary};
            }
        }
      }
    }
  }
`;
