import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useIntl } from "react-intl";
import { Context, reducer, initialState } from "../store";
import ReactGA from "react-ga";
import SEO from "./SEO";
import Header from "./header";
import Footer from "./footer";
import Landing from "./landing";
import Technologies from "./technologies";
import Certificates from "./certificates";
import Projects from "./projects";
import Contact from "./contact";
import Legal from "./legal";
import WhatsApp from "./whatsApp";
import Error from "./Error";
import ScrollToTop from "./ScrollToTop";
import { respond, colors, fonts } from "../styles";
import Cookies from "./Cookies";

export default function Main() {
    const intl = useIntl();
    const { store, dispatch } = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem("cookiesPresets")) {
            const cookiesPresets = window.localStorage.getItem(
                "cookiesPresets"
            );
            const cookiesPresetsObject = JSON.parse(cookiesPresets);

            cookiesPresetsObject.types.forEach((each) => {
                if (each.type === "analitycs" && each.allow) {
                    ReactGA.initialize("UA-132849357-2");
                    ReactGA.pageview(
                        window.location.pathname + window.location.search
                    );
                    console.log("initialized");
                }
            });
        }
    }, [store.cookies]);

    return (
        <main>
            <SEO
                title={intl.formatMessage({ id: "htmlTitle" })}
                description={intl.formatMessage({ id: "htmlDescription" })}
                keywords={intl.formatMessage({ id: "htmlKeywords" })}
                author={`Michal Antczak`}
                siteUrl={`https://www.michalantczak.com`}
                robots={`index, follow`}
                canonicalUrl={`https://www.michalantczak.com`}
            />
            <GlobalStyles />

            <Router>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Landing} />
                    <Route
                        path="/technologies"
                        exact={true}
                        component={Technologies}
                    />
                    <Route
                        path="/certificates"
                        exact={true}
                        component={Certificates}
                    />
                    <Route path="/projects" exact={true} component={Projects} />
                    <Route path="/contact" exact={true} component={Contact} />
                    <Route path="/legal" exact={true} component={Legal} />
                    <Route component={Error} />
                </Switch>
                <Footer />
                {store.cookies.display ? <Cookies /> : null}
            </Router>
        </main>
    );
}

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        font-size: 45%;
        line-height:1.4;
        font-family: ${fonts.rajdhani};
        background-color: ${colors.bg};
        ${(props) => respond("s", `font-size:50%;`)}
        ${(props) => respond("m", `font-size:55%;`)}
        ${(props) => respond("l", `font-size:62.5%;`)}
        ${(props) => respond("xxl", `font-size:65%;`)}
    }
    @keyframes dash {
  from {
  	stroke:darkorange;
    stroke-dashoffset: 0;
  }
  to {
  	stroke:orangered;
    stroke-dashoffset: 40;
  }
}
@keyframes dashLong {
  from {
  	stroke:darkorange;
    stroke-dashoffset: 0;
  }
  to {
  	stroke:orangered;
    stroke-dashoffset: 70;
  }
}
@keyframes slideButton {
  0% {
    display: block;
    opacity: 1;
    transform: translateX(0);
  }
  40% {
    display: block;
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    display: block;
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    display: block;
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideButtonReverse {
  0% {
    display: block;
    opacity: 1;
    transform: translateX(0);
  }
  40% {
    display: block;
    opacity: 0;
    transform: translateX(-100%);
  }
  50% {
    display: block;
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    display: block;
    opacity: 1;
    transform: translateX(0);
  }
}
`;
