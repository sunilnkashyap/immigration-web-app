import React, { useEffect } from "react";

export const ServicesGridSection = () => {
  return (
    <section
      className="srv v4 srv-tls dk-bg pd_v rsp_opn-tp rsp_opn-bt"
      id="ServicesV4"
    >
      <div className="mn_wd rsp_pd rsp_opn-tp">
        <header className="mrg_bt ta_c" id="ServicesV4Header">
          <h4></h4>
        </header>
        <div className="srv-lst ui-repeater" id="ServicesV4List">
          <ul
            className="flx-grd-lrg-mx-4-ato-sz-blk-500 srv-lst"
            data-role="list"
          >
            <li
              className="flx ato bg-bx lk-bg srv-itm"
              data-item="i"
              data-key="92785"
            >
              <a
                className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                href="https://www.immigrationattorneyhelp.com/practice-areas/humanitarian-relief/"
              >
                <strong className="fnt_t-5">Humanitarian Relief</strong>
              </a>
            </li>
            <li
              className="flx ato bg-bx lk-bg srv-itm"
              data-item="i"
              data-key="92787"
            >
              <a
                className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                href="https://www.immigrationattorneyhelp.com/practice-areas/deportation-defense/"
              >
                <strong className="fnt_t-5">Deportation Defense</strong>
              </a>
            </li>
            <li
              className="flx ato bg-bx lk-bg srv-itm"
              data-item="i"
              data-key="92781"
            >
              <a
                className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                href="https://www.immigrationattorneyhelp.com/practice-areas/asylum/"
              >
                <strong className="fnt_t-5">Asylum</strong>
              </a>
            </li>
            <li
              className="flx ato bg-bx lk-bg srv-itm"
              data-item="i"
              data-key="92782"
            >
              <a
                className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                href="https://www.immigrationattorneyhelp.com/practice-areas/family-based-immigration/"
              >
                <strong className="fnt_t-5">Family Based Immigration</strong>
              </a>
            </li>
            <li
              className="flx ato bg-bx lk-bg srv-itm"
              data-item="i"
              data-key="92786"
            >
              <a
                className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                href="https://www.immigrationattorneyhelp.com/practice-areas/citizenship-naturalization/"
              >
                <strong className="fnt_t-5">
                  Citizenship &amp; Naturalization
                </strong>
              </a>
            </li>
            <li
              className="flx ato bg-bx lk-bg srv-itm"
              data-item="i"
              data-key="92784"
            >
              <a
                className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                href="https://www.immigrationattorneyhelp.com/practice-areas/investment-immigration/"
              >
                <strong className="fnt_t-5">Investment Immigration</strong>
              </a>
            </li>
            <li
              className="flx ato bg-bx lk-bg srv-itm"
              data-item="i"
              data-key="92783"
            >
              <a
                className="pd_h-10 pd_v-30 ta_c clr-swp flx f_clm f_m f_c full"
                href="https://www.immigrationattorneyhelp.com/practice-areas/employment-based-immigration/"
              >
                <strong className="fnt_t-5">
                  Employment Based Immigration
                </strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="btn-bx ta_c" id="ServicesV4Button"></div>
      </div>
    </section>
  );
};
