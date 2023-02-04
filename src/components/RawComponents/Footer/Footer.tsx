import React from "react";

import logoImage from "../../../assets/logo/logo.png";
import logo2Image from "../../../assets/logo/logo2.png";
import footerBgImage from "../../../assets/images/footer-v2-bg.jpg";
import footerBgMobileImage from "../../../assets/images/footer-v2-bg-mobile.jpg";
import footerBgTabletImage from "../../../assets/images/footer-v2-bg-tablet.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="FooterZone">
      <form
        id="Form_FooterV2"
        method="post"
        encType="multipart/form-data"
        action="#"
        data-search="1"
      >
        <input type="hidden" name="_m_" value="FooterV2" />
        <section
          className="ftr v2 ftr-tls dk-bg alt-bg pd_v bg-image"
          id="FooterV2"
        >
          <div className="bg-wrp">
            <picture className="img-bg" role="presentation" data-role="picture">
              <source
                media="(max-width: 500px)"
                srcSet={footerBgMobileImage}
                data-src={footerBgMobileImage}
              />
              <source
                media="(max-width: 1024px)"
                srcSet={footerBgTabletImage}
                data-src={footerBgTabletImage}
              />
              <img src={footerBgImage} alt="" data-src={footerBgImage} />
            </picture>
          </div>

          <div className="mn_wd rsp_pd">
            <div className="flx-blk-1024-mgd-b f_sb">
              <div className="lt fifth">
                <div className="lg-bx pd_bt-90 flx f_c">
                  <img
                    className="dk-lg"
                    alt="Law Offices of Fady Eskandar"
                    title="Law Offices of Fady Eskandar"
                    src={logoImage}
                  />
                  <img
                    className="lt-lg"
                    alt="Law Offices of Fady Eskandar"
                    title="Law Offices of Fady Eskandar"
                    src={logo2Image}
                  />
                </div>
                <ul>
                  <li>
                    <a
                      className="fnt_t-6 clr-swp"
                      href="https://www.immigrationattorneyhelp.com/sitemap.xml"
                    >
                      {t("header.links.siteMaps")}
                    </a>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="fnt_t-6 clr-swp">
                      {t("header.links.privacyPolicy")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="ctr three-fifths pd_h-20">
                <div className="loc-lst ui-repeater" id="FooterV2Feed">
                  <ul className="flx-grd-blk-500-mgd ta_c-1024">
                    <li className="half" data-item="i" data-key="19485">
                      <strong className="fnt_t-4 fnt_tc-5 mrg_bt-20">
                        Anaheim
                      </strong>
                      <a className="fnt_phn clr-swp" href="tel:"></a>
                      <address className="fnt_t-6 mrg_bt-10">
                        421 N Brookhurst St Ste 200
                        <br />
                        Anaheim, CA 92801
                      </address>

                      <a href="https://g.page/eskandarlaw">
                        [+] Map &amp; Directions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rt fifth">
                <div className="flx f_clm f_sb">
                  <div
                    className="search-bar ui-repeater"
                    id="FooterV2SiteSearch"
                  >
                    <div
                      className="input-text flx f_m f_sb"
                      data-item="i"
                      data-key=""
                    >
                      <label htmlFor="FooterV2SiteSearch_ITM0_C">Search</label>
                      <input
                        placeholder=""
                        id="FooterV2SiteSearch_ITM0_C"
                        type="search"
                        className="ui-cms-input"
                        name="FooterV2SiteSearch$ITM0$C"
                        value=""
                      />
                      <button
                        className="flx f_c f_m icn"
                        title="Search Our Site"
                        aria-label="Search Our Site"
                        type="submit"
                        id="FooterV2SiteSearch_ITM0_ctl02"
                        name="FooterV2SiteSearch$ITM0$ctl02"
                        data-commandname="Search"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="clr-btn"
                          data-use="assets/dycmgkz8j91.24.2208191902389.svg#search"
                        >
                          <use data-href="assets/dycmgkz8j91.24.2208191902389.svg#search"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mrg_tp-90 pd_tp-90 ta_c-1024">
                    <div className="mrg_bt-20" id="FooterV2NavHeader">
                      <strong className="fnt_t-4 clr-lnk">
                        {" "}
                        {t("quickLinks")}{" "}
                      </strong>
                    </div>
                    <nav className="qk-lnk" id="FooterV2Nav">
                      <ul role="menu" aria-label="Footer Navigation">
                        <li role="menuitem">
                          <Link to="/" className="fnt_t-6 clr-swp">
                            {t("header.links.home")}
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link to="/our-firm" className="fnt_t-6 clr-swp">
                            {t("header.links.ourFirm")}
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link
                            to="/practice-areas"
                            className="fnt_t-6 clr-swp"
                          >
                            {t("header.links.practiceAreas")}
                          </Link>
                        </li>
                        <li role="menuitem">
                          <Link to="/contact" className="fnt_t-6 clr-swp">
                            {t("header.links.contact")}
                          </Link>
                        </li>
                        <li role="menuitem">
                          <a
                            href="https://eskandarlaw.square.site/"
                            target="_blank"
                            rel="noreferrer"
                            className="fnt_t-6 clr-swp"
                          >
                            {t("scheduleAConsultation")}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <section className="scp-ftr dk-bg" id="ScorpionFooterV1Alt">
        <div className="mn_wd pd_tp pd_bt">
          <div className="flx-blk-500-mgd ta_c-500 f_m f_sb rsp_pd pd_tp-90 pd_bt-90">
            <small className="inf" id="LegalScorpionFooterDisclaimer">
              <small className="blk mrg_bt-10">
                {t("footer.descriptionOne")}
                <br className="hd-1600" />
                {t("footer.descriptionTwo")}
              </small>

              <p className="mrg_tp-0 mrg_bt-0">
                © {new Date().getFullYear()} {t("allRights")}
              </p>
              <nav className="nv-dsp">
                <ul
                  className="flx f_m"
                  role="menu"
                  aria-label="Footer Navigation"
                >
                  <li role="menuitem">
                    <a
                      className="clr-swp"
                      href="https://www.immigrationattorneyhelp.com/sitemap.xml"
                    >
                      <u> {t("header.links.siteMaps")}</u>
                    </a>
                  </li>
                  <li className="mrg_lt-70" role="menuitem">
                    <a
                      className="clr-swp"
                      href="https://www.immigrationattorneyhelp.com/privacy-policy/"
                    >
                      <u> {t("header.links.privacyPolicy")}</u>
                    </a>
                  </li>
                </ul>
              </nav>
            </small>
          </div>
        </div>
      </section>
    </footer>
  );
};
