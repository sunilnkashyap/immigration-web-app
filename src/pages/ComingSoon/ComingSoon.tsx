import React from "react";

export const ComingSoon = () => {
  return (
    <body className="stretched">
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Poppins:300,400,500,600,700|PT+Serif:400,400i&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="stylesheet" href="/comingSoon/bootstrap.css" type="text/css" />
      <link rel="stylesheet" href="/comingSoon/style.css" type="text/css" />
      <link rel="stylesheet" href="/comingSoon/dark.css" type="text/css" />
      <link
        rel="stylesheet"
        href="/comingSoon/font-icons.css"
        type="text/css"
      />
      <link rel="stylesheet" href="/comingSoon/animate.css" type="text/css" />
      <link
        rel="stylesheet"
        href="/comingSoon/magnific-popup.css"
        type="text/css"
      />

      <link rel="stylesheet" href="/comingSoon/custom.css" type="text/css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div id="wrapper" className="clearfix">
        <header id="header" className="no-sticky transparent-header dark">
          <div id="header-wrap">
            <div className="container">
              <div className="header-row" style={{ marginTop: "10px" }}>
                <div id="logo">
                  <a
                    href="index.html"
                    className="standard-logo"
                    data-dark-logo="/assets/images/logo/logo2.png"
                  >
                    <img
                      src="/assets/images/logo/logo2.png"
                      alt="Law Offices of Fady Eskandar"
                    />
                  </a>
                  <a
                    href="index.html"
                    className="retina-logo"
                    data-dark-logo="/assets/images/logo/logo2.png"
                  >
                    <img
                      src="/assets/images/logo/logo2.png"
                      alt="Law Offices of Fady Eskandar"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header-wrap-clone"></div>
        </header>
        <section
          id="slider"
          className="slider-element min-vh-100 dark include-header"
          style={{
            background: "url(/assets/static.png) center center no-repeat",
          }}
        >
          <div className="slider-inner">
            <div className="vertical-middle">
              <div className="container py-5">
                <div className="heading-block text-center border-bottom-0">
                  <h1 style={{ fontSize: 44 }}>Law Offices of Fady Eskandar</h1>
                  <h1>Coming Soon</h1>

                  <span style={{ fontWeight: "bold" }}>
                    Please check back again within Some Days as We're Pretty
                    Close
                  </span>

                  <br />
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    Address: 421 N. Brookhurst St. Ste 200, Anaheim, CA 92801
                  </span>

                  <span style={{ fontWeight: "bold" }}>
                    Phone Number: (714) 729-3303
                  </span>

                  <span style={{ fontWeight: "bold" }}>
                    Email Address: info@immigrationattorneyhelp.com
                  </span>
                </div>
                <div
                  id="countdown-ex1"
                  className="countdown countdown-large coming-soon mx-auto mb-5"
                  data-year="2021"
                  style={{ maxWidth: "700px" }}
                ></div>
                <div className="subscribe-widget">
                  <div className="widget-subscribe-form-result"></div>
                  <form
                    id="widget-subscribe-form"
                    action="include/subscribe.php"
                    method="post"
                    className="mb-0"
                  >
                    <div
                      className="input-group input-group-lg mx-auto"
                      style={{
                        maxWidth: "600px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <div className="">
                        <a
                          className="btn btn-info"
                          href="https://eskandarlaw.square.site/"
                        >
                          Book a consultation Now
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <script src="/comingSoon/jquery.js"></script>
      <script src="/comingSoon/plugins.min.js"></script>
      <script src="/comingSoon/components/moment.js"></script>
      <script src="/comingSoon/functions.js"></script>
    </body>
  );
};
