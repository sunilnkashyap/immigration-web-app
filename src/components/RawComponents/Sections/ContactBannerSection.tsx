import React from "react";

import bannerImage from "../../../assets/contact.jpg";

export const ContactBannerSection = ({ title }: { title: string }) => {
  return (
    <section className="sb-bnr v1 dk-bg pd_v bg-image" id="SubBannerV1">
      <picture className="img-bg" role="presentation">
        <source
          media="(max-width: 500px)"
          srcSet="/assets/sub-banner/banner-v1-bg-mobile.0000000000000.jpg"
        />
        <source
          media="(max-width: 1024px)"
          srcSet="/assets/sub-banner/banner-v1-bg-tablet.0000000000000.jpg"
        />
        <img src={bannerImage} alt="" />
      </picture>
      <div className="mn_wd">
        <div className="flx-ato-rsp f_r">
          <div className="bg-bx lk-bg pd_v-60 pd_h-30 rsp_pd half ta_c-1024">
            <strong className="fnt_t-1 fnt_tc-1 blk"> {title} </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
