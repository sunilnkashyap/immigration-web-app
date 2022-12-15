import React from "react";

export const AsylumHeader = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <section className="sb-bnr v2 bnr-tls dk-bg pd_v bg-image" id="SubBannerV2">
      <picture className="img-bg" role="presentation">
        <source media="(max-width: 500px)" srcSet={image} />
        <source media="(max-width: 1024px)" srcSet={image} />
        <img srcSet={image} alt="" />
      </picture>
      <div className="mn_wd">
        <div className="flx-ato-rsp f_r">
          <div className="bg-bx lk-bg pd_v-40 pd_h-30 rsp_pd half ta_c-1024">
            <strong className="fnt_t-2 fnt_tc-2 blk">
              <u>{title}</u>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
