import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const PracticeAreasSection = () => {
  const { t } = useTranslation();
  return (
    <section
      className="cnt v1 lt-bg pd_v-60 rsp_opn-tp rsp_opn-bt"
      id="ContentV1Alt"
    >
      <div className="mn_wd rsp_pd rsp_opn-tp" data-content="true">
        <header className="mrg_bt-60 ta_c" id="ContentV1AltHeader">
          <h3>{t("practiceAreas.title")}</h3>
          <p>
            <span style={{ color: "#000000" }}>
              {t("practiceAreas.description")}
            </span>
          </p>
          <p>
            <span style={{ color: "#000000" }}>
              <strong>{t("practiceAreas.boldHeading")}</strong>
            </span>
          </p>
        </header>
        <div className="flx-ato-rsp-mgd-l f_sb psu-bfr">
          <div className="cnt-stl half" id="ContentV1AltContent">
            <ul>
              <li>
                <Link to="/practice-areas/asylum">
                  <span style={{ color: "#000000" }}>
                    <strong>{t("header.links.asylum")} -</strong>
                  </span>
                </Link>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>
                  {t("practiceAreas.asylum")}
                </span>
              </li>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/family-based-immigration/">
                  <span style={{ color: "#000000" }}>
                    <strong>Family-Based Immigration -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>United States citizens and lawful permanent
                  residents can sponsor qualifying relatives for green cards.
                </span>
              </li>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/humanitarian-relief/">
                  <span style={{ color: "#000000" }}>
                    <strong>Humanitarian Relief -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>Several humanitarian programs are
                  potentially available to immigrants who were victims of abuse
                  or violent crimes, facing natural disasters, serious medical
                  issues, and other emergencies.
                </span>
              </li>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/citizenship-naturalization/">
                  <span style={{ color: "#000000" }}>
                    <strong>Citizenship -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>Lawful permanent residents can naturalize
                  and become citizens after passing a two-part exam and meeting
                  several other requirements.
                </span>
              </li>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/investment-immigration/">
                  <span style={{ color: "#000000" }}>
                    <strong>Investment Immigration -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>Green cards are available to immigrants who
                  make a large investment in a U.S.-based business that
                  generates at least ten jobs. There is also a non-immigrant
                  visa option for foreign nationals from certain countries to
                  obtain an E2 visa and allow them to temporarily stay in the US
                  to manage their businesses.
                </span>
              </li>
            </ul>
          </div>
          <div className="cnt-stl half" id="ContentV1AltContent2">
            <ul>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/employment-based-immigration/">
                  <span style={{ color: "#000000" }}>
                    <strong>Employment-Based Immigration -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>U.S.-based employers can sponsor immigrants
                  for green cards after obtaining a labor certification.
                </span>
              </li>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/deportation-defense/">
                  <span style={{ color: "#000000" }}>
                    <strong>Deportation Defense -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>Several relief options may be available to
                  immigrants who have been placed in removal proceedings.
                </span>
              </li>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/writ-of-mandamus/">
                  <span style={{ color: "#000000" }}>
                    <strong>Writs of Mandamus -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>If United States Citizenship and Immigration
                  Services (USCIS) refuses to make a timely decision on your
                  case, a Writ of Mandamus can force them to act.
                </span>
              </li>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/hardship-waivers/">
                  <span style={{ color: "#000000" }}>
                    <strong>Hardship Waivers -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>Extreme hardship waivers can help you
                  overcome inadmissibility obstacles and access immigration
                  benefits.
                </span>
              </li>
            </ul>
            <p className="MsoNormal">
              <strong>
                Every practice area we handle involves many complex steps.
                Having reliable representation is the key to making it through
                these steps.
              </strong>
            </p>
          </div>
        </div>
        <div className="flx f_c"></div>
      </div>
    </section>
  );
};
