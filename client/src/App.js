import React, { useContext, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { Context } from "./store";
import nl from "./translations/nl.json";
import en from "./translations/en.json";
import Main from "./components/Main";

function App() {
    const { store, dispatch } = useContext(Context);

    useEffect(() => {
        fetch("https://clairehempshop.herokuapp.com", {
            mode: "no-cors",
        }).catch((e) => console.error(e));
        fetch("https://www.royalresumegenerator.com", {
            mode: "no-cors",
        }).catch((e) => console.error(e));
    });

    return (
        <IntlProvider
            locale={store.lang}
            messages={store.lang === "nl" ? nl : en}
        >
            <Main />
        </IntlProvider>
    );
}

export default App;
