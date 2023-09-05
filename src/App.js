import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <h1>{t("navigation1")}</h1>
      <h1>{t("navigation2")}</h1>
      <h1>{t("navigation3")}</h1>
      <h1>{t("navigation4")}</h1>
        <button onClick={() => changeLanguage("uz")}>uz</button>
        <button onClick={() => changeLanguage("ru")}>ru</button>
        <button onClick={() => changeLanguage("en")}>en</button>
    </div>
  );
}

export default App;
