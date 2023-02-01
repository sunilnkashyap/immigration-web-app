import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const HeroBanner = () => {
  const { t } = useTranslation();
  return (
    <section
      className="mstg v3 lt-bg bg-image show-20"
      id="MainstageV3"
      data-onvisible="show-20"
    >
      <picture
        className="img-bg psu-bfr"
        role="presentation"
        data-role="picture"
      >
        <source media="(max-width: 500px)" srcSet="/assets/hero-banner.jpg" />
        <source media="(max-width: 1024px)" srcSet="/assets/hero-banner.jpg" />
        <img src="/assets/hero-banner.jpg" alt="" />
      </picture>
      <div className="mn_wd rsp_pd-h">
        <div className="flx-ato-rsp f_rev f_sb">
          <div className="half flx">
            <div className="ato flx f_c f_b">
              <picture
                className="img pd-h-"
                role="presentation"
                data-role="picture"
              >
                <source
                  media="(max-width: 500px)"
                  srcSet="
                /assets/images/mainstage-v3-img-mobile.png
              "
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="
                /assets/images/mainstage-v3-img-tablet.png
              "
                />
                <img src="assets/images/mainstage-v3-img.png" alt="" />
              </picture>
            </div>
          </div>
          <div
            className="inf hlf-big ta_c-1024 anm_hlf-lt"
            id="MainstageV2Info"
          >
            <div className="bg-bx lk-bg pd_h-30 pd_v-40 ta_r">
              <strong className="fnt_t-big">{t("hero.title")}</strong>

              <span className="mrg_tp-40 blk">{t("hero.subTitle")}</span>

              <Link to="/contact" className="btn v1">
                {t("hero.link")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
