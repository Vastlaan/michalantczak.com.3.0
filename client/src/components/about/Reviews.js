import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntl } from "react-intl";
import { FiArrowRight } from "react-icons/fi";
import { respond, colors, fonts } from "../../styles";

export default function Revie() {
    const intl = useIntl();

    const opinions = useRef();
    const first = useRef();
    const second = useRef();
    const third = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: opinions.current,
                toggleActions: "restart none restart none",
            },
        });

        tl.fromTo(
            first.current,
            0.6,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0 }
        );
        tl.fromTo(
            second.current,
            0.6,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0 }
        );
        tl.fromTo(
            third.current,
            0.6,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0 }
        );
    }, []);

    return (
        <Reviews>
            <Header>
                <HeaderMain>
                    <h1 style={{ color: "#854442" }}>
                        {intl.formatMessage({ id: "aboutReviewsHeader1" })}
                    </h1>
                    <h1 style={{ color: "#3c2f2f" }}>
                        {intl.formatMessage({ id: "aboutReviewsHeader2" })}
                    </h1>
                </HeaderMain>
                <HeaderSmall>
                    <h3>
                        {intl.formatMessage({ id: "aboutReviewsHeaderSmall" })}
                    </h3>
                </HeaderSmall>
                <HeaderBtn>
                    <button>
                        {intl.formatMessage({ id: "aboutReviewsHeaderButton" })}
                        <FiArrowRight />
                    </button>
                </HeaderBtn>
            </Header>
            <Opinions ref={opinions}>
                <Each
                    ref={first}
                    style={{ backgroundColor: colors.secondaryDark }}
                >
                    <Image>
                        <img
                            src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/claireHempMobile.png"
                            alt="face"
                        />
                    </Image>
                    <Text>
                        <h1>
                            {intl.formatMessage({ id: "aboutReviews1Name" })}
                        </h1>
                        <h3>
                            {intl.formatMessage({ id: "aboutReviews1Type" })}
                        </h3>
                        <p>{intl.formatMessage({ id: "aboutReviews1Text" })}</p>
                    </Text>
                </Each>
                <Each ref={second} style={{ backgroundColor: colors.tertiary }}>
                    <Image>
                        <img
                            src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/barberMobile.png"
                            alt="face"
                        />
                    </Image>
                    <Text>
                        <h1>
                            {intl.formatMessage({ id: "aboutReviews2Name" })}
                        </h1>
                        <h3>
                            {intl.formatMessage({ id: "aboutReviews2Type" })}
                        </h3>
                        <p>{intl.formatMessage({ id: "aboutReviews2Text" })}</p>
                    </Text>
                </Each>
                <Each ref={third} style={{ backgroundColor: colors.primary }}>
                    <Image>
                        <img
                            src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/laCasaMobile.png"
                            alt="website preview"
                        />
                    </Image>
                    <Text>
                        <h1>
                            {intl.formatMessage({ id: "aboutReviews3Name" })}
                        </h1>
                        <h3>
                            {intl.formatMessage({ id: "aboutReviews3Type" })}
                        </h3>
                        <p>{intl.formatMessage({ id: "aboutReviews3Text" })}</p>
                    </Text>
                </Each>
            </Opinions>
        </Reviews>
    );
}

const Reviews = styled.div`
    margin: 10rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;

    ${() => respond("l", "flex-direction: row")}
`;
const Header = styled.div`
    flex: 0 0 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const HeaderMain = styled.div`
    width: 100%;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: ${fonts.rokkitt};
        font-size: 6rem;
        font-weight: 900;
        letter-spacing: 0.3rem;
        line-height: 1;
    }
`;
const HeaderSmall = styled.div`
    width: 100%;
    padding: 2rem;

    ${() => respond("l", "padding: 2rem 5rem")};
    h3 {
        text-align: center;
        font-size: 2rem;
    }
`;
const HeaderBtn = styled.div`
    margin-bottom: 10rem;

    button {
        border: none;
        padding: 1rem 4rem;
        background-color: ${colors.tertiary};
        display: flex;
        align-items: center;
        color: ${colors.bg};
        font-size: 2.2rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background-color: ${colors.secondaryDark};
        }
        &:focus,
        :active {
            outline: none;
        }
    }
`;

const Opinions = styled.div`
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Each = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
`;
const Image = styled.div`
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 1rem 0;

    img {
        width: 100%;
    }
`;
const Text = styled.div`
    flex: 0 0 60%;
    padding: 3rem;

    h1 {
        font-size: 3rem;
        font-weight: 300;
        color: snow;
    }
    h3 {
        font-family: ${fonts.cormorant};
        font-size: 1.8rem;
        font-weight: 300;
        letter-spacing: 0.3rem;
        color: ${colors.bg};
    }
    p {
        margin: 2rem auto;
        font-family: ${fonts.rokkitt};
        font-size: 2.2rem;
        font-weight: 300;
        color: ${colors.grey};
    }
`;
