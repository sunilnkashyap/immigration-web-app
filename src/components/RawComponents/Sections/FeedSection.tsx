import React from "react";

export const FeedSection = () => {
  return (
    <section
      className="cta v1 lt-bg pd_v rsp_opn-tp rsp_opn-bt show-20"
      id="CtaV1"
      data-onvisible="show-20"
    >
      <div className="bg-wrp">
        <picture className="img-bg" role="presentation" data-role="picture">
          <source
            media="(max-width: 500px)"
            srcSet="
          data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
        "
            data-src=""
          />
          <source
            media="(max-width: 1024px)"
            srcSet="
          data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
        "
            data-src=""
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt=""
            data-src=""
          />
        </picture>
      </div>

      <div className="mn_wd rsp_pd rsp_opn-tp">
        <header className="ta_c" id="CtaV1Header"></header>
        <div className="cta-lst ui-repeater" id="CtaV1Feed">
          <ul className="flx-grd-lrg-mx-3-blk-800 ato-sz anm_seq-lst">
            <li className="flx anm_hlf-rt" data-item="i" data-key="111756">
              <a
                className="flx f_clm f_sb ato full"
                href="https://www.immigrationattorneyhelp.com/contact/"
              >
                <div className="pd_tp-70 pd_bt-70 pd_h-10 bg-bx ulk-bg ato btn-clr-hvr no-hvr">
                  <div className="flx f_sb f_t bdr_b">
                    <strong className="fnt_t-4 fnt_tc-4 mrg_rt-90">
                      Request A Consultation
                    </strong>
                  </div>
                </div>
                <div className="pd_v-10 pd_h-10 bg-bx lk-bg">
                  <span className="btn v1">Contact Us Now</span>
                </div>
              </a>
            </li>
            <li className="flx anm_hlf-rt" data-item="i" data-key="111757">
              <a
                className="flx f_clm f_sb ato full"
                href="https://www.immigrationattorneyhelp.com/reviews/"
              >
                <div className="pd_tp-70 pd_bt-70 pd_h-10 bg-bx ulk-bg ato btn-clr-hvr no-hvr">
                  <div className="flx f_sb f_t bdr_b">
                    <strong className="fnt_t-4 fnt_tc-4 mrg_rt-90">
                      Read Client Testimonials
                    </strong>
                  </div>
                </div>
                <div className="pd_v-10 pd_h-10 bg-bx lk-bg">
                  <span className="btn v1">Read Reviews</span>
                </div>
              </a>
            </li>
            <li className="flx anm_hlf-rt" data-item="i" data-key="111758">
              <a
                className="flx f_clm f_sb ato full"
                href="https://www.immigrationattorneyhelp.com/our-firm/"
              >
                <div className="pd_tp-70 pd_bt-70 pd_h-10 bg-bx ulk-bg ato btn-clr-hvr no-hvr">
                  <div className="flx f_sb f_t bdr_b">
                    <strong className="fnt_t-4 fnt_tc-4 mrg_rt-90">
                      About The Law Offices of Fady Eskandar
                    </strong>
                  </div>
                </div>
                <div className="pd_v-10 pd_h-10 bg-bx lk-bg">
                  <span className="btn v1">About Us</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
