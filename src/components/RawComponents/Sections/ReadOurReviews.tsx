import React, { useEffect } from "react";

interface Props {
  bg?: string;
}

export const ReadOurReviews = (props: Props) => {
  useEffect(() => {
    (window as any)?.USC?.scrollingList(
      document.getElementById("ReviewsV1Feed")
    );
  }, []);

  return (
    <section
      className={`rvw v1 ${
        props.bg == "light" ? "" : " dk-bg "
      } pd_v-60 rsp_opn-tp rsp_opn-bt bg-image start active`}
      id="ReviewsV1"
      data-role="scroller"
    >
      <div className="bg-wrp">
        <picture className="img-bg" role="presentation" data-role="picture">
          <source
            media="(max-width: 500px)"
            srcSet="
          data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
        "
            data-src="/assets/reviews/reviews-v1-bg-mobile.2203151436544.jpg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="
          data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==
        "
            data-src="/assets/reviews/reviews-v1-bg-tablet.2203151436550.jpg"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt=""
            data-src="/assets/reviews/reviews-v1-bg.2203151433550.jpg"
          />
        </picture>
      </div>

      <div className="mn_wd rsp_pd rsp_opn-tp">
        <div className="flx-ato-rsp-mgd-b f_sb f_m">
          <div className="half">
            <header className="mrg_bt-40 ta_c-1024" id="ReviewsV1Header">
              <h4 className="fnt_t-big fnt_tc-big">
                <u>Read Our Reviews</u>
              </h4>

              <strong>We Are Committed to Each of Our Clients' Needs</strong>
            </header>
            <div className="btn-bx mrg_tp ta_c-1024" id="ReviewsV1Button">
              <a
                className="btn v1"
                href="https://www.immigrationattorneyhelp.com/reviews/"
              >
                READ MORE REVIEWS
              </a>
            </div>
          </div>
          <div className="half">
            <div
              className="rvw-lst ui-repeater"
              id="ReviewsV1Feed"
              data-role="container"
            >
              <ul className="flx" data-role="list">
                <li
                  className="full s-active"
                  data-role="item"
                  data-item="i"
                  data-key="3512290"
                  tabIndex={0}
                >
                  <blockquote className="ta_c-1024">
                    <strong className="fnt_t-2 fnt_tc-5 mrg_bt-40">
                      I already recommended my friends and relatives to go to
                      him, and you should too.
                    </strong>

                    <p className="fnt_pl mrg_tp-0 mrg_bt-0">
                      “I seeked Fady's assistantance with immigration question
                      about filing an application for my wife for adjustment of
                      status, even though I live in Texas, and he was very
                      though and asked for many documents to make sure we have a
                      sold application, and he gave me good tips for the
                      interview and what to take. I already recommended my
                      friends and relatives to go to him, and you should too.”
                    </p>
                  </blockquote>
                </li>
                <li
                  className="full"
                  data-role="item"
                  data-item="i"
                  data-key="3512291"
                  tabIndex={0}
                >
                  <blockquote className="ta_c-1024">
                    <strong className="fnt_t-2 fnt_tc-5 mrg_bt-40">
                      Mr. Fady is a wonderful attorney!
                    </strong>

                    <p className="fnt_pl mrg_tp-0 mrg_bt-0">
                      “Mr. Fady is a wonderful attorney! My consultation with
                      him went very well. He is very informative and
                      knowledgeable about immigration law and I definitely
                      recommend him for whoever is dealing with any immigration
                      issues.”
                    </p>
                  </blockquote>
                </li>
                <li
                  className="full"
                  data-role="item"
                  data-item="i"
                  data-key="3511357"
                  tabIndex={0}
                >
                  <blockquote className="ta_c-1024">
                    <strong className="fnt_t-2 fnt_tc-5 mrg_bt-40">
                      I am full of gratitude for choosing Fady.
                    </strong>

                    <p className="fnt_pl mrg_tp-0 mrg_bt-0">
                      “Fady is trustworthy, knowledgeable, honest, and
                      professional. I cannot express my gratitude for the most
                      honest attorney I have ever met. He went through our case
                      step by step. He guided my husband and I on making our
                      case strong. We listen and did what was told of us. We
                      filed in May and my husband got his interview in
                      September. He got approved for his green card on September
                      10, 2021 and I am full of gratitude for choosing Fady.”
                    </p>
                  </blockquote>
                </li>
                <li
                  className="full"
                  data-role="item"
                  data-item="i"
                  data-key="3511355"
                  tabIndex={0}
                >
                  <blockquote className="ta_c-1024">
                    <strong className="fnt_t-2 fnt_tc-5 mrg_bt-40">
                      You're the best immigration lawyer in California.
                    </strong>

                    <p className="fnt_pl mrg_tp-0 mrg_bt-0">
                      “Mr. Fady. You're the best immigration lawyer in
                      California. The way you handled my asylum case exceeded my
                      expectations. You went above and beyond and got my
                      approval in record time. Despite you are very young, you
                      are way better than other lawyers who have been doing this
                      for years. Thanks for all what you did for me.”
                    </p>
                  </blockquote>
                </li>
                <li
                  className="full"
                  data-role="item"
                  data-item="i"
                  data-key="3511348"
                  tabIndex={0}
                >
                  <blockquote className="ta_c-1024">
                    <strong className="fnt_t-2 fnt_tc-5 mrg_bt-40">
                      If you want peace of mind, I highly recommend this
                      immigration attorney!
                    </strong>

                    <p className="fnt_pl mrg_tp-0 mrg_bt-0">
                      “I found Mr. Fady Eskander to be a great listener,
                      respectful, honest and prompt in his communication. He
                      helped us so much and lifted a burden off our shoulders in
                      my citizenship case. He told us exactly what we needed to
                      know and reminded us at critical times during the process
                      and took care of the technical work. If you want peace of
                      mind, I highly recommend this immigration attorney!”
                    </p>
                  </blockquote>
                </li>
              </ul>
            </div>
            <div className="flx f_m mrg_tp-40 ta_c-1024" data-role="arrows">
              <button
                className="flx"
                title="View previous item"
                aria-label="View previous item"
                data-action="Prev"
              >
                <svg
                  viewBox="0 0 24 24"
                  data-use="assets/dycmgkz8j91.24.2208191902389.svg#arrow_left"
                >
                  <path d="M17.414 24L5.414 12L17.414 0l1.171 1.171l-10.829 10.829l10.829 10.829Z"></path>
                </svg>
              </button>
              <button
                className="flx"
                title="View next item"
                aria-label="View next item"
                data-action="Next"
              >
                <svg
                  viewBox="0 0 24 24"
                  data-use="assets/dycmgkz8j91.24.2208191902389.svg#arrow_right"
                >
                  <path d="M6.586 0L18.586 12L6.586 24L5.414 22.829l10.829-10.829L5.414 1.171Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
