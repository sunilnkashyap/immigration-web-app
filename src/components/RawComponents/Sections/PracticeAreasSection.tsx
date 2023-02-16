import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const PracticeAreasSection = () => {
  const { t, i18n } = useTranslation();
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
        <div
          className="flx-ato-rsp-mgd-l f_sb psu-bfr"
          style={{
            flexDirection: i18n.language === "en" ? "row" : "row-reverse",
          }}
        >
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
                <Link to="/practice-areas/family-based-immigration">
                  <span style={{ color: "#000000" }}>
                    <strong>
                      {t("header.links.familyBasedImmigration")} -
                    </strong>
                  </span>
                </Link>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>
                  {t("practiceAreas.familyBasedImmigration")}
                </span>
              </li>
              <li>
                <Link to="/practice-areas/humanitarian-relief">
                  <span style={{ color: "#000000" }}>
                    <strong> {t("header.links.humanitarianRelief")} -</strong>
                  </span>
                </Link>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>
                  {t("practiceAreas.humanitarianRelief")}
                </span>
              </li>
              <li>
                <Link to="/practice-areas/citizenship-naturalization">
                  <span style={{ color: "#000000" }}>
                    <strong>
                      {t("header.links.citizenshipNaturalization")} -
                    </strong>
                  </span>
                </Link>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>{" "}
                  {t("practiceAreas.citizenshipNaturalization")}
                </span>
              </li>
              <li>
                <Link to="/practice-areas/investment-immigration">
                  <span style={{ color: "#000000" }}>
                    <strong>{t("header.links.investmentImmigration")} -</strong>
                  </span>
                </Link>
                <span style={{ color: "#000000" }}>
                  <strong> </strong> {t("practiceAreas.investmentImmigration")}
                </span>
              </li>
            </ul>
          </div>
          <div className="cnt-stl half" id="ContentV1AltContent2">
            <ul>
              <li>
                <Link to="/practice-areas/employment-based-immigration">
                  <span style={{ color: "#000000" }}>
                    <strong>
                      {t("header.links.employmentBasedImmigration")} -
                    </strong>
                  </span>
                </Link>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>
                  {t("practiceAreas.employmentBasedImmigration")}
                </span>
              </li>
              <li>
                <Link to="/practice-areas/deportation-defense">
                  <span style={{ color: "#000000" }}>
                    <strong>{t("header.links.deportationDefense")} -</strong>
                  </span>
                </Link>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>
                  {t("practiceAreas.deportationDefense")}
                </span>
              </li>
              <li>
                <a href="#">
                  <span style={{ color: "#000000" }}>
                    <strong>{t("header.links.writsOfMandamus")} -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>
                  {t("practiceAreas.writsOfMandamus")}
                </span>
              </li>
              <li>
                <a href="https://www.immigrationattorneyhelp.com/practice-areas/hardship-waivers/">
                  <span style={{ color: "#000000" }}>
                    <strong>{t("header.links.hardshipWaivers")} -</strong>
                  </span>
                </a>
                <span style={{ color: "#000000" }}>
                  <strong> </strong>
                  {t("practiceAreas.hardshipWaivers")}
                </span>
              </li>
            </ul>
            <p className="MsoNormal">
              <strong>{t("practiceAreas.footerDescription")}</strong>
            </p>
          </div>
        </div>
        <div className="flx f_c"></div>
      </div>
    </section>
  );
};
