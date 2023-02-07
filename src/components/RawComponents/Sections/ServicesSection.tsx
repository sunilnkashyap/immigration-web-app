import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const { t } = useTranslation();
  useEffect(() => {
    (window as any)?.USC?.scrollingList(
      document.getElementById("ServicesV3List")
    );
  }, []);

  return (
    <section
      className="srv v3 srv-tls lt-bg pd_v rsp_opn-tp rsp_opn-bt start active show-20"
      id="ServicesV3"
      data-onvisible="show-20"
      data-role="scroller"
    >
      <div className="mn_wd rsp_pd rsp_opn-tp">
        <div className="flx-ato-rsp-mgd-b f_sb f_m">
          <div className="half">
            <div
              className="srv-lst ui-repeater"
              id="ServicesV3List"
              data-role="container"
            >
              <ul
                className="flx-grd-sml srv-lst sl_itm-100-500"
                data-role="list"
              >
                <li className="half flx s-active" data-role="item">
                  <ul className="flx f_clm full">
                    <li
                      className="flx ato bg-bx lk-bg srv-itm"
                      data-item="i"
                      data-key="92785"
                    >
                      <Link
                        to="practice-areas/humanitarian-relief/"
                        className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                      >
                        <strong className="fnt_t-5">
                          {t("header.links.humanitarianRelief")}
                        </strong>
                      </Link>
                    </li>
                    <li
                      className="flx ato bg-bx lk-bg srv-itm"
                      data-item="i"
                      data-key="92787"
                    >
                      <Link
                        className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                        to="/practice-areas/deportation-defense/"
                      >
                        <strong className="fnt_t-5">
                          {t("header.links.deportationDefense")}
                        </strong>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="half flx" data-role="item">
                  <ul className="flx f_clm full">
                    <li
                      className="flx ato bg-bx lk-bg srv-itm"
                      data-item="i"
                      data-key="92781"
                    >
                      <Link
                        className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                        to="/practice-areas/asylum/"
                      >
                        <strong className="fnt_t-5">
                          {t("header.links.asylum")}
                        </strong>
                      </Link>
                    </li>
                    <li
                      className="flx ato bg-bx lk-bg srv-itm"
                      data-item="i"
                      data-key="92782"
                    >
                      <Link
                        className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                        to="/practice-areas/family-based-immigration/"
                      >
                        <strong className="fnt_t-5">
                          {t("header.links.familyBasedImmigration")}
                        </strong>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="half flx" data-role="item">
                  <ul className="flx f_clm full">
                    <li
                      className="flx ato bg-bx lk-bg srv-itm"
                      data-item="i"
                      data-key="92786"
                    >
                      <Link
                        className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                        to="/practice-areas/citizenship-naturalization/"
                      >
                        <strong className="fnt_t-5">
                          {t("header.links.citizenshipNaturalization")}
                        </strong>
                      </Link>
                    </li>
                    <li
                      className="flx ato bg-bx lk-bg srv-itm"
                      data-item="i"
                      data-key="92784"
                    >
                      <Link
                        className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                        to="/practice-areas/investment-immigration/"
                      >
                        <strong className="fnt_t-5">
                          {t("header.links.investmentImmigration")}
                        </strong>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="half flx" data-role="item">
                  <ul className="flx f_clm full">
                    <li
                      className="flx ato bg-bx lk-bg srv-itm"
                      data-item="i"
                      data-key="92783"
                    >
                      <Link
                        className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                        to="/practice-areas/employment-based-immigration/"
                      >
                        <strong className="fnt_t-5">
                          {t("header.links.employmentBasedImmigration")}
                        </strong>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="flx f_m f_c mrg_tp" data-role="arrows">
                <button
                  className="flx"
                  title="View previous item"
                  aria-label="View previous item"
                  data-action="Prev"
                >
                  <svg
                    viewBox="0 0 24 24"
                    data-use="assets/dycmgkz8j91.24.2208191902389.svg#arrow_left"
                  >
                    <path d="M17.414 24L5.414 12L17.414 0l1.171 1.171l-10.829 10.829l10.829 10.829Z"></path>
                  </svg>
                </button>
                <button
                  className="flx"
                  title="View next item"
                  aria-label="View next item"
                  data-action="Next"
                >
                  <svg
                    viewBox="0 0 24 24"
                    data-use="assets/dycmgkz8j91.24.2208191902389.svg#arrow_right"
                  >
                    <path d="M6.586 0L18.586 12L6.586 24L5.414 22.829l10.829-10.829L5.414 1.171Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="half" data-content="true">
            <header className="mrg_bt" id="ServicesV3Header">
              <h1>{t("service.title")}</h1>
            </header>
            <div className="cnt-stl" id="ServicesV3Content">
              <h2>
                <span style={{ color: "#000000" }}>
                  {t("service.description")}
                </span>
              </h2>
              <p>
                <span style={{ color: "#000000" }}>{t("service.paraOne")}</span>
              </p>
              <p>
                <span style={{ color: "#000000" }}>{t("service.paraTwo")}</span>
              </p>
              <hr />
              <p style={{ textAlign: "center" }}>
                <span style={{ color: "#000000" }}>
                  {t("service.paraThree")}
                </span>
              </p>
              <hr />
              <p>
                <br />
                &nbsp;
              </p>
            </div>
            <div className="btn-bx mrg_tp" id="ServicesV3Button"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
