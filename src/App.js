import React from "react";
import "./App.scss";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  console.clear();
  return (
    <div className="main">
      <div className="main-div">
        <h1>{t("navigation1")}</h1>
        <h1>{t("navigation2")}</h1>
        <h1>{t("navigation3")}</h1>
        <h1>{t("navigation4")}</h1>
      </div>
      <div className="main-buttons">
        <button
          className="main-buttons-button"
          onClick={() => changeLanguage("uz")}
        >
          uz
        </button>
        <button
          className="main-buttons-button"
          onClick={() => changeLanguage("ru")}
        >
          ru
        </button>
        <button
          className="main-buttons-button"
          onClick={() => changeLanguage("en")}
        >
          en
        </button>
      </div>
    </div>
  );
}

export default App;
