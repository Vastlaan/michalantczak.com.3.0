import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { colors, fonts, respond, Nav } from "../../styles";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Contact() {
    const contact = useRef();
    const intl = useIntl();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [warning, setWarning] = useState("");
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: contact.current,
                toggleActions: "restart none restart none",
            },
        });
        tl.fromTo(contact.current, 1, { opacity: 0 }, { opacity: 1 });
    }, []);

    const submitContactForm = (e) => {
        e.preventDefault();
        if (!email || !message) {
            return setWarning("Fields EMAIL and MESSAGE are required");
        }
        if (!isValidEmail(email)) {
            return setWarning("Email address is not valid");
        }
        const dataToSend = { name, email, message };

        //change hostname to /
        fetch("/api/submitContactForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data === "Sucess" || "Failed") {
                    console.log(data);
                    setDisplayConfirmation(true);
                }
            });
        setWarning("");
        return e.target.reset();
    };
    const isValidEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    return (
        <Container ref={contact}>
            <Nav>
                <p>
                    <Link to="/">
                        {intl.formatMessage({ id: "navigationHome" })}
                    </Link>
                    {" > "}
                    <Link to="/contact">
                        {intl.formatMessage({ id: "contactNavCurrent" })}
                    </Link>
                </p>
            </Nav>
            <Main>
                <Form onSubmit={submitContactForm}>
                    <h1>
                        {intl.formatMessage({ id: "contactFormHeaderMain" })}
                    </h1>
                    <p>{intl.formatMessage({ id: "contactFormHeaderSub" })}</p>
                    {warning ? <div>{warning}</div> : null}
                    <Field>
                        <label>
                            {intl.formatMessage({
                                id: "contactFormField1",
                            })}
                        </label>
                        <input
                            name="contact_name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <label>
                            {intl.formatMessage({
                                id: "contactFormField2",
                            })}
                        </label>
                        <input
                            name="contact_email"
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <label>
                            {intl.formatMessage({
                                id: "contactFormField3",
                            })}
                        </label>
                        <textarea
                            name="contact_msg"
                            maxLength="500"
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </Field>
                    <Button>
                        <button type="submit">
                            {intl.formatMessage({
                                id: "contactFormButton",
                            })}
                        </button>
                    </Button>
                </Form>

                <Details id="klantenservice">
                    <h1>
                        {intl.formatMessage({
                            id: "contactDetailsHeaderMain",
                        })}
                    </h1>
                    <h3>
                        {intl.formatMessage({
                            id: "contactDetailsHeaderSub1",
                        })}
                    </h3>
                    <p>
                        {intl.formatMessage({
                            id: "contactDetailsHeaderSub2",
                        })}
                    </p>
                    <Box href="tel:0682307051">
                        <FiPhoneCall />
                        <p>06 82 30 70 51</p>
                    </Box>
                    <Box href="mailTo:info@michalantczak.com">
                        <FiMail />
                        <p>info@michalantczak.com</p>
                    </Box>
                    <Box>
                        <FiMapPin />
                        <div>
                            <p>Michal Antczak</p>
                            <p>Oostervenne 397</p>
                            <p>1444XN Purmerend</p>
                        </div>
                    </Box>
                </Details>
                {displayConfirmation ? (
                    <Confirmation>
                        <div onClick={() => setDisplayConfirmation(false)}>
                            <MdClose />
                        </div>
                        <h1>Thank you for your message!</h1>
                        <h1>I will contact you as soon as possible.</h1>
                        <a
                            href="#"
                            onClick={() => setDisplayConfirmation(false)}
                        >
                            <span>Ok</span>
                        </a>
                    </Confirmation>
                ) : null}
            </Main>
        </Container>
    );
}
const Container = styled.section`
    margin: 10rem 2rem;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;

    ${() => respond("l", "flex-direction: row;")}
`;
const Form = styled.form`
    flex: 0 0 60%;
    padding: 2rem;

    h1 {
        font-size: 3.2rem;
        font-weight: 300;
        letter-spacing: 0.3rem;
        text-align: center;
        text-transform: uppercase;
        color: ${colors.font};
    }
    p {
        margin: 2rem auto;
        font-family: ${fonts.rokkitt};
        font-size: 2rem;
        color: ${colors.font};
    }
`;

const Field = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem auto;

    label {
        margin-right: 2rem;
        font-size: 2rem;
        color: ${colors.font};
    }

    input,
    textarea {
        width: 70%;
        padding: 1rem;
        font-family: ${fonts.rokkitt};
        font-size: 1.8rem;
        border: 1px solid ${colors.primary};

        ${() => respond("l", "width: 50%;")}

        &:focus {
            outline: none;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
        }
    }
    textarea {
        height: 20rem;
    }
`;

const Button = styled.div`
     display: flex;
    justify-content: center;
    margin: 2rem auto 5rem auto;

    button {
      border: none;
      border-radius: 5px;
      padding: 1rem 4rem;
      background-color: ${colors.secondaryDark};
      color: white;
      font-familly: "Courier New", sans-serif;
      font-size: 2rem;
      letter-spacing:.2rem;
      transition: all 0.3s;
      cursor: pointer;

      &:focus {
        outline: none;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
      }

      &:hover {
        background-color:  ${colors.secondary};
      }
    }
  }
`;

const Details = styled.div`
    flex: 0 0 40%;
    padding: 2rem;

    h1 {
        font-size: 2.8rem;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        text-transform: lowercase;
    }
    p {
        margin: 1rem auto;
        font-family: ${fonts.rokkitt};
        font-size: 2rem;
        color: ${colors.font};
    }
`;
const Box = styled.a`
 text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid ${colors.secondaryDark};
    transition: all 0.3s;

    &:not(:last-child) {
      &:hover {
        background-color: ${colors.grey};
        cursor: pointer;
      }
    }

    svg {
      font-size: 3rem;
      color: ${colors.secondaryDark};
    }
    p {
      font-size: 2.5rem;
      font-weight: 900;
      color: ${colors.secondaryDark};
    }
    div{
        flex: 0 0 70%;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
  }
`;

const Confirmation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;

    div {
        position: absolute;
        top: 2rem;
        right: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: ${colors.bg};
            font-size: 5rem;
            cursor: pointer;
        }
    }

    h1 {
        font-family: ${fonts.rajdhani};
        font-size: 3rem;
        color: ${colors.bg};
    }

    a {
        margin-top: 2rem;
        color: ${colors.bg};
        border: 1px solid ${colors.bg};
        font-size: 2.2rem;
        text-decoration: none;
        padding: 1rem 2rem;
        cursor: pointer;
    }
`;
export default Contact;
