import React, { useContext } from "react";
import { IntlProvider } from "react-intl";
import { Context } from "./store";
import nl from "./translations/nl.json";
import en from "./translations/en.json";
import Main from "./components/Main";

function App() {
    const { store, dispatch } = useContext(Context);

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
