import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  ServicesGridSection,
  ImmigrationServicesSection,
  PracticeAreasBannerSection,
  OurServiceAreasSection,
  ReadOurReviews,
  ContactUsDetailed,
  ContactMap,
  ReviewItem,
} from "../../components/RawComponents";
import { ScrollToTop } from "../../components/ScrollToTop";

export const Reviews = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <section
          className="pnl-grp lt-bg rsp_opn-tp rsp_opn-bt"
          id="ReviewSystemV1PanelGroup"
        >
          <div className="bx" id="ReviewSystemV1PanelGroupZone">
            <section
              className="rvw-sys rvw-sys-ftr v1 lt-bg pd_v rsp_opn-bt show-20"
              id="ReviewSystemV1Featured"
              data-onvisible="show-20"
            >
              <div className="mn_wd">
                <div className="flx-ato-rsp f_sb f_m">
                  <div className="half rsp_pd" data-content="true">
                    <div className="mrg_bt-30">
                      <header id="ReviewSystemV1FeaturedHeader">
                        <h1>Reviews</h1>
                      </header>
                    </div>
                    <div className="cnt-stl" id="ReviewSystemV1FeaturedContent">
                      <p>
                        <span style={{ color: "rgb(25, 25, 25)" }}>
                          The Law Offices of Fady Eskandar provides each client
                          with honest representation and straightforward
                          communication. We are committed to each of our
                          clients' needs. Scroll down to see what our clients
                          have to say or leave us a review.
                        </span>
                      </p>
                    </div>
                    <div id="ReviewSystemV1FeaturedBtnBx">
                      <div className="mrg_tp-40">
                        <a
                          className="btn v1"
                          href="https://g.page/eskandarlaw"
                          aria-labelledby="ReviewSystemV1FeaturedHeader"
                        >
                          Leave a Review
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="half bx_flr ui-repeater"
                    id="ReviewSystemV1FeaturedReview"
                  >
                    <div
                      className="bg-bx ulk-bg alt-bg pd_v-30 pd_h-30 rsp_pd"
                      data-item="i"
                      data-key="3505880"
                    >
                      <blockquote>
                        <div className="rtg-icn flx mrg_bt-30">
                          <ul
                            className="full str rt5 flx"
                            title="5 Star Rating"
                          >
                            <li className="fit mrg_rt-20">
                              <svg
                                viewBox="0 0 24 24"
                                className="blk"
                                role="presentation"
                                data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#star"
                              >
                                <polygon
                                  points="12 18.1 19.4 23.5 16.6 14.7 24 9.5 15 9.5 12 0.5 9 9.5 0 9.5 7.4 14.7 4.6 23.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                ></polygon>
                              </svg>
                            </li>
                            <li className="fit mrg_rt-20">
                              <svg
                                viewBox="0 0 24 24"
                                className="blk"
                                role="presentation"
                                data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#star"
                              >
                                <polygon
                                  points="12 18.1 19.4 23.5 16.6 14.7 24 9.5 15 9.5 12 0.5 9 9.5 0 9.5 7.4 14.7 4.6 23.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                ></polygon>
                              </svg>
                            </li>
                            <li className="fit mrg_rt-20">
                              <svg
                                viewBox="0 0 24 24"
                                className="blk"
                                role="presentation"
                                data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#star"
                              >
                                <polygon
                                  points="12 18.1 19.4 23.5 16.6 14.7 24 9.5 15 9.5 12 0.5 9 9.5 0 9.5 7.4 14.7 4.6 23.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                ></polygon>
                              </svg>
                            </li>
                            <li className="fit mrg_rt-20">
                              <svg
                                viewBox="0 0 24 24"
                                className="blk"
                                role="presentation"
                                data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#star"
                              >
                                <polygon
                                  points="12 18.1 19.4 23.5 16.6 14.7 24 9.5 15 9.5 12 0.5 9 9.5 0 9.5 7.4 14.7 4.6 23.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                ></polygon>
                              </svg>
                            </li>
                            <li className="fit">
                              <svg
                                viewBox="0 0 24 24"
                                className="blk"
                                role="presentation"
                                data-use="/cms/svg/site/dycmgkz8j91.24.2208191902389.svg#star"
                              >
                                <polygon
                                  points="12 18.1 19.4 23.5 16.6 14.7 24 9.5 15 9.5 12 0.5 9 9.5 0 9.5 7.4 14.7 4.6 23.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                ></polygon>
                              </svg>
                            </li>
                          </ul>
                        </div>

                        <strong className="blk fnt_t-2 fnt_tc-2">
                          "His guidance and dedication are unmatched."
                        </strong>

                        <p className="mrg_tp-20 ui-scroll">
                          Before hiring Mr. Eskandar I spoke with many attorneys
                          and made sure to pick the best to represent me since
                          the immigration process can be stressful. Fady was
                          very helpful and always made himself available to
                          answer any of my questions which made me feel very
                          comfortable throughout the whole immigration process.
                          His guidance and dedication are unmatched. I look
                          forward to keep using his services in the future and
                          will keep referring him to friends and family.
                        </p>

                        <div className="flx f_m mrg_tp-40">
                          <div>
                            <strong className="blk fnt_t-5 fnt_tc-5">
                              Omar Zalloum
                            </strong>
                          </div>
                        </div>
                        <div className="flx-blk-800-mgd f_sb f_m"></div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <form>
              <section
                className="rvw-sys rvw-sys-ftr v1 lt-bg pd_v ui-repeater ui-ajax"
                id="ReviewSystemV1Feed"
                data-showhide="true"
              >
                <div className="mn_wd">
                  <ul className="flx-grd-blk-800 f_c cls-gp-800 rsp_pd">
                    <li className="fit half">
                      <ul className="flx-grd-blk-800 cls-gp-800">
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                      </ul>
                    </li>
                    <li className="fit half">
                      <ul className="flx-grd-blk-800 cls-gp-800">
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                        <ReviewItem />
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>
            </form>
          </div>
        </section>
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};
