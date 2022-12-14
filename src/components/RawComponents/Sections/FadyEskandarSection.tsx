import React from "react";
import fadyEskandarImage from "../../../assets/images/Fady-Eskandar.jpg";

export const FadyEskandarSection = () => {
  return (
    <section
      className="stf-pfl v2 lt-bg pd_v el-tab-box ui-repeater ui-ajax show-20"
      id="StaffSystemProfileV2"
      data-onvisible="show-20"
      data-siblings="false"
    >
      <div className="mn_wd" data-item="i" data-key="34526">
        <div className="flx-ato-rsp-mgd f_sb f_t rsp_pd rsp_opn-tp">
          <div className="third">
            <picture className="img pd-h-125 bdr-rds bdr-rds-itm">
              <source media="(max-width: 500px)" srcSet={fadyEskandarImage} />
              <source media="(max-width: 800px)" srcSet={fadyEskandarImage} />
              <source media="(max-width: 1024px)" srcSet={fadyEskandarImage} />
              <img
                src={fadyEskandarImage}
                alt="Fady Eskandar Photo"
                title="Fady Eskandar Photo"
              />
            </picture>
          </div>
          <div className="two-thirds">
            <div className="tab-panels">
              <div
                className="el-panel mrg_tp active"
                data-tab="Bio"
                tabIndex={0}
                role="tabpanel"
                aria-hidden="false"
                id="StaffSystemProfileV2"
              >
                <header>
                  <h1>Fady Eskandar</h1>

                  <p className="fnt_t-5 fnt_tc-5 mrg_tp-20 mrg_bt-0">
                    Attorney
                  </p>
                </header>

                <div className="cnt-stl mrg_tp-30">
                  <p>
                    Fady Eskandar is passionate about immigration. As an
                    immigrant himself, Fady understands the American immigration
                    system and interacts with each one of his clients knowing
                    what it means to start a life from scratch in the United
                    States of America.
                  </p>
                  <p>Professional Associations:</p>
                  <ul>
                    <li>State Bar of California</li>
                    <li>American Immigration Lawyers Association</li>
                    <li>
                      United States District Court for the Central District of
                      California
                    </li>
                    <li>
                      United States Court of Appeals For the Ninth Circuit
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
