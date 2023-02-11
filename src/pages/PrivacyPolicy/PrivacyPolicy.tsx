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
} from "../../components/RawComponents";
import { ScrollToTop } from "../../components/ScrollToTop";
import { Helmet } from "react-helmet";

export const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LAW OFFICES OF FADY ESKANDAR | Privacy Policy</title>
        <meta
          name="description"
          content="Fady Eskandar is passionate about immigration. As an immigrant himself, Fady understands the American immigration system and interacts with each one of his clients knowing what it means to start a life from scratch in the United States of America."
        />
      </Helmet>
      <Box>
        <Header />
      </Box>

      <Box>
        <section
          className="pp v1 lt-bg pd_v show"
          id="PrivacyPolicyV1"
          data-onvisible="show"
        >
          <div className="mn_tn rsp_pd">
            <div className="bg-bx ulk-bg pd_h-30 pd_v-30 rsp_pd">
              <div
                className="cnt-stl ui-repeater"
                id="PrivacyPolicyV1Policy"
                data-content="true"
              >
                <div data-item="i">
                  <h1>Privacy Policy</h1>
                  <p>
                    We recognize that you may be concerned about our use and
                    disclosure of your personal information. Your privacy is
                    very important to us, and the following will inform you of
                    the information that we, Law Offices of Fady Eskandar, may
                    collect from you, and how it is used. By using our website,
                    www.immigrationattorneyhelp.com, you are accepting the
                    practices described in this policy.
                  </p>
                </div>
                <div data-item="i">
                  <h2>Information Collection</h2>
                  <p>
                    We may collect non-personal information, such as a domain
                    name and IP Address. The domain name and IP address reveals
                    nothing personal about you other than the IP address from
                    which you have accessed our site. We may also collect
                    information about the type of Internet browser you are
                    using, operating system, what brought you to our Website, as
                    well as which of our Web pages you have accessed.
                  </p>
                  <p>
                    Additionally, if you communicate with us regarding our
                    Website or our services, we will collect any information
                    that you provide to us in any such communication.
                  </p>
                  <p>
                    We may contact you via email in the future to tell you about
                    specials, new products or services, or changes to this
                    privacy policy.
                  </p>
                </div>
                <div data-item="i">
                  <h2>Information Use</h2>
                  <p>
                    We use the collected information primarily for our own
                    internal purposes, such as providing, maintaining,
                    evaluating, and improving our services and Website,
                    fulfilling requests for information, and providing customer
                    support.
                  </p>
                </div>
                <div data-item="i">
                  <h2>Consent</h2>
                  <p>
                    By using this Website, you consent to the collection and use
                    of information as specified above. If we make changes to our
                    Privacy Policy, we will post those changes on this page.
                    Please review this page frequently to remain up-to-date with
                    the information we collect, how we use it, and under what
                    circumstances we disclose it. You must review the new
                    Privacy Policy carefully to make sure you understand our
                    practices and procedures.
                  </p>
                  <p>
                    <strong>
                      If you feel that we are not abiding by this privacy
                      policy, you should contact us immediately via telephone at
                    </strong>
                    <strong>
                      (714) 729-3303 or via mail Attn: Privacy Officer, 421 N
                      Brookhurst St. Ste 200, Anaheim, CA 92801.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};
