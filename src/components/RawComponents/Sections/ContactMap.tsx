import React from "react";

export const ContactMap = () => {
  return (
    <section
      className="ctc-sys v1 dk-bg bg-image bg-shf-r show-20"
      id="ContactSystemV1"
      data-onvisible="show-20"
    >
      <div className="mn_wd rsp_pd-h">
        <div className="flx-ato-rsp f_sb">
          <div className="half pd_v rsp_pd-v">
            <div className="bg-bx lk-bg pd_h-30 pd_v-30">
              <header
                className="mrg_bt-40 ta_c-500"
                id="ContactSystemV1Header"
              ></header>
              <div
                className="loc-lst ui-scroll ui-repeater"
                id="ContactSystemV1Feed"
              >
                <ul className="ta_c-500">
                  <li className="" data-item="i" data-key="19485">
                    <strong className="fnt_t-4 fnt_tc-5 mrg_bt-20">
                      Anaheim
                    </strong>
                    <a className="fnt_phn clr-swp" href="tel:"></a>
                    <address className="fnt_t-6 mrg_bt-10">
                      421 N Brookhurst St Ste 200
                      <br />
                      Anaheim, CA 92801
                    </address>

                    <a
                      href="https://g.page/eskandarlaw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      [+] Map &amp; Directions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-wrp">
            <div
              className="rlt mp-bx anm_hlf-r ui-repeater"
              id="ContactSystemV1Map"
            >
              <picture className="img pd-h-" data-item="i">
                <source
                  media="(max-width: 500px)"
                  srcSet="/assets/images/staticmap.jpeg"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet="/assets/images/staticmap.jpeg"
                />
                <img
                  className="static-map jpg"
                  src="/assets/images/staticmap.jpeg"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
