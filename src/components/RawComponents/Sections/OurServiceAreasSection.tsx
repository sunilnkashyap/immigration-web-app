import React from "react";

import contentBgMobile from "../../../assets/images/content-v2-bg-mobile.jpg";
import contentBgTablet from "../../../assets/images/content-v2-bg-tablet.jpg";
import contentBg from "../../../assets/images/content-v2-bg.jpg";

import contentAlt from "../../../assets/images/content-v2-alt-img.jpg";

export const OurServiceAreasSection = () => {
  return (
    <section
      className="cnt v2 alt dk-bg pd_v rsp_opn-tp rsp_opn-bt bg-image show-20"
      id="ContentV2Alt"
      data-onvisible="show-20"
    >
      <div className="bg-wrp">
        <picture className="img-bg" role="presentation" data-role="picture">
          <source media="(max-width: 500px)" srcSet={contentBgMobile} />
          <source media="(max-width: 1024px)" srcSet={contentBgTablet} />
          <img src={contentBg} alt="" />
        </picture>
      </div>

      <div className="mn_wd rsp_pd rsp_opn-tp">
        <div className="flx-ato-rsp f_sb f_m">
          <div className="half anm_hlf-up" data-content="true">
            <header className="mrg_bt" id="ContentV2AltHeader">
              <h3>Our Service Areas</h3>
            </header>
            <div className="cnt-stl" id="ContentV2AltContent">
              <p className="MsoNormal">
                When you come to our team at The Law Offices of Fady Eskandar,
                we will walk you through all of your immigration options. If we
                identify a benefit or visa you qualify for, we will help you
                understand what to expect and any challenges we might face. We
                will work with you from start to finish to ensure your interests
                are protected every step of the way.
              </p>
              <p className="MsoNormal">
                <strong>
                  Our immigration services in Anaheim, CA, include assistance
                  with:
                </strong>
              </p>
              <ul>
                <li>
                  <a href="https://www.immigrationattorneyhelp.com/practice-areas/asylum/">
                    <strong>Asylum.</strong>
                  </a>
                  <strong>&nbsp;</strong>We can help you seek protection in the
                  U.S. if you have been persecuted or fear future persecution on
                  certain grounds.
                </li>
                <li>
                  <a href="https://www.immigrationattorneyhelp.com/practice-areas/family-based-immigration/">
                    <strong>Family-Based Immigration.</strong>
                  </a>
                  <strong>&nbsp;</strong>Our firm can help you sponsor eligible
                  loved ones, obtain green cards, and reunify your family.
                </li>
                <li>
                  <a href="https://www.immigrationattorneyhelp.com/practice-areas/employment-based-immigration/">
                    <strong>Employment-Based Immigration.</strong>
                  </a>
                  <strong>&nbsp;</strong>Our team can work with you and your
                  sponsoring employer to get a labor certification and green
                  card.
                </li>
                <li>
                  <a href="https://www.immigrationattorneyhelp.com/practice-areas/investment-immigration/">
                    <strong>Investment Immigration.</strong>
                  </a>
                  <strong>&nbsp;</strong>If you are able to invest sufficient
                  funds in a U.S.-based enterprise, we can help you pursue a
                  temporary visa or green card.
                </li>
                <li>
                  <a href="https://www.immigrationattorneyhelp.com/practice-areas/humanitarian-relief/">
                    <strong>Humanitarian Relief.&nbsp;</strong>
                  </a>
                  We can determine whether you qualify for any of the U.S.’s
                  humanitarian relief programs.
                </li>
                <li>
                  <a href="https://www.immigrationattorneyhelp.com/practice-areas/citizenship-naturalization/">
                    <strong>Citizenship.</strong>
                  </a>
                  <strong>&nbsp;</strong>If you are a lawful permanent resident,
                  we can verify your eligibility for citizenship and guide you
                  through each stage of the naturalization process.
                </li>
                <li>
                  <a href="https://www.immigrationattorneyhelp.com/practice-areas/deportation-defense/">
                    <strong>Deportation Defense.</strong>
                  </a>
                  <strong>&nbsp;</strong>If you have been placed in removal
                  proceedings, we can provide aggressive representation and seek
                  all available forms of relief.
                </li>
              </ul>
              <hr />
              <p className="MsoNormal" style={{ textAlign: "center" }}>
                <strong>Call </strong>
                <a href="tel:(714) 729-3303" id="ContentV2Alt_1">
                  <strong>(714) 729-3303</strong>
                </a>
                <strong> or </strong>
                <a href="https://www.immigrationattorneyhelp.com/contact/">
                  <strong>contact us online</strong>
                </a>
                <strong>
                  to learn more about how we can help you on your immigration
                  journey.
                </strong>
              </p>
              <hr />
              <p>&nbsp;</p>
            </div>
            <div className="btn-bx mrg_tp" id="ContentV2AltButton"></div>
          </div>
          <div className="half hd-1024 anm_hlf-dn">
            <div className="bx_flr">
              <picture
                className="img pd-h-"
                role="presentation"
                data-role="picture"
                style={{ minHeight: "509px" }}
              >
                <source media="(max-width: 500px)" srcSet={contentAlt} />
                <source media="(max-width: 1024px)" srcSet={contentAlt} />
                <img src={contentAlt} alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
